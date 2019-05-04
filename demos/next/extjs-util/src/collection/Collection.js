import {
    Empty, ExMap, Watchable,
    assert,
    arrayify, config, copy, define, is, remove, defProp
} from '../../../extjs-core/src';

import { binarySearch, findInsertionIndex, stableSort } from '../Array';
import { Clip, clipIndices, numericSortFn } from '../Number';

import { CollectionKey } from './CollectionKey';
import { Filter } from './Filter';
import { Grouper } from './Grouper';

//------------------------------------------------------

const NOITEMS = [];
NOITEMS.$decoded = true;
Object.freeze(NOITEMS);

const oneOrMore = function (items) {
    if (items.length === 1 && is.array(items[0])) {
        items = items[0];
    }

    return items;
};

/**
 * This class manages uniquely keyed objects such as records or components.
 *
 * ## Keys
 *
 * This class can only manage objects whose key can be extracted from the instance. This
 * makes this class more efficient because it does not need to track keys in parallel with
 * items. It also means key-to-item lookup will be optimal and never need to perform a
 * linear search.
 *
 * ### Extra Keys
 *
 * In some cases items may need to be looked up by multiple property values. To enable this
 * there is the `extraKeys` config.
 *
 * For example, to quickly look up items by their "name" property:
 *
 *      var collection = new Collection({
 *          extraKeys: {
 *              byName: 'name' // based on "name" property of each item
 *          }
 *      });
 *
 * ## Ranges
 *
 * When methods accept index arguments to indicate a range of items, these are either an
 * index and a number of items or a "begin" and "end" index.
 *
 * In the case of "begin" and "end", the "end" is the first item outside the range. This
 * definition makes it simple to expression empty ranges because "length = end - begin".
 *
 * ### Negative Indices
 *
 * When an item index is provided, negative values are treated as offsets from the end of
 * the collection. In other words the follow are equivalent:
 *
 *      +---+---+---+---+---+---+
 *      |   |   |   |   |   |   |
 *      +---+---+---+---+---+---+
 *        0   1   2   3   4   5
 *       -6  -5  -4  -3  -2  -1
 */
@define({
    config: {
        autoFilter: true,

        /**
         * @cfg {Boolean} [autoSort=true] `true` to maintain sorted order when items
         * are added regardless of requested insertion point, or when an item mutation
         * results in a new sort position.
         *
         * This does not affect a filtered Collection's reaction to mutations of the source
         * Collection. If sorters are present when the source Collection is mutated,
         * this Collection's sort order will always be maintained.
         * @private
         */
        autoSort: true,

        /**
         * @cfg {Boolean} [autoGroup=true] `true` to sort by the grouper
         * @private
         */
        autoGroup: true,

        /**
         * @cfg {Function} decoder
         * A function that can convert newly added items to a proper type before being
         * added to this collection.
         */
        decoder: null,

        /**
         * @cfg {Object} extraKeys
         * One or more `CollectionKey` configuration objects or key properties.
         * Each property of the given object is the name of the `CollectionKey` instance
         * that is stored on this collection. The value of each property configures the
         * `CollectionKey` instance.
         *
         *      var collection = new Collection({
         *          extraKeys: {
         *              byName: 'name' // based on "name" property of each item
         *          }
         *      });
         *
         * Or equivalently:
         *
         *      var collection = new Collection({
         *          extraKeys: {
         *              byName: {
         *                  property: 'name'
         *              }
         *          }
         *      });
         *
         * To provide a custom key extraction function instead:
         *
         *      var collection = new Collection({
         *          extraKeys: {
         *              byName: {
         *                  keyFn: function (item) {
         *                      return item.name;
         *                  }
         *              }
         *          }
         *      });
         *
         * Or to call a key getter method from each item:
         *
         *      var collection = new Collection({
         *          extraKeys: {
         *              byName: {
         *                  keyFn: 'getName'
         *              }
         *          }
         *      });
         *
         * To use the above:
         *
         *      var item = collection.byName.get('somename');
         *
         * **NOTE** Either a `property` or `keyFn` must be be specified to define each
         * key.
         */
        extraKeys: null,

        /**
         * @cfg {Object} grouper
         * A configuration object for this collection's {@link Grouper grouper}.
         *
         * For example, to group items by the first letter of the last name:
         *
         *      var collection = new Collection({
         *          grouper: {
         *              groupFn: function (item) {
         *                  return item.lastName.substring(0, 1);
         *              }
         *          }
         *      });
         */
        grouper: null,

        /**
         * @cfg {Object} groupDefaults
         * A default configuration to be passed to any groups created by the
         * `GroupCollection`. See {@link #groups}.
         *
         * @private
         */
        groupDefaults: null,

        /**
         * @cfg {Function} keyFn
         * A function to retrieve the key of an item in the collection. If provided,
         * this replaces the default `getKey` method. The default `getKey` method handles
         * items that have either an "id" or "_id" property or failing that a `getId`
         * method to call.
         */
        keyFn: null,
        
        /**
         * @cfg {Number} [multiSortLimit=3]
         * The maximum number of sorters which may be applied to this Sortable when using
         * the "multi" insertion position when adding sorters.
         *
         * New sorters added using the "multi" insertion position are inserted at the top
         * of the sorters list becoming the new primary sort key.
         *
         * If the sorters collection has grown to longer then **`multiSortLimit`**, then
         * the it is trimmed.
         */
        multiSortLimit: 3,

        /**
         * @cfg {String} rootProperty
         * The root property to use for aggregation, filtering and sorting. By default
         * this is `null` but when containing things like {@link Model records}
         * this config would likely be set to "data" so that property names are applied
         * to the fields of each record.
         */
        rootProperty: null,

        /**
         * @cfg {Sorter[]/SorterCollection} sorters
         * Array of {@link Sorter sorters} for this collection. At the time a
         * collection is created the `sorters` can be specified as a unit. After that time
         * the normal `setSorters` method can be also be given a set of replacement
         * sorters.
         *
         * Individual sorters can be specified as an `Sorter` instance, a config
         * object for `Sorter` or simply the name of a property by which to sort.
         *
         * An alternative way to extend the sorters is to call the `sort` method and pass
         * a property or sorter config to add to the sorters.
         *
         * Call `getSorters` to always return the `SorterCollection` instance that holds
         * this collection's sorters.
         *
         *      var collection = new Collection();
         *      var sorters = collection.getSorters(); // SorterCollection (lazily created)
         *
         *      sorters.add('name');
         *
         *      //...
         *
         *      sorters.remove('name');
         *
         * Any changes to the `sorters` collection will cause this collection to adjust
         * its items accordingly (if `autoSort` is `true`).
         */
        sorters: null,

        /**
         * @cfg {Boolean} trackGroups
         * `true` to track individual groups in a `GroupCollection`.
         * @private
         */
        trackGroups: true
    },

    prototype: {
        /**
         * @cfg {String} defaultSortDirection
         * The default sort direction to use if one is not specified.
         */
        defaultSortDirection: 'ASC',

        /**
         * @property {Boolean} filtered
         * A read-only flag indicating if this object is filtered.
         * @readonly
         */
        filtered: false,
    
        /**
         * @property {Number} generation
         * Mutation counter which is incremented when the collection changes.
         * @readonly
         */
        generation: 0,
    
        /**
         * @property {Boolean} grouped
         * A read-only flag indicating if this object is grouped.
         * @readonly
         */
        grouped: false,
    
        /**
         * @property {Number} length
         * The count of items in the collection.
         * @readonly
         */
        length: 0,
        
        /**
         * @property {Boolean} sorted
         * A read-only flag indicating if this object is sorted. This flag may not be correct
         * during an update of the sorter collection but will be correct before `onSortChange`
         * is called. This flag is `true` if `grouped` is `true` because the collection is at
         * least sorted by the `grouper`.
         * @readonly
         */
        sorted: false,
        
        /**
         * @property {Number} updating
         * A counter that is increased by `beginUpdate` and decreased by `endUpdate`. When
         * this transitions from 0 to 1 the `{@link #event!beginUpdate beginUpdate}` event is
         * fired. When it transitions back from 1 to 0 the `{@link #event!endUpdate endUpdate}`
         * event is fired.
         * @readonly
         */
        updating: 0,
        
        //------------------------------------------------------------------------
        // Private
    
        /**
         * Priority that is used for endUpdate listeners on the filters and sorters.
         * set to a very high priority so that our processing of these events takes place prior
         * to user code - data must already be filtered/sorted when the user's handler runs
         * @private
         */
        $endUpdatePriority: 1001,
    
        /**
         * @property {Map} indices
         * A map to get the index of an item.
         * @private
         */
        indices: null,
    
        /**
         * @property {Number} indexRebuilds
         * The number of times the `indices` have been rebuilt. This is for diagnostic use.
         * @readonly
         * @private
         */
        indexRebuilds: 0,

        /**
         * `true` to destroy the sorter collection on destroy.
         * @private
         */
        manageSorters: true,

        _aggregators: {
            average (items, begin, end, property, root) {
                let n = end - begin;
    
                return n &&
                    this._aggregators.sum.call(this, items, begin, end, property, root) / n;
            },
    
            bounds (items, begin, end, property, root) {
                let value, max, min, i;
                
                for (i = begin; i < end; ++i) {
                    value = items[i];
                    value = (root ? value[root] : value)[property];
    
                    // First pass max and min are undefined and since nothing is less than
                    // or greater than undefined we always evaluate these "if" statements as
                    // true to pick up the first value as both max and min.
                    if (!(value < max)) { // jshint ignore:line
                        max = value;
                    }
    
                    if (!(value > min)) { // jshint ignore:line
                        min = value;
                    }
                }
    
                return [min, max];
            },
            
            count (items) {
                return items.length;
            },
    
            extremes (items, begin, end, property, root) {
                let most = null;
                let least = null;
                let i, item, max, min, value;
    
                for (i = begin; i < end; ++i) {
                    item = items[i];
                    value = (root ? item[root] : item)[property];
    
                    // Same trick as "bounds"
                    if (!(value < max)) { // jshint ignore:line
                        max = value;
                        most = item;
                    }
    
                    if (!(value > min)) { // jshint ignore:line
                        min = value;
                        least = item;
                    }
                }
    
                return [least, most];
            },
    
            max (items, begin, end, property, root) {
                let b = this._aggregators.bounds.call(this, items, begin, end, property, root);
    
                return b[1];
            },
    
            maxItem (items, begin, end, property, root) {
                let b = this._aggregators.extremes.call(this, items, begin, end, property, root);
    
                return b[1];
            },
    
            min (items, begin, end, property, root) {
                let b = this._aggregators.bounds.call(this, items, begin, end, property, root);
    
                return b[0];
            },
    
            minItem (items, begin, end, property, root) {
                let b = this._aggregators.extremes.call(this, items, begin, end, property, root);
    
                return b[0];
            },
    
            sum (items, begin, end, property, root) {
                let sum = 0;
                let i, value;
                
                for (i = begin; i < end; ++i) {
                    value = items[i];
                    value = (root ? value[root] : value)[property];
                    sum += value;
                }
    
                return sum;
            }
        } // _aggregators
    }
})
class Collection extends Watchable {
    /**
     * @cfg {Array/Filter[]/FilterCollection} filters
     * The collection of {@link Filter Filters} for this collection. At the
     * time a collection is created `filters` can be specified as a unit. After that
     * setting the `filters` property can also be given a set of replacement
     * filters for the collection.
     *
     * Individual filters can be specified as an `Filter` instance, a config
     * object for `Filter` or simply a function that will be wrapped in a
     * instance with its {@link Filter#filterFn filterFn} set.
     *
     * Use the `filters` property to get the `FilterCollection` instance that holds
     * this collection's filters, creating it as necessary.
     *
     *      let collection = new Collection();
     *      let filters = collection.filters; // a FilterCollection
     *
     *      function legalAge (item) {
     *          return item.age >= 21;
     *      }
     *
     *      filters.add(legalAge);
     *
     *      //...
     *
     *      filters.remove(legalAge);
     *
     * Any changes to the `filters` collection will cause this collection to adjust
     * its items accordingly (if `autoFilter` is `true`).
     */
    @config('nullify')
    filters = null;
        
    /**
     * @cfg {GroupCollection} groups
     * The collection of to hold each group container. This collection is created and
     * removed dynamically based on `grouper`. Application code should only need to
     * read `groups` to retrieve the collection and not set `groups`.
     */
    @config('destroy')
    groups = null;

    /**
     * @cfg {Collection} source
     * The base `Collection`. This collection contains the items to which filters
     * are applied to populate this collection. In this configuration, only the
     * root `source` collection can have items truly added or removed.
     */
    @config('nullify')
    source = null;

    //---------------------------------------------------------------------------------
    // Life-cycle

    ctor () {
        /**
         * @property {Object[]} items
         * An array containing the items.
         * @private
         */
        this.items = [];

        /**
         * @property {Map} map
         * A map to find items based on their key.
         * @private
         */
        this.map = new ExMap();  // not {} since maps expect lots of churn
    }

    //---------------------------------------------------------------------------------
    // Special

    [Symbol.iterator] () {
        return this.items[Symbol.iterator]();
    }

    //---------------------------------------------------------------------------------
    // Properties (alphabetic order)

    /**
     * @property {Number} size
     * Same as the `length` property which holds the number of items in this collection.
     * This is provided to mimic the interface of a `Store` and `Map`.
     */
    get size () {
        return this.length;
    }

