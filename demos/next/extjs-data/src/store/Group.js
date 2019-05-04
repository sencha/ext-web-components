import { define, config } from '../../../extjs-core/src';

import { Group } from '../../../extjs-util/src/collection';

/**
 * Encapsulates a `Group` of records (a type of `Collection`) and provides a summary
 * record via {@link #getSummaryRecord}.
 */
@define
class StoreGroup extends Group {
    @config
    store = null;

    /**
     * Returns the summary results for the group.
     * @return {Ext.data.Model}
     */
    getSummaryRecord () {
        let me = this;
        let summaryRecord = me.summaryRecord;
        let store = me.store;
        let generation = store.data.generation;
        let M, T;

        if (!summaryRecord) {
            M = store.model;
            T = M.summaryModel;
            me.summaryRecord = summaryRecord = new T();
        }

        if (!summaryRecord.isRemote && summaryRecord.summaryGeneration !== generation) {
            summaryRecord.summarize(me.items);
            summaryRecord.summaryGeneration = generation;
        }

        return summaryRecord;
    }
}

export { StoreGroup };
