import {
    //<debug>
    assert,
    //</debug>

    Base, Ext,
    define, config,
    buffered, chain, copy, destroy, is, remove, STOP
} from '../../../extjs-core/src';

import { Schema } from '../schema/Schema';
import { Model } from '../model/Model';

import { AbstractStore } from './Abstract';

import '../proxy/Proxy';

/**
 * ProxyStore is a superclass of {@link Store} and {@link VirtualStore}. It is not used
 * directly.
 *
 * ProxyStore provides the basic configuration for anything that can be considered a Store.
 * It expects to be given a {@link Model Model} that represents the type of data in the
 * Store. It also expects to be given a {@link Proxy} that handles the loading of data
 * into the Store.
 *
 * ProxyStore provides a few helpful methods such as {@link #method!load} and {@link #sync},
 * which load and save data respectively, passing the requests through the configured
 * {@link #proxy}.
 *
 * Subclasses add extra behavior to each of these functions. Note also that ProxyStore
 * subclasses have their own way of storing data. With {@link Store}, the data is tracked
 * in a {@link Collection} of records, whereas {@link VirtualStore} caches sparse pages of
 * records.
 *
 * The store provides filtering and sorting support. This sorting/filtering can happen on
 * the client side or can be completed on the server. This is controlled by the
 * {@link Store#remoteSort remoteSort} and {@link Store#remoteFilter remoteFilter}
 * config options. For more information see the {@link #sort} and
 * {@link Store#filter filter} methods.
 */
@define({
    prototype: {
        /**
         * @property {Number} totalSize
         * The total number of records available via the Proxy. This is 0 if no value
         * has been set via the reader.
         * 
         * This will usually differ from {@link #size} when using paging. The value
         * of the `size` property is the number of records loaded into this store at that
         * moment, while `totalSize` returns the number of records that would be loaded
         * if the store contained all data available to the proxy.
         */
        totalSize: 0,

        //--------------------------------------------------------------------------
        // Internal
        
        /**
         * @property {Number} autoSyncSuspended
         * A counter to track suspensions.
         * @private
         */
        autoSyncSuspended: 0,
    
        /**
         * @property {Boolean} implicitModel
         * The class name of the model that this store uses if no explicit {@link #model}
         * is given.
         * @private
         */
        implicitModel: Model,
    
        /**
         * @property {Object} lastOptions
         * Property to hold the last options from a {@link #method!load} method call. This
         * object is used for the {@link #method!reload} to reuse the same options. Please
         * see {@link #method!reload} for a simple example on how to use the lastOptions
         * property.
         */
    
        /**
         * @property {Model[]} removed
         * Temporary cache in which removed records are kept until successfully
         * synchronised with a Proxy, at which point this is cleared.
         *
         * This cache is maintained unless you set `trackRemoved` to `false`.
         *
         * @protected
         * @readonly
         */
        removed: null
    }
})
class ProxyStore extends AbstractStore {
    /**
     * @cfg {String/Model} model
     * Name of the {@link Model Model} associated with this store. See
     * {@link Model#entityName}.
     *
     * May also be the actual Model subclass.
     *
     * This config is required for the store to be able to read data unless you have
     * defined the {@link #fields} config which will create an anonymous
     * `Model`.
     */
    @config('nullify')
    model = undefined;

    /**
     * @cfg fields
     * @inheritdoc Model#cfg!fields
     * 
     * @localdoc **Note:** In general, this configuration option should only be used 
     * for very simple stores. For anything more complicated, such as specifying a
     * particular id property or associations, a {@link Model Model} should be defined
     * and specified for the {@link #model} config.
     */
    @config
    fields = null;

    // @cmd-auto-dependency {aliasPrefix : "proxy."}
    /**
     * @cfg {String/Proxy/Object} proxy
     * The Proxy to use for this Store. This can be either a string, a config object
     * or a Proxy instance - see {@link #setProxy} for details.
     */
    @config('nullify')
    proxy = undefined;