    //---------------------------------------------------------------------------------
    // Configs (alphabetic order)

    // autoGroup
    
    updateAutoGroup (autoGroup) {
        let groups = this.groups;

        if (groups) {
            groups.autoGroup = autoGroup;
        }

        // Important to call this so it can clear the .sorted flag
        // as needed
        this.onEndUpdateSorters(this.sorters);
    }
    
    // extraKeys

    applyExtraKeys (extraKeys, oldExtraKeys) {
        let me = this;
        let ret = oldExtraKeys || new Empty();
        let config, name, value;

        for (name in extraKeys) {
            value = extraKeys[name];

            if (value.isCollectionKey) {
                value.collection = me;
            }
            else {
                config = {
                    collection: me
                };

                if (typeof value === 'string') {
                    config.property = value;
                }
                else {
                    config = copy(config, value);
                }

                value = new CollectionKey(config);
            }

            ret[name] = me[name] = value;
            value.name = name;
        }

        return ret;
    }

    // filters
    
    applyFilters (filters, collection) {
        if (!filters || filters.isFilterCollection) {
            return filters;
        }

        if (filters) {
            if (!collection) {
                collection = new Collection.FilterCollection();
                collection.$master = collection.$owner = this;
            }

            collection.splice(0, collection.length, filters);
        }

        return collection;
    }

    updateFilters (newFilters, oldFilters) {
        let me = this;

        if (oldFilters) {
            // Do not disconnect from owning Filterable because
            // default options (eg _rootProperty) are read from there.
            // FilterCollections are detached from the Collection when the owning Store
            // is remoteFilter: true or the owning store is a TreeStore and only filters
            // new nodes before filling a parent node.
            if (oldFilters.$owner === me) {
                oldFilters.destroy();
            }
            else {
                oldFilters.un('endUpdate', 'onEndUpdateFilters', me);
            }
        }

        if (!me.destroying) {
            if (newFilters) {
                newFilters.on({
                    endUpdate: 'onEndUpdateFilters',
                    scope: me,
                    priority: me.$endUpdatePriority
                });

                newFilters.$master = me;
            }

            me.onEndUpdateFilters(newFilters);
        }
    }
    
    // grouper

    applyGrouper (grouper) {
        if (grouper) {
            grouper = this.getSorters().decodeSorter(grouper, Grouper);
        }

        return grouper;
    }

    updateGrouper (grouper) {
        let me = this;
        let groups = me.groups;
        let sorters = me.getSorters();
        let populate;

        me.onSorterChange();
        me.grouped = !!grouper;

        if (grouper) {
            if (me.trackGroups) {
                if (!groups) {
                    groups = new Collection.GroupCollection({
                        itemRoot: me.rootProperty,
                        groupDefaults: me.groupDefaults
                    });

                    groups.$groupable = me;
                    me.groups = groups;
                }

                groups.grouper = grouper;
                populate = true;
            }
        }
        else {
            if (groups) {
                me.removeObserver(groups);
                groups.destroy();
            }

            me.groups = null;
        }

        if (!sorters.updating) {
            me.onEndUpdateSorters(sorters);
        }

        if (populate) {
            groups.onCollectionRefresh(me);
        }
    }
    
    // groups

    updateGroups (newGroups, oldGroups) {
        if (oldGroups) {
            this.removeObserver(oldGroups);
        }

        if (newGroups) {
            this.addObserver(newGroups);
        }
    }

    // keyFn

    updateKeyFn (value) {
        //<debug>
        let t = typeof value;
        
        assert(t === 'function', 'keyFn must be a function not {0}', t);
        assert(!this.length, 'keyFn can only be changed on an empty Collection');
        //</debug>
        
        this.getKey = value;
    }
    
    // source

    updateSource (newSource, oldSource) {
        let me = this;
        let auto = me.autoSource;
        
        if (oldSource) {
            if (!oldSource.destroyed) {
                oldSource.removeObserver(me);
            }
            
            if (oldSource === auto) {
                auto.destroy();
                me.autoSource = null;
            }
        }

        if (newSource) {
            newSource.addObserver(me);

            if (newSource.length || me.length) {
                me.onCollectionRefresh(newSource);
            }
        }
    }
    
    // sorters

    applySorters (sorters, collection) {
        if (!sorters || sorters.isSorterCollection) {
            return sorters;
        }

        if (sorters) {
            if (!collection) {
                collection = new Collection.SorterCollection();
                collection.$owner = collection.$master = this;
            }

            collection.splice(0, collection.length, sorters);
        }

        return collection;
    }

    updateSorters (newSorters, oldSorters) {
        let me = this;

        if (oldSorters && !oldSorters.destroyed) {
            if (me.manageSorters && oldSorters.$owner === me) {
                oldSorters.destroy();
            }
            else {
                // Do not disconnect from owning Sortable because
                // default options (eg rootProperty) are read from there.
                // SorterCollections are detached from the Collection when the owning Store
                // is remoteSort: true or the owning store is a TreeStore and only sorts
                // new nodes before filling a parent node.
                oldSorters.un('endUpdate', 'onEndUpdateSorters', me);
            }
        }

        if (!me.destroying) {
            if (newSorters) {
                newSorters.on({
                    endUpdate: 'onEndUpdateSorters',

                    priority: me.$endUpdatePriority,
                    scope: me
                });

                if (me.manageSorters) {
                    newSorters.$master = me;
                }
            }

            me.onSorterChange();
            me.onEndUpdateSorters(newSorters);
        }
    }

    //---------------------------------------------------------------------------------
    // Methods (alphabetic order)

    /**
     * Adds an item to the collection. If the item already exists or an item with the
     * same key exists, the old item will be removed and the new item will be added to
     * the end.
     *
     * This method also accepts an array of items or simply multiple items as individual
     * arguments. The following 3 code sequences have the same end result:
     *
     *      // Call add() once per item (not optimal - best avoided):
     *      collection.add(itemA);
     *      collection.add(itemB);
     *      collection.add(itemC);
     *      collection.add(itemD);
     *
     *      // Call add() with each item as an argument:
     *      collection.add(itemA, itemB, itemC, itemD);
     *
     *      // Call add() with the items as an array:
     *      collection.add([ itemA, itemB, itemC, itemD ]);
     *
     * The first form should be avoided where possible because the collection and all
     * parties "watching" it will be updated 4 times.
     *
     * @param {Object/Object[]} item The item or items to add.
     * @param {Object...} moreItems Additional items to add.
     * @return {Object/Object[]} The item or items added.
     */
    add (item, ...moreItems) {
        let me = this;
        let items = me.decodeItems(item, moreItems);
        let ret = items;

        if (items.length) {
            me.splice(me.length, 0, items);

            if (items.length === 1 && item === items[0]) {
                ret = item;
            }
        }

        return ret;
    }

    /**
     * Returns the result of the specified aggregation operation against all items in this
     * collection.
     *
     * This method is not typically called directly because there are convenience methods
     * for each of the supported `operation` values. These are:
     *
     *   * **average** - Returns the average value.
     *   * **bounds**  - Returns an array of `[min, max]`.
     *   * **max**     - Returns the maximum value or `undefined` if empty.
     *   * **min**     - Returns the minimum value or `undefined` if empty.
     *   * **sum**     - Returns the sum of all values.
     *
     * For example:
     *
     *      result = collection.aggregate('age', 'sum');
     *
     *      result = collection.aggregate('age', 'sum', 2, 10); // the 8 items at index 2
     *
     * To provide a custom operation function:
     *
     *      function averageAgeOfMinors (items, values) {
     *          var sum = 0,
     *              count = 0;
     *
     *          for (var i = 0; i < values.length; ++i) {
     *              if (values[i] < 18) {
     *                  sum += values[i];
     *                  ++count;
     *              }
     *          }
     *
     *          return count ? sum / count : 0;
     *      }
     *
     *      result = collection.aggregate('age', averageAgeOfMinors);
     *
     * @param {String} property The name of the property to aggregate from each item.
     * @param {String/Function} operation The operation to perform.
     * @param {Array} operation.items The items on which the `operation` function is to
     * operate.
     * @param {Array} operation.values The values on which the `operation` function is to
     * operate.
     * @param {Number} [begin] The index of the first item in `items` to include in the
     * aggregation.
     * @param {Number} [end] The index at which to stop aggregating `items`. The item at
     * this index will *not* be included in the aggregation.
     * @param {Object} [scope] The `this` pointer to use if `operation` is a function.
     * Defaults to this collection.
     * @return {Object}
     */
    aggregate (...args) {
        return this.aggregateItems(this.items, ...args);
    }
    
    /**
     * See {@link #aggregate}. The functionality is the same, however the aggregates are
     * provided per group. Assumes this collection has an active {@link #grouper}.
     * 
     * @param {String} property The name of the property to aggregate from each item.
     * @param {String/Function} operation The operation to perform.
     * @param {Array} operation.items The items on which the `operation` function is to
     * operate.
     * @param {Array} operation.values The values on which the `operation` function is to
     * operate.
     * @param {Object} [scope] The `this` pointer to use if `operation` is a function.
     * Defaults to this collection.
     * @return {Object}
     */
    aggregateByGroup (property, operation, scope) {
        return this.aggregateGroups(this.groups, property, operation, scope);
    }
    
    /**
     * Returns the result of the specified aggregation operation against the given items.
     * For details see `aggregate`.
     *
     * @param {Array} items The items to aggregate.
     * @param {String} property The name of the property to aggregate from each item.
     * @param {String/Function} operation The operation to perform.
     * @param {Array} operation.items The items on which the `operation` function is to
     * operate.
     * @param {Array} operation.values The values on which the `operation` function is to
     * operate.
     * @param {Number} [begin] The index of the first item in `items` to include in the
     * aggregation.
     * @param {Number} [end] The index at which to stop aggregating `items`. The item at
     * this index will *not* be included in the aggregation.
     * @param {Object} [scope] The `this` pointer to use if `operation` is a function.
     * Defaults to this collection.
     * 
     * @private
     * @return {Object}
     */
    aggregateItems (items, property, operation, begin, end, scope) {
        let me = this;
        let root = me.rootProperty;
        let aggItems, i, k, rangeLen, subset, value, values;

        [ begin, end ] = clipIndices(items.length, [ begin, end ]);

        subset = (begin !== 0 && end !== items.length);

        if (!is.callable(operation)) {
            operation = me._aggregators[operation];

            return operation.call(me, items, begin, end, property, root);
        }

        // Preallocate values array with known set size.
        rangeLen = end - begin;
        values = new Array(rangeLen);

        // aggItems can be just the items array if a subset has not been requested:
        aggItems = subset ? new Array(rangeLen) : items;

        // Collect the extracted property values and the items for passing to the
        // operation.
        for (i = begin; i < end; ++i) {
            value = items[i];
            k = i - begin;
            
            if (subset) {
                aggItems[k] = value;
            }

            values[k] = (root ? value[root] : value)[property];
        }

        return operation.call(scope || me, aggItems, values, 0);
    }
    
    /**
     * Aggregates a set of groups.
     * @param {GroupCollection} groups The groups
     * @param {String} property The name of the property to aggregate from each item.
     * @param {String/Function} operation The operation to perform.
     * @param {Array} operation.values The values on which the `operation` function is to
     * operate.
     * @param {Array} operation.items The items on which the `operation` function is to
     * operate.
     * @param {Number} operation.index The index in `items` at which the `operation`
     * function is to start. The `values.length` indicates the number of items involved.
     * @param {Object} [scope] The `this` pointer to use if `operation` is a function.
     * Defaults to this collection.
     * 
     * @return {Object}
     * @private
     */
    aggregateGroups (groups, property, operation, scope) {
        let items = groups.items;
        let len = items.length;
        let callDirect = !is.callable(operation);
        let out = {};
        let i, group, result;
        
        for (i = 0; i < len; ++i) {
            group = items[i];

            if (callDirect) {
                result = group[operation](property);
            }
            else {
                result = this.aggregateItems(group.items, property, operation, null,
                                             null, scope);
            }

            out[group.groupKey] = result;
        }

        return out;
    }

    /**
     * This method is called to indicate the start of multiple changes to the collection.
     * Application code should seldom need to call this method as it is called internally
     * when needed. If multiple collection changes are needed, consider wrapping them in
     * an `update` call rather than calling `beginUpdate` directly.
     *
     * Internally this method increments a counter that is decremented by `endUpdate`. It
     * is important, therefore, that if you call `beginUpdate` directly you match that
     * call with a call to `endUpdate` or you will prevent the collection from updating
     * properly.
     *
     * For example:
     *
     *      var collection = new Collection();
     *
     *      collection.beginUpdate();
     *
     *      collection.add(item);
     *      // ...
     *
     *      collection.insert(index, otherItem);
     *      //...
     *
     *      collection.endUpdate();
     */
    beginUpdate () {
        if (!this.updating++) {
            this.notify('beginUpdate');
        }
    }

    /**
     * Removes all items from the collection. This is similar to `removeAll` except that
     * `removeAll` fire events to inform listeners. This means that this method should be
     * called only when you are sure there are no listeners.
     */
    clear () {
        let me = this;
        let generation = me.generation;
        let ret = generation ? me.items : [];
        let extraKeys, indexName;

        if (generation) {
            me.items.length = me.length = 0;
            me.map = new ExMap();
            me.indices = new ExMap();
            me.generation++;

            // Clear any extraKey indices associated with this Collection
            extraKeys = me.extraKeys;

            if (extraKeys) {
                for (indexName in extraKeys) {
                    extraKeys[indexName].clear();
                }
            }
        }

        return ret;
    }

