import {
    Ext,
    assert,
    config, copy, define, is
} from '../../../extjs-core/src';

import { Sorter } from './Sorter';
import { Collection } from './Collection';

/**
 * This class provides a flexible means to control the
 * `{@link Collection#cfg!sorters sorters}` of a
 * `{@link Collection Collection}`. Instances of this class are created
 * automatically when sorters are added to added to Collections.
 *
 * This collection can be directly manipulated by application code to gain full
 * control over the sorters of the owner collection. Be aware that some components
 * create sorters internally (such as grids) so be careful in such cases to not disturb
 * these additional sorters.
 *
 * Items in this collection are `Sorter` instances and can be managed
 * individually by their `id`. This is the recommended way to manage application
 * filters while preserving sorter applied from other sources.
 *
 * Bulk changes to this collection should be wrapped in
 * `{@link Collection#method!beginUpdate beginUpdate}` and
 * `{@link Collection#method!endUpdate endUpdate}` (as with any collection).
 * During these bulk updates all reactions to sorter changes will be suspended.
 */
@define({
    prototype: {
        /**
         * @property {Function} sortFn
         * This is the cached sorting function which is a generated function that calls
         * all the configured sorters in the correct order.
         * @readonly
         */
        sortFn: null,

        _sortModes: {
            append: { append: 1 },
            multi: { multi: 1 },
            prepend: { prepend: 1 },
            replace: { replace: 1 }
        }
    }
})
class SorterCollection extends Collection {
    @config
    decoder = function (...args) {
        // This function called with the SorterCollection as the "this" pointer
        // noinspection JSPotentiallyInvalidUsageOfClassThis
        return this.decodeSorter(...args);
    };

    /**
     * @cfg {Function} sorterPolicy
     * A function that accepts a newly created `Sorter` for this collection and can
     * modify that sorter or return a different sorter.
     * @private
     */
    @config
    sorterPolicy = null;

    ctor () {
        let me = this;
        
        me.sortFn = Sorter.createComparator(me);

        // Odd thing this. We may have a master Collection that wants to centralize things
        // (like rootProperty) so we need to delegate to it instead of using our own
        // configs...
        me.$master = me;
    }

    addSort (property, direction, mode) {
        let me = this;
        let count, index, limit, options, primary, sorter, sorters;

        if (!property) {
            // nothing specified so just trigger a sort...
            me.beginUpdate();
            me.endUpdate();
        }
        else {
            options = me.$master;

            if (is.array(property)) {
                sorters = property;
                mode = direction;
                direction = null;
            }
            else if (typeof property === 'string') {
                if (!(sorter = me.get(property))) {
                    sorters = [{
                        property: property,
                        direction: direction || options.defaultSortDirection
                    }];
                }
                else {
                    sorters = [sorter];
                }
            }
            else if (is.callable(property)) {
                sorters = [{
                    sorterFn: property,
                    direction: direction || options.defaultSortDirection
                }];
            }
            else {
                //<debug>
                assert(is.object(property), 'Invalid sort descriptor: {0}', property);
                //</debug>

                sorters = [property];
                mode = direction;
                direction = null;
            }

            //<debug>
            assert(!mode || me._sortModes[mode],
                   'Invalid sort mode "{0}" (expected "multi", "append", "prepend" or "replace")',
                   mode);
            //</debug>
            
            mode = me._sortModes[mode || 'replace'];

            primary = me.getAt(0);
            count = me.length;
            index = mode.append ? count : 0;

            // We have multiple changes to make, so mark the sorters collection as updating
            // before we start.
            me.beginUpdate();

            // Leverage the decode logic wired to the collection to up-convert sorters to
            // real instances.
            me.splice(index, mode.replace ? count : 0, sorters);

            if (mode.multi) {
                count = me.length;
                limit = options.multiSortLimit;

                if (count > limit) {
                    me.removeAt(limit, count); // count will be truncated
                }
            }

            if (sorter && direction) {
                sorter.direction = direction;
            }
            else if (index === 0 && primary && primary === me.getAt(0)) {
                // If we just adjusted the sorters at the front and the primary sorter is
                // still the primary sorter, toggle its direction:
                primary.toggle();
            }

            me.endUpdate();
        }
    }

