import {
    //<debug>
    assert, raise,
    //</debug>
    
    define, config, remove, STOP
} from '../../../extjs-core/src';

import {
    Collection, FilterCollection, SorterCollection
} from '../../../extjs-util/src/collection';

import { ProxyStore } from '../store/Proxy';

import { VirtualGroup } from './Group';
import { VirtualPageMap } from './PageMap';
import { VirtualRange } from './Range';

/**
 * This type of store is a replacement for BufferedStore at least for Modern. The primary
 * use of this store is to create and manage "active ranges" of records.
 *
 * For example:
 *
 *      var range = store.createActiveRange({
 *          begin: 100,
 *          end: 200,
 *          prefetch: true,  // allow prefetching beyond range
 *          callback: 'onRangeUpdate',
 *          scope: this
 *      });
 *
 *      // Navigate to a different range. This will causes pages to load and
 *      // the onRangeUpdate method will be called as the load(s) progress.
 *      // This can change the length or number of records spanned on each
 *      // call.
 *      //
 *      range.goto(300, 400);
 *
 *      onRangeUpdate (range, begin, end) {
 *          // Called when records appear in the range...
 *          // We can check if all things are loaded:
 *
 *          // Or we can use range.records (sparsely populated)
 *      }
 */
@define({
    type: 'virtual',
    
    prototype: {
        _groups: null
    }
})
class VirtualStore extends ProxyStore {
    @config
    data = null;

    /**
     * @cfg {Number} leadingBufferZone
     * The number of records to fetch beyond the active range in the direction of
     * movement. If the range is advancing forward, the additional records are beyond
     * `end`. If advancing backwards, they are before `begin`.
     */
    @config
    leadingBufferZone = 200;
    
    /**
     * @cfg remoteFilter
     * @inheritdoc
     */
    @config
    remoteFilter = true;

    /**
     * @cfg remoteSort
     * @inheritdoc
     */
    @config
    remoteSort = true;
    
    /**
     * @cfg sortOnLoad
     * @inheritdoc
     */
    @config
    sortOnLoad = false;

    @config
    totalSize = null;
    
    /**
     * @cfg trackRemoved
     * @inheritdoc
     */
    @config
    trackRemoved = false;

    /**
     * @cfg {Number} trailingBufferZone
     * The number of records to fetch beyond the active trailing the direction of
     * movement. If the range is advancing forward, the additional records are before
     * `begin`. If advancing backwards, they are beyond `end`.
     */
    @config
    trailingBufferZone = 50;

    //---------------------------------------------------------------------------------
    // Life-cycle

    ctor () {
        let me = this;

        me.activeRanges = [];

        me.pageMap = new VirtualPageMap({
            store: me
        });

        me.sortByPage = me.sortByPage.bind(me);
    }

    dtor () {
        this.pageMap.destroy();
    }

    //---------------------------------------------------------------------------------
    // Properties (alphabetic order)

    get groups () {
        let groups = this._groups;

        if (!groups) {
            this._groups = groups = new Collection();
        }

        return groups;
    }

    get size () {
        return this.totalSize;
    }

    //---------------------------------------------------------------------------------
    // Configs (alphabetic order)

    // pageSize

    updatePageSize (pageSize) {
        let totalSize = this.totalSize;
        
        if (totalSize !== null) {
            this.pageMap.pageCount = Math.ceil(totalSize / pageSize);
        }
    }
    
    // proxy

    applyProxy (proxy) {
        proxy = super.applyProxy(proxy);

        // This store asks for pages... this must be explicitly enabled on a MemoryProxy
        if (proxy && proxy.isMemoryProxy) {
            proxy.paging = true;
        }

        return proxy;
    }
    
    // totalSize

    updateTotalSize (totalSize, oldTotalSize) {
        let me = this;
        let pageMap = me.pageMap;

        me.totalSize = totalSize;

        pageMap.pageCount = Math.ceil(totalSize / me.pageSize);

        me.fireEvent('totalSizeChange', me, totalSize, oldTotalSize);
    }

    //---------------------------------------------------------------------------------
    // Methods (alphabetic order)

    /**
     * @method contains
     * @inheritdoc
     */
    contains (record) {
        return this.indexOf(record) > -1;
    }

    /**
     * Create a `Range` instance to access records by their index.
     *
     * @param {Object/VirtualRange} [config]
     * @return {VirtualRange}
     */
    createActiveRange (config) {
        let me = this;
        let range = {
            leadingBufferZone: me.leadingBufferZone,
            trailingBufferZone: me.trailingBufferZone,
            ...config,
            store: me
        };

        return new VirtualRange(range);
    }