    /**
     * Creates a shallow copy of this collection
     * @return {Collection}
     */
    clone () {
        let ret = this.cloneEmpty();

        ret.add(this.items);

        return ret;
    }

    /**
     * Creates a shallow copy of this collection
     * @return {Collection}
     */
    cloneEmpty () {
        let config = this.getInitialConfig();

        return new this.constructor(config);
    }

    /**
     * Collects unique values of a particular property in this Collection.
     * @param {String} property The property to collect on
     * @param {String} root (optional) 'root' property to extract the first argument from.
     * This is used mainly when summing fields in records, where the fields are all stored
     * inside the 'data' object
     * @param {Boolean} [allowNull] Pass `true` to include `null`, `undefined` or empty
     * string values.
     * @return {Array} The unique values
     */
    collect (property, root, allowNull) {
        let items = this.items;
        let length = items.length;
        let map = new ExMap();
        let ret = [];
        let i, strValue, value;

        for (i = 0; i < length; ++i) {
            value = items[i];
            value = (root ? value[root] : value)[property];

            strValue = String(value);

            if ((allowNull || !is.empty(value)) && !map.has(strValue)) {
                map.set(strValue, 1);
                ret.push(value);
            }
        }

        return ret;
    }

    /**
     * Returns true if the collection contains the passed Object as an item.
     * @param {Object} item The item to look for in the collection.
     * @return {Boolean} `true` if the collection contains the item.
     */
    contains (item) {
        let ret = false;
        let key;

        if (item != null) {
            key = this.getKey(item);
            ret = this.map.get(key) === item;
        }

        return ret;
    }

    /**
     * Returns true if the collection contains all the passed items. If the first argument
     * is an array, then the items in that array are checked. Otherwise, all arguments
     * passed to this method are checked.
     *
     * @param {Object.../Object[]} items The item(s) that must be in the collection.
     * @return {Boolean} `true` if the collection contains all the items.
     */
    containsAll (...items) {
        items = oneOrMore(items);

        for (let item of items) {
            if (!this.contains(item)) {
                return false;
            }
        }

        return true;
    }

    /**
     * Returns true if the collection contains the passed Object as a key.
     * @param {String} key The key to look for in the collection.
     * @return {Boolean} True if the collection contains the Object as a key.
     */
    containsKey (key) {
        return this.map.has(key);
    }

    /**
     * Creates a new collection that is a filtered subset of this collection. The filter
     * passed can be a function, a simple property name and value, an `Filter`
     * instance, an array of `Filter` instances.
     *
     * If the passed filter is a function the second argument is its "scope" (or "this"
     * pointer). The function should return `true` given each item in the collection if
     * that item should be included in the filtered collection.
     *
     *      var people = new Collection();
     *
     *      people.add([
     *          { id: 1, age: 25, name: 'Ed' },
     *          { id: 2, age: 24, name: 'Tommy' },
     *          { id: 3, age: 24, name: 'Arne' },
     *          { id: 4, age: 26, name: 'Aaron' }
     *      ]);
     *
     *      // Create a collection of people who are older than 24:
     *      var oldPeople = people.createFiltered(function (item) {
     *          return item.age > 24;
     *      });
     *
     * If the passed filter is a `Filter` instance or array of `Filter`
     * instances the filter(s) are used to produce the filtered collection and there are
     * no further arguments.
     *
     * If the passed filter is a string it is understood as the name of the property by
     * which to filter. The second argument is the "value" used to compare each item's
     * property value. This comparison can be further tuned with the `anyMatch` and
     * `caseSensitive` (optional) arguments.
     *
     *     // Create a new Collection containing only the items where age == 24
     *     var middleAged = people.createFiltered('age', 24);
     *
     * Alternatively you can apply filters to this Collection by setting `filters` or
     * modifying that collection of filters.
     *
     * @param {Filter[]/String/Function} property A property on your objects, an
     * array of {@link Filter Filter} objects or a filter function.
     *
     * @param {Object} value If `property` is a function, this argument is the "scope"
     * (or "this" pointer) for the function. Otherwise this is either a `RegExp` to test
     * property values or the value with which to compare.
     *
     * @param {Boolean} [anyMatch=false] True to match any part of the string, not just
     * the beginning.
     *
     * @param {Boolean} [caseSensitive=false] True for case sensitive comparison.
     *
     * @param {Boolean} [exactMatch=false] `true` to force exact match (^ and $ characters
     * added to the regex).
     *
     * @return {Collection} The new, filtered collection.
     */
    createFiltered (property, value, anyMatch, caseSensitive, exactMatch) {
        let me = this;
        let items = me.items;
        let root = me.rootProperty;
        let ret = me.cloneEmpty();
        let filter, filters, fn, item, scope;

        if (is.callable(property)) {
            fn = property;
            scope = value;
        }
        else {
            // support for the simple case of filtering by property/value
            if (typeof property === 'string') {
                filters = [
                    new Filter({
                        property: property,
                        value: value,
                        root: root,
                        anyMatch: anyMatch,
                        caseSensitive: caseSensitive,
                        exactMatch: exactMatch
                    })
                ];
            }
            else if (property.isFilter) {
                filters = [ property ];
                property.root = root;
            }
            else if (is.array(property)) {
                filters = property.slice(0);

                for (filter of filters) {
                    filter.root = root;
                }
            }

            // At this point we have an array of zero or more Filter objects to
            // filter with, so here we construct a function that combines these filters
            // by ANDing them together and filter by that.
            fn = Filter.createFilterFn(filters);
        }

        scope = scope || me;

        for (item of items) {
            if (fn.call(scope, item)) {
                ret.add(item);
            }
        }

        return ret;
    }

    /**
     * Executes the specified function once for every item in the collection. If the value
     * returned by `fn` is `false` the iteration stops. In all cases, the last value that
     * `fn` returns is returned by this method.
     *
     * @param {Function} fn The function to execute for each item.
     * @param {Object} fn.item The collection item.
     * @param {Number} fn.index The index of item.
     * @param {Number} fn.len Total length of collection.
     * @param {Object} [scope=this] The scope (`this` reference) in which the function
     * is executed. Defaults to this collection.
     */
    each (fn, scope) {
        let items = this.items;
        let len = items.length;
        let i, ret;

        if (len) {
            scope = scope || this;
            items = items.slice(0); // safe for re-entrant calls

            for (i = 0; i < len; i++) {
                ret = fn.call(scope, items[i], i, len);

                if (ret === false) {
                    break;
                }
            }
        }

        return ret;
    }

    /**
     * Executes the specified function once for every key in the collection, passing each
     * key, and its associated item as the first two parameters. If the value returned by
     * `fn` is `false` the iteration stops. In all cases, the last value that `fn` returns
     * is returned by this method.
     *
     * @param {Function} fn The function to execute for each item.
     * @param {String} fn.key The key of collection item.
     * @param {Object} fn.item The collection item.
     * @param {Number} fn.index The index of item.
     * @param {Number} fn.len Total length of collection.
     * @param {Object} [scope=this] The scope (`this` reference) in which the function
     * is executed. Defaults to this collection.
     */
    eachKey (fn, scope) {
        let me = this;
        let items = me.items;
        let len = items.length;
        let i, item, key, ret;

        if (len) {
            scope = scope || me;
            items = items.slice(0); // safe for re-entrant calls

            for (i = 0; i < len; i++) {
                key = me.getKey(item = items[i]);
                ret = fn.call(scope, key, item, i, len);

                if (ret === false) {
                    break;
                }
            }
        }

        return ret;
    }

    /**
     * This method is called after modifications are complete on a collection. For details
     * see `beginUpdate`.
     */
    endUpdate () {
        if (! --this.updating) {
            this.notify('endUpdate');
        }
    }

    /**
     * Returns the first matching object in this collection by a specific property/value
     * or `null` if none was found.
     *
     * @param {String} property The name of a property on your objects.
     * @param {String/RegExp} value A string that the property values
     * should start with or a RegExp to test against the property.
     * @param {Number} [start=0] The index to start searching at.
     * @param {Boolean} [startsWith=true] Pass `false` to allow a match start anywhere in
     * the string. By default the `value` will match only at the start of the string.
     * @param {Boolean} [endsWith=true] Pass `false` to allow the match to end before the
     * end of the string. By default the `value` will match only at the end of the string.
     * @param {Boolean} [ignoreCase=true] Pass `false` to make the `RegExp` case
     * sensitive (removes the 'i' flag).
     * @return {Object}
     */
    find (property, value, start, startsWith, endsWith, ignoreCase) {
        let regex, root;
        
        if (is.empty(value, false)) {
            return null;
        }

        regex = Filter.createRegex(value, startsWith, endsWith, ignoreCase);
        root = this.rootProperty;

        return this.findBy(
            item =>
                item && regex.test((root ? item[root] : item)[property]),
            null, start);
    }

    /**
     * Returns an array of all objects in this collection matching the given property/value.
     *
     * @param {String} property The name of a property on your objects.
     * @param {String/RegExp} value A string that the property values
     * should start with or a RegExp to test against the property.
     * @param {Number} [start=0] The index to start searching at.
     * @param {Boolean} [startsWith=true] Pass `false` to allow a match start anywhere in
     * the string. By default the `value` will match only at the start of the string.
     * @param {Boolean} [endsWith=true] Pass `false` to allow the match to end before the
     * end of the string. By default the `value` will match only at the end of the string.
     * @param {Boolean} [ignoreCase=true] Pass `false` to make the `RegExp` case
     * sensitive (removes the 'i' flag).
     * @return {Object[]}
     */
    findAll (property, value, start, startsWith, endsWith, ignoreCase) {
        let regex, root;
        
        if (is.empty(value, false)) {
            return [];
        }

        regex = Filter.createRegex(value, startsWith, endsWith, ignoreCase);
        root = this.rootProperty;

        return this.findAllBy(
            item =>
                item && regex.test((root ? item[root] : item)[property]),
            null, start);
    }

    /**
     * Returns an array of all objects in the collection which elicit a `true` return
     * value from the passed selection function.
     * @param {Function} fn The selection function to execute for each item.
     * @param {Object} fn.item The collection item.
     * @param {String} fn.key The key of collection item.
     * @param {Object} [scope=this] The scope (`this` reference) in which the function
     * is executed. Defaults to this collection.
     * @param {Number} [start=0] The index at which to start searching.
     * @return {Object[]}
     */
    findAllBy (fn, scope, start) {
        let me = this;
        let items = me.items;
        let len = items.length;
        let ret = [];
        let i, item, key;

        scope = scope || me;

        for (i = start || 0; i < len; i++) {
            key = me.getKey(item = items[i]);

            if (fn.call(scope, item, key)) {
                ret.push(item);
            }
        }

        return ret;
    }

    /**
     * Returns the first item in the collection which elicits a true return value from the
     * passed selection function or `null` if none was found.
     * @param {Function} fn The selection function to execute for each item.
     * @param {Object} fn.item The collection item.
     * @param {String} fn.key The key of collection item.
     * @param {Object} [scope=this] The scope (`this` reference) in which the function
     * is executed. Defaults to this collection.
     * @param {Number} [start=0] The index at which to start searching.
     * @return {Object}
     */
    findBy (fn, scope, start) {
        let me = this;
        let items = me.items;
        let len = items.length;
        let i, item, key;

        scope = scope || me;

        for (i = start || 0; i < len; i++) {
            key = me.getKey(item = items[i]);

            if (fn.call(scope, item, key)) {
                return item;
            }
        }

        return null;
    }

    /**
     * Returns the index of the first matching object in this collection by a specific
     * property/value, or -1 if no match is found.
     *
     * @param {String} property The name of a property on your objects.
     * @param {String/RegExp} value A string that the property values
     * should start with or a RegExp to test against the property.
     * @param {Number} [start=0] The index to start searching at.
     * @param {Boolean} [startsWith=true] Pass `false` to allow a match start anywhere in
     * the string. By default the `value` will match only at the start of the string.
     * @param {Boolean} [endsWith=true] Pass `false` to allow the match to end before the
     * end of the string. By default the `value` will match only at the end of the string.
     * @param {Boolean} [ignoreCase=true] Pass `false` to make the `RegExp` case
     * sensitive (removes the 'i' flag).
     * @return {Number}
     */
    findIndex (property, value, start, startsWith, endsWith, ignoreCase) {
        let item = this.find(property, value, start, startsWith, endsWith, ignoreCase);

        return item ? this.indexOf(item) : -1;
    }

    /**
     * Returns the index of the first matching object in this collection by a function
     * or -1 if not found. If the `fn` returns `true` it is considered a match.
     * @param {Function} fn The function to be called.
     * @param {Object} fn.item The collection item.
     * @param {String} fn.key The key of collection item.
     * @param {Object} [scope=this] The scope (`this` reference) in which the function
     * is executed. Defaults to this collection.
     * @param {Number} [start=0] The index at which to start searching.
     * @return {Number}
     */
    findIndexBy (fn, scope, start) {
        let item = this.findBy(fn, scope, start);

        return item ? this.indexOf(item) : -1;
    }

    /**
     * Returns the first item in the collection. If the grouped parameter is passed,
     * see {@link #aggregateByGroup} for information on the return type.
     * @param {Boolean} [grouped] `true` to extract the first item in each group. Only applies if
     * a {@link #grouper} is active in the collection.
     * @return {Object}
     */
    first (grouped) {
        let groups = grouped && this.groups;

        return groups ? this.aggregateGroups(groups, null, 'first') : this.items[0];
    }

