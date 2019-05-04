import {
    //<debug>
    assert,
    //</debug>

    Base, Factoryable, Watchable,

    define, config, copy, EMPTY, is
} from '../../../extjs-core/src';

import { Identifiable } from '../../../extjs-util/src/mixins';

import { Range } from './Range';
import { Schema } from '../schema/Schema';
import { Grouper } from '../../../extjs-util/src/collection/Grouper';

/**
 * AbstractStore is a superclass of {@link ProxyStore} and {@link ChainedStore}.
 * It's never used directly, but offers a set of methods used by both of those subclasses.
 *
 * Unless you need to make a whole new type of Store, see {@link Store} instead.
 */
@define({
    mixins: [
        Factoryable,
        Identifiable
    ],

    configurable: 'open',

    factory: {
        defaultType: 'store',
        type: 'store'
    },
    
    prototype: {
        /**
         * @property {Number} currentPage
         * The page that the Store has most recently loaded
         * (see {@link Store#loadPage loadPage})
         */
        currentPage: 1,
    
        /**
         * @property {Boolean} _loading
         * Derived classes update this property when this store is loading via its Proxy.
         * @private
         */
        _loading: false,
        
        /**
         * @property {Boolean} synchronous
         * This is `true` if this store's proxy returns results synchronously.
         * @private
         */
        synchronous: false,

        /**
         * @property {Number} updating
         * A counter that is increased by `beginUpdate` and decreased by `endUpdate`. When
         * this transitions from 0 to 1 the `{@link #event!beginupdate beginupdate}` event
         * is fired. When it transitions back from 1 to 0 the
         * `{@link #event!endupdate endupdate}` event is fired.
         * @readonly
         */
        updating: 0,

        _metaProperties: {
            count: 'size',
            first: 'first',
            last: 'last',
            loading: 'loading',
            size: 'size',
            totalCount: 'totalSize',
            totalSize: 'totalSize'
        }
    }
})
class AbstractStore extends Watchable {
    /**
     * @property {Boolean} loaded
     * This property is `true` if this Store has been loaded.
     */

    /**
     * @property {Boolean/String} loading
     * This property is truthy if a load request has been made but the result has not yet
     * arrived. Loading starts when the {@link #method!load load} method is called.
     * 
     * For `ProxyStore`-derived stores, the `load` method is `buffered`, however, to allow
     * multiple local changes to filters, sorters and the like to occur before the actual
     * server request is sent. In this state, this property has the value `'pending'`. Once
     * the short buffer delay has expired and the actual network request is made, this
     * property will be `true`.
     */

    /**
     * @cfg {Filter[]} filters
     * Array of {@link Filter Filters} for this store. Can also be passed array of
     * functions which will be used as the {@link Filter#filterFn filterFn} config
     * for filters:
     *
     *     filters: [
     *         function (item) {
     *             return item.weight > 0;
     *         }
     *     ]
     *
     * Individual filters can be specified as an `Filter` instance, a config
     * object for `Filter` or simply a function that will be wrapped in a
     * instance with its {@link Filter#filterFn filterFn} set.
     *
     * For fine grain control of the filters collection, call `getFilters` to return
     * the `Collection` instance that holds this store's filters.
     *
     *      var filters = store.getFilters(); // an FilterCollection
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
     * Any changes to the `filters` collection will cause this store to adjust
     * its items accordingly.
     */
    @config
    filters = null;

    /**
     * @cfg {Boolean} autoDestroy
     * Set to `true` when a store is used by only one owner and should be destroyed by that
     * owner when it is destroyed.
     */
    @config
    autoDestroy = null;

    /**
     * @cfg {Boolean} statefulFilters
     * Configure as `true` to have the filters saved when the owner saves its state.
     */
    @config
    statefulFilters = false;

    /**
     * @cfg {Sorter[]/Object[]} sorters
     * The initial set of {@link Sorter sorters}.
     *
     * Individual sorters can be specified as a `Sorter` instance, a config object for
     * `Sorter` or simply the name of a property by which to sort.
     *
     * An alternative way to extend the sorters is to call the `sort` method and pass a
     * property or sorter config to add to the sorters.
     *
     * For fine grain control of the sorters collection, call `getSorters` to return the
     * `Collection` of sorters.
     *
     *      var sorters = store.getSorters(); // a Collection
     *
     *      sorters.add('name');
     *
     *      //...
     *
     *      sorters.remove('name');
     *
     * Any changes to the `sorters` collection will cause this store to adjust its items
     * accordingly.
     */
    @config
    sorters = null;