    /**
     * @cfg {Boolean/Object} autoLoad
     * If data is not specified, and if autoLoad is true or an Object, this store's
     * load method is automatically called after creation. If the value of autoLoad
     * is an Object, this Object will be passed to the store's load method.
     *
     * It's important to note that {@link Ext.data.TreeStore Tree Stores} will  
     * load regardless of autoLoad's value if expand is set to true on the 
     * {@link Ext.data.TreeStore#root root node}.
     */
    @config
    autoLoad = undefined;

    /**
     * @cfg {Boolean} autoSync
     * True to automatically sync the Store with its Proxy after every edit to one of
     * its Records. Defaults to false.
     */
    @config
    autoSync = false;

    /**
     * @cfg {String} batchUpdateMode
     * Sets the updating behavior based on batch synchronization. 'operation' (the
     * default) will update the Store's internal representation of the data after
     * each operation of the batch has completed, 'complete' will wait until the
     * entire batch has been completed before updating the Store's data. 'complete'
     * is a good choice for local storage proxies, 'operation' is better for remote
     * proxies, where there is a comparatively high latency.
     */
    @config
    batchUpdateMode = 'operation';
   
    /**
     * @cfg {Boolean} sortOnLoad
     * If true, any sorters attached to this Store will be run after loading data,
     * before the datachanged event is fired. Defaults to true, ignored if
     * {@link Store#remoteSort remoteSort} is true
     */
    @config
    sortOnLoad = true;

    /**
     * @cfg {Boolean} trackRemoved
     * This config controls whether removed records are remembered by this store for
     * later saving to the server.
     */
    @config
    trackRemoved = true;

    /**
     * @cfg {Boolean} immediateLoad
     * This defaults to `false` when this store's {@link #proxy} is asynchronous,
     * such as an {@link AjaxProxy}.
     *
     * When the proxy is synchronous, such as a {@link MemoryProxy}, this will be `true`.
     *
     * *NOTE:* This does not cause synchronous Ajax requests if configured `true` when
     * an Ajax proxy is used. It causes immediate issuing of an Ajax request when
     * {@link #method!load} is called rather than issuing the request a short time later.
     *
     * What this means is that when using an Ajax proxy, calls to 
     * {@link #method!load} do not fire the request to the remote resource 
     * immediately, but schedule a request to be made. This is so that multiple 
     * requests are not fired when mutating a store's remote filters and sorters (as 
     * happens during state restoration). The request is made only once after all 
     * relevant store state is fully set.
     */
    @config
    immediateLoad = -1;

    //---------------------------------------------------------------------------------
    // Life-cycle

    setup () {
        if (this.immediateLoad) {
            this.load.flush();
        }
    }

    // doDestroy () {
    //     var me = this,
    //         proxy = me.getProxy();
    //
    //     Ext.destroy(me.getData());
    //     me.data = null;
    //     me.setProxy(null);
    //
    //     if (proxy.autoCreated) {
    //         proxy.destroy();
    //     }
    //
    //     me.setModel(null);
    //
    //     me.callParent();
    // }

    //---------------------------------------------------------------------------------
    // Properties (alphabetic order)

    get loaded () {
        return this.loadCount > 0;
    }

    get loading () {
        return this.load.pending ? 'pending' : this._loading;
    }

    get synchronous () {
        return this.proxy.synchronous;
    }

    //---------------------------------------------------------------------------------
    // Configs (alphabetic order)
    
    // autoLoad

    updateAutoLoad (autoLoad) {
        // Ensure the data collection is set up
        this.getConfig('data');
        
        if (autoLoad) {
            // Defer the load until idle, when the store (and probably the view)
            // is fully constructed
            this.load(is.object(autoLoad) ? autoLoad : undefined);
        }
    }
    
    // fields

    applyFields (fields) {
        if (fields) {
            this.createImplicitModel(fields);
        }
    }
    
    // immediateLoad

    applyImmediateLoad (value) {
        // Default to true if the proxy is synchronous, and false otherwise if we get
        // -1 (the value we used to trigger the init) or null/undefined
        let immediate = (value == null || value === -1) ? this.synchronous : !!value;

        this.load.immediate = immediate;
        
        return immediate;
    }
    