    /**
     * Returns the item associated with the passed key.
     * @param {String/Number} key The key of the item.
     * @return {Object}
     */
    get (key) {
        return this.map.get(key);
    }

    /**
     * Returns the item at the specified index.
     * @param {Number} index The index of the item.
     * @return {Object}
     */
    getAt (index) {
        return this.items[index];
    }

    /**
     * Returns the item associated with the passed key.
     * @param {String/Number} key The key of the item.
     * @return {Object}
     */
    getByKey (key) {
        return this.map.get(key);
    }
    
    /**
     * Returns the filter function.
     * @return {Function} sortFn The sort function.
     */
    getFilterFn () {
        return this.getFilters().getFilterFn();
    }

    /**
     * Returns the `FilterCollection` automatically creating if it does not yet exist. To
     * access the filters collection without creating it, just use the `filters` property.
     * @return {FilterCollection}
     */
    getFilters () {
        let ret = this.filters;

        if (!ret) {
            this.filters = ret = new Collection.FilterCollection();
        }

        return ret;
    }

    /**
     * A function which will be called, passing an object belonging to this collection.
     * The function should return the key by which that object will be indexed. This key
     * must be unique to this item as only one item with this key will be retained.
     *
     * The default implementation return the `id` property of the given item.
     *
     * You can provide your own implementation by passing the `keyFn` config.
     *
     * For example, to hold items that have a unique "name" property:
     *
     *     var elementCollection = new Collection({
     *         keyFn: function (item) {
     *             return item.name;
     *         }
     *     });
     *
     * The collection can have `extraKeys` if items need to be quickly looked up by other
     * (potentially non-unique) properties.
     *
     * @param {Object} item The item.
     * @return {Object} The key for the passed item.
     */
    getKey (item) {
        return item.id;
    }

    /**
     * Returns a range of items in this collection
     * @param {Number} [begin=0] The index of the first item to get.
     * @param {Number} [end] The ending index. The item at this index is *not* included.
     * @return {Object[]} An array of items
     */
    getRange (begin, end) {
        let items = this.items;
        let length = items.length;
        let range;

        //<debug>
        // Using !() makes "!(undefined > undefined)" pass where "undefined <= undefined'
        // will fail (not true):
        assert(!(begin > end), 'Invalid item range: [{0},{1}]', begin, end);
        //</debug>

        if (!length) {
            range = [];
        }
        else {
            range = clipIndices(length, [ begin, end ]);
            range = items.slice(range[0], range[1]);
        }

        return range;
    }
    
    /**
     * Returns an up to date sort function.
     * @return {Function} The sort function.
     */
    getSortFn () {
        return this._sortFn || this.createSortFn();
    }

    /**
     * Returns the `SorterCollection` automatically creating if it does not yet exist. To
     * access the sorters collection without creating it, just use the `sorters` property.
     * @return {SorterCollection}
     */
    getSorters () {
        let me = this;
        let ret = me.sorters;

        if (!ret) {
            me.sorters = [];

            ret = me.sorters;
        }

        return ret;
    }
    
    /**
     * Returns an array of values for the specified (sub) property.
     *
     * For example, to get an array of "name" properties from a collection of records (of
     * `Model` objects):
     *
     *      var names = collection.getValues('name', 'data');
     *
     * @param {String} property The property to collect on
     * @param {String} [root] 'root' property to extract the first argument from. This is
     * used mainly when operating on fields in records, where the fields are all stored
     * inside the 'data' object.
     * @param {Number} [start=0] The index of the first item to include.
     * @param {Number} [end] The index at which to stop getting values. The value of this
     * item is *not* included.
     * @return {Object[]} The array of values.
     */
    getValues (property, root, start, end) {
        let items = this.items;
        let [ i, n ] = clipIndices(items.length, [ start, end ]);
        let ret = [];
        let value;

        for (/* empty */; i < n; ++i) {
            value = items[i];
            value = (root ? value[root] : value)[property];
            ret.push(value);
        }

        return ret;
    }

    /**
     * Returns index within the collection of the passed Object.
     * @param {Object} item The item to find.
     * @return {Number} The index of the item or -1 if not found.
     */
    indexOf (item) {
        let ret = -1;
        let key;
        
        if (item) {
            key = this.getKey(item);
            ret = this.indexOfKey(key);
        }
        
        return ret;
    }

    /**
     * Returns index within the collection of the passed key.
     * @param {Object} key The key to find.
     * @return {Number} The index of the item or -1 if not found.
     */
    indexOfKey (key) {
        let me = this;
        let indices = me.indices;
        let ret = -1;

        if (me.map.has(key)) {
            if (!indices) {
                indices = me.ensureIndices();
            }

            ret = indices.get(key);
        }

        return ret;
    }

    /**
     * Inserts one or more items to the collection. The `index` value is the position at
     * which the first item will be placed. The items starting at that position will be
     * shifted to make room.
     *
     * @param {Number} index The index at which to insert the item(s).
     * @param {Object/Object[]} item The item or items to add.
     * @param {Object...} moreItems Additional items to add.
     * @return {Object/Object[]} The item or items added.
     */
    insert (index, item, ...moreItems) {
        let me = this;
        let items = me.decodeItems(item, moreItems);
        let ret = items;

        if (items.length) {
            me.splice(index, 0, items);
            ret = (items.length === 1) ? items[0] : items;
        }

        return ret;
    }

    /**
     * This method can be used to conveniently test whether an individual item would be
     * removed due to the current filter.
     * @param {Object} item The item to test.
     * @return {Boolean} The value `true` if the item would be "removed" from the
     * collection due to filters or `false` otherwise.
     */
    isItemFiltered (item) {
        return !this.getFilters().filterFn(item);
    }

    /**
     * This method should be called when an item in this collection has been modified. If
     * the collection is sorted or filtered the result of modifying an item needs to be
     * reflected in the collection. If the item's key is also being modified, it is best
     * to pass the `oldKey` to this same call rather than call `updateKey` separately.
     *
     * @param {Object} item The item that was modified.
     * @param {String[]} [modified] The names of the modified properties of the item.
     * @param {String/Number} [oldKey] Passed if the item's key was also modified.
     * @param {Object} meta (private)
     */
    itemChanged (item, modified, oldKey, meta) {
        let me = this;
        let keyChanged = oldKey !== undefined;
        let filtered = me.filtered && me.autoFilter;
        let filterChanged = false;
        let itemMovement = 0;
        let items = me.items;
        let last = me.length - 1;
        // one or zero items is not really sorted
        // CAN be called on an empty Collection
        // A TreeStore can call afterEdit on a hidden root before
        // any child nodes exist in the store.
        let sorted = me.sorted && last > 0 && me.autoSort;
        let source = me.source;
        let toRemove = 0;
        let itemFiltered = false;
        let wasFiltered = false;
        let details, newKey, sortFn, toAdd, index, newIndex;

        // We are owned, we cannot react, inform owning collection.
        if (source && !source.updating) {
            me.sourceUpdating = true;
            source.itemChanged(item, modified, oldKey, meta);
            me.sourceUpdating = false;
        }
        else {
            // Root Collection has been informed.
            // Change is propagating downward from root.
            newKey = me.getKey(item);

            if (filtered) {
                index = me.indexOfKey(keyChanged ? oldKey : newKey);
                wasFiltered = (index < 0);
                itemFiltered = me.isItemFiltered(item);
                filterChanged = (wasFiltered !== itemFiltered);
            }

            if (filterChanged) {
                if (itemFiltered) {
                    toRemove = [ item ];
                    newIndex = -1;
                }
                else {
                    toAdd = [ item ];
                    newIndex = me.length; // this will be ignored if sorted
                }
            }
            else if (sorted && !itemFiltered) {
                // If sorted, the beforeItemChange and itemChange events need the correct
                // value for newIndex... even though splice ignores the parameter and
                // calculates the insertion point.
                // Also if we are sorted and there are 2 or more items make sure this item
                // is at the proper index.
                if (!filtered) {
                    // If the filter has not changed we may need to move the item but if
                    // there is a filter we have already determined its index.
                    index = me.indexOfKey(keyChanged ? oldKey : newKey);
                }

                sortFn = me.getSortFn();

                if (index !== -1) {
                    if (index && sortFn(items[index - 1], items[index]) > 0) {
                        // If this item is not the first and the item before it compares as
                        // greater-than then item needs to move left since it is less-than
                        // item[index - 1].
                        itemMovement = -1;

                        // We have to bound the binarySearch or else the presence of the
                        // out-of-order "item" would break it.
                        newIndex = binarySearch(items, item, 0, index, sortFn);
                    }
                    else if (index < last && sortFn(items[index], items[index + 1]) > 0) {
                        // If this item is not the last and the item after it compares as
                        // less-than then item needs to move right since it is greater-than
                        // item[index + 1].
                        itemMovement = 1;

                        // We have to bound the binarySearch or else the presence of the
                        // out-of-order "item" would break it.
                        newIndex = binarySearch(items, item, index + 1, sortFn);
                    }

                    if (itemMovement) {
                        toAdd = [ item ];
                    }
                }
            }

            // One may be tempted to avoid this notification when none of our three vars
            // are true, *but* the problem with that is that these three changes we care
            // about are only what this collection cares about. Child collections or
            // outside parties still need to know that the item has changed in some way.
            // We do NOT adjust the newIndex reported here to allow for position *after*
            // the item has been removed
            // We report the "visual" position at which the item would be inserted as if
            // it were new.
            details = {
                item: item,
                key: newKey,
                index: newIndex,

                filterChanged: filterChanged,
                keyChanged: keyChanged,
                indexChanged: !!itemMovement,

                filtered: itemFiltered,
                oldIndex: index,
                newIndex: newIndex,
                wasFiltered: wasFiltered,
                meta: meta
            };

            if (keyChanged) {
                details.oldKey = oldKey;
            }

            if (modified) {
                details.modified = modified;
            }

            ++me.generation;

            me.beginUpdate();

            me.notify('beforeItemChange', [details]);

            if (keyChanged) {
                me.updateKey(item, oldKey, details);
            }

            if (toAdd || toRemove) {
                // In sorted mode (which is the only time we get here), newIndex is
                // correct but *ignored* by splice since it has to assume that *insert*
                // index values need to be determined internally. In other words, the
                // first argument here is both the remove and insert index but in sorted
                // mode the insert index is calculated by splice.
                me.splice(newIndex, toRemove, toAdd);
            }

            // Ensure that the newIndex always refers to the item the insertion is *before*.
            // Ensure that the oldIndex always refers to the item the insertion was *before*.
            //
            // Before change to "c" to "h":     |   Before change "i" to "d":
            //                                  |
            //      +---+---+---+---+---+---+   |   +---+---+---+---+---+---+
            //      | a | c | e | g | i | k |   |   | a | c | e | g | i | k |
            //      +---+---+---+---+---+---+   |   +---+---+---+---+---+---+
            //        0   1   2   3   4   5     |     0   1   2   3   4   5   
            //            ^           ^         |             ^       ^
            //            |           |         |             |       |
            //        oldIndex    newIndex      |       newIndex     oldIndex
            //                                  |
            // After change to "c" to "h":      |   After change "i" to "d":
            //                                  |
            //      +---+---+---+---+---+---+   |   +---+---+---+---+---+---+
            //      | a | e | g | h | i | k |   |   | a | c | d | e | g | k |
            //      +---+---+---+---+---+---+   |   +---+---+---+---+---+---+
            //        0   1   2   3   4   5     |     0   1   2   3   4   5  
            //            ^       ^             |             ^           ^
            //            |       |             |             |           |
            //      oldIndex    newIndex        |        newIndex     oldIndex
            //
            if (itemMovement > 0) {
                details.newIndex--;
            }
            else if (itemMovement < 0) {
                details.oldIndex++;
            }

            // Divergence depending on whether the record if filtered out at this level
            // in a chaining hierarchy. Child collections of this collection will not care
            // about filteredItemChange because the record is not in them.
            // Stores however will still need to know because the record *is* in them,
            // just filtered.
            me.notify(itemFiltered ? 'filteredItemChange' : 'itemChange', [details]);

            me.endUpdate();
        }
    }
    
    /**
     * Returns the last item in the collection. If the grouped parameter is passed,
     * see {@link #aggregateByGroup} for information on the return type.
     * @param {Boolean} [grouped] `true` to extract the first item in each group. Only
     * applies if a {@link #grouper} is active in the collection.
     * @return {Object}
     */
    last (grouped) {
        let me = this;
        let groups = grouped && me.groups;

        return groups ? me.aggregateGroups(groups, null, 'last') : me.items[me.length - 1];
    }

    /**
     * Remove an item from the collection.
     * @param {Object/Object[]} item The item or items to remove.
     * @param {Object...} moreItems Additional items to remove.
     * @return {Number} The number of items removed.
     */
    remove (item, ...moreItems) {
        let me = this;
        let items = me.decodeRemoveItems(item, moreItems);
        let length = me.length;

        me.splice(0, items);

        return length - me.length;
    }

    /**
     * Remove all items in the collection.
     * @return {Collection} This object.
     */
    removeAll () {
        let me = this;
        let length = me.length;

        if (me.generation && length) {
            me.splice(0, length);
        }

        return me;
    }

