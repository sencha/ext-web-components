import {
    //<debug>
    assert,
    //</debug>

    Base, Watchable,
    define, config
} from '../../../extjs-core/src';

/**
 * This mixin provides a `dirty` config that tracks the modified state of an object. If
 * the class using this mixin is {@link Ext.mixin.Observable observable}, changes to the
 * `dirty` config will fire the `dirtychange` event.
 * @protected
 */
@define({
    prototype: {
        /**
         * @property {Number} _dirtyRecordCount
         * The number of newly created, modified or dropped records.
         * @private
         * @readonly
         */
        _dirtyRecordCount: 0
    }
})
class Dirty extends Base {
    /**
     * @event dirtyChange
     * Fires when a change in the object's {@link #cfg!dirty} state is detected.
     *
     * **Note:** In order for this event to fire, the class that has a `fireEvent` method
     * (such as from the `Watchable` mixin).
     *
     * @param {Dirty} this
     * @param {Boolean} dirty Whether or not the object is now dirty.
     */

    /**
     * @cfg {Boolean} dirty
     * This config property describes the modified state of this object. In most
     * cases this config's value is maintained by the object and should be considered
     * readonly. The class implementor should be the only one to call the setter.
     */
    @config('initial')
    dirty = false;

    /**
     * @cfg {Boolean} ignoreDirty
     * This config property indicates that the `dirty` state of this object should be
     * ignored. Because this capability is mixed in at a class level, this config can
     * be helpful when some instances do not participate in dirty state tracking.
     *
     * This option should be set at construction time. When set to `true`, the object
     * will always have `dirty` value of `false`.
     */
    @config
    ignoreDirty = false;

    /**
     * @cfg {Boolean} recordStateIsDirtyState
     * Set this config at construction time (or on the class body) to automatically set
     * the `dirty` state based on the records passed to `trackRecordState`.
     *
     * This config defaults to `true` but only has an effect when the record tracking
     * methods are called (`trackRecordState`, `untrackRecordState` and `clearRecordStates`).
     * @protected
     */
    @config
    recordStateIsDirtyState = true;

    //---------------------------------------------------------------------------------
    // Configs (alphabetic order)

    // This alias matches the Ext.form.field.* family.
    isDirty () {
        return this.dirty;
    }

    applyDirty (dirty) {
        return this.ignoreDirty ? false : dirty;
    }

    updateDirty () {
        let me = this;

        // if (me.fireEvent && !me.isDirtyInitializing) {
        if (me.fireEvent && !me.constructing) {
            me.fireDirtyChange();
        }
    }

    //---------------------------------------------------------------------------------
    // Methods (alphabetic order)

    /**
     * Clears all record state tracking. This state is maintained by `trackRecordState`
     * and `untrackRecordState`.
     * @protected
     */
    clearRecordStates () {
        let me = this;
        let counters = me._crudCounters;

        if (counters) {
            counters.C = counters.U = counters.D = 0;
        }

        me._dirtyRecordCount = 0;

        if (me.recordStateIsDirtyState) {
            me.dirty = false;
        }
    }

    fireDirtyChange () {
        let me = this;

        if (!me.ignoreDirty) {
            me.fireEvent('dirtyChange', me, me.dirty);
        }
    }

    /**
     * This method is called to track a given record in the total number of dirty records
     * (modified, created or dropped). See `untrackRecordState` and `clearRecordStates`.
     *
     * @param {Model} record The record to track.
     * @param {Boolean} [initial] Pass `true` the first time a record is introduced.
     * @return {Boolean} Returns `true` if the state of dirty records has changed.
     * @protected
     */
    trackRecordState (record, initial) {
        let me = this;
        let counters = me._crudCounters || (me._crudCounters = { C: 0, R: 0, U: 0, D: 0 });
        let dirtyRecordCountWas = me._dirtyRecordCount;
        let state = record.crudState;
        let stateWas = record.crudStateWas;
        let changed, dirtyRecordCount;

        if (initial || state !== stateWas) {
            if (stateWas) {
                if (!initial) {
                    --counters[stateWas];
                }

                //<debug>
                assert(counters[stateWas] >= 0, 'Invalid state for {0}', stateWas);
                //</debug>
            }

            if (!(record.phantom && state === 'D')) {
                ++counters[state];
            }

            me._dirtyRecordCount = dirtyRecordCount = counters.C + counters.U + counters.D;

            changed = !dirtyRecordCount !== !dirtyRecordCountWas;

            if (changed && me.recordStateIsDirtyState) {
                me.dirty = dirtyRecordCount > 0;
            }
        }

        return changed;
    }

    /**
     * This method is called to remove the tracking of a given record from the total number
     * of dirty records (modified, created or dropped). The record passed to this method
     * must have been previously passed to `trackRecordState`.
     *
     * @param {Model} record The record to stop tracking.
     * @return {Boolean} Returns `true` if the state of dirty records has changed.
     * @protected
     */
    untrackRecordState (record) {
        let me = this;
        let counters = me._crudCounters;
        let dirtyRecordCountWas = me._dirtyRecordCount;
        let state = record.crudState;
        let changed, dirtyRecordCount;

        // If it's erased and dropped, it will have already been tracked
        if (counters && state !== 'D' && !record.erased) {
            --counters[state];

            //<debug>
            assert(counters[state] >= 0, 'Invalid state for {0}', state);
            //</debug>

            me._dirtyRecordCount = dirtyRecordCount = counters.C + counters.U + counters.D;

            changed = !dirtyRecordCount !== !dirtyRecordCountWas;

            if (changed && me.recordStateIsDirtyState) {
                me.dirty = dirtyRecordCount > 0;
            }
        }

        return changed;
    }
}

export { Dirty };
