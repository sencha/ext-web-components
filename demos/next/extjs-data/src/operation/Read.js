import { define, config } from '../../../extjs-core/src';

import { Operation } from './Operation';

/**
 * Encapsulates a read operation as performed by a {@link Proxy proxy}.
 *
 * This class is instantiated by {@link Store stores} and {@link Model records} and
 * should not need to be instantiated in user code.
 */
@define({
    type: 'read',

    tags: {
        action: 'read'
    }
})
class ReadOperation extends Operation {
    /**
     * @cfg {Boolean} addRecords
     * Passed internally to loadRecords when the load completes
     * @private
     */
    @config
    addRecords = false;
    
    /**
     * @cfg {Filter[]} filters
     * Optional array of filter objects. Only applies to 'read' actions.
     */
    @config
    filters = null;

    /**
     * @cfg {Grouper} grouper
     * Optional grouping configuration. Only applies to 'read' actions where grouping is
     * desired.
     */
    @config
    grouper = null;

    /**
     * @cfg {Number} limit
     * The number of records to load. Used on 'read' actions when paging is being used.
     */
    @config
    limit = null;
    
    /**
     * @cfg {Number} page
     * The page for this operation.
     */
    @config
    page = null;

    /**
     * @cfg {Sorter[]} sorters
     * Optional array of sorter objects. Only applies to 'read' actions.
     */
    @config
    sorters = null;

    /**
     * @cfg {Number} start
     * The start index (offset), used in paging when running a 'read' action.
     */
    @config
    start = null;
    
    doExecute () {
        return this.proxy.read(this);
    }
    
    doProcess () {
        // empty
    }

    write (request) {
        // The writer has no role in Read requests...
        return request;
    }
}

export { ReadOperation };