    /**
     * @cfg {Boolean} remoteSort
     * Set to `true` if the sorting should be performed on the server side, `false` if it
     * is local only.
     */
    @config('lazy')
    remoteSort = false;

    /**
     * @cfg {Boolean} remoteFilter
     * Set to `true` to defer any filtering operation to the server. If `false`, filtering
     * is done locally on the client.
     */
    @config('lazy')
    remoteFilter = false;

    /**
     * @cfg {String/Object/Grouper} grouper
     * The grouper by which to group the data store. May be specified as a field name, a
     * `Grouper` instance or a config object to create a `Grouper`.
     * 
     * If the value is a String, the group direction will be ascending by default. If the
     * first character of the string is `'^'`, then the group direction will be descending
     * (and the character removed).
     * 
     *      grouper: 'name'     // group by name ascending
     *      
     *      grouper: '^name'    // group by name descending
     * 
     * Internally, grouping is very similar to sorting: the group field and direction are
     * inserted as the first sorter (see {@link #sort}). Stores support a single level of
     * grouping.
     */
    @config
    grouper = null;

    /**
     * @cfg {Number} pageSize
     * The number of records considered to form a 'page'.
     *
     * To disable paging, set the pageSize to `0`.
     */
    @config
    pageSize = 25;

    /**
     * @cfg {Boolean} [autoSort=true]
     * Set to `true` to maintain sorted order when records are added regardless of
     * requested insertion point, or when an item mutation results in a new sort position.
     *
     * This does not affect a ChainedStore's reaction to mutations of its `source` store.
     * If sorters are present when the source Store is mutated, this ChainedStore's sort
     * order will always be maintained.
     * @private
     */
    @config
    autoSort = null;

    /**
     * @cfg {Boolean} reloadOnClearSorters
     * Set this to `true` to trigger a reload when the last sorter is removed (only
     * applicable when {@link #cfg!remoteSort} is `true`).
     *
     * By default, the store reloads itself when a sorter is added or removed.
     *
     * When the last sorter is removed, however, the assumption is that the data
     * does not need to become "unsorted", and so no reload is triggered.
     *
     * If the server has a default order to which it reverts in the absence of any
     * sorters, then it is useful to set this config to `true`.
     * @since 6.5.1
     */
    @config
    reloadOnClearSorters = false;

    //---------------------------------------------------------------------------------
    // Life-cycle

    destroy () {
        let me = this;
        
        // We need to fire this event before any destruction gets going...
        if (me.hasListeners.destroy) {
            me.fireEvent('destroy', me);
        }
        
        super.destroy();
    }

    //---------------------------------------------------------------------------------
    // Properties (alphabetic order)

    /**
     * @property {Boolean} filtered
     * The property is `true` if the store has any currently active filters.
     */
    get filtered () {
        let filters = this.filters;

        return !!(filters && filters.length);
    }

    /**
     * @property {Boolean} grouped
     * Tests whether the store currently has an active grouper.
     */
    get grouped () {
        return !!this.grouper;
    }

    /**
     * @property {Collection} groups
     * Returns a collection of readonly sub-collections of your store's records
     * with grouping applied. These sub-collections are maintained internally by
     * the collection. See {@link #grouper}.
     *
     * Example:
     * 
     *     let myStore = new Store({
     *         grouper: '^color'
     *     });
     *
     *     myStore.groups;
     *
     * The above results in the following format:
     *
     *     [
     *         {
     *             name: 'yellow',
     *             children: [
     *                 // all records where the color field is 'yellow'
     *             ]
     *         },
     *         {
     *             name: 'red',
     *             children: [
     *                 // all records where the color field is 'red'
     *             ]
     *         }
     *     ]
     *
     * Group contents are affected by filtering.
     */
    get groups () {
        return this.data.groups;
    }

    /**
     * @property {Number} size
     * The number of {@link Model records) currently in this store.
     *
     * When using paging, this value may not be the total size of the dataset. If the data
     * object used by the `Reader` contains the dataset size, then the
     * {@link ProxyStore#totalCount} is the dataset size.
     * 
     * **Note**: see the Important note in {@link ProxyStore#load}.
     *
     * When store is filtered, this is the number of records matching the filter.
     */
    get size () {
        let data = this.data;

        // We may be destroyed, in which case "data" will be null... best to just
        // report 0 items vs throw an exception

        return data ? data.length : 0;
    }

    /**
     * Tests whether the store currently has any active sorters.
     * @return {Boolean} `true` if the store is sorted.
     */
    get sorted () {
        let sorters = this.sorters;

        return !!(sorters && sorters.length) || this.grouped;
    }

    //---------------------------------------------------------------------------------
    // Configs (alphabetic order)

    // autoSort
    