    /**
     * Remove an item from a specified index in the collection.
     * @param {Number} index The index within the collection of the item to remove.
     * @param {Number} [count=1] The number of items to remove.
     * @return {Object/Number} If `count` was 1 and the item was removed, that item is
     * returned. Otherwise the number of items removed is returned.
     */
    removeAt (index, count) {
        let me = this;
        let length = me.length;
        let range = clipIndices(length, [ index, (count === undefined) ? 1 : count ],
                                Clip.COUNT);
        let n = range[0];
        let removeCount = range[1] - n;
        let item = (removeCount === 1) && me.getAt(n);
        let removed;

        me.splice(n, removeCount);

        removed = me.length - length;

        return (item && removed) ? item : removed;
    }

    /**
     * Removes the item associated with the passed key from the collection.
     * @param {String} key The key of the item to remove.
     * @return {Object} Only returned if removing at a specified key. The item removed or
     * `false` if no item was removed.
     */
    removeByKey (key) {
        let item = this.getByKey(key);

        return (item && this.remove(item)) ? item : false;
    }

    /**
     * @private
     * Replace an old entry with a new entry of the same key if the entry existed.
     * @param {Object} item The item to insert.
     * @return {Object} inserted The item inserted.
     */
    replace (item) {
        let me = this;
        let index = me.indexOf(item);

        if (index === -1) {
            me.add(item);
        }
        else {
            me.insert(index, item);
        }
    }
    
    /**
     * Adds an item to the collection while removing any existing items.
     * Similar to {@link #method!add}.
     * @param {Object.../Object[]} items The item or items to add.
     * @return {Object/Object[]} The item or items added.
     */
    replaceAll (...items) {
        let me = this;
        let replacements = me.decodeItems(items);
        let ret = replacements;
        
        if (replacements.length) {
            me.splice(0, me.length, replacements);

            if (replacements.length === 1 && replacements[0] === items[0]) {
                ret = replacements[0];
            }
        }
        else {
            me.removeAll();
        }

        return ret;
    }

    /**
     * Updates the sorters collection and triggers sorting of this Sortable.
     *
     * For example:
     *
     *     //sort by a single field
     *     myStore.sort('myField', 'DESC');
     *
     *     //sorting by multiple fields
     *     myStore.sort([{
     *         property : 'age',
     *         direction: 'ASC'
     *     }, {
     *         property : 'name',
     *         direction: 'DESC'
     *     }]);
     *
     * When passing a single string argument to sort, the `direction` is maintained for
     * each field and is toggled automatically. So this code:
     *
     *     store.sort('myField');
     *     store.sort('myField');
     *
     * Is equivalent to the following:
     *
     *     store.sort('myField', 'ASC');
     *     store.sort('myField', 'DESC');
     *
     * @param {String/Function/Sorter[]} [property] Either the name of a property
     * (such as a field of a `Model` in a `Store`), an array of configurations
     * for `Sorter` instances or just a comparison function.
     * @param {String} [direction] The direction by which to sort the data. This parameter
     * is only valid when `property` is a String, otherwise the second parameter is the
     * `mode`.
     * @param {String} [mode="replace"] Where to put new sorters in the collection. This
     * should be one the following values:
     *
     * - **`replace`** : The new sorter(s) become the sole sorter set for this Sortable.
     *   This is the most useful call mode to programmatically sort by multiple fields.
     *
     * - **`prepend`** : The new sorters are inserted as the primary sorters. The sorter
     *   collection length must be controlled by the developer.
     *
     * - **`multi`** : Similar to **`prepend`** the new sorters are inserted at the front
     *   of the collection of sorters. Following the insertion, however, this mode trims
     *   the sorter collection to enforce the `multiSortLimit` config. This is useful for
     *   implementing intuitive "Sort by this" user interfaces.
     *
     * - **`append`** : The new sorters are added at the end of the collection.
     * @return {Collection} This instance.
     */
    sort (property, direction, mode) {
        let sorters = this.getSorters();

        sorters.addSort.apply(sorters, arguments);

        return this;
    }

    /**
     * This method will sort an array based on the currently configured {@link #sorters}.
     * @param {Array} data The array you want to have sorted.
     * @return {Array} The array you passed after it is sorted.
     */
    sortData (data) {
        return stableSort(data, this.getSortFn());
    }

    /**
     * Sorts the items of the collection using the supplied function. This should only be
     * called for collections that have no `sorters` defined.
     * @param {Function} sortFn The function by which to sort the items.
     */
    sortItems (sortFn) {
        let me = this;

        if (me.sorted) {
            //<debug>
            assert(!sortFn, 'Collections with sorters cannot resorted');
            //</debug>

            sortFn = me.getSortFn();
        }

        me.indices = null;

        me.notify('beforeSort', [ me.sorters ]);  // not getSorters

        if (me.length) {
            stableSort(me.items, sortFn);
        }

        // Even if there's no data, notify interested parties.
        // Eg: Stores must react and fire their refresh and sort events.
        me.notify('sort');
    }

    /**
     * This method is basically the same as the JavaScript Array splice method.
     *
     * Negative indexes are interpreted starting at the end of the collection. That is,
     * a value of -1 indicates the last item, or equivalent to `length - 1`.
     *
     * @param {Number} index The index at which to add or remove items.
     * @param {Number/Object[]} toRemove The number of items to remove or an array of the
     * items to remove.
     * @param {Object/Object[]} [toAdd] The item or items to insert at the given `index`.
     * @param {Object...} [moreItems] Additional items to add.
     */
    splice (index, toRemove, toAdd, ...moreItems) {
        let me = this;
        let autoSort = me.sorted && me.autoSort;
        let map = me.map;
        let items = me.items;
        let length = me.length;
        let isRemoveCount = typeof toRemove === 'number';
        let removeItems = isRemoveCount ? null : me.decodeRemoveItems(toRemove);
        let [begin, end] = clipIndices(length, [ index, isRemoveCount ? toRemove : 0 ],
                                       Clip.COUNT);
        // Determine how many items we might actually remove:
        let removeCount = end - begin;
        let newItems = me.decodeItems(toAdd, moreItems);
        let newCount = newItems ? newItems.length : 0;
        let addItems, newItemsMap, removeMap;
        let insertAt = begin;
        let indices = me.indices || ((newCount || removeItems) ? me.ensureIndices() : null);
        let adds = null;
        let removes = removeCount ? [begin] : null;
        let newKeys = null;
        let source = me.source;
        let chunk, chunkItems, chunks, i, item, itemIndex, k, key, keys, n, duplicates,
            sorters;

        if (source && !source.updating) {
            // Modifying the content of a child collection has to be translated into a
            // change of its source. Because the source has all of the items of the child
            // (but likely at different indices) we can translate "index" and convert a
            // "removeCount" request into a "removeItems" request.
            if (isRemoveCount) {
                removeItems = [];

                for (i = 0; i < removeCount; ++i) {
                    removeItems.push(items[begin + i]);
                }
            }

            if (begin < length) {
                // Map index based on the item at that index since that item will be in
                // the source collection.
                i = source.indexOf(items[begin]);
            }
            else {
                // Map end of this collection to end of the source collection.
                i = source.length;
            }

            // When we react to the source add in onCollectionAdd, we must honor this
            // requested index.
            me.requestedIndex = index;
            source.splice(i, removeItems, newItems);
            delete me.requestedIndex;

            return me;
        }

        // Loop over the newItems because they could already be in the collection or may
        // be replacing items in the collection that just happen to have the same key. In
        // this case, those items must be removed as well. Since we need to call getKey
        // on each newItem to do this we may as well keep those keys for later.
        if (newCount) {
            addItems = newItems;
            newKeys = [];
            newItemsMap = new ExMap();

            // If this collection is sorted we will eventually need to sort addItems so
            // do that now so we can line up the newKeys properly. We optimize for the
            // case where we have no duplicates. It would be more expensive to do this
            // in two passes in an attempt to take advantage of removed duplicates.
            if (autoSort) {
                sorters = me.getSorters();  // spin it up if not yet

                if (newCount > 1) {
                    if (!addItems.$decoded) {
                        newItems = addItems = addItems.slice(0);
                    }

                    me.sortData(addItems);
                }
            }

            for (i = 0; i < newCount; ++i) {
                key = me.getKey(item = newItems[i]);

                if ((k = newItemsMap.get(key)) !== undefined) {
                    // Duplicates in the incoming newItems need to be discarded keeping the
                    // last of the duplicates. We add the index of the last duplicate of
                    // this key to the "duplicates" map.
                    (duplicates || (duplicates = {}))[k] = 1;
                }
                else {
                    // This item's index is outside the remove range, so we need to remove
                    // some extra stuff. Only the first occurrence of a given key in the
                    // newItems needs this processing.
                    itemIndex = indices.get(key);

                    if (itemIndex < begin || end <= itemIndex) {
                        (removes || (removes = [])).push(itemIndex); // might be the first
                    }
                }

                newItemsMap.set(key, i); // track the last index of this key in newItems
                newKeys.push(key); // must correspond 1-to-1 with newItems
            }

            if (duplicates) {
                keys = newKeys;
                addItems = [];
                newKeys = [];
                addItems.$decoded = true;

                for (i = 0; i < newCount; ++i) {
                    if (!duplicates[i]) {
                        item = newItems[i];
                        addItems.push(item);
                        newKeys.push(keys[i]);
                    }
                }

                newCount = addItems.length;
            }

            adds = {
                // at: insertAt, // must fill this in later
                // next: null,  // only set by spliceMerge
                // replaced: null,  // must fill this in later
                items: addItems,
                keys: newKeys
            };
        }

        // If we are given a set of items to remove, map them to their indices.
        for (i = removeItems ? removeItems.length : 0; i-- > 0;) {
            key = me.getKey(removeItems[i]);

            if ((itemIndex = indices.get(key)) !== undefined) {
                // ignore items we don't have (probably due to filtering)
                (removes || (removes = [])).push(itemIndex); // might be the first remove
            }
        }

        if (!adds && !removes) {
            return me;
        }

        me.beginUpdate();

        // Now we that everything we need to remove has its index in the removes array.
        // We start by sorting the array so we can coalesce the index values into chunks
        // or ranges.
        if (removes) {
            chunk = null;
            chunks = [];
            removeMap = new ExMap();

            if (removes.length > 1) {
                removes.sort(numericSortFn);
            }

            // Coalesce the index array into chunks of (index, count) pairs for efficient
            // removal.
            for (i = 0, n = removes.length; i < n; ++i) {
                key = me.getKey(item = items[itemIndex = removes[i]]);

                if (!map.has(key)) {
                    continue;
                }

                // Avoids 2nd loop of removed items but also means we won't process any
                // given item twice (in case of duplicates in removeItems).
                map.delete(key);

                // Consider chunk = { at: 1, items: [ item1, item2 ] }
                //
                //      +---+---+---+---+---+---+
                //      |   | x | x |   |   |   |
                //      +---+---+---+---+---+---+
                //        0   1   2   3   4   5
                //
                // If we are adding an itemIndex > 3 we need a new chunk.
                //
                if (!chunk || itemIndex > (chunk.at + chunkItems.length)) {
                    chunks.push(chunk = {
                        at: itemIndex,
                        items: (chunkItems = []),
                        keys: (keys = []),
                        map: removeMap,
                        next: chunk,
                        replacement: adds
                    });

                    // Point "replaced" at the last chunk
                    if (adds) {
                        adds.replaced = chunk;
                    }
                }

                removeMap.set(key, item);
                chunkItems.push(item);
                keys.push(key);

                if (itemIndex < insertAt - 1) {
                    // If the removal is ahead of the insertion point specified, we need
                    // to move the insertAt backwards.
                    //
                    // Consider the following splice:
                    //
                    //      collection.splice(3, 2, [ { id: 'b' } ]);
                    //
                    //      +---+---+---+---+---+---+
                    //      | a | b | c | x | y | d |
                    //      +---+---+---+---+---+---+
                    //        0   1   2   3   4   5
                    //            ^       ^   ^
                    //            |        \ /
                    //         replace    remove
                    //
                    // The intent is to replace x and y with the new item at index=3. But
                    // since the new item has the same key as the item at index=1, that
                    // item must be replaced. The resulting collection will be:
                    //
                    //      +---+---+---+---+
                    //      | a | c | b | d |
                    //      +---+---+---+---+
                    //        0   1   2   3
                    //
                    --insertAt;
                }

                if (removeCount > 1 && itemIndex === begin) {
                    // To account for the given range to remove we started by putting the
                    // index of the first such item ("begin") in the array. When we find
                    // it in this loop we have to process all of the items and add them
                    // to the current chunk. The following trick allows us to repeat the
                    // loop for each item in the removeCount.
                    //
                    --removeCount; // countdown...
                    removes[i--] = ++begin; // backup and increment begin
                }
            } // for (removes)

            if (adds) {
                adds.at = insertAt; // we have the correct(ed) insertAt now
            }

            // Loop over the chunks in reverse so as to not invalidate index values on
            // earlier chunks.
            for (k = chunks.length; k-- > 0;) {
                chunk = chunks[k];
                i = chunk.at;
                n = chunk.items.length;

                if (i + n < length) {
                    // If we are removing the tail of the collection, we can keep the
                    // indices for the rest of the things... otherwise we need to zap it
                    // and fix up later.
                    me.indices = indices = null;
                }

                me.length = length -= n;
                // We can use splice directly. The IE8 bug which Ext.Array works around
                // only affects *insertion*
                // http://social.msdn.microsoft.com/Forums/en-US/iewebdevelopment/thread/6e946d03-e09f-4b22-a4dd-cd5e276bf05a/
                // Ext.Array.erase(items, i, n);
                items.splice(i, n);

                if (indices) {
                    keys = chunk.keys;

                    for (i = 0; i < n; ++i) {
                        indices.delete(keys[i]);
                    }
                }

                ++me.generation;
                me.notify('remove', [ chunk ]);
            }
        } // if (removes)

        if (adds) {
            if (autoSort && newCount > 1 && length) {
                me.spliceMerge(addItems, newKeys);
            }
            else {
                if (autoSort) {
                    if (newCount > 1) {
                        // We have multiple addItems but we are empty, so just add at 0
                        insertAt = 0;
                        me.indices = indices = null;
                    }
                    else {
                        // If we are adding one item we can position it properly now and
                        // avoid a full sort.
                        insertAt =
                            sorters.findInsertionIndex(adds.items[0], items,
                                                       me.getSortFn(), index);
                    }
                }

                if (insertAt === length) {
                    end = insertAt;

                    // Inser items backwards. This way, when the first item is pushed the
                    // array is sized to as large as we're going to need it to be.
                    for (i = addItems.length - 1; i >= 0; --i) {
                        items[end + i] = addItems[i];
                    }

                    // The indices may have been regenerated, so we need to check if they have been
                    // and update them 
                    indices = me.indices;

                    if (indices) {
                        for (i = 0; i < newCount; ++i) {
                            indices.set(newKeys[i], insertAt + i);
                        }
                    }
                }
                else {
                    // inserting
                    me.indices = null;
                    items.splice(insertAt, 0, ...addItems);
                }

                for (i = 0; i < newCount; ++i) {
                    map.set(newKeys[i], addItems[i]);
                }

                me.length += newCount;
                adds.at = insertAt;
                adds.atItem = insertAt === 0 ? null : items[insertAt - 1];
                ++me.generation;
                me.notify('add', [ adds ]);
            }
        } // if (adds)

        me.endUpdate();

        return me;
    }