    // model

    applyModel (model) {
        let me = this;
        
        if (model) {
            model = Schema.resolve(model);
        }
        else if (!me.destroying) {
            // If no model, ensure that the fields config is converted to a model.
            me.getConfig('fields');
            
            model = me.model || me.createImplicitModel();
        }
        
        return model;
    }
    
    // proxy

    applyProxy (proxy) {
        let me = this;
        let model = me.model;

        if (proxy !== null) {
            if (proxy) {
                if (proxy.isProxy) {
                    proxy.model = model;
                }
                else {
                    if (is.string(proxy)) {
                        proxy = {
                            type: proxy,
                            model: model
                        };
                    }
                    else if (!proxy.model) {
                        proxy = {
                            ...proxy,
                            model: model
                        };
                    }

                    proxy = Base.Factory.proxy(proxy);
                    proxy.autoCreated = me;
                }
            }
            else if (model) {
                proxy = model.proxy;
                me.useModelProxy = true;
            }
        
            if (!proxy) {
                proxy = Base.Factory.proxy('memory');
                proxy.autoCreated = me;
            }
        }

        return proxy;
    }
    
    updateProxy (proxy, oldProxy) {
        let me = this;
        
        me.proxyListeners = destroy(me.proxyListeners);
        
        if (oldProxy) {
            if (oldProxy.autoCreated === me) {
                oldProxy.destroy();
            }
            else {
                oldProxy.cancelAll(me);
            }
        }
    }
    
    // trackRemoved

    updateTrackRemoved (track) {
        this.cleanRemoved();
        this.removed = track ? [] : null;
    }

    //---------------------------------------------------------------------------------
    // Methods (alphabetic order)

    /**
     * Returns an array of all {@link Model records} added or updated since the last
     * commit. Note that the order of records returned is not deterministic and does not
     * indicate the order in which records were modified. Note also that removed records
     * are not included (use {@link #getRemovedRecords} for that).
     * @return {Model[]}
     */
    getModifiedRecords () {
        let ret = this.getNewRecords();
        
        ret.push(...this.getUpdatedRecords());

        return ret;
    }

    /**
     * Returns an array of all `{@link Model#phantom phantom}` records in this store.
     * @return {Model[]}
     */
    getNewRecords () {
        return [];
    }

    /**
     * Returns an array of all records that have been removed from the store but not yet
     * destroyed via the `proxy`. Note that this is a copy of the store's array, so it
     * may be modified if desired. This tracking requires the `trackRemoved` config to be
     * set to `true` (it is `true` by default).
     * @return {Model[]}
     */
    getRemovedRecords () {
        let removed = this.getRawRemovedRecords();
        
        return removed ? removed.slice() : [];
    }

    /**
     * Returns an array of all valid, non-phantom records that have been updated in this
     * store but not yet synchronized with the `proxy`.
     * @return {Model[]}
     */
    getUpdatedRecords () {
        return [];
    }

