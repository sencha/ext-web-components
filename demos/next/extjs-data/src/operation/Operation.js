import {
    Ext,
    Base, Factoryable,
    define, config, EMPTY
} from '../../../extjs-core/src';

import { Completable } from '../../../extjs-util/src/mixins';
import { toValueMap } from '../../../extjs-util/src/Array';

// This private object is used to save on memory allocation. This instance is used to
// apply server record updates as part of a record commit performed by calling the
// set() method on the record. See doProcess.
const commitSetOptions = { convert: true, commit: true };

/**
 * Represents a read or write operation performed by a {@link Proxy Proxy}.
 * Operation objects are used to enable communication between Stores and Proxies.
 * Application developers should rarely need to interact with Operation objects directly.
 *
 * Several Operations can be batched together in a {@link BatchOperation batch}.
 */
@define({
    mixins: [
        Completable,
        Factoryable
    ],
    
    alias: 'operation.base',
    
    factory: {
        defaultType: null
    },
    
    prototype: {
        /**
         * @property {'create'/'read'/'update'/'destroy'} action
         * This field is provided by the derived class.
         * @readonly
         */
        action: null,
    
        /**
         * @property {Boolean} complete
         * The completion status of this Operation. Use {@link #isComplete}.
         * @readonly
         * @private
         */
        complete: false,

        deferred: null,
    
        /**
         * @property {String/Object} error
         * The error object passed when {@link #setException} was called. This could be any
         * object or primitive.
         * @private
         */
        error: null,
        
        /**
         * @property {Boolean} exception
         * The exception status of this Operation.
         * @readonly
         * @private
         */
        exception: false,
    
        /**
         * @property {Number} foreignKeyDirection
         * This number is used by `{@link BatchOperation#sort}` to order operations of the same
         * type. This value is multiplied by the "entity rank" (which is determined by
         * foreign-key dependencies) to invert the direction of the sort based on the
         * type of operation. Only `DestroyOperation` overrides this value.
         * @private
         * @readonly
         */
        foreignKeyDirection: 1,
    
        /**
         * @property {Number} order
         * This number is used by `{@link BatchOperation#sort}` to order operations. Order
         * of operations of the same type is determined by foreign-key dependencies. The
         * array of operations is sorted by ascending (increasing) values of `order`.
         * @private
         * @readonly
         */
        order: 0,
    
        /**
         * @property {Boolean} running
         * The run status of this Operation. Use {@link #isRunning}.
         * @readonly
         * @private
         */
        running: false,
    
        /**
         * @property {Boolean} started
         * The start status of this Operation. Use {@link #isStarted}.
         * @readonly
         */
        started: false,
    
        /**
         * @property {Boolean} success
         * Is `true` if the `Operation` was successful, `false` if not. This starts as
         * `null` and is set to `true` or `false` by the Proxy that is executing the
         * `Operation`. It is also set to `false` by {@link #setException}. Use
         * {@link #wasSuccessful} to query success status.
         * @readonly
         * @private
         */
        success: null
    }
})
class Operation extends Base {
    /**
     * @cfg {BatchOperation} 
     * The batch for this operation, if applicable
     */
    @config
    batch = null;

    /**
     * @cfg {Boolean} cache
     * Set to `true` or `false` to either enable or disable HTTP caching, respectively. By
     * default this is `null` to allow the `Proxy` to control this behavior.
     */
    @config
    cache = null;
    
    /**
     * @cfg {String} cacheString
     * The name of the cache param added to the url when using disabling the `cache`.
     */
    @config
    cacheString = '_dc';

    /**
     * @cfg {Function} callback
     * Function to execute when operation completed.
     * @cfg {Model[]} callback.records Array of records.
     * @cfg {Operation} callback.operation The Operation itself.
     * @cfg {Boolean} callback.success True when operation completed successfully.
     */
    @config
    callback = null;
    
    @config
    id = null;

    // We use this because in a lot of cases the developer can indirectly pass
    // a callback/scope and that will get pushed on to the operation. As such,
    // create our own hook for the callback that will fire first
    /**
     * @cfg {Function} internalCallback
     * A callback to run before the {@link #callback}. 
     * @private
     */
    @config
    internalCallback = null;