    updateAutoSort (autoSort) {
        // Keep collection synced with our autoSort setting
        this.data.autoSort = autoSort;
    }

    // filters
    
    applyFilters (filters, filtersCollection) {
        let me = this;
        let created;
        
        if (!filtersCollection) {
            filtersCollection = me.createFiltersCollection();
            created = true;
        }

        filtersCollection.add(filters);

        if (created) {
            me.onRemoteFilterSet(filtersCollection, me.remoteFilter);
        }

        return filtersCollection;
    }
    
    // grouper

    applyGrouper (grouper, oldGrouper) {
        return Grouper.decode(grouper);
    }
    
    updateGrouper (grouper) {
        let me = this;
        let sorters = me.sorters;
        let change = grouper || (sorters && sorters.length);
        let data = me.data;

        me.settingGroups = true;

        data.grouper = grouper;

        delete me.settingGroups;

        if (!me.constructing) {
            if (change) {
                if (me.remoteSort) {
                    me.load({
                        scope: me,
                        callback: me.fireGroupChange
                    });
                }
                else {
                    me.fireEvent('dataChanged', me);
                    me.fireEvent('refresh', me);
                    me.fireGroupChange();
                }
            }
            // groupchange event must fire when group is cleared.
            // The Grouping feature forces a view refresh when changed to a null grouper
            else {
                me.fireGroupChange();
            }
        }
    }
    
    // remoteSort

    updateRemoteSort (remoteSort) {
        // Don't call getSorters, we don't want to force sorters to be created here.
        // Also, applySorters calls getRemoteSort, which may trigger the initGetter.
        this.onRemoteSortSet(this.sorters, remoteSort);
    }
    
    // remoteFilter

    updateRemoteFilter (remoteFilter) {
        this.onRemoteFilterSet(this.filters, remoteFilter);
    }
    
    // sorters

    applySorters (sorters, sortersCollection) {
        let me = this;
        let created;
        
        if (!sortersCollection) {
            sortersCollection = me.createSortersCollection();
            created = true;
        }

        sortersCollection.add(sorters);

        if (created) {
            me.onRemoteSortSet(sortersCollection, me.remoteSort);
        }

        return sortersCollection;
    }

    //---------------------------------------------------------------------------------
    // Methods (alphabetic order)

    /**
     * Adds a new Filter to this Store's {@link #filters filter set} and
     * by default, applies the updated filter set to the Store's unfiltered dataset.
     * @param {Object[]/Filter[]} filters The set of filters to add to the current
     * {@link #filters filter set}.
     * @param {Boolean} [suppressEvent] If `true` the filter is cleared silently.
     */
    addFilter (filters, suppressEvent) {
        this.suppressNextFilter = !!suppressEvent;
        this.getFilters().add(filters);
        this.suppressNextFilter = false;
    }

    /**
     * This method may be called to indicate the start of multiple changes to the store.
     *
     * Automatic synchronization as configured by the {@link ProxyStore#autoSync autoSync}
     * flag is deferred until the {@link #endUpdate} method is called, so multiple mutations can be
     * coalesced into one synchronization operation.
     *
     * Internally this method increments a counter that is decremented by `endUpdate`. It
     * is important, therefore, that if you call `beginUpdate` directly you match that
     * call with a call to `endUpdate` or you will prevent the collection from updating
     * properly.
     *
     * For example:
     *
     *      var store = Ext.StoreManager.lookup({
     *          //...
     *          autoSync: true
     *      });
     *
     *      store.beginUpdate();
     *
     *      record.set('fieldName', 'newValue');
     *
     *      store.add(item);
     *      // ...
     *
     *      store.insert(index, otherItem);
     *      //...
     *
     *      // Interested parties will listen for the endupdate event
     *      store.endUpdate();
     */
    beginUpdate () {
        if (!this.updating++ && this.hasListeners.beginupdate) {
            this.fireEvent('beginupdate');
        }
    }

    /**
     * Reverts to a view of the Record cache with no filtering applied.
     * @param {Boolean} [suppressEvent] If `true` the filter is cleared silently.
     *
     * For a locally filtered Store, this means that the filter collection is cleared without
     * firing the {@link #event!datachanged} event.
     *
     * For a remotely filtered Store, this means that the filter collection is cleared, but
     * the store is not reloaded from the server.
     */
    clearFilter (suppressEvent) {
        let me = this;
        let filters = me.filters;

        if (!filters || filters.length === 0) {
            return;
        }
        
        me.suppressNextFilter = !!suppressEvent;
        filters.removeAll();
        me.suppressNextFilter = false;
    }

    /**
     * Clear the store grouping
     */
    clearGrouping () {
        this.group(null);
    }