    /**
     * Marks this store as needing to load and remembers the relevant `options`. The actual
     * load is delayed slightly (see `immediateLoad` config). After the delay, this store
     * creates a `ReadOperation` to load using its configured {@link #proxy}. This operation
     * instance is returned if `immediateLoad` is set to `true`. When `immediateLoad` is
     * in its default state of `false`, this method has no immediate return value.
     * 
     * For more details on buffered methods, see the documentation for the `buffered`
     * decorator.
     *
     * Upon return of the data from whatever data source the proxy connected to, the
     * retrieved {@link Model records} will be loaded into this store, and the optional
     * callback will be called.
     * 
     * Example:
     *
     *      store.load((records, operation, success) => {
     *          // the operation object contains the details of the load operation
     *          
     *          console.log('loaded records');
     *      });
     *
     * To configure the `ReadOperation`, a config object can be provided:
     * 
     *      store.load({
     *          // ... options for the ReadOperation ...
     *          
     *          callback: (records, operation, success) => {
     *              console.log(records);
     *          }
     *      });
     *
     * Note that if another call to `load` is made before the buffered delay, this call
     * will be discarded and the callback will not be invoked.
     * 
     * Since `load` is a `buffered` method, it provides the standard buffered method API,
     * which means you can await the eventual load action and get the `ReadOperation`:
     * 
     *      store.load();
     *      
     *      let operation = await store.load.done();
     * 
     * This delay is always very short since the operation has only just been sent to the
     * server. To `await` the result, do this:
     * 
     *      store.load();
     *      
     *      let operation = await store.load.done();
     *      
     *      let result = await operation.completion();
     * 
     * Due to the buffered nature of the `load` method, the operation may in fact not be
     * the one requested by the initial `load` call. This can happen when store state is
     * being applied (for example, when using a `stateful` config).
     * 
     * @param {Object} [options] This is passed into the
     * {@link Operation Operation} object that is created and then sent to the
     * proxy's {@link Proxy#read} function. In addition to the options listed below,
     * this object may contain properties to configure the
     * {@link Operation Operation}.
     * @param {Function} [options.callback] A function which is called when the response arrives.
     * @param {Model[]} options.callback.records Array of records.
     * @param {Operation} options.callback.operation The Operation itself.
     * @param {Boolean} options.callback.success `true` when operation completed successfully.
     * @param {Boolean} [options.addRecords=false] Specify as `true` to *add* the incoming records
     * rather than the default which is to have the incoming records *replace* the existing store
     * contents.
     * 
     * @return {Operation|ProxyStore}
     */
    @buffered('asap')
    load (options) {
        let me = this;
        let operation;
        
        if (!me.destroying) {  // this flag, once set, is never cleared... for simplicity
            // Legacy option. Specifying a function was allowed.
            if (typeof options === 'function') {
                options = {
                    callback: options
                };
            }
            else {
                // We may mutate the options object in setLoadOptions.
                options = options ? chain(options) : {};
            }
    
            me.setLoadOptions(options);
    
            if (me.remoteSort && options.sorters) {
                me.fireEvent('beforesort', me, options.sorters);
            }

            operation = copy({
                type: 'read',
                scope: me
            }, options);

            operation.internalCallback = me.onProxyLoad.bind(me);
            
            // operation = {
            //     ...options,
            //
            //     internalCallback: me.onProxyLoad.bind(me)
            // };
            
            me.lastOptions = operation;
    
            me.loadOperation = operation = me.createOperation(operation);
    
            if (me.fireEvent('beforeload', me, operation) !== STOP) {
                me.onBeforeLoad(operation);
                me._loading = true;
                
                // Internal event, fired after the flag is set, we need
                // to fire this beforeload is too early
                me.fireEvent('beginload', me, operation);
                
                operation.execute();
            }
            else {
                // if (me.asynchronousLoad) {
                //     operation.abort();
                // }
                operation.abort();
                operation.setCompleted();
            }
        }

        return operation;
    }
    
    onLoadComplete (operation) {
        if (operation === this.loadOperation) {
            this.loadOperation = null;
            
            this.onProxyLoad(operation);
        }
    }

    /**
     * Reloads the store using the last options passed to the {@link #method!load} method.
     * You can use the reload method to reload the store using the parameters from the last load()
     * call. For example:
     *
     *     store.load({
     *         params : {
     *             userid : 22216
     *         }
     *     });
     *
     *     //...
     *
     *     store.reload();
     *
     * The initial {@link #method!load} execution will pass the `userid` parameter in the request.
     * The {@link #reload} execution will also send the same `userid` parameter in its request
     * as it will reuse the `params` object from the last {@link #method!load} call.
     *
     * You can override a param by passing in the config object with the `params` object:
     *
     *     store.load({
     *         params : {
     *             userid : 22216,
     *             foo    : 'bar'
     *         }
     *     });
     *
     *     //...
     *
     *     store.reload({
     *         params : {
     *             userid : 1234
     *         }
     *     });
     *
     * The initial {@link #method!load} execution sends the `userid` and `foo` parameters but in the
     * {@link #reload} it only sends the `userid` paramter because you are overriding the `params`
     * config not just overriding the one param. To only change a single param but keep other
     * params, you will have to get the last params from the {@link #lastOptions} property:
     *
     *     // make a copy of the last params so we don't affect future reload() calls
     *     var lastOptions = store.lastOptions,
     *         lastParams = Ext.clone(lastOptions.params);
     *
     *     lastParams.userid = 1234;
     *
     *     store.reload({
     *         params : lastParams
     *     });
     *
     * This will now send the `userid` parameter as `1234` and the `foo` param as `'bar'`.
     *
     * @param {Object} [options] A config object which contains options which may override the
     * options passed to the previous load call. See the
     * {@link #method!load} method for valid configs.
     */
    reload (options) {
        return this.load(copy({}, options, this.lastOptions));
    }

