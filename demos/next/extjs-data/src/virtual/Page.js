import {
    //<debug>
    assert, assertIn,
    //</debug>

    Base, define
} from '../../../extjs-core/src';

/**
 * This class manages a page of records in a virtual store's `PageMap`. It is created
 * with the page `number` (0-based) and uses the store's `pageSize` to calculate the
 * record span covered by it and stores these as `begin` and `end` properties. These
 * aspects of the `Page` as well as the owning `PageMap` are expected to be immutable
 * throughout the instance's life cycle.
 *
 * The normal use for a `Page` is by a `Range`. Ranges acquire and `lock` the pages they
 * span. As they move on, they `release` these locks. The act of locking pages schedules
 * them for loading. Unlocking pages allows them to be evicted from the `PageMap` to
 * reclaim memory for other pages.
 *
 * @private
 */
@define({
    configurable: 'open',

    prototype: {
        /**
         * @property {Number} begin
         * The start index of the records that this page represents.
         * Inclusive.
         * @readonly
         */
        begin: 0,
    
        /**
         * @property {Number} end
         * The end index of the records that this page represents.
         * Exclusive.
         * @readonly
         */
        end: 0,
    
        /**
         * @property {Error} error
         * The error instance if the page load `operation` failed. If this property is set,
         * the `state` will be "error".
         * @readonly
         */
        error: null,
    
        /**
         * @property {"active"/"prefetch"} locked
         * This property is managed by the `lock` and `release` methods. It is set to `null`
         * if the page is not locked or it will be set to the string describing the type of
         * the current lock.
         *
         * When pages are `locked` for the first time, they are scheduled for loading by the
         * owning `pageMap`.
         *
         * Locked pages are not eligible for removal from the `PageMap`.
         * @readonly
         */
        locked: null,
    
        /**
         * @cfg {Number} number
         * The 0-based page number of this page.
         * @readonly
         */
        number: 0,
    
        /**
         * @property {Ext.data.operation.Read} operation
         * The pending read of the records for this page. This property is only set when the
         * page is in the "loading" `state`.
         * @readonly
         */
        operation: null,
    
        /**
         * @property {Ext.data.virtual.PageMap} pageMap
         * The owning `PageMap` instance.
         * @readonly
         */
        pageMap: null,
    
        /**
         * @property {Model[]} records
         * The array of records loaded for this page. The `records[0]` item corresponds to
         * the record at index `begin` in the overall result set.
         * @readonly
         */
        records: null,
    
        /**
         * @property {"loading"/"loaded"/"error"} state
         * This property describes the current life cycle state for this page. At creation,
         * this property will be `null` for the "initial" state.
         * @readonly
         */
        state: null
    }
})
class VirtualPage extends Base {
    //---------------------------------------------------------------------------
    // Life-cycle
    
    setup () {
        let me = this;
        let pageSize = me.pageMap.store.pageSize;

        me.begin = me.number * pageSize;
        me.end = me.begin + pageSize;

        me.locks = {
            active: 0,
            prefetch: 0
        };
    }

    dtor () {
        let me = this;
        let operation = me.operation;

        me.state = 'destroyed';

        if (operation) {
            operation.abort();
        }
    }

    //---------------------------------------------------------------------------
    // Properties (alphabetic order)

    get loaded () {
        return this.state === 'loaded';
    }

    get loading () {
        return this.state === 'loading';
    }

    //---------------------------------------------------------------------------
    // Methods (alphabetic order)

    /**
     * Acquires or releases the specified type of lock to this page. If this causes the
     * `locked` property to transition to a new value, the `pageMap` is informed to
     * enqueue or dequeue this page from the loading queues.
     * @param {"active"/"prefetch"} kind The type of lock.
     * @param {Number} delta A value of `1` to lock or `-1` to release.
     */
    adjustLock (kind, delta) {
        let me = this;
        let locks = me.locks;
        let pageMap = me.pageMap;
        let locked = null;
        let lockedWas = me.locked;

        //<debug>
        assertIn(kind, locks);
        assert(delta === 1 || delta === -1,
               'Invalid lock count delta (should be +/-1): ' + delta);
        //</debug>

        locks[kind] += delta;

        if (locks.active) {
            locked = 'active';
        }
        else if (locks.prefetch) {
            locked = 'prefetch';
        }

        if (locked !== lockedWas) {
            me.locked = locked;

            if (pageMap) {
                pageMap.onPageLockChange(me, locked, lockedWas);
            }
        }
    }

    clearRecords (out, by) {
        let me = this;
        let begin = me.begin;
        let records = me.records;
        let i, n;

        // If we don't have records then fillRecords() could not have filled anything
        if (records) {
            n = records.length;

            if (by) {
                for (i = 0; i < n; ++i) {
                    delete out[records[i][by]];
                }
            }
            else {
                for (i = 0; i < n; ++i) {
                    delete out[begin + i];
                }
            }
        }
    }

    fillRecords (out, by, withIndex) {
        let me = this;
        let records = me.records;
        let begin = me.begin;
        let i, n, record;

        if (records) {
            // The last page will not likely have a full page worth, so always
            // limit our loops by the actually available records...
            n = records.length;

            if (by) {
                for (i = 0; i < n; ++i) {
                    record = records[i];
                    out[record[by]] = withIndex ? begin + i : record;
                }
            }
            else {
                for (i = 0; i < n; ++i) {
                    out[begin + i] = records[i];
                }
            }
        }
    }

    isInitial () {
        return this.state === null;
    }

    load () {
        let me = this;
        let operation;

        me.state = 'loading';
        operation = me.pageMap.store.loadVirtualPage(me, me.onLoad, me);

        // Memory proxy will synchronously load pages...
        if (me.state === 'loading') {
            me.operation = operation;
        }
    }

    onLoad (operation) {
        let me = this;

        me.operation = null;

        if (!me.destroyed) {
            if (!(me.error = operation.error)) {
                me.records = operation.records;
                me.state = 'loaded';
            }
            else {
                me.state = 'error';
                // TODO fireEvent or something from the store?
            }

            me.pageMap.onPageLoad(me);
        }
    }
}

export { VirtualPage };
