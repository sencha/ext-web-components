import { Base, define } from '../../../extjs-core/src';

/**
 * This class contains remote group information about virtual stores and provides
 * a similar interface to `StoreGroup`.
 */
@define({
    prototype: {
        firstRecords: null,
        id: '',
        summaryRecord: null
    }
})
class VirtualGroup extends Base {
    construct (key) {
        this.id = key;
        this.firstRecords = [];
    }

    first () {
        return this.firstRecords[0] || null;
    }

    getGroupKey () {
        return this.id;
    }

    getSummaryRecord () {
        return this.summaryRecord;
    }
}

export { VirtualGroup };
