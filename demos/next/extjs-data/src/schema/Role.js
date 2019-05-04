import {
    //<debug>
    assert,
    //</debug>
    Base,

    define, config, copy, defineProp, is
} from '../../../extjs-core/src';

import { callback } from '../../../extjs-util/src';

/**
 * @private
 */
@define({
    tags: {
        /**
         * @property {Boolean} isMany
         * @readonly
         */
        isMany: false,

        /**
         * @property {Boolean} left
         * @readonly
         */
        left: true,

        /**
         * @property {String} side
         * @readonly
         */
        side: 'left'
    },

    configurable: 'open',

    prototype: {
        /**
         * @property {Boolean} owner
         * @readonly
         */
        owner: false,
    
        /**
         * @property {Class} cls
         * The `Model` derived class.
         * @readonly
         */
    
        /**
         * @property {Role} inverse
         * @readonly
         */
    
        /**
         * @property {String} type
         * The `{@link Model#entityName}` derived class.
         * @readonly
         */
    
        /**
         * @property {String} role
         * @readonly
         */
    
        defaultReaderType: 'json',

        storeConfig: null,  // legacy config replaced by "store"

        $roleFilterId: '$associationRoleFilter',

        _internalReadOptions: {
            recordsOnly: true,
            asRoot: true
        }
    }
})
class Role extends Base {
    /**
     * @cfg {Association} association
     * @readonly
     */
    @config
    association = null;

    @config
    reader = null;

    //---------------------------------------------------------------------------------
    // Configs (alphabetic order)

    // association
    
    updateAssociation (association) {
        // The Association's owner property starts as either 'left' or 'right' (a string)
        // and we promote it to a reference to the appropriate Role instance here.
        if (association.owner === this.side) {
            association.owner = this;
            this.owner = true;
        }
    }

    // reader

    applyReader (reader) {
        let me = this;

        if (reader && !reader.isReader) {
            if (typeof reader === 'string' || reader.isClass) {
                reader = {
                    type: reader
                };
            }

            reader = copy({
                model: me.cls,
                rootProperty: me.readerRoot,
                useSimpleAccessors: !me.associationKey,
                type: me.defaultReaderType
            }, reader);

            reader = Base.Factory.reader(reader);
        }

        return reader;
    }

    //---------------------------------------------------------------------------------
    // Properties (alphabetic order)

    get instanceName () {
        let me = this;
        let ret = me.association.schema.namer.instanceName(me.role);
        
        me.instanceName = ret;
        
        return ret;
    }
    
    set instanceName (value) {
        defineProp(this, 'instanceName', { value });
    }

    get oldInstanceName () {
        let ret = '$old' + this.instanceName;
        
        this.oldInstanceName = ret;
        
        return ret;
    }

    set oldInstanceName (value) {
        defineProp(this, 'oldInstanceName', { value });
    }

    get readerRoot () {
        let me = this;
        let ret = me.associationKey || me.association.schema.namer.readerRoot(me.role);
        
        defineProp(me, 'readerRoot', { value: ret });

        return ret;
    }

    get storeName () {
        let me = this;
        let ret = me.association.schema.namer.storeName(me.role);

        me.storeName = ret;

        return ret;
    }
    
    set storeName (value) {
        defineProp(this, 'storeName', { value });
    }

    //---------------------------------------------------------------------------------
    // Methods (alphabetic order)

    /**
     * Adopt the associated items when a record is adopted.
     * @param {Model} record The record being adopted.
     * @param {Session} session The session being adopted into
     * 
     * @private
     */
    adoptAssociated (record, session) {
        let other = this.getAssociatedItem(record);
        
        if (other) {
            session.adopt(other);
        }
    }

    /**
     * Check whether a record belongs to any stores when it is added to the session.
     *
     * @param {Session} session The session
     * @param {Model} record The model being added to the session
     * @private
     */
    checkMembership () {
        // do nothing
    }
    
