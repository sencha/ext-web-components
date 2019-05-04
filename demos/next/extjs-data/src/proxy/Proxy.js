import {
    Base, Factoryable, Watchable,

    define, config, copy, configFromType, is
} from '../../../extjs-core/src';

import { callback } from '../../../extjs-util/src';
import { Cloneable } from '../../../extjs-util/src/mixins';

import { BatchOperation } from '../operation/Batch';

import '../reader/Json';
import '../writer/Json';

/**
 * Proxies are used by {@link Store Stores} to handle the loading and saving of
 * {@link Model Model} data. Usually developers will not need to create or interact
 * with proxies directly.
 *
 * # Types of Proxy
 *
 * There are two main types of Proxy - `ClientProxy` and `ServerProxy`. Client proxies
 * save their data locally and include the following subclasses:
 *
 * - {@link LocalStorageProxy} - saves data to `localStorage`.
 * - {@link SessionStorageProxy} - saves data to `sessionStorage`.
 * - {@link MemoryProxy} - holds data in memory, any data is lost when the page is refreshed.
 *
 * Server proxies save their data by sending requests to some remote server. These proxies
 * include:
 *
 * - {@link AjaxProxy} - sends requests to a server on the same domain
 * - {@link JsonPProxy} - uses JSON-P to send requests to a server on a different domain.
 * - {@link RestProxy} - uses HTTP methods (GET/PUT/POST/DELETE) to communicate with server.
 *
 * Proxies operate on the principle that all operations performed are either Create, Read,
 * Update or Delete. These four operations are mapped to the methods {@link #method!create},
 * {@link #method!read}, {@link #method!update} and {@link #method!erase} respectively.
 * Each subclass implements these functions.
 *
 * The CRUD methods each expect an {@link Operation} object as the only argument. The
 * `Operation` encapsulates information about the action the `Store` wishes to perform,
 * the {@link Model model} instances that are to be modified, etc. See the
 * {@link Operation} documentation for more details. Each CRUD
 * method also accepts a callback function to be called asynchronously on completion.
 *
 * Proxies also support batching of Operations via a {@link Batch} object, invoked
 * by the {@link #batch} method.
 */
@define({
    tags: {
        /**
         * @property {Boolean} synchronous
         * Identifies the proxy as (a)synchronous.
         * @readonly
         */
        synchronous: false
    },

    mixins: [
        Factoryable,
        Cloneable
    ],

    alias: 'proxy.proxy', // also configures Factoryable
    
    cloneable: {
        source: 'initial'
    }
})
class Proxy extends Watchable {
    /**
     * @cfg {Boolean} batchActions
     * True to batch actions of a particular type when synchronizing the store.
     */
    @config
    batchActions = true;

    /**
     * @cfg {String/String[]} batchOrder
     * Comma-separated ordering 'create', 'update' and 'destroy' actions when batching.
     * Override this to set a different order for batched CRUD actions to be executed.
     * Defaults to 'create,update,destroy'.
     */
    @config('cached')
    batchOrder = 'create,update,destroy';

    /**
     * @cfg {String/Model} model
     * The name of the Model to tie to this Proxy. Can be either the string name of the Model,
     * or a reference to the Model constructor. Required.
     */
    @config
    model = null;

    /**
     * @cfg {Object/String/Reader} reader
     * The Reader to use to decode the server's response or data read
     * from client. This can either be a Reader instance, a config object or just a
     * valid Reader type name (e.g. 'json', 'xml').
     */
    @config('destroy')
    reader = {
        type: 'json'
    };

    /**
     * @cfg {Object/String/Writer} writer
     * The Writer to use to encode any request sent to the server or
     * saved to client. This can either be a Writer instance, a config object or just
     * a valid Writer type name (e.g. 'json', 'xml').
     */
    @config('destroy')
    writer = {
        type: 'json'
    };

    //---------------------------------------------------------------------------------
    // Life-cycle

    ctor () {
        // We need to abort all pending operations when destroying
        this.pendingOperations = new Map();
    }
    
    dtor () {
        this.cancelAll();
        
        this.pendingOperations = null;
    }

    //---------------------------------------------------------------------------------
    // Configs (alphabetic order)

    // batchOrder
    
    applyBatchOrder (order) {
        return (typeof order === 'string') ? order.split(',') : order;
    }
    
    // model

    updateModel (model) {
        let reader;
        
        if (model) {
            reader = this.reader;
                
            if (reader && !reader.model) {
                reader.model = model;
            }
        }
    }
    