    /**
     * Checks if a record is in the current active data set.
     * @param {Model} record The record
     * @return {Boolean} `true` if the record is in the current active data set.
     * @method contains
     */

    /**
     * Create a `Range` instance to access records by their index.
     *
     * @param {Object/Range} [config]
     * @return {Range}
     */
    createActiveRange (config) {
        return new Range({
            ...config,
            store: this
        });
    }

    /**
     * This method is called after modifications are complete on a store. For details
     * see `{@link #beginUpdate}`.
     */
    endUpdate () {
        let me = this;
        
        if (me.updating && ! --me.updating) {
            if (me.hasListeners.endupdate) {
                me.fireEvent('endupdate');
            }
            
            me.onEndUpdate();
        }
    }

    /**
     * Filters the data in the Store by one or more fields. Example usage:
     *
     *     //filter with a single field
     *     myStore.filter('firstName', 'Don');
     *
     *     //filtering with multiple filters
     *     myStore.filter([
     *         {
     *             property : 'firstName',
     *             value    : 'Don'
     *         },
     *         {
     *             property : 'lastName',
     *             value    : 'Griffin'
     *         }
     *     ]);
     *
     * Internally, Store converts the passed arguments into an array of
     * {@link Filter} instances, and delegates the actual filtering to its internal
     * {@link Collection} or the remote server.
     *
     * @param {String/Filter[]} [filters] Either a string name of one of the
     * fields in this Store's configured {@link Model Model}, or an array of
     * filter configurations.
     * @param {String} [value] The property value by which to filter. Only applicable if
     * `filters` is a string.
     * @param {Boolean} [suppressEvent] (private)
     */
    filter (filters, value, suppressEvent) {
        if (is.string(filters)) {
            filters = {
                property: filters,
                value: value
            };
        }
        
        this.suppressNextFilter = !!suppressEvent;
        this.getFilters().add(filters);
        this.suppressNextFilter = false;
    }

    /**
     * Filters by a function. The specified function will be called for each
     * Record in this Store. If the function returns `true` the Record is included,
     * otherwise it is filtered out.
     *
     * When store is filtered, most of the methods for accessing store data will be working only
     * within the set of filtered records. The notable exception is {@link #getById}.
     *
     * @param {Function} fn The function to be called. It will be passed the following parameters:
     *  @param {Model} fn.record The record to test for filtering. Access field values
     *  using {@link Model#get}.
     * @param {Object} [scope] The scope (this reference) in which the function is executed.
     * Defaults to this Store.
     */
    filterBy (fn, scope) {
        //<debug>
        assert(!this.remoteFilter, 'Cannot add filter function if remoteFilter is true');
        //</debug>
        
        this.getFilters().add({
            filterFn: fn,
            scope: scope || this
        });
    }

    /**
     * Returns the index of the first matching record in this store by a specific field
     * value or -1 if not found.
     *
     * If this store is filtered, this method only finds records within filter.
     *
     * If this store is {@link VirtualStore}, this can only find records from pages that
     * happen to be loaded at the moment. This will be parts of the dataset around the
     * currently visible zone, or recently visited zones if the pages have not yet been
     * purged from the cache.
     *
     * @param {String} property The name of the Record field to test.
     * @param {String/RegExp} value Either a string that the field value
     * should begin with, or a RegExp to test against the field.
     * @param {Number} [startIndex=0] The index to start searching at
     * @param {Boolean} [anyMatch=false] True to match any part of the string, not just the
     * beginning.
     * @param {Boolean} [caseSensitive=false] True for case sensitive comparison
     * @param {Boolean} [exactMatch=false] True to force exact match (^ and $ characters
     * added to the regex). Ignored if `anyMatch` is `true`.
     * @return {Number}
     */
    find (property, value, startIndex, anyMatch, caseSensitive, exactMatch) {
        //             exactMatch
        //  anyMatch    F       T
        //      F       ^abc    ^abc$
        //      T       abc     abc
        //
        let startsWith = !anyMatch;
        let endsWith = !!(startsWith && exactMatch);

        return this.data.findIndex(property, value, startIndex, startsWith, endsWith,
                                   !caseSensitive);
    }