    constructReader (fromReader) {
        let me = this;
        let reader = me.reader;
        let Model = me.cls;
        let useSimpleAccessors = !me.associationKey;
        let root = me.readerRoot;
        let proxyReader, proxy;
        
        // No reader supplied
        if (!reader) {
            proxy = Model.proxy;
            
            // if the associated model has a Reader already, use that, otherwise attempt to
            // create a sensible one
            if (proxy) {
                proxyReader = proxy.reader;
                reader = new proxyReader.constructor();
                reader.copyFrom(proxyReader);
                reader.rootProperty = root;
            }
            else {
                reader = new fromReader.constructor({
                    model: Model,
                    useSimpleAccessors: useSimpleAccessors,
                    rootProperty: root
                });
            }
            
            me.reader = reader;
        }
        
        return reader;
    }

    createAssociationStore (session, from, records, isComplete) {
        let me = this;
        let model = me.cls;
        let association = me.association;
        let foreignKeyName = association.getFieldName();
        let isMany = association.isManyToMany;
        let storeConfig = me.store || me.storeConfig;
        let id = from.id;
        let config = {
            model,
            session,
            associatedEntity: from,
            disableMetaChangeEvent: true,
            immediateLoad: true,
            pageSize: null,
            remoteFilter: true,
            role: me,
            trackRemoved: !session
        };
        let store;

        if (isMany) {
            // For many-to-many associations each role has a field
            config.filters = [{
                id: me.$roleFilterId,
                property: me.inverse.field, // TODO filterProperty
                value: id,
                exactMatch: true
            }];
        }
        else if (foreignKeyName) {
            config.filters = [{
                id: me.$roleFilterId,
                property: foreignKeyName, // TODO filterProperty
                value: id,
                exactMatch: true
            }];
            
            config.foreignKeyName = foreignKeyName;
        }

        if (storeConfig) {
            copy(config, storeConfig);
        }

        store = Base.Factory.store(config);
        
        me.onStoreCreate(store, session, id);

        // Want to run these in all cases for M-1, only with a session M-M
        if (!isMany || session) {
            store.on({
                scope: me,
                add: 'onAddToMany',
                remove: 'onRemoveFromMany',
                clear: 'onRemoveFromMany'
            });
        }

        if (records) {
            store.loadData(records);
        }
        
        store.complete = !!isComplete;

        return store;
    }

    doGetFK (leftRecord, options, scope) {
        // Consider the Department entity with a managerId to a User entity. This method
        // is the guts of the getManager method that we place on the Department entity to
        // acquire a User entity. We are the "manager" role and that role describes a
        // User. This method is called, however, given a Department (leftRecord) as the
        // start of this trek.
        let me = this; // the "manager" role
        let cls = me.cls; // User
        let foreignKey = me.association.getFieldName(); // "managerId"
        let instanceName = me.instanceName; // "manager"
        let rightRecord = leftRecord[instanceName]; // = department.manager
        let reload = options && options.reload;
        let done = rightRecord !== undefined && !reload;
        let session = leftRecord.session;
        let foreignKeyId, args;

        if (!done) {
            // We don't have the User record yet, so try to get it.
            if (session) {
                foreignKeyId = leftRecord.get(foreignKey);
                
                if (foreignKeyId || foreignKeyId === 0) {
                    done = session.peekRecord(cls, foreignKeyId, true) && !reload;
                    rightRecord = session.getRecord(cls, foreignKeyId, false);
                }
                else {
                    done = true;
                    leftRecord[instanceName] = rightRecord = null;
                }
            }
            else if (foreignKey) {
                // The good news is that we do indeed have a FK so we can do a load using
                // the value of the FK.
                foreignKeyId = leftRecord.get(foreignKey);
                
                if (foreignKeyId || foreignKeyId === 0) {
                    // foreignKeyId is the managerId from the Department (record), so
                    // make a new User, set its idProperty and load the real record via
                    // User.load method.
                    if (!rightRecord) {
                        // We may be reloading, let's check if we have one.
                        rightRecord = cls.createWithId(foreignKeyId);
                    }
                    // we are not done in this case, so don't set "done"
                }
                else {
                    // A value of null ends that hope though... but we still need to do
                    // some callbacks perhaps.
                    done = true;
                    leftRecord[instanceName] = rightRecord = null;
                }
            }
            else {
                // Without a FK value by which to request the User record, we cannot do
                // anything. Declare victory and get out.
                done = true;
                rightRecord = null;
            }
        }
        else if (rightRecord) {
            // If we're still loading, call load again which will handle the extra callbacks.
            done = !rightRecord.loading;
        }

        if (done) {
            if (options) {
                args = [rightRecord, null];
                scope = scope || options.scope || leftRecord;

                callback(options.success, scope, args);
                args.push(true);
                callback(options, scope, args);
                callback(options.callback, scope, args);
            }
        }
        else {
            leftRecord[instanceName] = rightRecord;
            options = me.getCallbackOptions(options, scope, leftRecord);
            rightRecord.load(options);
        }

        return rightRecord;
    }