    /**
     * Removes all records from the store. This method does a "fast remove",
     * individual remove events are not called. The {@link #clear} event is
     * fired upon completion.
     */
    removeAll () {
        // individual store subclasses should implement a "fast" remove
        // and fire a clear event afterwards
    }

    /**
     * Resumes automatically syncing the Store with its Proxy. Only applicable if
     * {@link #autoSync} is `true`
     * @param {Boolean} syncNow Pass `true` to synchronize now. Only synchronizes with
     * the Proxy if the suspension count has gone to zero (We are not under a higher level
     * of suspension).
     */
    resumeAutoSync (syncNow) {
        let me = this;

        //<debug>
        assert(me.autoSyncSuspended, 'Mismatched call to resumeAutoSync');
        //</debug>
        
        if (me.autoSyncSuspended && ! --me.autoSyncSuspended) {
            if (syncNow) {
                me.sync();
            }
        }
    }

    /**
     * Suspends automatically syncing the Store with its Proxy. Only applicable if
     * {@link #autoSync} is `true`
     */
    suspendAutoSync () {
        ++this.autoSyncSuspended;
    }

    /**
     * Synchronizes the store with its {@link #proxy}. This asks the proxy to batch
     * together any new, updated and deleted records in the store, updating the store's
     * internal representation of the records as each operation completes.
     * 
     * @param {Object} [options] Object containing one or more properties supported by
     * the sync method (these get  passed along to the underlying proxy's
     * {@link Proxy#batch batch} method).
     * 
     * @param {Object/Batch} [options.batch] A {@link Batch} object (or batch config to
     * apply to the created batch). If unspecified a default batch will be auto-created as
     * needed.
     * 
     * @param {Function} [options.callback] The function to be called upon completion of
     * the sync. The callback is called regardless of success or failure.
     * @param {Batch} options.callback.batch The {@link Batch} that was processed,
     * containing all operations in their current state after processing.
     * @param {Object} options.callback.options The options argument that was originally
     * passed to `sync`.
     * 
     * @param {Function} [options.success] The function to be called upon successful
     * completion of the sync. The success function is called only if no exceptions were
     * reported in any operations. If one or more exceptions occurred then the failure
     * function will be called instead.
     * @param {Batch} options.success.batch The {@link Batch} that was processed,
     * containing all operations in their current state after processing.
     * @param {Object} options.success.options The options argument that was originally
     * passed to `sync`.
     * 
     * @param {Function} [options.failure] The function to be called upon unsuccessful
     * completion of the sync. The failure function is called when one or more operations
     * returns an exception during processing (even if some operations were also
     * successful). In this case you can check the batch's {@link Batch#exceptions} to
     * see exactly which operations had exceptions.
     * @param {Batch} options.failure.batch The {@link Batch} that was processed,
     * containing all operations in their current state after processing.
     * @param {Object} options.failure.options The options argument that was originally
     * passed to `sync`.
     * 
     * @param {Object} [options.params] Additional params to send during the sync
     * operation(s).
     *
     * @param {Object} [options.scope=this] The scope in which to execute any callbacks
     * (i.e., the `this` object inside the `callback`, `success` and `failure` functions).
     * 
     * @return {Store} this
     */
    sync (options) {
        let me = this;
        let operations = {};
        let toCreate = me.getNewRecords();
        let toUpdate = me.getUpdatedRecords();
        let toDestroy = me.getRemovedRecords();
        let needsSync = false;

        //<debug>
        if (me.isSyncing) {
            Ext.log.warn('Sync called while a sync operation is in progress. ' +
                         'Consider configuring autoSync as false.');
        }
        //</debug>

        me.needsSync = false;

        if (toCreate.length > 0) {
            operations.create = toCreate;
            needsSync = true;
        }

        if (toUpdate.length > 0) {
            operations.update = toUpdate;
            needsSync = true;
        }

        if (toDestroy.length > 0) {
            operations.destroy = toDestroy;
            needsSync = true;
        }

        if (needsSync && me.fireEvent('beforesync', operations) !== STOP) {
            me.isSyncing = true;

            options = options || {};

            me.proxy.batch(copy(options, {
                operations: operations,
                listeners: me.getBatchListeners(),
                $destroyOwner: me
            }));
        }

        return me;
    }

