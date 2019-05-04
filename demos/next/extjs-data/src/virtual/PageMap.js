import {
    //<debug>
    raise,
    //</debug>

    Base,
    define, config, buffered, remove
} from '../../../extjs-core/src';

import { VirtualPage } from './Page';

/**
 * This class manages a sparse collection of `Page` objects keyed by their page number.
 * Pages are lazily created on request by the `getPage` method.
 *
 * When pages are locked, they are scheduled to be loaded. The loading is prioritized by
 * the type of lock held on the page. Pages with "active" locks are loaded first while
 * those with "prefetch" locks are loaded only when no "active" locked pages are in the
 * queue.
 *
 * The value of the `concurrentLoading` config controls the maximum number of simultaneously
 * pending, page load requests.
 *
 * @private
 */
@define({
    configurable: 'open',

    prototype: {
        generation: 0,
        store: null
    }
})
class VirtualPageMap extends Base {
    /**
     * @cfg {Number} cacheSize
     * The number of pages to retain in the `cache`.
     */
    @config
    cacheSize = 10;

    /**
     * @cfg {Number} concurrentLoading
     * The maximum number of simultaneous load requests that should be made to the
     * server for pages.
     */
    @config
    concurrentLoading = 1;

    /**
     * @cfg {Number} pageCount
     * The number of pages in the data set.
     */
    @config
    pageCount = null;

    //---------------------------------------------------------------------------------
    // Life-cycle

    ctor () {
        this.prefetchSortFn = this.prefetchSortFn.bind(this);
    }
    
    setup () {
        this.clear();
    }

    dtor () {
        this.clear(true);
    }

    //---------------------------------------------------------------------------------
    // Configs (alphabetic order)

    updatePageCount (pageCount, oldPageCount) {
        let pages = this.pages;
        let pageNumber, page;

        if (oldPageCount === null || pageCount < oldPageCount) {
            // Safe to delete during a for in
            for (pageNumber in pages) {
                page = pages[pageNumber];

                if (page.number >= pageCount) {
                    this.clearPage(page);
                    this.destroyPage(page);
                }
            }
        }
    }

    //---------------------------------------------------------------------------------
    // Methods (alphabetic order)

    canSatisfy (range) {
        let end = this.getPageIndex(range.end);
        let pageCount = this.pageCount;

        return pageCount === null || end < pageCount;
    }

    clear (destroy) {
        let me = this;
        let alive = !destroy || null;
        let pages = me.pages;
        let pg;

        ++me.generation;

        /**
         * @property {Object} byId
         * A map of records by their `idProperty`.
         */
        me.byId = alive && {};

        /**
         * @property {Object} byInternalId
         * A map of records by their internal id (`$iid` property).
         */
        me.byInternalId = alive && {};

        /**
         * @property {VirtualPage[]} cache
         * The array of unlocked pages with the oldest at the front and the newest (most
         * recently unlocked) page at the end.
         * @readonly
         */
        me.cache = alive && [];

        /**
         * @property {Object} indexMap
         * A map of record indices by their internal id (`$iid` property).
         */
        me.indexMap = alive && {};

        /**
         * @property {Object} pages
         * The sparse collection of `Page` objects keyed by their page number.
         * @readonly
         */
        me.pages = alive && {};

        /**
         * @property {VirtualPage[]} loading
         * The array of currently loading pages.
         */
        me.loading = alive && [];

        /**
         * @property {Object} loadQueues
         * A collection of loading queues keyed by the lock state.
         * @property {VirtualPage[]} loadQueues.active The queue of pages to
         * load that have an "active" lock state.
         * @property {VirtualPage[]} loadQueues.prefetch The queue of pages to
         * load that have a "prefetch" lock state.
         */
        me.loadQueues = alive && {
            active: [],
            prefetch: []
        };

        if (pages) {
            for (pg in pages) {
                me.destroyPage(pages[pg]);
            }
        }
    }

    clearPage (page, fromCache) {
        let me = this;
        let loadQueues = me.loadQueues;

        delete me.pages[page.number];
        page.clearRecords(me.byId, 'id');
        page.clearRecords(me.byInternalId, '$iid');
        page.clearRecords(me.indexMap, '$iid');

        remove(loadQueues.active, page);
        remove(loadQueues.prefetch, page);
        
        if (!fromCache) {
            remove(me.cache, page);
        }
    }

    destroyPage (page) {
        this.store.onPageDestroy(page);
        page.destroy();
    }

    getPage (number, autoCreate) {
        let me = this;
        let pageCount = me.pageCount;
        let pages = me.pages;
        let page;

        if (pageCount === null || number < pageCount) {
            page = pages[number];

            if (!page && autoCreate !== false) {
                pages[number] = page = new VirtualPage({
                    pageMap: me,
                    number: number
                });
            }
        }
        //<debug>
        else {
            raise(`Invalid page number ${number} when limit is ${pageCount}`);
        }
        //</debug>

        return page || null;
    }

