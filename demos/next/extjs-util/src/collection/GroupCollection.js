import {
    Ext, Empty,
    arrayify, buffered, config, copy, define, destroy
} from '../../../extjs-core/src';

import { Group } from './Group';
import { Collection } from './Collection';

/**
 * A collection containing the result of applying grouping to the records in the store.
 * @private
 */
@define({
    prototype: {
        observerPriority: -100
    }
})
class GroupCollection extends Collection {
    /**
     * @property {Number} emptyGroupRetainSeconds
     * The number of seconds an empty `Group` object is held in a cache to preserve any
     * extra properties it may have gained. Such `Group` objects are returned to use if
     * their group key is reused within this interval.
     */
    static emptyGroupRetainSeconds = 300;

    @config
    grouper = null;

    @config
    groupDefaults = null;

    @config
    itemRoot = null;

    construct (config) {

        super.construct(config);
        
        this.on('remove', 'onGroupRemove', this);
    }
    
    ctor () {
        this.emptyGroups = new Empty();
    }

    dtor () {
        let me = this;
        let emptyGroups = me.emptyGroups;
        let key;

        me.$groupable = null;

        // Ensure group objects get destroyed, they may have
        // added listeners to the main collection sorters.
        destroy(me.items);

        for (key in emptyGroups) {
            destroy(emptyGroups[key]);
        }
    }

    /**
     * Returns the `Group` associated with the given record.
     *
     * @param {Object} item The item for which the group is desired.
     * @return {Group}
     */
    getItemGroup (item) {
        let key = this.grouper.getGroupString(item);

        return this.get(key);
    }

    //-------------------------------------------------------------------------
    // Calls from the source Collection:

    onCollectionAdd (source, details) {
        if (!this.constructing) {
            this.addItemsToGroups(source, details.items, details.at);
        }
    }

    onCollectionBeforeItemChange (source, details) {
        this.changeDetails = details;
    }

    onCollectionBeginUpdate () {
        this.beginUpdate();
    }

    onCollectionEndUpdate () {
        this.endUpdate();
    }

    onCollectionItemChange (source, details) {
        // Check if the change to the item caused the item to move. If it did, the group
        // ordering will be handled by virtue of being removed/added to the collection.
        // If not, check whether we're in the correct group and fix up if not.
        if (!details.indexChanged) {
            this.syncItemGrouping(source, details);
        }

        this.changeDetails = null;
    }

    onCollectionRefresh (source) {
        if (source.generation) {
            // eslint-disable-next-line vars-on-top
            let me = this;
            let itemGroupKeys = me.itemGroupKeys = {};
            let groupData = me.createEntries(source, source.items);
            let entries = groupData.entries;
            let map = me.map;
            let groupKey, i, len, entry, j;

            // The magic of Collection will automatically update the group with its new members.
            for (i = 0, len = entries.length; i < len; ++i) {
                entry = entries[i];

                // Will add or replace
                entry.group.splice(0, 1e99, entry.items);

                // Add item key -> group mapping for every entry
                for (j = 0; j < entry.items.length; j++) {
                    itemGroupKeys[source.getKey(entry.items[j])] = entry.group;
                }
            }

            // Remove groups to which we have not added items.
            entries = null;

            for (groupKey of map.keys()) {
                if (!(groupKey in groupData.groups)) {
                    (entries || (entries = [])).push(map.get(groupKey));
                }
            }

            if (entries) {
                me.remove(entries);
            }

            // autoSort is disabled when adding new groups because
            // it relies on there being at least one record in the group
            me.sortItems();
        }
    }