    /**
     * This method calls the supplied function `fn` between `beginUpdate` and `endUpdate`
     * calls.
     *
     *      collection.update(function () {
     *          // Perform multiple collection updates...
     *
     *          collection.add(item);
     *          // ...
     *
     *          collection.insert(index, otherItem);
     *          //...
     *
     *          collection.remove(someItem);
     *      });
     *
     * @param {Function} fn The function to call that will modify this collection.
     * @param {Collection} fn.collection This collection.
     * @param {Object} [scope=this] The `this` pointer to use when calling `fn`.
     * @return {Object} Returns the value returned from `fn` (typically `undefined`).
     */
    update (fn, scope) {
        let me = this;

        me.beginUpdate();

        try {
            return fn.call(scope || me, me);
        }
        finally {
            me.endUpdate();
        }
    }

    /**
     * Change the key for an existing item in the collection. If the old key does not
     * exist this call does nothing. Even so, it is highly recommended to *avoid* calling
     * this method for an `item` that is not a member of this collection.
     *
     * @param {Object} item The item whose key has changed. The `item` should be a member
     * of this collection.
     * @param {String} oldKey The old key for the `item`.
     * @param details
     */
    updateKey (item, oldKey, details) {
        let me = this;
        let map = me.map;
        let indices = me.indices;
        let source = me.source;
        let newKey;

        if (source && !source.updating) {
            // If we are being told of the key change and the source has the same idea
            // on keying the item, push the change down instead.
            source.updateKey(item, oldKey);
        }
        else if ((newKey = me.getKey(item)) !== oldKey) {
            // If the key has changed and "item" is the item mapped to the oldKey and
            // there is no collision with an item with the newKey, we can proceed.
            if (map.get(oldKey) === item && !map.has(newKey)) {
                map.delete(oldKey);

                // We need to mark ourselves as updating so that observing collections
                // don't reflect the updateKey back to us (see above check) but this is
                // not really a normal update cycle so we don't call begin/endUpdate.
                me.updating++;

                me.generation++;
                map.set(newKey, item);

                if (indices) {
                    indices.set(newKey, indices.get(oldKey));
                    indices.delete(oldKey);
                }

                me.notify('updateKey', [copy({
                    item: item,
                    newKey: newKey,
                    oldKey: oldKey
                }, details)]);

                me.updating--;
            }
            //<debug>
            else {
                // It may be that the item is (somehow) already in the map using the
                // newKey or that there is no item in the map with the oldKey. These
                // are not errors.

                // There is a different item in the map with the newKey which is an
                // error. To properly handle this, add the item instead.
                assert(!map.has(newKey) || map.get(newKey) === item,
                       'Duplicate newKey "{0}" for item with oldKey "{1}"', newKey, oldKey);

                // There is a different item in the map with the oldKey which is also
                // an error. Do not call this method for items that are not part of
                // the collection.
                assert(!map.has(oldKey) || map.get(oldKey) === item,
                       'Incorrect oldKey "{0}" for item with newKey "{1}"', oldKey, newKey);
            }
            //</debug>
        }
    }

    //-------------------------------------------------------------------------
    // Calls from the source Collection:

    /**
     * This method is called when items are added to the `source` collection. This is
     * equivalent to the `{@link #event!add add}` event but is called before the `add`
     * event is fired.
     * @param {Collection} source The source collection.
     * @param {Object} details The `details` of the `{@link #event!add add}` event.
     * @private
     */
    onCollectionAdd (source, details) {
        let me = this;
        let atItem = details.atItem;
        let items = details.items;
        let requestedIndex = me.requestedIndex;
        let copiedItems, filtered, index, i, item, n;

        // No point determining the index if we're sorted
        if (!me.sorted) {
            // If we have a requestedIndex, it means the add/insert was on our collection, so try
            // use that specified index to do the insertion.
            if (requestedIndex !== undefined) {
                index = requestedIndex;
            }
            else if (atItem) {
                index = me.indexOf(atItem);

                if (index === -1) {
                    // We can't find the reference item in our collection, which means it's probably
                    // filtered out, so we need to search for an appropriate index. Pass the first
                    // item and work back to find
                    index = me.findInsertIndex(items[0]);
                }
                else {
                    // We also have that item in our collection, we need to insert after it,
                    // so increment
                    ++index;
                }
            }
            else {
                // If there was no atItem, must be at the front of the collection.
                // atItem is the item after which the upstream Collection inserted
                // the new item(s) if null, it means at start.
                index = 0;
            }
        }

        if (me.filtered && me.autoFilter) {
            for (i = 0, n = items.length; i < n; ++i) {
                item = items[i];

                if (me.isItemFiltered(item)) {
                    // If we have an item that is filtered out of this collection, we need
                    // to make a copy of the items up to this point.
                    if (!copiedItems) {
                        copiedItems = items.slice(0, i);
                    }

                    (filtered || (filtered = [])).push(item);
                }
                else if (copiedItems) {
                    // If we have a itemCopy of the items, we need to put this item in the
                    // copy since it is not being filtered out.
                    copiedItems.push(item);
                }
            }
        }

        me.splice((index < 0) ? me.length : index, 0, copiedItems || items);

        if (filtered) {
            // Private for now. We may want to let any observers know we just
            // added these items but got filtered out
            me.notify('filterAdd', [filtered]);
        }
    }

    /**
     * This method is called when an item is modified in the `source` collection. This is
     * equivalent to the `{@link #event!beforeItemChange beforeItemChange}` event but is
     * called before the `beforeItemChange` event is fired.
     * @param {Collection} source The source collection.
     * @param {Object} details The `details` of the
     * `{@link #event!beforeItemChange beforeItemChange}` event.
     * @private
     */
    onCollectionBeforeItemChange (source, details) {
        // Drop the next updateKey event
        this.onCollectionUpdateKey = null;

        // If this flag is true it means we're inside itemchanged, so this will be fired
        // shortly, don't fire it twice
        if (!this.sourceUpdating) {
            this.notify('beforeItemChange', [details]);
        }
    }

    /**
     * This method is called when the `source` collection starts updating. This is
     * equivalent to the `{@link #event!beginUpdate beginUpdate}` event but is called
     * before the `beginUpdate` event is fired.
     * @param {Collection} source The source collection.
     * @private
     */
    onCollectionBeginUpdate () {
        this.beginUpdate();
    }

    /**
     * This method is called when the `source` collection finishes updating. This is
     * equivalent to the `{@link #event!endUpdate endUpdate}` event but is called before
     * the `endUpdate` event is fired.
     * @param {Collection} source The source collection.
     * @private
     */
    onCollectionEndUpdate () {
        this.endUpdate();
    }

    /**
     * This method is called when an item is modified in the `source` collection. This is
     * equivalent to the `{@link #event!itemChange itemChange}` event but is called before
     * the `itemChange` event is fired.
     * @param {Collection} source The source collection.
     * @param {Object} details The `details` of the `{@link #event!itemChange itemChange}`
     * event.
     * @private
     */
    onCollectionItemChange (source, details) {
        // Restore updateKey events
        delete this.onCollectionUpdateKey;

        this.itemChanged(details.item, details.modified, details.oldKey, details.meta);
    }

    onCollectionFilteredItemChange () {
        delete this.onCollectionUpdateKey;
    }

    /**
     * This method is called when the `source` collection refreshes. This is equivalent to
     * the `{@link #event!refresh refresh}` event but is called before the `refresh` event
     * is fired.
     * @param {Collection} source The source collection.
     * @private
     */
    onCollectionRefresh (source) {
        let me = this;
        let map = new ExMap();
        let indices = new ExMap();
        let items = me.items;
        let sourceItems = source.items;
        let filterFn = me.getFilterFn();
        let i, item, key, length, newLength;

        // Perform a non-destructive filter of the source's items array into the
        // *existing* items array because stores give away references to this
        // collection's items array.
        if (me.filtered && me.autoFilter) {
            for (i = 0, newLength = 0, length = sourceItems.length; i < length; i++) {
                if (filterFn(sourceItems[i])) {
                    items[newLength++] = sourceItems[i];
                }
            }

            items.length = newLength;
        }
        else {
            items.length = 0;
            items.push(...sourceItems);
        }

        if (me.sorted) {
            me.sortData(items);
        }

        me.length = length = items.length;
        me.map = map;
        me.indices = indices;

        for (i = 0; i < length; ++i) {
            key = me.getKey(item = items[i]);
            map.set(key, item);
            indices.set(key, i);
        }

        ++me.generation;

        me.notify('refresh');
    }

    /**
     * This method is called when items are removed from the `source` collection. This is
     * equivalent to the `{@link #event!remove remove}` event but is called before the
     * `remove` event is fired.
     * @param {Collection} source The source collection.
     * @param {Object} details The `details` of the `remove` event.
     * @private
     */
    onCollectionRemove (source, details) {
        this.splice(0, details.items);
    }

    /**
     * @method onCollectionSort
     * This method is called when the `source` collection is sorted. This is equivalent to
     * the `{@link #event!sort sort}` event but is called before the `sort` event is fired.
     * @param {Collection} source The source collection.
     * @private
     */
    // onCollectionSort (source) {
    //    we ignore sorting of the source collection because we prefer our own order.
    // }

    /**
     * This method is called when key changes in the `source` collection. This is
     * equivalent to the `updateKey` event but is called before the `updateKey` event is
     * fired.
     * @param {Collection} source The source collection.
     * @param {Object} details The `details` of the `updateKey` event.
     * @private
     */
    onCollectionUpdateKey (source, details) {
        this.updateKey(details.item, details.oldKey, details);
    }

    //-------------------------------------------------------------------------
    // Private

    static _eventToMethodMap = {
        add: 'onCollectionAdd',
        beforeItemChange: 'onCollectionBeforeItemChange',
        beginUpdate: 'onCollectionBeginUpdate',
        endUpdate: 'onCollectionEndUpdate',
        itemChange: 'onCollectionItemChange',
        filteredItemChange: 'onCollectionFilteredItemChange',
        refresh: 'onCollectionRefresh',
        remove: 'onCollectionRemove',
        beforeSort: 'beforeCollectionSort',
        sort: 'onCollectionSort',
        filter: 'onCollectionFilter',
        filterAdd: 'onCollectionFilterAdd',
        updateKey: 'onCollectionUpdateKey'
    };

    /**
     * Adds an observing object to this collection. Observers are given first view of all
     * events that we may fire. For any event an observer may implement a method whose
     * name starts with "onCollection" to receive the event. The `{@link #event!add add}`
     * event for example would be passed to `"onCollectionAdd"`.
     *
     * The only restriction to observers is that they are not allowed to add or remove
     * observers from inside these methods.
     *
     * @param {Collection} observer The observer instance.
     * @private
     */
    addObserver (observer) {
        let me = this;
        let observers = me.observers || (me.observers = []);

        //<debug>
        assert(!observers.includes(observer), 'Observer already added');
        //</debug>

        // if we're in the middle of notifying, we need to clone the observers
        if (me.notifying) {
            me.observers = observers = observers.slice(0);
        }

        observers.push(observer);

        if (observers.length > 1) {
            // Allow observers to be inserted with a priority.
            // For example GroupCollections must react before views.
            observers.sort(me.prioritySortFn);
        }
    }

    createSortFn () {
        let me = this;
        let grouper = me.grouper;
        let sorters = me.sorters;
        let sorterFn = sorters ? sorters.getSortFn() : null;

        if (!grouper) {
            return sorterFn;
        }

        sorterFn = sorterFn || 0;

        return (lhs, rhs) => grouper.sort(lhs, rhs) || (sorterFn && sorterFn(lhs, rhs));
    }

