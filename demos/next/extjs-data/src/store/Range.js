import { Base, define, config, buffered, remove } from '../../../extjs-core/src';

/**
 * This class provides access to a range of records in a {@link Store store}.
 * Instances of this class are not created directly but are rather returned by a store's
 * {@link AbstractStore#createActiveRange createActiveRange} method.
 *
 * This class is useful for buffered rendering where only a portion of the total set of
 * records are needed. By passing that information to a `Range`, the access to records
 * can be abstracted even across {@link VirtualStore} where
 * only those records needed by views are fetched from the server.
 */
@define({
    configurable: 'open',

    prototype: {
        /**
         * @cfg {Number} begin
         * The first record index of interest.
         *
         * This property is set by the `goto` method and is stored on the instance for
         * readonly use.
         * @readonly
         */
        begin: 0,

        /**
         * @cfg {Number} end
         * The first record beyond the range of interest. This is to make "length" of the
         * range simply `end - begin`.
         *
         * This property is set by the `goto` method and is stored on the instance for
         * readonly use.
         */
        end: 0,

        /**
         * @property (Number} length
         * The number of records in the range of `[begin, end)`. This is equal to the
         * difference `end - begin`.
         *
         * This property is maintained by the `goto` method and is stored on the instance for
         * readonly use.
         * @readonly
         */
        length: 0,

        /**
         * @property {Model[]} records
         * The records corresponding to the `begin` and `end` of this range. For normal
         * stores this is the standard array of records.
         *
         * For a {@link VirtualStore} this is a sparse object of
         * available records bounded by the limits of this range.
         *
         * In all cases, this object is keyed by the record index and (except for the
         * `length` property) should be treated as an array.
         * @readonly
         */

        /**
         * @cfg {AbstractStore} store
         * The associated store. This config must be supplied at construction and cannot
         * be changed after that time.
         * @readonly
         */
        store: null,

        lastBegin: 0,
        lastEnd: 0
    }
})
class Range extends Base {
    /**
     * @cfg {Number} buffer
     * The number to milliseconds to delay server requests when `goto` is called. A value
     * of `null` will cause `goto` to immediately issue server requests.
     */
    @config
    buffer = null;

    //---------------------------------------------------------------------------------
    // Life-cycle

    setup () {
        let me = this;
        let store = me.store;
        let activeRanges = store.activeRanges;
        let begin = me.begin;
        let end = me.end;

        if (!activeRanges) {
            store.activeRanges = activeRanges = [];
        }

        activeRanges.push(me);

        me.refresh();

        if (begin || end) {
            me.begin = me.end = 0; // Applied on us during construction, so clear it

            me.goto(begin, end);
        }
    }

    dtor () {
        let me = this;
        let store = me.store;

        // me.storeListeners = destroy(me.storeListeners);

        remove(store && store.activeRanges, me);
    }

    //---------------------------------------------------------------------------------
    // Configs (alphabetic order)

    // buffer

    updateBuffer (value) {
        let fn = this.goto;
        let immediate = value == null;

        if (!immediate) {
            fn.delay = value;
        }

        fn.immediate = immediate;
    }

    //---------------------------------------------------------------------------------
    // Methods (alphabetic order)

    @buffered(0, { immediate: true })
    goto (begin, end) {
        this.begin = begin;
        this.end = end;
        this.length = end - begin;
    }

    refresh () {
        this.records = this.store.data.items;
    }
}

export { Range };