    /**
     * @cfg {Object} params
     * Parameters to pass along with the request when performing the operation.
     */
    @config
    params = null;
    
    /**
     * @cfg {Proxy} proxy
     * The proxy for this operation
     */
    @config
    proxy = null;
    
    /**
     * @cfg {Function} recordCreator
     * Passed to the reader, see {@link Reader#read}
     * @private
     */
    @config
    recordCreator = null;
    
    /**
     * @cfg {Model[]} records
     * The records associated with this operation. If this is a `read` operation, this
     * will be `null` until data is returned from the {@link Proxy}.
     *
     * For create, update, and destroy operations the operation's initially configured
     * records will be returned, although the proxy may modify these records' data at some
     * point after the operation is initialized.
     */
    @config
    records = null;
    
    /**
     * @cfg {Request} request
     * The request for this operation.
     */
    @config
    request = null;
    
    /**
     * @private
     * @cfg {Object} response
     * The response for this operation.
     */
    @config
    response = null;
    
    /**
     * @cfg {ResultSet} resultSet
     * The ResultSet for this operation.
     * @accessor
     */
    @config
    resultSet = null;
    
    /**
     * @cfg {Object} scope
     * Scope for the {@link #callback} function.
     */
    @config('!merge')
    scope = null;

    /**
     * @cfg {Boolean} sequential
     * `true` if this Operation is to be executed sequentially. This property is inspected
     * by a {@link BatchOperation batch} to see if a series of operations can be executed
     * in parallel or not.
     */
    @config
    sequential = true;

    /**
     * @cfg {String} url
     * The url for this operation. Typically this will be provided by a proxy and not configured
     * here.
     */
    @config
    url = null;

    //---------------------------------------------------------------------------------
    // Life-cycle

    dtor () {
        if (this.running) {
            this.abort();
        }
    }

    //---------------------------------------------------------------------------------
    // Methods (alphabetic order)
    
    /**
     * Aborts the processing of this operation on the {@link #proxy}.
     * This is only valid for proxies that make asynchronous requests.
     */
    abort () {
        let me = this;
        let request = me.request;
        let proxy;
        
        me.aborted = true;
            
        if (me.running && request) {
            proxy = me.proxy;
            
            if (proxy && !proxy.destroyed) {
                proxy.abort(request);
            }
            
            me.request = null;
        }
        
        me.running = false;
    }
    
    //---------------------------------------------------------------------------------
    // Configs (alphabetic order)

    // resultSet

    updateResultSet (resultSet) {
        let records = resultSet && resultSet.records;
        
        if (records && !this.records) {
            this.records = records;
        }
    }

    //---------------------------------------------------------------------------------
    // Internals (alphabetic order)

    /**
     * Process records in the operation after the response is successful and the result
     * set is parsed correctly. The base class implementation of this method is used by
     * "create" and "update" operations to allow the server response to update the client
     * side records.
     * 
     * @param {ResultSet} resultSet The result set
     * @param {Request} request The request
     * @param {Object} response The response
     * @protected
     */
    doProcess (resultSet, request, response) {
        let me = this;
        let clientRecords = me.records || EMPTY;
        let clientLen = clientRecords.length;
        let clientIdProperty = clientLen && clientRecords[0].constructor.clientIdProperty;
        let serverRecords = resultSet.records; // a data array, not records yet
        let serverLen = serverRecords ? serverRecords.length : 0;
        let clientMap, serverRecord, clientRecord, i;

        if (serverLen && clientIdProperty) {
            // Linear pass over clientRecords to map them by their idProperty
            clientMap = toValueMap(clientRecords, 'id');

            // Linear pass over serverRecords to match them by clientIdProperty to the
            // corresponding clientRecord (if one exists).
            for (i = 0; i < serverLen; ++i) {
                serverRecord = serverRecords[i];
                clientRecord = clientMap[serverRecord[clientIdProperty]];

                if (clientRecord) {
                    // Remove this one so we don't commit() on it next
                    delete clientMap[clientRecord.id];
                    // Remove the clientIdProperty value since we don't want to store it
                    delete serverRecord[clientIdProperty];

                    clientRecord.set(serverRecord, commitSetOptions); // set & commit
                }
                //<debug>
                else {
                    Ext.log.warn('Ignoring server record: ', serverRecord);
                }
                //</debug>
            }

            // Linear pass over any remaining client records.
            for (i in clientMap) {
                clientMap[i].commit();
            }
        }
        else {
            // Either no serverRecords or no clientIdProperty, so index correspondence is
            // all we have to go on. If there is no serverRecord at a given index we just
            // commit() the record.
            for (i = 0; i < clientLen; ++i) {
                clientRecord = clientRecords[i];

                if (serverLen === 0 || !(serverRecord = serverRecords[i])) {
                    // once i > serverLen then serverRecords[i] will be undefined...
                    clientRecord.commit();
                }
                else {
                    clientRecord.set(serverRecord, commitSetOptions);
                }
            }
        }
    }