    doSetFK (leftRecord, rightRecord, options, scope) {
        // Consider the Department entity with a managerId to a User entity. This method
        // is the guts of the setManager method that we place on the Department entity to
        // store the User entity. We are the "manager" role and that role describes a
        // User. This method is called, however, given a Department (record) and the User
        // (value).
        let me = this;
        let foreignKey = me.association.getFieldName(); // "managerId"
        let instanceName = me.instanceName; // "manager"
        let current = leftRecord[instanceName];
        let inverse = me.inverse;
        let inverseSetter = inverse.setterName; // setManagerDepartment for User
        let modified, oldInstanceName;

        if (rightRecord && rightRecord.isModel) {
            if (current !== rightRecord) {
                oldInstanceName = me.oldInstanceName;
                leftRecord[oldInstanceName] = current;
                leftRecord[instanceName] = rightRecord;
                
                if (current && current.isModel) {
                    current[inverse.instanceName] = undefined;
                }
                
                if (foreignKey) {
                    leftRecord.set(foreignKey, rightRecord.id);
                }
                
                delete leftRecord[oldInstanceName];
                leftRecord.onAssociatedRecordSet(rightRecord, me);

                if (inverseSetter) {
                    // Because the rightRecord has a reference back to the leftRecord
                    // we pass on to its setter (if there is one). We've already set
                    // the value on this side so we won't recurse back-and-forth.
                    rightRecord[inverseSetter](leftRecord);
                }
            }
        }
        else {
            // The value we received could just be the id of the rightRecord so we just
            // need to set the FK accordingly and cleanup any cached references.

            //<debug>
            assert(foreignKey, 'No foreignKey specified for "{0}" by {1}',
                   me.association.left.role, leftRecord.$className || leftRecord.name);
            //</debug>

            modified = (leftRecord.changingKey && !inverse.isMany) ||
                       leftRecord.set(foreignKey, rightRecord);
            // set returns the modifiedFieldNames[] or null if nothing was change

            if (modified && current && current.isModel &&
                !current.isEqual(current.id, rightRecord)) {
                // If we just modified the FK value and it no longer matches the id of the
                // record we had cached (ret), remove references from *both* sides:
                leftRecord[instanceName] = undefined;
                
                if (!inverse.isMany) {
                    current[inverse.instanceName] = undefined;
                }
            }
        }

        if (options) {
            if (is.callable(options)) {
                options = {
                    callback: options,
                    scope: scope || leftRecord
                };
            }
            
            return leftRecord.save(options);
        }
    }
    
    /**
     * Returns the associated item (a record or store) or `null` if not loaded.
     * 
     * @param {Model} rec The record
     * @return {Model/Store}
     * @private
     */
    getAssociatedItem (rec) {
        let key = this.isMany ? this.storeName : this.instanceName;
        
        return rec[key] || null;
    }