    //---------------------------------------------------------------------------------
    // Internals (alphabetic order)

    /**
     * A record should call this method on the Store it has been
     * {@link Model#join joined} to.
     * @param {Model} record The record that was edited.
     * @param {String[]} [modifiedFieldNames] (private)
     * @private
     */
    afterCommit (record, modifiedFieldNames) {
        let me = this;
        
        if (!modifiedFieldNames) {
            modifiedFieldNames = null;
        }
        
        if (me.contains(record)) {
            me.onUpdate(record, 'commit', modifiedFieldNames);
            me.fireEvent('update', me, record, 'commit', modifiedFieldNames);
            me.fireEvent('dataChanged', me);
        }
    }
    
    afterErase (record) {
        this.onErase(record);
    }

    /**
     * A record should call this method on the Store it has been
     * {@link Model#join joined} to.
     * @param {Model} record The record that was edited
     * @private
     */
    afterReject (record) {
        let me = this;
        
        // Must pass the 5th param (modifiedFieldNames) as null, otherwise the
        // event firing machinery appends the listeners "options" object to the arg list
        // which may get used as the modified fields array by a handler.
        // This array is used for selective grid cell updating by Grid View.
        // Null will be treated as though all cells need updating.
        if (me.contains(record)) {
            me.onUpdate(record, 'reject', null);
            me.fireEvent('update', me, record, 'reject', null);
            me.fireEvent('dataChanged', me);
        }
    }

    cleanRemoved () {
        // Must use class-specific getRawRemovedRecords.
        // Regular Stores add to the "removed" property on remove.
        // TreeStores are having records removed all the time; node collapse removes.
        // TreeStores add to the "removedNodes" property onNodeRemove
        let removed = this.getRawRemovedRecords();
        let rec;

        if (removed) {
            for (rec of removed) {
                rec.unjoin(this);
            }
            
            removed.length = 0;
        }
    }

    clearData () {
        // to be implemented by subclasses
    }

    // saves any phantom records
    create (data, options) {
        let me = this;
        let Model = me.model;
        let instance = new Model(data);
        let operation;

        options = {
            type: 'create',
            records: [instance],

            ...options,

            internalCallback: me.onProxyWrite.bind(me)
        };

        operation = me.createOperation(options);
        
        return operation.execute();
    }

    createImplicitModel (fields) {
        // let modelCfg = {
        //     extend: me.implicitModel,
        //     statics: {
        //         defaultProxy: 'memory'
        //     }
        // };
        // if (fields) {
        //     modelCfg.fields = fields;
        // }
        // model = Ext.define(null, modelCfg);

        let me = this;
        let proxy, model;
        
        @define
        class ImplicitModel extends me.implicitModel {
            @config
            static fields = fields;
        }
        
        model = ImplicitModel;

        me.model = model;

        proxy = me.proxy;
        
        if (proxy) {
            model.proxy = proxy;
        }
        else {
            me.proxy = model.proxy;
        }
    }