    getPageIndex (index) {
        if (index.isModel) {
            index = this.indexOf(index);
        }

        return Math.floor(index / this.store.pageSize);
    }

    getPageOf (index, autoCreate) {
        let pageSize = this.store.pageSize;
        let n = Math.floor(index / pageSize);

        return this.getPage(n, autoCreate);
    }

    getPages (begin, end) {
        let pageSize = this.store.pageSize;
        // Convert record indices into page numbers:
        let n = Math.floor(begin / pageSize);
        let last = Math.ceil(end / pageSize);
        let ret = {};

        for (/* empty */ ; n < last; ++n) {
            ret[n] = this.getPage(n);
        }

        return ret;
    }

    getByInternalId (internalId) {
        let index = this.indexMap[internalId];
        let page;

        if (index || index === 0) {
            page = this.pages[Math.floor(index / this.store.pageSize)];
            
            if (page) {
                return page.records[index - page.begin];
            }
        }
    }

    indexOf (record) {
        let ret = this.indexMap[record.$iid];
        
        return (ret || ret === 0) ? ret : -1;
    }

    @buffered('asap')
    loadNext () {
        // Initiating loads immediately can easily cause problems, so wait
        // for a tick before firing off the loads.
        let me = this;
        let concurrency = me.concurrentLoading;
        let loading = me.loading;
        let loadQueues = me.loadQueues;
        let page;

        // Keep pulling from the queue(s) as long as we have more concurrency
        // allowed...
        while (loading.length < concurrency) {
            if (!(page = loadQueues.active.shift() || loadQueues.prefetch.shift())) {
                break;
            }

            loading.push(page);
            page.load();
        }
    }

    onPageLoad (page) {
        let me = this;
        let store = me.store;
        let activeRanges = store.activeRanges;
        let n = activeRanges.length;
        let i;

        remove(me.loading, page);

        if (!page.error) {
            page.fillRecords(me.byId, 'id');
            page.fillRecords(me.byInternalId, '$iid');
            page.fillRecords(me.indexMap, '$iid', true);

            store.onPageDataAcquired(page);

            for (i = 0; i < n; ++i) {
                activeRanges[i].onPageLoad(page);
            }
        }

        // Normally loadNext is buffered due to page locking requests, however, we have
        // just completed a page load, so we want to kick off the next load now.
        me.loadNext.now();
    }

    onPageLockChange (page, state, oldState) {
        let me = this;
        let cache = me.cache;
        let loadQueues = me.loadQueues;
        let store = me.store;
        let cacheSize, concurrency;

        // When a page that has never been loaded becomes locked, we want to put
        // it in the appropriate loadQueue. It is also possible for the lock state
        // to change while waiting in a loadQueue, so we may need to move it around
        // while it waits...
        if (page.isInitial()) {
            if (oldState) {
                remove(loadQueues[oldState], page);
            }

            if (state) {
                loadQueues[state].push(page);
                concurrency = me.concurrentLoading;

                if (me.loading.length < concurrency) {
                    me.loadNext();
                }
            }
        }

        if (state) {
            if (!oldState) {
                // Make sure the page is not in the LRU queue for recycling. If it
                // was previously not locked (!oldState) then the page is in line
                // for removal...
                remove(cache, page);
            }
        }
        else {
            cache.push(page); // put MRU item at the end

            for (cacheSize = me.cacheSize; cache.length > cacheSize;) {
                page = cache.shift();
                me.clearPage(page, true); // remove LRU item
                store.onPageEvicted(page);
                me.destroyPage(page);
            }
        }
    }

    prefetchSortFn (a, b) {
        a = a.number;
        b = b.number;

        // eslint-disable-next-line vars-on-top
        let M = Math;
        let firstPage = this.sortFirstPage;
        let lastPage = this.sortLastPage;
        let direction = this.sortDirection;
        let aDir = a < firstPage;
        let bDir = b < firstPage;
        let ret;

        a = aDir ? M.abs(firstPage - a) : M.abs(lastPage - a);
        b = bDir ? M.abs(firstPage - b) : M.abs(lastPage - b);
        
        if (a === b) {
            ret = aDir ? direction : -direction;
        }
        else {
            ret = a - b;
        }
        
        return ret;
    }

    prioritizePrefetch (direction, firstPage, lastPage) {
        let me = this;
        
        me.sortDirection = direction;
        me.sortFirstPage = firstPage;
        me.sortLastPage = lastPage;

        me.loadQueues.prefetch.sort(me.prefetchSortFn);
    }
}

export { VirtualPageMap };