    // reader
    
    applyReader (reader) {
        // Synchronous proxies need to force keepRawData to allow Grid features
        // like Summary and Grouping access rawData after the Reader processed records.
        // It doesn't do much harm since synchronous proxies are Client side ones,
        // which will keep their datasets in memory or local storage anyway.
        if (this.synchronous) {
            reader = reader ? configFromType(reader) : {};
            reader.keepRawData = true;
        }
        
        return Base.Factory.reader(reader);
    }
    
    updateReader (reader) {
        let me = this;
        let model;
        
        if (reader) {
            model = me.model;
                
            if (!model) {
                model = reader.model;
                
                if (model) {
                    me.model = model;
                }
            }
            else {
                reader.model = model;
            }
            
            if (reader.responseType != null) {
                me.responseType = reader.responseType;
            }
        }
    }
    
    // writer

    applyWriter (writer) {
        return writer && Base.Factory.writer(writer);
    }
    
    updateWriter (writer) {
        // XML Writers may have a record config to define the node name of each record tag.
        // If not set, but the Reader has a record config, use the Reader's record config.
        if (writer && !writer.record) {
            let record = this.reader.record;

            if (record) {
                writer.record = record;
            }
        }
    }

    //---------------------------------------------------------------------------------
    // Methods (alphabetic order)

    abort () {
        // empty
    }

    /**
     * Performs a batch of {@link Operation Operations}, in the order specified
     * by {@link #batchOrder}. Used internally by {@link Store}'s
     * {@link Store#sync sync} method. Example usage:
     *
     *     myProxy.batch({
     *         create : [myModel1, myModel2],
     *         update : [myModel3],
     *         destroy: [myModel4, myModel5]
     *     });
     *
     * Where the myModel* above are {@link Model Model} instances - in this case 1 and 2
     * are new instances and have not been saved before, 3 has been saved previously but needs to be
     * updated, and 4 and 5 have already been saved but should now be destroyed.
     * 
     * Note that the previous version of this method took 2 arguments (operations and listeners).
     * While this is still supported for now, the current signature is now a single `options`
     * argument that can contain both operations and listeners, in addition to other options.
     * The multi-argument signature will likely be deprecated in a future release.
     *
     * @param {Object} options Object containing one or more properties supported by the batch
     * method:
     * 
     * @param {Object} options.operations Object containing the records to act upon, keyed
     * by action name
     * 
     * @param {Object} [options.listeners] Event listeners object passed straight through to the
     * Batch - see {@link Batch} for details
     * 
     * @param {Batch/Object} [options.batch] A {@link Batch} object (or batch
     * config to apply  to the created batch). If unspecified a default batch will be auto-created.
     * 
     * @param {Function} [options.callback] The function to be called upon completion of processing
     * the batch. The callback is called regardless of success or failure and is passed the
     * following parameters:
     * @param {Batch} options.callback.batch The {@link Batch batch} that was
     * processed, containing all operations in their current state after processing
     * @param {Object} options.callback.options The options argument that was originally passed
     * into batch
     * 
     * @param {Function} [options.success] The function to be called upon successful completion
     * of the batch. The  success function is called only if no exceptions were reported in any
     * operations. If one or more exceptions occurred then the `failure` function will be called
     * instead. The success function is called  with the following parameters:
     * @param {Batch} options.success.batch The {@link Batch batch} that was
     * processed, containing all operations in their current state after processing
     * @param {Object} options.success.options The options argument that was originally passed into
     * batch
     * 
     * @param {Function} [options.failure] The function to be called upon unsuccessful completion
     * of the batch. The  failure function is called when one or more operations returns an
     * exception during processing (even if some operations were also successful). In this case you
     * can check the batch's {@link Batch#exceptions exceptions} array to see exactly
     * which operations had exceptions. The failure function is called with the following
     * parameters:
     * @param {Batch} options.failure.batch The {@link Batch batch} that was
     * processed, containing all operations in their current state after processing
     * @param {Object} options.failure.options The options argument that was originally passed into
     * batch
     * 
     * @param {Object} [options.scope] The scope in which to execute any callbacks (i.e. the `this`
     * object inside the callback, success and/or failure functions). Defaults to the proxy.
     *
     * @param {Object} [listeners] (deprecated) If `options` is the `operations`, this
     * parameter is the listeners. Instead of passing these two arguments, the proper form
     * is to pass them as:
     *
     *      batch({
     *          operations: ...
     *          listeners: ...
     *      });
     *
     * @return {Batch} The newly created Batch
     */
    batch (options, listeners) {
        let me = this;
        let batch, records, action, record;

        if (options.operations === undefined) {
            // the old-style (operations, listeners) signature was called
            // so convert to the single options argument syntax
            options = {
                operations: options,
                listeners: listeners
            };
        }

        if (options.batch) {
            if (options.batch.runOperation !== undefined) {
                batch = copy({
                    proxy: me,
                    listeners: {}
                }, options.batch);
            }
        }
        else {
            options.batch = {
                proxy: me,
                listeners: options.listeners || {}
            };
        }

        if (!batch) {
            batch = new BatchOperation(options.batch);
        }

        // Use single so that the listener gets removed upon completion.
        batch.once({
            complete: me.onBatchComplete.bind(me, options),
            // Ext.bind(me.onBatchComplete, me, [options], 0), null, {
            priority: 1000
        });

        batch.$destroyOwner = options.$destroyOwner;

        for (action of me.batchOrder) {
            records = options.operations[action];

            if (records) {
                if (me.batchActions) {
                    batch.add(me.createOperation({
                        type: action,
                        records: records,
                        // Relay any additional params through to the Operation (and Request).
                        params: options.params
                    }));
                }
                else {
                    for (record of records) {
                        batch.add(me.createOperation({
                            type: action,
                            records: [record],
                            // Relay any additional params through to the Operation (and Request).
                            params: options.params
                        }));
                    }
                }
            }
        }

        batch.start();
        
        return batch;
    }