    getAssociatedStore (inverseRecord, options, scope, records, allowInfer) {
        // Consider the Comment entity with a ticketId to a Ticket entity. The Comment
        // is on the left (the FK holder's side) so we are implementing the guts of
        // the comments() method to load the Store of Comment entities. This trek
        // begins from a Ticket (inverseRecord).
        let me = this;
        let storeName = me.storeName;
        let store = inverseRecord[storeName];
        let hadStore = store;
        let session = inverseRecord.session;
        let load = options && options.reload;
        let source = inverseRecord.$source;
        let isComplete = false;
        let phantom = false;
        let hadSourceStore, args, i, len, raw, rec, sourceStore, hadRecords, isLoading;

        if (!store) {
            if (session) {
                // We want to check whether we can automatically get the store contents from the
                // parent session. For this to occur, we need to have a parent in the session,
                // and the store needs to be created and loaded with the initial dataset.
                if (source) {
                    phantom = source.phantom;
                }
                
                if (!records && source) {
                    sourceStore = source[storeName];
                    
                    if (sourceStore && !sourceStore.loading) {
                        records = [];
                        raw = sourceStore.data.items;

                        for (i = 0, len = raw.length; i < len; ++i) {
                            rec = raw[i];
                            records.push(session.getRecord(rec.constructor, rec.id));
                        }
                        
                        isComplete = !!sourceStore.complete;
                        hadSourceStore = true;
                    }
                }
                
                if (!hadSourceStore) {
                    // We'll only hit here if we didn't have a usable source
                    hadRecords = !!records;
                    records = me.findRecords(session, inverseRecord, records, allowInfer);
                    
                    if (!hadRecords && (!records || !records.length)) {
                        records = null;
                    }
                    
                    isComplete = phantom || hadRecords;
                }
            }
            else {
                // As long as we had the collection exist, we're complete, even if it's empty.
                isComplete = !!records;
            }
            
            // If the inverse is a phantom, we can't be loading any data so we're complete
            store = me.createAssociationStore(session, inverseRecord, records,
                                              isComplete || inverseRecord.phantom);
            store.$source = sourceStore;

            if (!records && (me.autoLoad || options)) {
                load = true;
            }

            inverseRecord[storeName] = store;
        }

        if (options) {
            // We need to trigger a load or the store is already loading. Defer
            // callbacks until that happens
            if (load || store.loading) {
                store.once('load', function (store, records, success, operation) {
                    args = [store, operation];
                    scope = scope || options.scope || inverseRecord;

                    if (success) {
                        callback(options.success, scope, args);
                    }
                    else {
                        callback(options.failure, scope, args);
                    }
                    
                    args.push(success);
                    callback(options, scope, args);
                    callback(options.callback, scope, args);
                });
            }
            else {
                // Trigger straight away
                args = [store, null];
                scope = scope || options.scope || inverseRecord;

                callback(options.success, scope, args);
                args.push(true);
                callback(options, scope, args);
                callback(options.callback, scope, args);
            }
        }

        isLoading = store.loading;
        
        if (load) {
            if (!isLoading) {
                store.load();
            }
        }
        else if (hadStore && records && !isLoading) {
            store.loadData(records);
        }

        return store;
    }

    getCallbackOptions (options, scope, defaultScope) {
        if (typeof options === 'function') {
            options = {
                callback: options,
                scope: scope || defaultScope
            };
        }
        else if (options) {
            options = {
                ...options,
                scope: scope || options.scope || defaultScope
            };
        }
        
        return options;
    }

    onDrop () {
        // empty
    }

    onIdChanged () {
        // empty
    }

    onStoreCreate () {
        // empty
    }

    /**
     * Exclude any locally modified records that don't belong in the store. Include locally
     * modified records that should be in the store. Also correct any foreign keys that
     * need to be updated.
     *
     * @param {Store} store The store.
     * @param {Model} associatedEntity The entity that owns the records.
     * @param {Model[]} records The records to check.
     * @param {Session} session The session holding the records
     * @return {Model[]} The corrected set of records.
     *
     * @private
     */
    processLoad (store, associatedEntity, records, session) {
        return records;
    }

    // processUpdate () {
    //     raise('Only the "many" for an association may be processed. "' + this.role +
    //               '" is not valid.');
    // }
    
    read (record, data, fromReader, readOptions) {
        let reader = this.constructReader(fromReader);
        let root = reader.getRoot(data);

        if (root) {
            return reader.readRecords(root, readOptions, this._internalReadOptions);
        }
    }
}

export { Role };