    onCollectionRemove (source, details) {
        let me = this;
        let changeDetails = me.changeDetails;
        let itemGroupKeys = me.itemGroupKeys || (me.itemGroupKeys = {});
        let entries, entry, group, i, n, j, removeGroups, item;

        if (source.length) {
            if (changeDetails) {
                // The item has changed, so the group key may be different, need
                // to look it up
                item = changeDetails.item || changeDetails.items[0];
                entries = me.createEntries(source, [item]).entries;
                entries[0].group =
                    itemGroupKeys['oldKey' in details ? details.oldKey : source.getKey(item)];
            }
            else {
                entries = me.createEntries(source, details.items).entries;
            }

            for (i = 0, n = entries.length; i < n; ++i) {
                group = (entry = entries[i]).group;

                if (group) {
                    group.remove(entry.items);
                }

                // Delete any item key -> group mapping
                for (j = 0; j < entry.items.length; j++) {
                    delete itemGroupKeys[source.getKey(entry.items[j])];
                }

                if (group && !group.length) {
                    (removeGroups || (removeGroups = [])).push(group);
                }
            }
        }
        // Straight cleardown
        else {
            me.itemGroupKeys = {};
            removeGroups = me.items;

            for (i = 0, n = removeGroups.length; i < n; ++i) {
                removeGroups[i].clear();
            }
        }

        if (removeGroups) {
            me.remove(removeGroups);
        }
    }

    // If the SorterCollection instance is not changing, the Group will react to
    // changes inside the SorterCollection, but if the instance changes we need
    // to sync the Group to the new SorterCollection.
    onCollectionSort (source) {
        // sorting the collection effectively sorts the items in each group...
        let me = this;
        let sorters = source.getSorters(false);
        let items, length, i, group;

        if (sorters) {
            items = me.items;
            length = me.length;

            for (i = 0; i < length; ++i) {
                group = items[i];

                if (group.getSorters() !== sorters) {
                    group.setSorters(sorters);
                }
            }
        }
    }

    onCollectionUpdateKey (source, details) {
        if (!details.indexChanged) {
            details.oldIndex = source.indexOf(details.item);
            this.syncItemGrouping(source, details);
        }
    }

    //-------------------------------------------------------------------------
    // Private

    addItemsToGroups (source, items, at, oldIndex) {
        let me = this;
        let itemGroupKeys = me.itemGroupKeys || (me.itemGroupKeys = {});
        let entries = me.createEntries(source, items).entries;
        let index = -1;
        let sourceStartIndex, entry, i, len, j, group, firstIndex, item;

        for (i = 0, len = entries.length; i < len; ++i) {
            entry = entries[i];
            group = entry.group;

            // A single item moved - from onCollectionItemChange
            if (oldIndex || oldIndex === 0) {
                item = items[0];

                if (group.length > 0 && !source.getSorters().length) {
                    // We have items in the group & it's not sorted, so find the
                    // correct position in the group to insert.
                    firstIndex = source.indexOf(group.items[0]);

                    if (oldIndex < firstIndex) {
                        index = 0;
                    }
                    else {
                        index = oldIndex - firstIndex;
                    }
                }

                if (index === -1) {
                    group.add(item);
                }
                else {
                    group.insert(index, item);
                }
            }
            else {
                if (me.length > 1 && at) {
                    sourceStartIndex = source.indexOf(entries[0].group.getAt(0));
                    at = Math.max(at - sourceStartIndex, 0);
                }

                entry.group.insert(at != null ? at : group.items.length, entry.items);

                // Add item key -> group mapping
                for (j = 0; j < entry.items.length; j++) {
                    itemGroupKeys[source.getKey(entry.items[j])] = entry.group;
                }
            }
        }

        // autoSort is disabled when adding new groups because
        // it relies on there being at least one record in the group
        me.sortItems();
    }

    createEntries (source, items) {
        // Separate the items out into arrays by group
        let me = this;
        let groups = {};
        let entries = [];
        let grouper = me.grouper;
        let entry, group, groupKey, i, item, len;

        for (i = 0, len = items.length; i < len; ++i) {
            groupKey = grouper.getGroupString(item = items[i]);

            if (!(entry = groups[groupKey])) {
                group = me.getGroup(source, groupKey);

                entries.push(groups[groupKey] = entry = {
                    group: group,
                    items: []
                });
            }

            // Collect items to add/remove for each group
            // which has items in the array
            entry.items.push(item);
        }

        return {
            groups: groups,
            entries: entries
        };
    }

