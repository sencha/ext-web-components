import {
    config, define
} from '../../../extjs-core/src';

import { Collection } from './Collection';

/**
 * Encapsulates a grouped collection of records within a `Collection`.
 */
@define({
    prototype: {
        // Group collections must have a higher priority than normal collections. This ensures
        // that their endupdate handlers for filters and sorters run prior to the endupdate
        // handler of the store's main collection, and so when the user handles events such
        // as sort/datachanged, the groups have already been sorted and filtered.
        $endUpdatePriority: 2001,
    
        manageSorters: false
    }
})
class Group extends Collection {
    @config
    groupKey = null;
}

export { Group };