    decodeItemArgs (item, moreItems) {
        let cloned, items;

        if (moreItems && moreItems.length) {
            items = item ? arrayify(item).concat(moreItems) : moreItems;
            // If we have "moreItems" then that is always an array from a "...args":
            cloned = true;
        }
        else {
            items = arrayify(item);  // may be null
            cloned = item !== items;
        }

        return [ items, cloned ];
    }

    /**
     * Returns the items array on which to operate. This is called to handle the two
     * possible forms used by various methods that accept items:
     *
     *      collection.add(item1, item2, item3);
     *      collection.add([ item1, item2, item3 ]);
     *
     * Things get interesting when other arguments are involved:
     *
     *      collection.insert(index, item1, item2, item3);
     *      collection.insert(index, [ item1, item2, item3 ]);
     *
     * As well as below because we have to distinguish the one item from the array:
     *
     *      collection.add(item);
     *      collection.insert(index, item);
     *
     * @param {Object} item The item or items to decode..
     * @param {Object[]} [moreItems] Additional items.
     * @return {Object[]} The array of items on which to operate.
     * @protected
     */
    decodeItems (item, moreItems) {
        let me = this;
        let decoder = me.decoder;
        let [ items, cloned ] = me.decodeItemArgs(item, moreItems);
        let i;
        
        if (!items || !items.length) {
            items = NOITEMS;
        }
        else if (!items.$decoded && decoder) {
            items = cloned ? items : items.slice(0);
            items.$decoded = true;
            
            for (i = items.length; i-- > 0; /* empty */) {
                if ((items[i] = decoder.call(me, items[i])) === false) {
                    items.splice(i, 1);
                }
            }
        }
        
        return items;
    }
    
    /**
     * This method is an alias for `decodeItems` but is called when items are being
     * removed. If a `decoder` is provided it may be necessary to also override this
     * method to achieve symmetry between adding and removing items. This is the case
     * for `FilterCollection' and `SorterCollection' for example.
     * @protected
     */
    decodeRemoveItems (item, moreItems) {
        return this.decodeItems(item, moreItems);
    }

    /**
     * Returns the map of key to index for all items in this collection. This method will
     * lazily populate this map on request. This map is maintained when doing so does not
     * involve too much overhead. When this threshold is cross, the index map is discarded
     * and must be rebuilt by calling this method.
     *
     * @return {Object}
     * @private
     */
    ensureIndices () {
        let me = this;
        let indices = me.indices;
        let items = me.items;
        let n = items.length;
        let i, key;

        if (!indices) {
            me.indices = indices = new ExMap();
            ++me.indexRebuilds;

            for (i = 0; i < n; ++i) {
                key = me.getKey(items[i]);
                indices.set(key, i);
            }
        }

        return indices;
    }

    /**
     * Can be called to find the insertion index of a passed object in this collection.
     * Or can be passed an items array to search in, and may be passed a comparator
     * @private
     */
    findInsertionIndex (item, items, comparatorFn, index) {
        comparatorFn = comparatorFn || this.getSortFn();
        
        return findInsertionIndex(item, items || this.items, comparatorFn, index);
    }

    findInsertIndex (item) {
        let source = this.source;
        let sourceItems = source.items;
        let i = source.indexOf(item) - 1;
        let sourceItem, index;

        for (/* empty */; i > -1; --i) {
            sourceItem = sourceItems[i];
            index = this.indexOf(sourceItem);

            if (index > -1) {
                return index + 1;
            }
        }

        // If we get here we didn't find any item in the parent before us, so insert
        // at the start
        return 0;
    }

    /**
     * This method wraps all fired events and gives observers first view of the change.
     *
     * @param {String} eventName The name of the event to fire.
     * @param {Array} [args] The event arguments. This collection instance is inserted at
     * the front of this array if there is any receiver for the notification.
     *
     * @private
     */
    notify (eventName, args) {
        let me = this;
        let observers = me.observers;
        let methodName = Collection._eventToMethodMap[eventName];
        let added = 0;
        let method, observer;

        args = args || [];

        if (observers && methodName) {
            me.notifying = true;

            for (observer of observers) {
                method = observer[methodName];

                if (method) {
                    if (!added++) { // jshint ignore:line
                        args.unshift(me); // put this Collection as the first argument
                    }

                    method.apply(observer, args);
                }
            }

            me.notifying = false;
        }
        
        // During construction there's no need to fire an event
        if (!me.constructing) {
            if (!added) {
                args.unshift(me); // put this Collection as the first argument
            }

            me.fireEventArgs(eventName, args);
        }
    }

    onEndUpdateFilters (filters) {
        let me = this;
        let was = me.filtered;
        let is = !!filters && (filters.getFilterCount() > 0); // booleanize filters

        if (was || is) {
            me.filtered = is;
            me.onFilterChange(filters);
        }
    }

    onEndUpdateSorters (sorters) {
        let me = this;
        let was = me.sorted;
        let is = (me.grouped && me.autoGroup) || (sorters && sorters.length > 0);

        if (was || is) {
            // ensure flag property is a boolean.
            // sorters && (sorters.length > 0) may evaluate to null
            me.sorted = !!is;
            me.onSortChange(sorters);
        }
    }

    /**
     * Called after a change of the filter is complete.
     *
     * For example:
     *
     *      onFilterChange (filters) {
     *          if (this.filtered) {
     *              // process filters
     *          } else {
     *              // no filters present
     *          }
     *      }
     *
     * @param {FilterCollection} filters The filters collection.
     */
    onFilterChange (filters) {
        let me = this;
        let source = me.source;
        let extraKeys, newKeys, key;

        if (source) {
            if (source.destroyed) {
                return;
            }

            if (source.length || me.length) {
                // if both us and the source are empty then we can skip this
                me.onCollectionRefresh(source);
            }
        }
        else {
            // In this method, we have changed the filter but since we don't start with
            // any and we create the source collection as needed that means we are getting
            // our first filter.
            extraKeys = me.extraKeys;

            if (extraKeys) {
                newKeys = {};

                for (key in extraKeys) {
                    newKeys[key] = extraKeys[key].clone();
                }
            }

            source = new Collection({
                keyFn: me.getKey,
                extraKeys: newKeys,
                rootProperty: me.rootProperty
            });

            if (me.length) {
                source.add(me.items);
            }

            me.source = me.autoSource = source;
        }

        me.notify('filter');
    }

    /**
     * Called after a change of the sort is complete.
     *
     * For example:
     *
     *      onSortChange: function (sorters) {
     *          if (this.sorted) {
     *              // process sorters
     *          } else {
     *              // no sorters present
     *          }
     *      }
     *
     * @param {SorterCollection} sorters The sorters collection.
     * @method
     */
    onSortChange () {
        if (this.sorted) {
            this.sortItems();
        }
    }
    
    onSorterChange () {
        this._sortFn = null;
    }

    prioritySortFn (o1, o2) {
        return (o1.observerPriority || 0) - (o2.observerPriority || 0);
    }

    /**
     * Removes an observing object to this collection. See `addObserver` for details.
     *
     * @param {Collection} observer The observer instance.
     * @private
     */
    removeObserver (observer) {
        remove(this.observers, observer);
    }

    /**
     * This method is what you might find in the core of a merge sort. We have an items
     * array that is sorted so we sort the newItems and merge the two sorted arrays. In
     * the general case, newItems will be no larger than all items so sorting it will be
     * faster than simply concatenating the arrays and calling sort on it.
     *
     * We take advantage of the nature of this process to generate add events as ranges.
     *
     * @param {Object[]} newItems
     * @param {Object[]} newKeys
     * @private
     */
    spliceMerge (newItems, newKeys) {
        let me = this;
        let map = me.map;
        let newLength = newItems.length;
        let oldIndex = 0;
        let oldItems = me.items;
        let oldLength = oldItems.length;
        let adds = [];
        let count = 0;
        let items = [];
        // accounts for grouper and sorter(s):
        let sortFn = me.getSortFn();
        let addItems, end, i, newItem, oldItem, newIndex;

        me.items = items;

        //
        //  oldItems
        //      +----+----+----+----+
        //      | 15 | 25 | 35 | 45 |
        //      +----+----+----+----+
        //        0    1    2    3
        //
        //  newItems
        //      +----+----+----+----+----+----+
        //      | 10 | 11 | 20 | 21 | 50 | 51 |
        //      +----+----+----+----+----+----+
        //        0    1    2    3    4    5
        //

        for (newIndex = 0; newIndex < newLength; newIndex = end) {
            newItem = newItems[newIndex];

            // Flush out any oldItems that are <= newItem
            for (; oldIndex < oldLength; ++oldIndex) {
                // Consider above arrays...
                //  at newIndex == 0 this loop sets oldItem but breaks immediately
                //  at newIndex == 2 this loop pushes 15 and breaks w/oldIndex=1
                //  at newIndex == 4 this loop pushes 25, 35 and 45 and breaks w/oldIndex=4
                if (sortFn(newItem, oldItem = oldItems[oldIndex]) < 0) {
                    break;
                }

                items.push(oldItem);
            }

            if (oldIndex === oldLength) {
                // Consider above arrays...
                //  at newIndex == 0 we won't come in here (oldIndex == 0)
                //  at newIndex == 2 we won't come in here (oldIndex == 1)
                //  at newIndex == 4 we come here (oldIndex == 4), push 50 & 51 and break
                adds[count++] = {
                    at: items.length,
                    itemAt: items[items.length - 1],
                    items: (addItems = [])
                };

                if (count > 1) {
                    adds[count - 2].next = adds[count - 1];
                }

                for (; newIndex < newLength; ++newIndex) {
                    addItems.push(newItem = newItems[newIndex]);
                    items.push(newItem);
                }
                
                break;
            }

            // else oldItem is the item from oldItems that is > newItem

            // Consider above arrays...
            //  at newIndex == 0 we will push 10
            //  at newIndex == 2 we will push 20
            adds[count++] = {
                at: items.length,
                itemAt: items[items.length - 1],
                items: (addItems = [ newItem ])
            };

            if (count > 1) {
                adds[count - 2].next = adds[count - 1];
            }

            items.push(newItem);

            for (end = newIndex + 1; end < newLength; ++end) {
                // Consider above arrays...
                //  at newIndex == 0 this loop pushes 11 then breaks w/end == 2
                //  at newIndex == 2 this loop pushes 21 the breaks w/end == 4
                if (sortFn(newItem = newItems[end], oldItem) >= 0) {
                    break;
                }

                items.push(newItem);
                addItems.push(newItem);
            }

            // if oldItems had 55 as its final element, the above loop would have pushed
            // all of newItems so the outer for loop would then fall out
        }

        for (; oldIndex < oldLength; ++oldIndex) {
            // In the above example, we won't come in here, but if you imagine a 55 in
            // oldItems we would have oldIndex == 4 and oldLength == 5
            items.push(oldItems[oldIndex]);
        }

        for (i = 0; i < newLength; ++i) {
            map.set(newKeys[i], newItems[i]);
        }

        me.length = items.length;
        ++me.generation;

        me.indices = null;

        // Tell users of the adds in increasing index order.
        for (i = 0; i < count; ++i) {
            me.notify('add', [ adds[i] ]);
        }
    }

    /**
     * @event add
     * Fires after items have been added to the collection.
     *
     * All `{@link #event!add add}` and `{@link #event!remove remove}` events occur between
     * `{@link #event!beginUpdate beginUpdate}` and `{@link #event!endUpdate endUpdate}`
     * events so it is best to do only the minimal amount of work in response to these
     * events and move the more expensive side-effects to an `endUpdate` listener.
     *
     * @param {Collection} collection The collection being modified.
     *
     * @param {Object} details An object describing the addition.
     *
     * @param {Number} details.at The index in the collection where the add occurred.
     *
     * @param {Object} details.atItem The item after which the new items were inserted or
     * `null` if at the beginning of the collection.
     * 
     * @param {Object[]} details.items The items that are now added to the collection.
     *
     * @param {Array} [details.keys] If available this array holds the keys (extracted by
     * `getKey`) for each item in the `items` array.
     *
     * @param {Object} [details.next] If more `{@link #event!add add}` events are in queue
     * to be delivered this is a reference to the `details` instance for the next
     * `{@link #event!add add}` event. This will only be the case when the collection is
     * sorted as the new items often need to be inserted at multiple locations to maintain
     * the sort. In this case, all of the new items have already been added not just those
     * described by the first `{@link #event!add add}` event.
     *
     * @param {Object} [details.replaced] If this addition has a corresponding set of
     * `{@link #event!remove remove}` events this reference holds the `details` object for
     * the first `remove` event. That `details` object may have a `next` property if there
     * are multiple associated `remove` events.
     */

    /**
     * @event beginUpdate
     * Fired before changes are made to the collection. This event fires when the
     * `beginUpdate` method is called and the counter it manages transitions from 0 to 1.
     *
     * All `{@link #event!add add}` and `{@link #event!remove remove}` events occur between
     * `{@link #event!beginUpdate beginUpdate}` and `{@link #event!endUpdate endUpdate}`
     * events so it is best to do only the minimal amount of work in response to these
     * events and move the more expensive side-effects to an `endUpdate` listener.
     *
     * @param {Collection} collection The collection being modified.
     */