    syncItemGrouping (source, details) {
        let me = this;
        let itemGroupKeys = me.itemGroupKeys || (me.itemGroupKeys = {});
        let item = details.item;
        let oldKey, itemKey, oldGroup, group;

        itemKey = source.getKey(item);
        oldKey = 'oldKey' in details ? details.oldKey : itemKey;

        // The group the item was in before the change took place.
        oldGroup = itemGroupKeys[oldKey];

        // Look up/create the group into which the item now must be added.
        group = me.getGroup(source, me.grouper.getGroupString(item));

        details.group = group;
        details.oldGroup = oldGroup;

        // The change did not cause a change in group
        if (!(details.groupChanged = group !== oldGroup)) {
            // Inform group about change
            oldGroup.itemChanged(item, details.modified, details.oldKey, details);
        }
        else {
            // Remove from its old group if there was one.
            if (oldGroup) {
                // Ensure Geoup knows about any unknown key changes, or item will not be removed.
                oldGroup.updateKey(item, oldKey, itemKey);
                oldGroup.remove(item);

                // Queue newly empy group for destruction.
                if (!oldGroup.length) {
                    me.remove(oldGroup);
                }
            }

            // Add to new group
            me.addItemsToGroups(source, [item], null, details.oldIndex);
        }

        // Keep item key -> group mapping up to date
        delete itemGroupKeys[oldKey];
        itemGroupKeys[itemKey] = group;
    }

    getGroup (source, key) {
        let me = this;
        let group = me.get(key);
        let autoSort = me.autoSort;
        let emptyGroups = me.emptyGroups;

        if (group) {
            group.sorters = source.getSorters();
        }
        else {
            if (!(group = emptyGroups[key])) {
                group = Ext.create({
                    xclass: Group,
                    groupKey: key,
                    rootProperty: me.itemRoot,
                    sorters: source.getSorters(),

                    ...me.groupDefaults
                });
            }
            else {
                delete emptyGroups[key];
                group.ejectTime = null;
            }

            me.autoSort = false;
            me.add(group);
            me.autoSort = autoSort;
        }

        return group;
    }
    
    getKey (item) {
        return item.groupKey;
    }

    createSortFn () {
        let me = this;
        let grouper = me.grouper;
        let sorterFn = me.getSorters().getSortFn();

        if (!grouper) {
            return sorterFn;
        }

        // The grouper has come from the collection, so we pass the items in
        // the group for comparison because the grouper is also used to
        // sort the data in the collection
        return (lhs, rhs) => grouper.sort(lhs.items[0], rhs.items[0]) || sorterFn(lhs, rhs);
    }

    updateGrouper (grouper) {
        let me = this;

        me.grouped = !!(grouper && me.$groupable.autoGroup);

        me.onSorterChange();
        me.onEndUpdateSorters(me.getSorters());
    }

    onGroupRemove (collection, info) {
        for (let group of arrayify(info.items)) {
            group.sorters = null;

            this.emptyGroups[group.groupKey] = group;

            group.ejectTime = Ext.ticks() + GroupCollection.emptyGroupRetainSeconds * 1000;
        }

        this.pruneEmptyGroups();
    }

    /**
     * This buffered method runs 30 seconds after a `Group` has gone empty in ordere to
     * prune empty `Group` objects that remain empty for `emptyGroupRetainSeconds`.
     */
    @buffered(30000, { trigger: 'leading' })  // schedule on first call (not last call)
    pruneEmptyGroups () {
        let me = this;
        let emptyGroups = me.emptyGroups;
        let now = Ext.ticks();
        let groupKey, group;

        for (groupKey in emptyGroups) {
            group = emptyGroups[groupKey];

            // If the group's retain time has expired, destroy it, else kick off another
            // round 30 seconds from now.
            if (group.ejectTime > now) {
                me.pruneEmptyGroups();
            }
            else {
                group.destroy();
                delete emptyGroups[groupKey];
            }
        }
    }
}

export { GroupCollection };
