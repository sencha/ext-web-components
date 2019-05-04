import { define, config, clone } from '../../../extjs-core/src';
import { Filter, Sorter } from '../../../extjs-util/src/collection';
import { stableSort } from '../../../extjs-util/src/Array';

import { ClientProxy } from './Client';

/**
 * In-memory proxy. This proxy simply uses a local variable for data storage/retrieval, so its
 * contents are lost on every page refresh.
 *
 * Usually this Proxy isn't used directly, serving instead as a helper to a
 * {@link Store Store} where a reader is required to load data. For example, say we have
 * a Store for a User model and have some inline data we want to load, but this data isn't in quite
 * the right format: we can use a MemoryProxy with a JsonReader to read it into our Store:
 *
 *     // this is the model we will be using in the store
 *     Ext.define('User', {
 *         extend: 'Model',
 *         fields: [
 *             { name: 'id',    type: 'int' },
 *             { name: 'name',  type: 'string' },
 *             { name: 'phone', type: 'string', mapping: 'phoneNumber' }
 *         ]
 *     });
 *
 *     // this data does not line up to our model fields - the phone field is called phoneNumber
 *     var data = {
 *         users: [
 *             {
 *                 id: 1,
 *                 name: 'Ed Spencer',
 *                 phoneNumber: '555 1234'
 *             },
 *             {
 *                 id: 2,
 *                 name: 'Abe Elias',
 *                 phoneNumber: '666 1234'
 *             }
 *         ]
 *     };
 *
 *     // note how we set the 'root' in the reader to match the data structure above
 *     var store = Ext.create('Store', {
 *         autoLoad: true,
 *         model: 'User',
 *         data: data,
 *         proxy: {
 *             type: 'memory',
 *             reader: {
 *                 type: 'json',
 *                 rootProperty: 'users'
 *             }
 *         }
 *     });
 */
@define({
    type: 'memory'
})
class MemoryProxy extends ClientProxy {
    /**
     * @cfg {Boolean} clearOnRead
     * By default MemoryProxy data is persistent, and subsequent reads will read the
     * same data. If this is not required, configure the proxy using `clearOnRead: true`.
     */
    @config
    clearOnRead = false;

    /**
     * @cfg {Object} data
     * Optional data to pass to configured Reader.
     */
    @config({
        merge (newValue) {
            // Because of destructive association reading, we always need to clone incoming
            // data to protect externally owned data objects from mutation
            return newValue && clone(newValue);
        }
    })
    data = null;

    /**
     * @cfg {Boolean} paging
     * Configure as `true` to enable this MemoryProxy to honour a read operation's `start`
     * and `limit` options.
     *
     * When `true`, read operations will be able to read *pages* of records from the data
     * object.
     */
    @config
    paging = false;

    clear () {
        // empty
    }

    /**
     * Fake processing function to commit the records, set the current operation
     * to successful and call the callback if provided. This function is shared
     * by the create, update and destroy methods to perform the bare minimum
     * processing required for the proxy to register a result from the action.
     * @private
     */
    finishOperation (operation) {
        let records = operation.records;
        let rec;
            
        for (rec of records) {
            // Because Memory proxy is synchronous, the commit must call store#afterErase
            rec.dropped = !!operation.isDestroyOperation;
            rec.commit();
        }

        operation.setSuccessful(true);
    }
    
    /**
     * Currently this is a hard-coded method that simply commits any records and sets the
     * operation to successful, then calls the callback function, if provided. It is
     * essentially mocking a server call in memory, but since there is no real back end in
     * this case there's not much else to do. This method can be easily overridden to
     * implement more complex logic if needed.
     * @param {Operation} operation The Operation to perform
     * @method
     */
    create (operation) {
        this.finishOperation(operation);
    }
    
    /**
     * Currently this is a hard-coded method that simply commits any records and sets the
     * operation to successful, then calls the callback function, if provided. It is
     * essentially mocking a server call in memory, but since there is no real back end in
     * this case there's not much else to do. This method can be easily overridden to
     * implement more complex logic if needed.
     * @param {Operation} operation The Operation to perform
     * @method
     */
    update (operation) {
        this.finishOperation(operation);
    }
    
    /**
     * Currently this is a hard-coded method that simply commits any records and sets the
     * operation to successful, then calls the callback function, if provided. It is
     * essentially mocking a server call in memory, but since there is no real back end in
     * this case there's not much else to do. This method can be easily overridden to
     * implement more complex logic if needed.
     * @param {Operation} operation The Operation to perform
     * @method
     */
    erase (operation) {
        this.finishOperation(operation);
    }

    /**
     * Reads data from the configured {@link #data} object. Uses the Proxy's {@link #reader},
     * if present.
     * @param {Operation} operation The read Operation
     */
    read (operation) {
        let me = this;
        let reader = me.reader;
        let resultSet = reader.read(me.data, {
            recordCreator: reader.defaultRecordCreatorFromServer
        });
        let records = resultSet.records;
        let sorters = operation.sorters;
        let grouper = operation.grouper;
        let filters = operation.filters;
        let start = operation.start;
        let limit = operation.limit;
        let meta;

        // Apply filters, sorters, and start/limit options
        if (operation.process(resultSet, null, null, false) !== false) {
            // If we are configured to read the data one time only, clear our data
            if (operation.success && me.clearOnRead) {
                me.data = null;
            }

            // Filter the resulting array of records
            if (filters && filters.length) {
                // Total will be updated by setting records
                records = records.filter(Filter.createFilterFn(filters));

                resultSet.total = records.length;
            }

            // Remotely, grouper just mean top priority sorters
            if (grouper) {
                // Must concat so as not to mutate passed sorters array which could be the items
                // property of the sorters collection
                sorters = sorters ? sorters.concat(grouper) : sorters;
            }

            // Sort by the specified grouper and sorters
            if (sorters && sorters.length) {
                stableSort(records, Sorter.createComparator(sorters));
            }

            // Reader reads the whole passed data object.
            // If successful and we were given a start and limit, slice the result.
            if (me.paging && start !== undefined && limit !== undefined) {
                if (start < resultSet.total) {
                    // Range is valid, slice it up.
                    records = records.slice(start, start + limit);
                }
                else {
                    // Attempt to read past end of memory dataset - convert to failure
                    resultSet.setConfig({
                        success: false,
                        records: records = [],
                        total: 0
                    });
                }
            }

            resultSet.records = records;
            operation.records = records;
            
            operation.setCompleted();

            // If a JsonReader detected metadata, process it now. This will fire the
            // 'metaChange' event which the Store processes to fire its own 'metaChange'.
            meta = resultSet.metadata;
            
            if (meta) {
                me.onMetaChange(meta);
            }
        }
    }
}

export { MemoryProxy };