    createOperation (options) {
        let me = this;
        let proxy = me.proxy;
        let listeners, operation;

        if (!me.proxyListeners) {
            listeners = {
                scope: me,
                beginProcessResponse: 'beginUpdate',
                endProcessResponse: 'endUpdate'
            };

            if (!me.disableMetaChangeEvent) {
                listeners.metaChange = 'onMetaChange';
            }
            
            me.proxyListeners = proxy.on(listeners);
        }

        operation = proxy.createOperation(options);

        operation.$destroyOwner = me;
        
        return operation;
    }

    // tells the attached proxy to destroy the given records
    erase (options) {
        let me = this;
        let operation;

        options = {
            type: 'destroy',
            records: me.getRemovedRecords(),

            ...options,

            internalCallback: me.onProxyWrite.bind(me)
        };

        operation = me.createOperation(options);
        
        return operation.execute();
    }

    /**
     * Filter function for new records.
     * @private
     */
    filterNew (item) {
        // only want phantom records that are valid
        return item.phantom && item.isValid();
    }
    
    /**
     * Filter function for updated records.
     * @private
     */
    filterUpdated (item) {
        // only want dirty records, not phantoms that are valid
        return item.dirty && !item.phantom && item.isValid();
    }
    
    /**
     * Returns an object which is passed in as the listeners argument to proxy.batch inside
     * this.sync. This is broken out into a separate function to allow for customisation
     * of the listeners
     * @return {Object}
     * @private
     */
    getBatchListeners () {
        let me = this;
        let listeners = {
            scope: me,
            exception: 'onBatchException',
            complete: 'onBatchComplete'
        };

        if (me.batchUpdateMode === 'operation') {
            listeners.operationcomplete = me.onBatchOperationComplete;
        }

        return listeners;
    }

    /**
     * Returns the array of records which have been removed since the last time this store
     * was synced.
     *
     * This is used internally, when purging removed records after a successful sync.
     * This is overridden by TreeStore because TreeStore accumulates deleted records on
     * removal of child nodes from their parent, *not* on removal of records from its
     * collection. The collection has records added on expand, and removed on collapse.
     * @private
     */
    getRawRemovedRecords () {
        return this.removed;
    }

    /**
     * Attached as the 'complete' event listener to a proxy's Batch object. Iterates over the batch
     * operations and updates the Store's internal data MixedCollection.
     * @private
     */
    onBatchComplete (batch, operation) {
        let me = this;
        let operations = batch.operations;
        let length = operations.length;
        let i;

        if (me.batchUpdateMode !== 'operation') {
            me.suspendEvents();

            for (i = 0; i < length; i++) {
                me.onProxyWrite(operations[i]);
            }

            me.resumeEvents();
        }

        me.isSyncing = false;
        
        if (batch.$destroyOwner === me) {
            batch.destroy();
        }
        
        me.fireEvent('datachanged', me);
    }

    /**
     * @private
     */
    onBatchException (batch, operation) {
        // //decide what to do... could continue with the next operation
        // batch.start();
        //
        // //or retry the last operation
        // batch.retry();
    }

    /**
     * Attached as the 'operationcomplete' event listener to a proxy's Batch object. By default
     * just calls through to onProxyWrite.
     * @private
     */
    onBatchOperationComplete (batch, operation) {
        return this.onProxyWrite(operation);
    }

    onBeforeLoad () {
        // empty
    }

    onCreateRecords () {
        // empty; may be implemented by store subclasses
    }
    
    /**
     * Removes any records when a write is returned from the server.
     * @param {Model[]} records The array of removed records
     * @param {Operation} operation The operation that just completed
     * @param {Boolean} success True if the operation was successful
     * @private
     */
    onDestroyRecords (records, operation, success) {
        if (success) {
            this.cleanRemoved();
        }
    }

    onEndUpdate () {
        let me = this;

        if (me.needsSync && me.autoSync && !me.autoSyncSuspended) {
            me.sync();
        }
    }

    onErase () {
        // empty
    }