    /**
     * Find the index of the first matching Record in this Store by a function.
     * If the function returns `true` it is considered a match.
     *
     * If this store is filtered, this method only finds records within filter.
     *
     * If this store is {@link VirtualStore}, this can only find records from pages that
     * happen to be loaded at the moment. This will be parts of the dataset around the
     * currently visible zone, or recently visited zones if the pages have not yet been
     * purged from the cache.
     *
     * @param {Function} fn The function to be called. It will be passed the following parameters:
     *  @param {Model} fn.record The record to test for filtering. Access field values
     *  using {@link Model#get}.
     *  @param {Object} fn.id The ID of the Record passed.
     * @param {Object} [scope] The scope (this reference) in which the function is executed.
     * Defaults to this Store.
     * @param {Number} [start=0] The index at which to start searching.
     * @return {Number} The matched index or -1
     */
    findBy (fn, scope, start) {
        return this.data.findIndexBy(fn, scope, start);
    }

    /**
     * Finds the index of the first matching Record in this store by a specific field value.
     *
     * If this store is filtered, this method only finds records within filter.
     *
     * If this store is {@link VirtualStore}, this can only find records from pages that
     * happen to be loaded at the moment. This will be parts of the dataset around the
     * currently visible zone, or recently visited zones if the pages have not yet been
     * purged from the cache.
     *
     * @param {String} fieldName The name of the Record field to test.
     * @param {Object} value The value to match the field against.
     * @param {Number} [startIndex=0] The index to start searching at
     * @return {Number} The matched index or -1
     */
    findExact (fieldName, value, startIndex) {
        return this.data.findIndexBy(
            rec =>  // wrap here so we can set a breakpoint inside
                rec.isEqual(rec.get(fieldName), value),
            this, startIndex);
    }

    /**
     * Returns the first matching record in this store by a specific field value or `null`
     * if not found.
     *
     * If this store is filtered, this method only finds records within filter.
     *
     * If this store is {@link VirtualStore}, this can only find records from pages that
     * happen to be loaded at the moment. This will be parts of the dataset around the
     * currently visible zone, or recently visited zones if the pages have not yet been
     * purged from the cache.
     *
     * @param {String} fieldName The name of the Record field to test.
     * @param {String/RegExp} value Either a string that the field value
     * should begin with, or a RegExp to test against the field.
     * @param {Number} [startIndex=0] The index to start searching at
     * @param {Boolean} [anyMatch=false] True to match any part of the string, not just the
     * beginning.
     * @param {Boolean} [caseSensitive=false] True for case sensitive comparison
     * @param {Boolean} [exactMatch=false] True to force exact match (^ and $ characters
     * added to the regex). Ignored if `anyMatch` is `true`.
     * @return {Model}
     */
    findRecord (...args) {
        let me = this;
        let index = me.find(...args);
        
        return (index > -1) ? me.getAt(index) : null;
    }

    /**
     * Get the Record at the specified index.
     *
     * The index is effected by filtering.
     *
     * @param {Number} index The index of the Record to find.
     * @return {Model} The Record at the passed index. Returns null if not found.
     */
    getAt (index) {
        return this.data.getAt(index) || null;
    }

    /**
     * Get the Record with the specified id.
     *
     * This method is not affected by filtering, lookup will be performed from all records
     * inside the store, filtered or not.
     *
     * @param {*} id The id of the Record to find.
     * @return {Model} The Record with the passed id. Returns null if not found.
     * @method getById
     */

    /**
     * Gets the filters for this store.
     * @return {FilterCollection} The filters
     */
    getFilters () {
        let me = this;
        let ret = me.filters;
        
        if (!ret) {
            me.filters = [];
            ret = me.filters;  // read back the transformed "this.filters"
        }
        
        return ret;
    }

    /**
     * Gathers a range of Records between specified indices.
     *
     * This method is affected by filtering.
     *
     * @param {Number} start The starting index. Defaults to zero.
     * @param {Number} end The ending index. Defaults to the last record. The end index
     * **is included**.
     * @param [options] (private) Used by BufferedRenderer when using a BufferedStore.
     * @return {Model[]} An array of records.
     */
    getRange (start, end, options) {
        // Collection's getRange is exclusive. Do NOT mutate the value: it is passed to the
        // callback.
        let result = this.data.getRange(start, is.number(end) ? end + 1 : end);

        // BufferedRenderer requests a range with a callback to process that range.
        // Because it may be dealing with a buffered store and the range may not be available
        // synchronously.
        if (options && options.callback) {
            options.callback.call(options.scope || this, result, start, end, options);
        }
        
        return result;
    }

    /**
     * Gets the sorters for this store.
     * @return {SorterCollection} The sorters
     */
    getSorters () {
        let me = this;
        let result = me.sorters;
        
        if (!result) {
            // If not preventing creation, force it here
            me.sorters = [];
            
            result = me.sorters;
        }
        
        return result;
    }