    /**
     * Performs the given create operation.
     * @param {Operation} operation The Operation to perform
     */
    create () {
        // abstract
    }

    /**
     * Performs the given destroy operation.
     * @param {Operation} operation The Operation to perform
     */
    erase () {
        // abstract
    }

    /**
     * Performs the given read operation.
     * @param {Operation} operation The Operation to perform
     */
    read () {
        // abstract
    }

    /**
     * Performs the given update operation.
     * @param {Operation} operation The Operation to perform
     */
    update () {
        // abstract
    }

    //---------------------------------------------------------------------------------
    // Internals (alphabetic order)

    cancelAll (owner) {
        for (let op of this.pendingOperations.values()) {
            if (op && (!owner || op.$destroyOwner === owner)) {
                if (op && op.running) {
                    op.abort();
                }

                op.destroy();
            }
        }
    }
    
    completeOperation (operation) {
        this.pendingOperations.delete(operation.$iid);
    }
    
    createOperation (config) {
        if (!config.isOperation && config.action && !config.type) {
            config = copy({ type: config.action }, config);
        }

        let operation = Base.Factory.operation(config);
        
        operation.proxy = this;
        
        this.pendingOperations.set(operation.$iid, operation);
        
        return operation;
    }

    /**
     * The internal callback that the proxy uses to call any specified user callbacks after
     * completion of a batch
     * @private
     */
    onBatchComplete (batchOptions, batch) {
        let scope = batchOptions.scope || this;

        if (batch.exception) {
            if (is.callable(batchOptions.failure)) {
                callback(batchOptions.failure, scope, [batch, batchOptions]);
            }
        }
        else if (is.callable(batchOptions.success)) {
            callback(batchOptions.success, scope, [batch, batchOptions]);
        }

        if (is.callable(batchOptions.callback)) {
            callback(batchOptions.callback, scope, [batch, batchOptions]);
        }
        
        // In certain cases when the batch was created by a ProxyStore we need to
        // defer destruction until the store can process the batch results.
        // The store will then destroy the batch.
        if (!batch.$destroyOwner) {
            batch.destroy();
        }
    }

    /**
     * Called each time the reader's onMetaChange is called so that the proxy can fire the
     * metachange event
     * @private
     */
    onMetaChange (meta) {
        this.fireEvent('metaChange', this, meta);
    }

    /**
     * @event metachange
     * Fires when this proxy's reader provides new metadata. Metadata usually consists
     * of new field definitions, but can include any configuration data required by an
     * application, and can be processed as needed in the event handler.
     * This event is currently only fired for JsonReaders. Note that this event is also
     * propagated by {@link Store}, which is typically where it would be handled.
     * @param {Ext.data.proxy.Proxy} this
     * @param {Object} meta The JSON metadata
     */
}

export { Proxy };