    /**
     * @event endUpdate
     * Fired after changes are made to the collection. This event fires when the `endUpdate`
     * method is called and the counter it manages transitions from 1 to 0.
     *
     * All `{@link #event!add add}` and `{@link #event!remove remove}` events occur between
     * `{@link #event!beginUpdate beginUpdate}` and `{@link #event!endUpdate endUpdate}`
     * events so it is best to do only the minimal amount of work in response to these
     * events and move the more expensive side-effects to an `endUpdate` listener.
     *
     * @param {Collection} collection The collection being modified.
     */

    /**
     * @event beforeItemChange
     * This event fires before an item change is reflected in the collection. This event
     * is always followed by an `itemChange` event and, depending on the change, possibly
     * an `add`, `remove` and/or `updateKey` event.
     *
     * @param {Collection} collection The collection being modified.
     *
     * @param {Object} details An object describing the change.
     *
     * @param {Object} details.item The item that has changed.
     *
     * @param {String} details.key The key of the item that has changed.
     *
     * @param {Boolean} details.filterChanged This is `true` if the filter status of the
     * `item` has changed. That is, the item was previously filtered out and is no longer
     * or the opposite.
     *
     * @param {Group} details.group The group containing the `item`. **(since 6.5.1)**
     *
     * @param {Boolean} details.groupChanged This is `true` if the item is moving between
     * groups. See also the `group` and `oldGroup` properties. **(since 6.5.1)**
     *
     * @param {Boolean} details.keyChanged This is `true` if the item has changed keys. If
     * so, check `oldKey` for the old key. An `updateKey` event will follow.
     *
     * @param {Boolean} details.indexChanged This is `true` if the item needs to move to
     * a new index in the collection due to sorting. The index can be seen in `index`.
     * The old index is in `oldIndex`.
     *
     * @param {String[]} [details.modified] If known this property holds the array of names
     * of the modified properties of the item.
     *
     * @param {Boolean} [details.filtered] This value is `true` if the item will be filtered
     * out of the collection.
     *
     * @param {Number} [details.index] The new index in the collection for the item if
     * the item is being moved (see `indexChanged`). If the item is being removed due to
     * filtering, this will be -1.
     *
     * @param {Group} details.oldGroup The group that previously contained the
     * `item`. **(since 6.5.1)**
     *
     * @param {Number} [details.oldIndex] The old index in the collection for the item if
     * the item is being moved (see `indexChanged`). If the item was being removed due to
     * filtering, this will be -1.
     *
     * @param {Object} [details.oldKey] The old key for the `item` if the item's key has
     * changed (see `keyChanged`).
     *
     * @param {Boolean} [details.wasFiltered] This value is `true` if the item was filtered
     * out of the collection.
     */

    /**
     * @event itemChange
     * This event fires after an item change is reflected in the collection. This event
     * always follows a `beforeItemChange` event and its corresponding `add`, `remove`
     * and/or `updateKey` events.
     *
     * @param {Collection} collection The collection being modified.
     *
     * @param {Object} details An object describing the change.
     *
     * @param {Object} details.item The item that has changed.
     *
     * @param {String} details.key The key of the item that has changed.
     *
     * @param {Boolean} details.filterChanged This is `true` if the filter status of the
     * `item` has changed. That is, the item was previously filtered out and is no longer
     * or the opposite.
     *
     * @param {Group} details.group The group containing the `item`. **(since 6.5.1)**
     *
     * @param {Boolean} details.groupChanged This is `true` if the item is moving between
     * groups. See also the `group` and `oldGroup` properties. **(since 6.5.1)**
     *
     * @param {Object} details.keyChanged This is `true` if the item has changed keys. If
     * so, check `oldKey` for the old key. An `updateKey` event will have been sent.
     *
     * @param {Boolean} details.indexChanged This is `true` if the item was moved to a
     * new index in the collection due to sorting. The index can be seen in `index`.
     * The old index is in `oldIndex`.
     *
     * @param {String[]} [details.modified] If known this property holds the array of names
     * of the modified properties of the item.
     *
     * @param {Boolean} [details.filtered] This value is `true` if the item is filtered
     * out of the collection.
     *
     * @param {Number} [details.index] The new index in the collection for the item if
     * the item has been moved (see `indexChanged`). If the item is removed due to
     * filtering, this will be -1.
     *
     * @param {Group} details.oldGroup The group that previously contained the
     * `item`. **(since 6.5.1)**
     *
     * @param {Number} [details.oldIndex] The old index in the collection for the item if
     * the item has been moved (see `indexChanged`). If the item was being removed due to
     * filtering, this will be -1.
     *
     * @param {Object} [details.oldKey] The old key for the `item` if the item's key has
     * changed (see `keyChanged`).
     *
     * @param {Boolean} [details.wasFiltered] This value is `true` if the item was filtered
     * out of the collection.
     */

    /**
     * @event refresh
     * This event fires when the collection has changed entirely. This event is fired in
     * cases where the collection's filter is updated or the items are sorted. While the
     * items previously in the collection may remain the same, the order at a minimum has
     * changed in ways that cannot be simply translated to other events.
     *
     * @param {Collection} collection The collection being modified.
     */

    /**
     * @event remove
     * Fires after items have been removed from the collection. Some properties of this
     * object may not be present if calculating them is deemed too expensive. These are
     * marked as "optional".
     *
     * All `{@link #event!add add}` and `{@link #event!remove remove}` events occur between
     * `{@link #event!beginUpdate beginUpdate}` and `{@link #event!endUpdate endUpdate}`
     * events so it is best to do only the minimal amount of work in response to these
     * events and move the more expensive side-effects to an `endUpdate` listener.
     *
     * @param {Collection} collection The collection being modified.
     *
     * @param {Object} details An object describing the removal.
     *
     * @param {Number} details.at The index in the collection where the removal occurred.
     *
     * @param {Object[]} details.items The items that are now removed from the collection.
     *
     * @param {Array} [details.keys] If available this array holds the keys (extracted by
     * `getKey`) for each item in the `items` array.
     *
     * @param {Object} [details.map] If available this is a map keyed by the key of each
     * item in the `items` array. This will often contain all of the items being removed
     * and not just the items in the range described by this event. The value held in this
     * map is the item.
     *
     * @param {Object} [details.next] If more `{@link #event!remove remove}` events are in
     * queue to be delivered this is a reference to the `details` instance for the next
     * remove event.
     *
     * @param {Object} [details.replacement] If this removal has a corresponding
     * `{@link #event!add add}` taking place this reference holds the `details` object for
     * that `add` event. If the collection is sorted, the new items are pre-sorted but the
     * `at` property for the `replacement` will **not** be correct. The new items will be
     * added in one or more chunks at their proper index.
     */

    /**
     * @event sort
     * This event fires after the contents of the collection have been sorted.
     *
     * @param {Collection} collection The collection being sorted.
     */
    
    /**
     * @event beforeSort
     * @private
     * This event fires before the contents of the collection have been sorted.
     *
     * @param {Collection} collection The collection being sorted.
     * @param {Sorter[]} sorters Array of sorters applied to the Collection.
     */

    /**
     * @event updateKey
     * Fires after the key for an item has changed.
     *
     * @param {Collection} collection The collection being modified.
     *
     * @param {Object} details An object describing the update.
     *
     * @param {Object} details.item The item whose key has changed.
     *
     * @param {Object} details.newKey The new key for the `item`.
     *
     * @param {Object} details.oldKey The old key for the `item`.
     */

    /**
     * @method average
     * Averages property values from some or all of the items in this collection.
     *
     * @param {String} property The name of the property to average from each item.
     * @param {Number} [begin] The index of the first item to include in the average.
     * @param {Number} [end] The index at which to stop averaging `items`. The item at
     * this index will *not* be included in the average.
     * @return {Object} The result of averaging the specified property from the indicated
     * items.
     */
    
    /**
     * @method averageByGroup
     * See {@link #average}. The result is partitioned by group.
     *
     * @param {String} property The name of the property to average from each item.
     * @return {Object} The result of {@link #average}, partitioned by group. See
     * {@link #aggregateByGroup}.
     */

    /**
     * @method bounds
     * Determines the minimum and maximum values for the specified property over some or
     * all of the items in this collection.
     *
     * @param {String} property The name of the property from each item.
     * @param {Number} [begin] The index of the first item to include in the bounds.
     * @param {Number} [end] The index at which to stop in `items`. The item at this index
     * will *not* be included in the bounds.
     * @return {Array} An array `[min, max]` with the minimum and maximum of the specified
     * property.
     */
    
    /**
     * @method boundsByGroup
     * See {@link #bounds}. The result is partitioned by group.
     *
     * @param {String} property The name of the property from each item.
     * @return {Object} The result of {@link #bounds}, partitioned by group. See
     * {@link #aggregateByGroup}.
     */
    
    /**
     * @method count
     * Determines the number of items in the collection.
     * 
     * @return {Number} The number of items.
     */
    
    /**
     * @method countByGroup
     * See {@link #count}. The result is partitioned by group.
     *
     * @return {Object} The result of {@link #count}, partitioned by group. See
     * {@link #aggregateByGroup}.
     */

    /**
     * @method extremes
     * Finds the items with the minimum and maximum for the specified property over some
     * or all of the items in this collection.
     *
     * @param {String} property The name of the property from each item.
     * @param {Number} [begin] The index of the first item to include.
     * @param {Number} [end] The index at which to stop in `items`. The item at this index
     * will *not* be included.
     * @return {Array} An array `[minItem, maxItem]` with the items that have the minimum
     * and maximum of the specified property.
     */
    
    /**
     * @method extremesByGroup
     * See {@link #extremes}. The result is partitioned by group.
     *
     * @param {String} property The name of the property from each item.
     * @return {Object} The result of {@link #extremes}, partitioned by group. See
     * {@link #aggregateByGroup}.
     */

    /**
     * @method max
     * Determines the maximum value for the specified property over some or all of the
     * items in this collection.
     *
     * @param {String} property The name of the property from each item.
     * @param {Number} [begin] The index of the first item to include in the maximum.
     * @param {Number} [end] The index at which to stop in `items`. The item at this index
     * will *not* be included in the maximum.
     * @return {Object} The maximum of the specified property from the indicated items.
     */
    
    /**
     * @method maxByGroup
     * See {@link #max}. The result is partitioned by group.
     *
     * @param {String} property The name of the property from each item.
     * @return {Object} The result of {@link #max}, partitioned by group. See
     * {@link #aggregateByGroup}.
     */

    /**
     * @method maxItem
     * Finds the item with the maximum value for the specified property over some or all
     * of the items in this collection.
     *
     * @param {String} property The name of the property from each item.
     * @param {Number} [begin] The index of the first item to include in the maximum.
     * @param {Number} [end] The index at which to stop in `items`. The item at this index
     * will *not* be included in the maximum.
     * @return {Object} The item with the maximum of the specified property from the
     * indicated items.
     */
    
    /**
     * @method maxItemByGroup
     * See {@link #maxItem}. The result is partitioned by group.
     *
     * @param {String} property The name of the property from each item.
     * @return {Object} The result of {@link #maxItem}, partitioned by group. See
     * {@link #aggregateByGroup}.
     */

    /**
     * @method min
     * Determines the minimum value for the specified property over some or all of the
     * items in this collection.
     *
     * @param {String} property The name of the property from each item.
     * @param {Number} [begin] The index of the first item to include in the minimum.
     * @param {Number} [end] The index at which to stop in `items`. The item at this index
     * will *not* be included in the minimum.
     * @return {Object} The minimum of the specified property from the indicated items.
     */
    
    /**
     * @method minByGroup
     * See {@link #min}. The result is partitioned by group.
     *
     * @param {String} property The name of the property from each item.
     * @return {Object} The result of {@link #min}, partitioned by group. See
     * {@link #aggregateByGroup}.
     */

    /**
     * @method minItem
     * Finds the item with the minimum value for the specified property over some or all
     * of the items in this collection.
     *
     * @param {String} property The name of the property from each item.
     * @param {Number} [begin] The index of the first item to include in the minimum.
     * @param {Number} [end] The index at which to stop in `items`. The item at this index
     * will *not* be included in the minimum.
     * @return {Object} The item with the minimum of the specified property from the
     * indicated items.
     */
    
    /**
     * @method minItemByGroup
     * See {@link #minItem}. The result is partitioned by group.
     *
     * @param {String} property The name of the property from each item.
     * @return {Object} The result of {@link #minItem}, partitioned by group. See
     * {@link #aggregateByGroup}.
     */

    /**
     * @method sum
     * Sums property values from some or all of the items in this collection.
     *
     * @param {String} property The name of the property to sum from each item.
     * @param {Number} [begin] The index of the first item to include in the sum.
     * @param {Number} [end] The index at which to stop summing `items`. The item at this
     * index will *not* be included in the sum.
     * @return {Object} The result of summing the specified property from the indicated
     * items.
     */
    
    /**
     * @method sumByGroup
     * See {@link #sum}. The result is partitioned by group.
     *
     * @param {String} property The name of the property to sum from each item.
     * @return {Object} The result of {@link #sum}, partitioned by group. See
     * {@link #aggregateByGroup}.
     */
}

(function () {
    let prototype = Collection.prototype;
    
    Object.keys(prototype._aggregators).forEach(name => {
        // forEach gives us a unique closure on name for the 2 functions below
        defProp(prototype, name, function (property, begin, end) {
            return this.aggregate(property, name, begin, end);
        }, 'cw');

        defProp(prototype, name + 'ByGroup', function (property) {
            return this.aggregateByGroup(property, name);
        }, 'cw');
    });
    
    // IIFE to dump temp variables
})();

export { Collection };