    /**
     * Groups data inside the store by setting the `grouper`.
     * 
     * @param {String/Object/Grouper} grouper Any valid value for the `grouper`.
     * @param {String} [direction] The direction by which to group the data. This parameter
     * is only valid if `grouper` is a string.
     */
    group (grouper, direction) {
        this.grouper = Grouper.decode(grouper, direction);
    }

    /**
     * Removes an individual Filter from the current {@link #filters filter set}
     * using the passed Filter/Filter id and by default, applies the updated filter set
     * to the Store's unfiltered dataset.
     *
     * @param {String/Filter} toRemove The id of a Filter to remove from the
     * filter set, or a Filter instance to remove.
     * @param {Boolean} [suppressEvent] If `true` the filter is cleared silently.
     */
    removeFilter (toRemove, suppressEvent) {
        let me = this;
        let filters = me.getFilters();

        me.suppressNextFilter = !!suppressEvent;
        
        if (toRemove.isFilter) {
            filters.remove(toRemove);
        }
        else {
            filters.removeByKey(toRemove);
        }
        
        me.suppressNextFilter = false;
    }

    /**
     * Sorts the data in the Store by one or more of its properties. Example usage:
     *
     *     //sort by a single field
     *     myStore.sort('myField', 'DESC');
     *
     *     //sorting by multiple fields
     *     myStore.sort([
     *         {
     *             property : 'age',
     *             direction: 'ASC'
     *         },
     *         {
     *             property : 'name',
     *             direction: 'DESC'
     *         }
     *     ]);
     *
     * Internally, Store converts the passed arguments into an array of {@link Sorter}
     * instances, and either delegates the actual sorting to its internal
     * {@link Collection} or the remote server.
     *
     * When passing a single string argument to sort, Store maintains a ASC/DESC toggler per field,
     * so this code:
     *
     *     store.sort('myField');
     *     store.sort('myField');
     *
     * Is equivalent to this code, because Store handles the toggling automatically:
     *
     *     store.sort('myField', 'ASC');
     *     store.sort('myField', 'DESC');
     *
     * @param {String/Sorter[]} [field] Either a string name of one of the
     * fields in this Store's configured {@link Model Model}, or an array of
     * sorter configurations.
     * @param {"ASC"/"DESC"} [direction="ASC"] The overall direction to sort the data by.
     * @param {"append"/"prepend"/"replace"/"multi"} [mode="replace"]
     */
    sort (field, direction, mode) {
        let me = this;

        if (field === undefined) {
            //<debug>
            assert(direction === undefined);
            assert(mode === undefined);
            //</debug>

            if (me.remoteSort) {
                me.load();
            }
            else {
                me.forceLocalSort();
            }
        }
        else {
            me.getSorters().addSort(field, direction, mode);
        }
    }

    //---------------------------------------------------------------------------------
    // Internals (alphabetic order)

    configureSorterByField (sorter) {
        // Transform already specified, leave it
        if (!sorter.transform) {
            /* eslint-disable-next-line vars-on-top */
            let fieldName = sorter.property;
            let Model = this.model;
            let field = Model && Model.getField(fieldName);
            let sortType = field && field.sortType;
    
            // if (sortType && sortType !== Ext.identityFn) {
            //     sorter.setTransform(sortType);
            // }
            sorter.transform = (sortType && !sortType.$nullFn) ? sortType : null;
        }
        
        return sorter;
    }

    fireGroupChange () {
        let me = this;

        if (!me.destroyed) {
            me.fireEvent('groupchange', me, me.grouper);
        }
    }

    /**
     * Returns the grouping, sorting and filtered state of this Store.
     * @private
     */
    getState () {
        let me = this;
        let filters = me.filters;
        let grouper = me.grouper;
        let sorters = me.sorters;
        let item, ret;

        for (item of sorters || EMPTY) {
            ret = ret || {};
            (ret.sorters || (ret.sorters = [])).push(item.getState());
        }

        // Because we do not provide a filter changing mechanism, only statify the filters
        // if they opt in. Otherwise filters would get "stuck".
        if (me.statefulFilters && me.saveStatefulFilters) {
            // If saveStatefulFilters is turned on then we know that the filter collection
            // has changed since page load. Initiate the filter state as an empty array,
            // which is meaningful in itself. If there are any filters in the collection,
            // persist them.
            ret = ret || {};
            ret.filters = [];
            
            for (item of filters || EMPTY) {
                ret.filters.push(item.getState());
            }
        }

        if (grouper) {
            ret = ret || {};
            ret.grouper = grouper.getState();
        }
        
        return ret;
    }

    interpret (name) {
        let me = this;
        let accessor = me._metaProperties[name];
        let ret = me[accessor];

        if (is.callable(ret)) {
            ret = me[accessor]();
        }

        return ret;
    }