    /**
     * @method getAt
     * @inheritdoc
     */
    getAt (index) {
        let page = this.pageMap.getPageOf(index, /* autoCreate= */false);
        let ret;

        if (page && page.records) { // if (page is loaded)
            ret = page.records[index - page.begin];
        }

        return ret || null;
    }

    /**
     * Get the Record with the specified id.
     *
     * This method is not affected by filtering, lookup will be performed from all records
     * inside the store, filtered or not.
     *
     * @param id The id of the Record to find.
     * @return {Model} The Record with the passed id. Returns null if not found.
     */
    getById (id) {
        return this.pageMap.byId[id] || null;
    }

    getSummaryRecord () {
        return this.summaryRecord || null;
    }

    updateGrouper (grouper) {
        let me = this;

        if (grouper) {
            grouper.root = 'data';
            
            me.groups.getSorters().splice(0, 1, {
                property: 'id',
                direction: grouper.direction
            });
        }

        if (!me.constructing) {
            me.reload();
            me.fireEvent('groupChange', me, grouper);
        }
    }

    /**
     * Get the index of the record within the virtual store. Because virtual stores only
     * load a partial set of records, not all records in the logically matching set will
     * have been loaded and will therefore return -1.
     *
     * @param {Model} record The record to find.
     * @return {Number} The index of the `record` or -1 if not found.
     */
    indexOf (record) {
        return this.pageMap.indexOf(record);
    }

    /**
     * Get the index within the store of the record with the passed id. Because virtual
     * stores only load a partial set of records, not all records in the logically
     * matching set will have been loaded and will therefore return -1.
     *
     * @param {String} id The id of the record to find.
     * @return {Number} The index of the record or -1 if not found.
     */
    indexOfId (id) {
        let rec = this.getById(id);
        
        return rec ? this.indexOf(rec) : -1;
    }

    load (options) {
        if (typeof options === 'function') {
            options = {
                callback: options
            };
        }

        /* eslint-disable-next-line vars-on-top */
        let me = this;
        let page = (options && options.page) || 1;
        let pageSize = me.pageSize;
        let operation = me.createOperation({
            type: 'read',
            start: (page - 1) * pageSize,
            limit: pageSize,
            page: page,

            filters: me.getFilters().items,
            sorters: me.getSorters().items,
            grouper: me.grouper,

            ...options
        });

        operation.execute();
        
        return operation;
    }

    reload (options) {
        let me = this;

        if (typeof options === 'function') {
            options = {
                callback: options
            };
        }

        if (me.fireEvent('beforeReload') === STOP) {
            return null;
        }

        options = {
            internalCallback: me.handleReload.bind(me),
            page: 1,
            ...options
        };

        me.pageMap.clear();
        me.groups.clear();

        return me.load(options);
    }

    removeAll () {
        this.pageMap.clear();

        for (let range of this.activeRanges) {
            range.reset();
        }
    }

    //---------------------------------------------------------------------------------
    // Internals (alphabetic order)

    attachSummaryData (resultSet) {
        let me = this;
        let summary = resultSet.summaryData;
        let grouper, len, i, data, rec;

        if (summary) {
            me.summaryRecord = summary;
        }

        summary = resultSet.groupData;
        
        if (summary) {
            grouper = me.grouper;
            
            if (grouper) {
                me.groupSummaryData = data = {};
                
                for (i = 0, len = summary.length; i < len; ++i) {
                    rec = summary[i];
                    data[grouper.getGroupString(rec)] = rec;
                }
            }
        }
    }

    createFiltersCollection () {
        return new FilterCollection();
    }

    createSortersCollection () {
        return new SorterCollection();
    }

    getByInternalId (internalId) {
        return this.pageMap.getByInternalId(internalId);
    }

    handleReload (op) {
        let me = this;
        let pageMap = me.pageMap;
        let range;

        if (op.wasSuccessful()) {
            me.readTotalSize(op.resultSet);
            me.fireEvent('reload', me, op);

            for (range of me.activeRanges) {
                if (pageMap.canSatisfy(range)) {
                    range.reload();
                }
            }
        }
    }

    loadVirtualPage (page, callback, scope) {
        let me = this;
        let pageMapGeneration = me.pageMap.generation;

        return me.load({
            page: page.number + 1, // store loads are 1 based
            internalCallback (op) {
                let resultSet = op.resultSet;

                if (pageMapGeneration === me.pageMap.generation) {
                    if (op.wasSuccessful()) {
                        me.readTotalSize(resultSet);

                        me.attachSummaryData(resultSet);
                    }

                    callback.call(scope || page, op);
                    me.groupSummaryData = null;
                }
            }
        });
    }