    /**
     * Executes the operation on the configured {@link #proxy}.
     * @return {Request} The request object
     * @private
     */
    execute () {
        let me = this;
        let request;

        delete me.error;
        delete me.success;
        me.complete = me.exception = false;
        
        me.setStarted();
        me.request = request = me.doExecute();
        
        if (request) {
            request.operation = me;
        }
        
        return request;
    }
    
    process (resultSet, request, response, autoComplete) {
        let me = this;
        
        autoComplete = autoComplete !== false;
        
        me.response = response;
        me.resultSet = resultSet;
        
        if (resultSet.success) {
            me.doProcess(resultSet, request, response);
            me.setSuccessful(autoComplete);
        }
        else if (autoComplete) {
            me.setException(resultSet.message);
        }
    }

    /**
     * Marks the Operation as completed.
     */
    setCompleted () {
        let me = this;
        let proxy;
        
        me.complete = true;
        me.running = false;
        
        if (!me.destroying) {
            me.triggerCallbacks();
        }
        
        // Operation can be destroyed in callback
        if (me.destroyed) {
            return;
        }
        
        proxy = me.proxy;
        
        // Store and proxy could be destroyed in callbacks
        if (proxy && !proxy.destroyed) {
            proxy.completeOperation(me);
        }
    }

    /**
     * Marks the Operation as having experienced an exception. Can be supplied with an option
     * error message/object.
     * @param {String/Object} error (optional) error string/object
     */
    setException (error) {
        let me = this;
        
        me.exception = true;
        me.success = me.running = false;
        me.error = error;
        
        me.setCompleted();
    }

    /**
     * Marks the Operation as started.
     */
    setStarted () {
        this.started = this.running = true;
    }

    /**
     * Marks the Operation as successful.
     * @param {Boolean} [complete] `true` to also mark this operation
     * as being complete See {@link #setCompleted}.
     */
    setSuccessful (complete) {
        this.success = true;
        
        if (complete) {
            this.setCompleted();
        }
    }

    triggerCallbacks () {
        let me = this;
        let fn = me.internalCallback;
        let success = me.wasSuccessful();
        let err;

        if (success) {
            me._completionOK();
        }
        else {
            err = new Error('Operation failed');
            err.operation = me;

            me._completionFail(err);
        }
        
        // Call internal callback first (usually the Store's onProxyLoad method)
        if (fn) {
            me.internalCallback = null;

            fn(me);
            
            // Operation callback can cause it to be destroyed
            if (me.destroyed) {
                return;
            }
        }

        // Call the user's callback as passed to Store's read/write
        fn = me.callback;
        
        if (fn) {
            // Maintain the public API for callback
            fn.call(me.scope || me, me.records, me, success);
            
            if (me.destroyed) {
                return;
            }
            
            me.callback = null;
            me.scope = null;
        }
    }

    /**
     * Returns true if the Operation has completed and was successful
     * @return {Boolean} True if successful
     */        
    wasSuccessful () {
        return this.complete && this.success;
    }

    /**
     * Checks whether this operation should cause writing to occur.
     * @param {RequestOptions} options
     * @param {Writer} writer
     * @return {RequestOptions}
     */
    write (options, writer) {
        return (writer && writer.write(options)) || options;
    }
}

export { Operation };