    // This is attached to the data Collection's beforesort event only if not remoteSort
    // If remoteSort, the event is fired before the reload call in ProxyStore#load.
    onBeforeCollectionSort (store, sorters) {
        if (sorters) {
            this.fireEvent('beforesort', this, sorters.getRange());
        }
    }

    onEndUpdate () {
        //
    }

    onFilterEndUpdate () {
        let me = this;
        let suppressNext = me.suppressNextFilter;
        let filters = me.filters;

        // If the collection is not instantiated yet, it's because we are constructing.
        if (!filters) {
            return;
        }

        if (me.remoteFilter) {
            me.currentPage = 1;
            
            if (!suppressNext) {
                me.load();
            }
        }
        else if (!suppressNext) {
            me.fireEvent('dataChanged', me);
            me.fireEvent('refresh', me);
        }

        if (me.trackStateChanges) {
            // We just mutated the filter collection so let's save stateful filters
            // from this point forward.
            me.saveStatefulFilters = true;
        }

        // This is not affected by suppressEvent.
        me.fireEvent('filterChange', me, me.getFilters().getRange());
    }

    onRemoteFilterSet (filters, remoteFilter) {
        if (filters) {
            filters[remoteFilter ? 'on' : 'un']('endUpdate', 'onFilterEndUpdate', this);
        }
    }

    // If remoteSort is set, we react to the endUpdate of the sorters Collection by reloading
    // if there are still some sorters, or we're configured to reload on sorter remove.
    // If remoteSort is set, we do not need to listen for the data Collection's beforesort
    // event.
    //
    // If local sorting, we do not need to react to the endUpdate of the sorters Collection.
    // If local sorting, we listen for the data Collection's beforesort event to fire our
    // beforesort event.
    onRemoteSortSet (sorters, remoteSort) {
        let me = this;
        let data;

        if (sorters) {
            sorters[remoteSort ? 'on' : 'un']('endupdate', 'onSorterEndUpdate', me);

            data = me.data;
            
            if (data) {
                data[remoteSort ? 'un' : 'on']('beforesort', 'onBeforeCollectionSort', me);
            }
        }
    }

    onSorterEndUpdate () {
        let me = this;
        let fireSort = true;
        let sorters = me.sorters;
        let sorterCount;

        // If we're in the middle of grouping, it will take care of loading.
        // If the collection is not instantiated yet, it's because we are constructing.
        if (me.settingGroups || !sorters) {
            return;
        }

        sorters = sorters.getRange();
        sorterCount = sorters.length;

        if (me.remoteSort) {
            // Only reload if there are sorters left to influence the sort order.
            // Unless reloadOnClearSorters is set to indicate that there's a default
            // order used by the server which must be returned to when there is no
            // explicit sort order.
            if (sorters.length || me.reloadOnClearSorters) {
                // The sort event will fire in the load callback;
                fireSort = false;
                
                me.load({
                    callback () {
                        me.fireEvent('sort', me, sorters);
                    }
                });
            }
        }
        else if (sorterCount) {
            me.fireEvent('datachanged', me);
            me.fireEvent('refresh', me);
        }

        if (fireSort) {
            // Sort event must fire when sorters collection is updated to empty.
            me.fireEvent('sort', me, sorters);
        }
    }

    /**
     * Determines if the passed range is available in the page cache.
     * @param {Number} start The start index
     * @param {Number} end The end index in the range
     * @private
     */
    rangeCached (start, end) {
        return this.size >= Math.max(start, end);
    }

    /**
     * Restores state to the passed state.
     * @private
     */
    setState (state) {
        let me = this;
        let stateSorters = state.sorters;
        let stateFilters = state.filters;
        let stateGrouper = state.grouper;

        if (stateSorters) {
            me.getSorters().replaceAll(stateSorters);
        }

        if (stateFilters) {
            // We found persisted filters so let's save stateful filters from this point forward.
            me.saveStatefulFilters = true;
            me.getFilters().replaceAll(stateFilters);
        }

        if (stateGrouper) {
            me.grouper = stateGrouper;
        }
    }

    /**
     * Called from onCollectionItemsAdd. Collection add changes the items reference of the
     * collection, and that array object if directly referenced by Ranges. The ranges
     * have to refresh themselves upon add.
     * @private
     */
    syncActiveRanges () {
        let activeRanges = this.activeRanges || EMPTY;
        let range;

        for (range of activeRanges) {
            range.refresh();
        }
    }
    
    /**
     * @event add
     * Fired when a record has been added to this Store.
     *
     * @param {Store} store The store.
     * @param {Model[]} records The records that were added.
     * @param {Number} index The index at which the records were inserted.
     * @since 1.1.0
     */