    onFilterEndUpdate () {
        let me = this;
        let filters = me.filters;

        // This is not affected by suppressEvent.
        if (!me.constructing) {
            me.reload();
            me.fireEvent('filterChange', me, filters.getRange());
        }
    }

    onSorterEndUpdate () {
        let me = this;
        let sorters = me.sorters.getRange();

        if (!me.constructing) {
            me.fireEvent('beforeSort', me, sorters);

            me.reload();

            me.fireEvent('sort', me, sorters);
        }
    }

    lockGroups (grouper, page) {
        let me = this;
        let groups = me.groups;
        let groupInfo = page.groupInfo = {};
        let records = page.records;
        let len = records.length;
        let groupSummaryData = me.groupSummaryData;
        let pageMap = me.pageMap;
        let n = page.number;
        let group, i, groupKey, summaryRec, rec, firstRecords, first;

        for (i = 0; i < len; ++i) {
            rec = records[i];
            groupKey = grouper.getGroupString(rec);
            
            if (!groupInfo[groupKey]) {
                groupInfo[groupKey] = rec;

                group = groups.get(groupKey);
                
                if (!group) {
                    group = new VirtualGroup(groupKey);
                    groups.add(group);
                }

                // We want to track the first known record in the group.
                // If we have a record that is before the first one we know
                // about, add it to the front. Otherwise, we don't care about
                // the order at this point, so just shift it on to the end.
                firstRecords = group.firstRecords;
                first = firstRecords[0];
                
                if (first && n < pageMap.getPageIndex(first)) {
                    firstRecords.unshift(rec);
                }
                else {
                    firstRecords.push(rec);
                }

                summaryRec = groupSummaryData && groupSummaryData[groupKey];
                
                if (summaryRec) {
                    group.summaryRecord = summaryRec;
                }
            }
        }
    }

    onPageDataAcquired (page) {
        let grouper = this.grouper;

        if (grouper) {
            this.lockGroups(grouper, page);
        }
    }

    onPageDestroy (page) {
        for (let range of this.activeRanges) {
            range.onPageDestroy(page);
        }
    }

    onPageEvicted (page) {
        let grouper = this.grouper;

        if (grouper) {
            this.releaseGroups(grouper, page);
        }
    }

    readTotalSize (resultSet) {
        let total = resultSet.remoteTotal;
        
        if (!isNaN(total)) {
            this.totalSize = total;
        }
    }

    releaseGroups (grouper, page) {
        let groups = this.groups;
        let groupInfo = page.groupInfo;
        let first, firstRecords, key, group;

        for (key in groupInfo) {
            first = groupInfo[key];
            group = groups.get(key);
            firstRecords = group.firstRecords;

            // If there is only 1 first record left, this must be it, which
            // means the group no longer has records
            if (firstRecords.length === 1) {
                groups.remove(group);
            }
            else if (firstRecords[0] === first) {
                firstRecords.shift();
                firstRecords.sort(this.sortByPage);
            }
            else {
                remove(firstRecords, first);
            }
        }
    }

    sortByPage (rec1, rec2) {
        // Bound to this instance in the constructor
        let map = this.pageMap;
        
        return map.getPageIndex(rec1) - map.getPageIndex(rec2);
    }

    //--------------------------------------------------------
    // Unsupported API's

    //<debug>
    add () {
        raise('Virtual stores do not support the add() method');
    }

    applyData () {
        raise('Virtual stores do not support direct data loading');
    }

    filter (...args) {
        assert(this.remoteFilter, 'Virtual stores do not support local filtering');

        // Remote filtering forces a load. load clears the store's contents.
        return super.filter(...args);
    }

    filterBy () {
        raise('Virtual stores do not support local filtering');
    }

    insert () {
        raise('Virtual stores do not support the insert() method');
    }

    loadData () {
        raise('Virtual stores do not support the loadData() method');
    }

    updateRemoteFilter (remoteFilter, oldRemoteFilter) {
        assert(remoteFilter, 'Virtual stores are always remotely filtered.');

        super.updateRemoteFilter(remoteFilter, oldRemoteFilter);
    }

    updateRemoteSort (remoteSort, oldRemoteSort) {
        assert(remoteSort, 'Virtual stores are always remotely sorted.');

        super.updateRemoteSort(remoteSort, oldRemoteSort);
    }

    updateTrackRemoved (value, oldValue) {
        assert(!value, 'Virtual stores do not support trackRemoved.');

        super.updateTrackRemoved(value, oldValue);
    }
    //</debug>
}

export { VirtualStore };