    onExtraParamsChanged () {
        // empty
    }

    /**
     * @private
     */
    onMetaChange (proxy, meta) {
        this.fireEvent('metachange', this, meta);
    }

    /**
     * Callback for any write Operation over the Proxy. Updates the Store's MixedCollection
     * to reflect the updates provided by the Proxy
     * @private
     */
    onProxyWrite (operation) {
        let me = this;
        let success = operation.wasSuccessful();
        let records = operation.records;

        switch (operation.action) {
            case 'create':
                me.onCreateRecords(records, operation, success);
                break;
            
            case 'update':
                me.onUpdateRecords(records, operation, success);
                break;
            
            case 'destroy':
                me.onDestroyRecords(records, operation, success);
                break;
        }

        if (success) {
            me.fireEvent('write', me, operation);
            me.fireEvent('datachanged', me);
        }
    }
    
    onUpdate () {
        // empty
    }
    
    onUpdateRecords () {
        // empty; may be implemented by store subclasses
    }

    read (...args) {
        return this.load(...args);
    }

    removeFromRemoved (record) {
        // Must use class-specific getRawRemovedRecords.
        // Regular Stores add to the "removed" property on remove.
        // TreeStores are having records removed all the time; node collapse removes.
        // TreeStores add to the "removedNodes" property onNodeRemove
        let removed = this.getRawRemovedRecords();
        
        if (removed) {
            remove(removed, record);

            record.unjoin(this);
        }
    }

    setLoadOptions (options) {
        let me = this;
        let filters = me.remoteFilter && me.filters;
        let sorters = me.remoteSort && me.sorters;

        if (filters && filters.length) {
            options.filters = filters.getRange();
        }

        if (sorters && sorters.length) {
            options.sorters = sorters.getRange();
        }
        
        return options;
    }

    setState (state) {
        super.setState(state);

        // This is called during construction. Sorters and filters might have changed
        // which require a reload.
        // If autoLoad is true, it might have loaded synchronously from a memory proxy,
        // so needs to reload.
        // If it is already loaded, we definitely need to reload to apply the state.
        if (this.autoLoad || this.isLoaded()) {
            this.load();
        }
    }

    update (options) {
        let me = this;
        let operation;
            
        options = {
            type: 'update',
            records: me.getUpdatedRecords(),

            ...options,

            internalCallback: me.onProxyWrite.bind(me)
        };
        
        operation = me.createOperation(options);
        
        return operation.execute();
    }

    /**
     * @event beforeload
     * Fires before a request is made for a new data object. If the beforeload handler
     * returns `false` the load action will be canceled.
     *
     * @param {Store} store This Store
     * @param {Operation} operation The Operation object
     * that will be passed to the Proxy to load the Store
     * @since 1.1.0
     */

    /**
     * @event load
     * Fires whenever the store reads data from a remote data source.
     *
     * @param {Store} this
     * @param {Model[]} records An array of records
     * @param {Boolean} successful True if the operation was successful.
     * @param {Ext.data.operation.Read} operation The
     * {@link Ext.data.operation.Read Operation} object that was used in the data
     * load call
     * @since 1.1.0
     */

    /**
     * @event write
     * Fires whenever a successful write has been made via the configured {@link #proxy Proxy}
     * @param {Store} store This Store
     * @param {Operation} operation The
     * {@link Operation Operation} object that was used in the write
     * @since 3.4.0
     */

    /**
     * @event beforesync
     * Fired before a call to {@link #sync} is executed. Return false from any listener to cancel
     * the sync
     * @param {Object} options Hash of all records to be synchronized, broken down into create,
     * update and destroy
     */

    /**
     * @event metachange
     * Fires when this store's underlying reader (available via the proxy) provides new metadata.
     * Metadata usually consists of new field definitions, but can include any configuration data
     * required by an application, and can be processed as needed in the event handler.
     * This event is currently only fired for JsonReaders.
     * @param {Store} this
     * @param {Object} meta The JSON metadata
     * @since 1.1.0
     */
}

export { ProxyStore };