    /**
     * @event remove
     * Fired when one or more records have been removed from this Store.
     *
     * **The signature for this event has changed in 5.0:**
     *
     * @param {Store} store The Store object
     * @param {Model[]} records The records that were removed. In previous
     * releases this was a single record, not an array.
     * @param {Number} index The index at which the records were removed.
     * @param {Boolean} isMove `true` if the child node is being removed so it can be
     * moved to another position in this Store.
     * @since 5.0.0
     */

    /**
     * @event update
     * Fires when a record has been updated.
     * @param {Store} this
     * @param {Model} record The record that was updated
     * @param {"commit"/"edit"/"reject"} operation The update operation being performed.
     * @param {String[]} modifiedFieldNames Array of field names changed during edit.
     * @param {Object} details An object describing the change. See the
     * {@link Collection#event!itemChange itemChange event} of the store's backing
     * collection
     * @since 1.1.0
     */

    /**
     * @event clear
     * Fired after the {@link Store#removeAll removeAll} method is called.
     * @param {Store} this
     * @since 1.1.0
     */

    /**
     * @event datachanged
     * Fires for any data change in the store. This is a catch-all event that is typically fired
     * in conjunction with other events (such as `add`, `remove`, `update`, `refresh`).
     * @param {Store} this The data store
     * @since 1.1.0
     */

    /**
     * @event refresh
     * Fires when the data cache has changed in a bulk manner (e.g., it has been sorted,
     * filtered, etc.) and a widget that is using this Store as a Record cache should refresh
     * its view.
     * @param {Store} this The data store
     */

    /**
     * @event beginupdate
     * Fires when the {@link #beginUpdate} method is called. Automatic synchronization as
     * configured by the {@link ProxyStore#autoSync autoSync} flag is deferred until
     * the {@link #endUpdate} method is called, so multiple mutations can be coalesced into one
     * synchronization operation.
     */

    /**
     * @event endupdate
     * Fires when the {@link #endUpdate} method is called. Automatic synchronization as
     * configured by the {@link ProxyStore#autoSync autoSync} flag is deferred until
     * the {@link #endUpdate} method is called, so multiple mutations can be coalesced into one
     * synchronization operation.
     */

    /**
     * @event beforesort
     * Fires before a store is sorted.
     *
     * For {@link #remoteSort remotely sorted} stores, this will be just before the load
     * operation triggered by changing the store's sorters.
     *
     * For locally sorted stores, this will be just before the data items in the store's
     * backing collection are sorted.
     * @param {Store} store The store being sorted
     * @param {Sorter[]} sorters Array of sorters applied to the store
     */

    /**
     * @event sort
     * Fires after a store is sorted.
     *
     * For {@link #remoteSort remotely sorted} stores, this will be upon the success of a load
     * operation triggered by changing the store's sorters.
     *
     * For locally sorted stores, this will be just after the data items in the store's backing
     * collection are sorted.
     * @param {Store} store The store being sorted
     */
}

Base.Factory.on('store', (factory, config) => {
    let first, data, arrays, fields, i, len, model;

    // handle the case when we are given an array or an array of arrays.
    if (is.array(config)) {
        first = config[0];
        data = config;

        if (is.object(first)) {
            // store: [ { foo: 42, ... }, { foo: 427, ... }, ... ]
            config = { data: data };
        }
        else {
            arrays = is.array(first);
            fields = ['field1'];

            if (arrays) {
                // store: [ [1,2], [3,4], ... ]
                for (i = 2, len = first.length; i <= len; ++i) {
                    fields.push('field' + i);
                }
            }
            else {
                // store: [ 1,2,3, ... ]
                data = [];
                
                for (i = 0, len = config.length; i < len; ++i) {
                    data.push([config[i]]);
                }
            }

            return factory({
                type: 'array',
                data: data,
                fields: fields,
                autoDestroy: true,
                autoCreated: true,
                expanded: !arrays
            });
        }
    }
    else {
        model = config && !config.isAbstractStore && config.model;
        
        if (model) {
            model = Schema.resolve(model);
            config = copy({}, config);

            // Delegate the creation to the Model class static method to allow it to
            // pick a Store-derived class or make other customizations.
            config = model.preconfigureStore(config) || config;
            
            return factory(config);
        }
    }
    
    // by returning nothing the normal factory will proceed
});

// TODO Legacy/Compat
// TODO -- getCount () { return this.size; }
// TODO -- getTotalCount () { return this.totalSize; }
// TODO -- fireEvent('totalcountchange') when we fire totalSizeChange
// TODO -- isFiltered/Grouped/Sorted

export { AbstractStore };