    clear () {
        // The owning Collection needs to have its onSortersEndUpdate called on sorter
        // clear so that it clears its sorted flag.
        this.beginUpdate();
        
        super.clear();
        
        this.endUpdate(this.items);
    }

    /**
     * Returns an up to date sort function.
     * @return {Function} The sort function.
     */
    getSortFn () {
        return this.sortFn;
    }
    
    /**
     * Get the first matching sorter with a matching property.
     * @param {String} prop The property name
     * @return {Sorter} The sorter. `null` if not found.
     * @private
     */
    getByProperty (prop) {
        for (let item of this.items) {
            if (item.property === prop) {
                return item;
            }
        }

        return null;
    }

    //-------------------------------------------------------------------------
    // Private

    applySorterOptionsFn (fn) {
        if (is.array(fn)) {
            // Allow sorterCollection.sorterOptionsFn = [ fn, scope ];
            this.sorterOptionsScope = fn[1];
            fn = fn[0];
        }
        
        //<debug>
        assert(is.callable(fn));
        //</debug>
        
        return fn;
    }

    decodeSorter (sorter, xclass) {
        let me = this;
        let options = me.$master;
        let root = options.rootProperty;
        let sorterPolicy = me.sorterPolicy;
        let currentSorter, sorterConfig, type;

        if (sorter.isSorter) {
            if (!sorter.root) {
                sorter.root = root;
            }
        }
        else {
            sorterConfig = {
                direction: options.defaultSortDirection,
                root: root
            };
            type = typeof sorter;

            // If we are dealing with a string we assume it is a property they want to sort on.
            if (type === 'string') {
                currentSorter = me.get(sorter);

                if (currentSorter) {
                    return currentSorter;
                }

                sorterConfig.property = sorter;
            }
            // If it is a function, we assume its a sorting function.
            else if (type === 'function') {
                sorterConfig.sorterFn = sorter;
            }
            // If we are dealing with an object, we assume its a Sorter configuration. In
            // this case we create an instance of Sorter passing this configuration.
            else {
                // Finally we get to the point where it has to be invalid
                // <debug>
                assert(is.object(sorter), 'Invalid sorter specified: "{0}"', sorter);
                // </debug>

                sorterConfig = copy(sorterConfig, sorter);

                if (sorterConfig.fn) {
                    sorterConfig.sorterFn = sorterConfig.fn;
                    delete sorterConfig.fn;
                }
            }

            // If a sorter config was created, make it an instance
            sorter = Ext.create({
                xclass: xclass || Sorter,
                ...sorterConfig
            });
        }

        if (sorterPolicy) {
            sorter = sorterPolicy(sorter);
        }

        return sorter;
    }
    
    decodeRemoveItems (item, moreItems) {
        let me = this;
        let items = me.decodeItemArgs(item, moreItems)[0];
        let currentSorters, i, n, removeItems, sorter, type;
        
        if (!items || !items.$decoded) {
            currentSorters = me.items;
            removeItems = [];

            for (i = 0; i < items.length; ++i) {
                sorter = items[i];

                if (sorter && sorter.isSorter) {
                    removeItems.push(sorter);
                }
                else {
                    type = typeof sorter;

                    if (type === 'string') {
                        sorter = me.get(sorter);

                        if (sorter) {
                            removeItems.push(sorter);
                        }
                    }
                    else if (type === 'function') {
                        for (n = currentSorters.length; n-- > 0;) {
                            item = currentSorters[n];

                            if (item.getSorterFn() === sorter) {
                                removeItems.push(item);
                            }
                        }
                    }
                    //<debug>
                    else {
                        Ext.raise('Invalid sorter specification: ' + sorter);
                    }
                    //</debug>
                }
            }
            
            items = removeItems;
            items.$decoded = true;
        }
        
        return items;
    }
}

export { SorterCollection };
