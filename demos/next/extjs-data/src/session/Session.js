import {
    //<debug>
    assert,
    //</debug>

    Base, Watchable,
    define, config, is, raise
} from '../../../extjs-core/src';

import { Dirty, Identifiable } from '../../../extjs-util/src/mixins';

import { Schema } from '../schema';

import { BatchVisitor } from './BatchVisitor';
import { ChangesVisitor } from './ChangesVisitor';
import { ChildChangesVisitor } from './ChildChangesVisitor';
import { Matrix } from './Matrix';

import '../store/Store';

const _setNoRefs = {
    refs: false
};

/**
 * The primary job of a Session is to manage a collection of records of many different
 * types and their associations. This often starts by loading records when requested and
 * culminates when it is time to save to the server.
 *
 * Because the Session tracks all records it loads, it ensures that for any given type of
 * model, only one record exists with a given `id`. This means that all edits of that
 * record are properly targeted at that one instance.
 *
 * # Data
 *
 * Since the Session is managing all this data, there are several methods it provides
 * to give convenient access to that data. The most important of these is `update` and
 * `getChanges`.
 *
 * The `update` and `getChanges` methods both operate on object that contains a summary
 * of records and associations and different CRUD operations.
 *
 * ## Saving
 *
 * There are two basic ways to save the contents of a Session: `getChanges` and
 * `getSaveBatch`. We've already seen `getChanges`. The data contained in the CRUD object
 * can be translated into whatever shape is needed by the server.
 *
 * To leverage the `{@link Model#proxy proxy}` facilities defined by each Model class,
 * there is the `getSaveBatch` method. That method returns a `BatchOperation` populated
 * with the necessary `create`, `update` and `destroy` `Operation` instances to save all
 * of the changes in the Session.
 *
 * ## Conflicts
 *
 * If data is loaded from the server (for example a store load) and there is an existing
 * record, the {@link Model#method!mergeData `mergeData`} method will be called to resolve
 * the conflict.
 */
@define({
    mixins: [
        Watchable,
        Dirty,
        Identifiable
    ],

    prototype: {
        crudOperations: [{
            type: 'R',
            entityMethod: 'readEntities'
        }, {
            type: 'C',
            entityMethod: 'createEntities'
        }, {
            type: 'U',
            entityMethod: 'updateEntities'
        }, {
            type: 'D',
            entityMethod: 'dropEntities'
        }],
    
        crudKeys: {
            C: 1,
            R: 1,
            U: 1,
            D: 1
        }
    }
})
class Session extends Base {
    /**
     * @cfg {Boolean} autoDestroy
     * `true` to automatically destroy this session when a component it is attached
     * to is destroyed. This should be set to false if the session is intended to be
     * used across multiple root level components.
     */
    @config
    autoDestroy = true;

    @config('cached')
    crudProperties = {
        create: 'C',
        read: 'R',
        update: 'U',
        drop: 'D'
    };

    /**
     * @cfg {Session} parent
     * The parent session for this session.
     */
    @config
    parent = null;

    /**
     * @cfg {Schema} schema
     * The `schema` must either be specified explicitly or it will be inferred from the
     * first `Model` class presented (e.g., to `createRecord`). All models used in a session
     * must be of the same schema.
     * 
     * This config defaults to the `default` static config of `Schema`, which can be set
     * by an application to automate this process.
     */
    @config('defer')
    schema = Schema.default;

    //---------------------------------------------------------------------------------
    // Life-cycle

    ctor () {
        let me = this;

        me.data = {
            /*
             * User: {
             *     1: {
             *         record: user1Instance,
             *         refs: {
             *             posts: {
             *                 101: post101Instance,
             *                 102: post202Instance
             *             }
             *         }
             *     }
             * }
             */
        };

        me.matrices = {
            /*
             * UserGroups: new Ext.data.matrix.Matrix({
             *     association: UserGroups
             * })
             */
        };

        me.identifiers = {
            // sparse copy of identifiers from schema
        };

        me.identifierCache = {
            // [entityName]: Identifier
        };

        // Bind ourselves so we're always called in our own scope.
        me.recordCreator = me.recordCreator.bind(me);
    }

    dtor () {
        let me = this;
        let matrices = me.matrices;
        let data = me.data;
        let entityName, entities, id, record;

        for (id in matrices) {
            matrices[id].destroy();
        }

        for (entityName in data) {
            entities = data[entityName];
            
            for (id in entities) {
                record = entities[id].record;
                
                if (record) {
                    // Clear up any source if we pushed one on, remove
                    // the session reference
                    record.$source = null;

                    // While we don't actually call join() for the session, we need to
                    // tell the records that they are being detached from the session in
                    // some way.
                    record.unjoin(me);

                    // see also evict()
                }
            }
        }
    }
    
    //---------------------------------------------------------------------------------
    // Methods (alphabetic order)

    /**
     * Adds an existing record instance to the session. The record
     * may not belong to another session. The record cannot be a phantom record, instead
     * use {@link #createRecord}.
     * @param {Model} record The record to adopt.
     */
    adopt (record) {
        let me = this;
        let associations = record.associations;
        let roleName;

        //<debug>
        me.checkModelType(record.constructor);
        
        assert(!record.session || record.session === me,
               'Record already belongs to session {0}', record.session);
        //</debug>
        
        if (record.session !== me) {
            me.add(record);

            if (associations) {
                for (roleName in associations) {
                    associations[roleName].adoptAssociated(record, me);
                }
            }
        }
    }

    /**
     * Marks the session as "clean" by calling {@link Model#commit} on each record that
     * is known to the session.
     *
     * - Phantom records will no longer be phantom.
     * - Modified records will no longer be dirty.
     * - Dropped records will be erased.
     */
    commit () {
        let me = this;
        let data = me.data;
        let matrices = me.matrices;
        let dirtyWas = me.dirty;
        let entityName, entities, id, record;

        me.suspendEvent('dirtyChange');

        for (entityName in data) {
            entities = data[entityName];
            
            for (id in entities) {
                record = entities[id].record;
                
                if (record) {
                    record.commit();
                }
            }
        }

        for (id in matrices) {
            matrices[id].commit();
        }

        me.clearRecordStates();

        me.resumeEvent('dirtyChange');
        
        if (me.dirty !== dirtyWas) {
            me.fireDirtyChange();
        }
    }

    /**
     * Creates a new record and tracks it in this session.
     *
     * @param {String/Model} type The `entityName` or the actual class of record to create.
     * @param {Object} [data] The data for the record.
     * @param {Boolean} [phantom] (private) `true` or `false` to control the record's
     * `phantom` state. By default, this is determined by presence of the `idProperty`.
     * @return {Model}
     */
    createRecord (type, data, phantom) {
        let Model = this.checkModelType(type);

        //<debug>
        if (data && this.parent) {
            let id = Model.idFromData(data);
            
            assert(!this.parent.peekRecord(Model, id),
                   'Parent session already has a record {0}: {1}', Model.entityName, id);
        }
        //</debug>
        
        // By passing the session to the constructor, it will call session.add()
        return new Model(data, this, phantom); // preventAdd ? null : this);
    }

    /**
     * Returns an object describing all of the modified fields, created or dropped records
     * and many-to-many association changes maintained by this session. If this session
     * has no changes (i.e., it is not `dirty`), this method will return `null`.
     *
     * @return {Object}
     */
    getChanges () {
        return this.visitData(new ChangesVisitor(this));
    }

    /**
     * Get a cached record from the session. If the record does not exist, it will
     * be created. If the `autoLoad` parameter is not set to `false`, the record will
     * be loaded via the {@link Model#proxy proxy} of the Model. 
     * 
     * If this session is configured with a `{@link #parent}` session, a *copy* of any
     * existing record  in the `parent` will be adopted into this session. If the `parent`
     * does not contain the record, the record will be created and *not* inserted into
     * the parent.
     * 
     * See also {@link #peekRecord}.
     *
     * @param {String/Model} type The `entityName` or the actual class of record to create.
     * This may also be a record instance, where the type and id will be inferred from the
     * record. If the record is not attached to a session, it will be adopted. If it exists
     * in a parent, an appropriate copy will be made as described.
     * @param {Object} id The id of the record.
     * @param {Boolean/Object} [autoLoad] Pass `false` to prevent the record from being
     * loaded if it does not exist. If this parameter is an object, it will be passed to
     * the {@link Model#method!load} call.
     * @return {Model}
     */
    getRecord (type, id, autoLoad) {
        let me = this;
        let wasInstance = type.isModel;
        let record, Model, parent, parentRec;

        if (wasInstance) {
            wasInstance = type;
            id = type.id;
            type = type.constructor;
        }
        
        record = me.peekRecord(type, id);

        if (!record) {
            Model = me.checkModelType(type);
            parent = me.parent;
            
            if (parent) {
                parentRec = parent.peekRecord(Model, id);
            }
            
            if (parentRec) {
                if (parentRec.loading) {
                    // If the parent is loading, it's as though it doesn't have
                    // the record, so we can't copy it, but we don't want to
                    // adopt it either.
                    wasInstance = false;
                }
                else {
                    record = parentRec.copy(undefined, me);
                    record.$source = parentRec;
                }
            }

            if (!record) {
                if (wasInstance) {
                    record = wasInstance;
                    me.adopt(record);
                }
                else {
                    record = Model.createWithId(id, me);
                    
                    if (autoLoad !== false) {
                        record.load(is.object(autoLoad) ? autoLoad : undefined);
                    }
                }
            }
        }
        
        return record;
    }

    /**
     * Returns an `BatchOperation` containing the `Operation` instances that are needed to
     * save all of the changes in this session. This sorting is based on operation type,
     * associations and foreign keys. Generally speaking the operations in the batch can
     * be committed to a server sequentially and the server will never be sent a request
     * with an invalid (client-generated) id in a foreign key field.
     *
     * @param {Boolean} [sort=true] Pass `false` to disable the batch operation sort.
     * @return {BatchOperation}
     */
    getSaveBatch (sort) {
        return this.visitData(new BatchVisitor(sort));
    }

    /**
     * Gets an existing record from the session. The record will *not* be created if it does
     * not exist.
     *
     * See also: {@link #getRecord}.
     * 
     * @param {String/Model} type The `entityName` or the actual class of record to create.
     * @param {Object} id The id of the record.
     * @param {Boolean} [deep=false] `true` to consult 
     * @return {Model} The record, `null` if it does not exist.
     */
    peekRecord (type, id, deep) {
        // Duplicate some of this logic from getEntry here to prevent the creation
        // of entries when asking for the existence of records. We may not need them
        let me = this;
        let entityType = me.checkModelType(type);
        let entityName = entityType.entityName;
        let entry = me.data[entityName];
        let ret = entry && entry[id];
        let parent;

        ret = ret && ret.record;

        if (!ret && deep) {
            parent = me.parent;
            ret = parent && parent.peekRecord(type, id, deep);
        }
        
        return ret || null;
    }

    /**
     * Save any changes in this session to a {@link #parent} session.
     */
    save () {
        //<debug>
        assert(this.parent, 'Cannot save session, no parent exists');
        //</debug>

        let result = this.visitData(new ChildChangesVisitor(this));

        this.parent.update(result);

        this.commit();
    }

    /**
     * Create a child session with this session as the {@link #parent}.
     * @return {Session} The copied session.
     */
    spawn () {
        return new this.constructor({
            schema: this.schema,
            parent: this
        });
    }

    /**
     * Complete a bulk update for this session.
     * @param {Object} data Data in the CRUD format (see the intro docs).
     */
    update (data) {
        let me = this;
        let schema = me.schema;
        let crudKeys = me.crudKeys;
        let dirtyWas = me.dirty;
        let associationData, associations, entityInfo, entityName, entityType, item, key,
            operation, role;

        me.suspendEvent('dirtyChange');

        // Force the schema to process any pending drops
        schema.cascadeDelete(true);

        // Do a first pass to setup all the entities first
        for (entityName in data) {
            entityType = me.checkModelType(entityName);
            entityInfo = data[entityName];

            for (operation of me.crudOperations) {
                item = entityInfo[operation.type];
                
                if (item) {
                    me[operation.entityMethod](entityType, item);
                }
            }
        }

        // A second pass to process associations once we have all the entities in place
        for (entityName in data) {
            entityType = schema.getEntity(entityName);
            associations = entityType.associations;
            entityInfo = data[entityName];

            for (key in entityInfo) {
                // Skip over CRUD, just looking for associations here
                if (!crudKeys[key]) {
                    role = associations[key];
                    
                    //<debug>
                    assert(role, 'Invalid association "{0}" for {1}', key, entityName);
                    //</debug>
                    
                    associationData = entityInfo[role.role];
                    role.processUpdate(me, associationData);
                }
            }
        }

        me.resumeEvent('dirtyChange');

        if (me.dirty !== dirtyWas) {
            me.fireDirtyChange();
        }
    }

    /**
     * Walks the internal data tracked by this session and calls methods on the provided
     * `visitor` object. The visitor can then accumulate whatever data it finds important.
     * The visitor object can provide a number of methods, but all are optional.
     *
     * This method does not enumerate associations since these can be traversed given the
     * records that are enumerated. For many-to-many associations, however, this method
     * does enumerate the changes because these changes are not "owned" by either side of
     * such associations.
     * 
     * If the `visitor` implements a `finish` method and that method returns a value (not
     * `undefined`), this method will return that result instead of the passed `visitor`.
     *
     * @param {Visitor} visitor The object implementing some or all of the methods of a
     * `Visitor`.
     * @return {Visitor|*}
     */
    visitData (visitor) {
        let me = this;
        let data = me.data;
        let matrices = me.matrices;
        let all, assoc, id, id2, matrix, members, name, record, ret, slice, slices, state;

        // Force the schema to process any pending drops
        me.schema.cascadeDelete(true);

        for (name in data) {
            all = data[name]; // all entities of type "name"

            for (id in all) {
                record = all[id].record;

                if (record) {
                    if (record.phantom || record.dirty || record.dropped) {
                        if (visitor.onDirtyRecord) {
                            visitor.onDirtyRecord(record);
                        }
                    }
                    else if (visitor.onCleanRecord) {
                        visitor.onCleanRecord(record);
                    }
                }
            }
        }

        if (visitor.onMatrixChange) {
            for (name in matrices) {
                matrix = matrices[name].left; // e.g., UserGroups.left (Users)
                slices = matrix.slices;
                assoc = matrix.role.association;

                for (id in slices) {
                    slice = slices[id];
                    members = slice.members;

                    for (id2 in members) {
                        state = (record = members[id2])[2];

                        if (state) {
                            visitor.onMatrixChange(assoc, record[0], record[1], state);
                        }
                    }
                }
            }
        }
        
        if (visitor.finish) {
            ret = visitor.finish();
        }
        
        return (ret === undefined) ? visitor : ret;
    }

    //---------------------------------------------------------------------------------
    // Record observer methods

    /**
     * Template method, will be called by Model after a record is committed.
     * @param {Model} record The record.
     *
     * @protected
     */
    afterCommit (record) {
        this.trackRecordState(record);
    }

    /**
     * Template method, will be called by Model after a record is dropped.
     * @param {Model} record The record.
     *
     * @protected
     * @since 6.2.0
     */
    afterDrop (record) {
        this.trackRecordState(record);
    }

    /**
     * Template method, will be called by Model after a record is edited.
     * @param {Model} record The record.
     *
     * @protected
     * @since 6.2.0
     */
    afterEdit (record) {
        this.trackRecordState(record);
    }

    /**
     * Template method, will be called by Model after a record is erased (a drop
     * that is committed).
     * @param {Model} record The record.
     *
     * @protected
     */
    afterErase (record) {
        this.evict(record);
    }

    /**
     * Template method, will be called by Model after a record is rejected.
     * @param {Model} record The record.
     *
     * @protected
     */
    afterReject (record) {
        this.trackRecordState(record);
    }

    //---------------------------------------------------------------------------------
    // Internals (alphabetic order)

    /**
     * Add a record instance to this session. Called by model.
     * @param {Model} record The record.
     *
     * @private
     */
    add (record) {
        let me = this;
        let id = record.id;
        let entry = me.getEntry(record.constructor, id);
        let associations, roleName;

        //<debug>
        assert(!entry.record, 'Duplicate id {0} for {1}', record.id, record.entityName);
        //</debug>

        record.session = me;

        entry.record = record;

        me.trackRecordState(record, true);
        me.registerReferences(record);

        associations = record.associations;
        
        for (roleName in associations) {
            associations[roleName].checkMembership(me, record);
        }
    }

    /**
     * Checks if the model type being referenced is valid for this session. That includes
     * checking if the model name is correct and is one used in this {@link #schema} for
     * this session. Will raise an exception if the model type is not correct.
     * 
     * @param {String/Model} name The name or Model class.
     * @return {Model}
     * @private
     */
    checkModelType (name) {
        let schema = this.schema;
        let entityType = name.charAt ? schema.getEntity(name) : name;
        let entitySchema = entityType.schema;

        //<debug>
        if (name.charAt) {
            assert(entitySchema, 'Model class {0} has no schema', name);
            assert(entityType, 'Unknown entity type {0}', name);
        }
        else {
            assert(entityType.entityName, 'Cannot use anonymous Models in a Session');

            assert(entitySchema, 'Model class {0} has no schema', entityType.entityName);
            assert(!schema || schema === entitySchema,
                   'Model {0} is not in the same schema as Session', entityType.entityName);
        }
        //</debug>
        
        if (!schema) {
            this.schema = entitySchema;
        }
        
        return entityType;
    }

    /**
     * Process a create block of entities from the {@link #update} method.
     * @param {Model} entityType The entity type.
     * @param {Object[]} items The data objects to create.
     *
     * @private
     */
    createEntities (entityType, items) {
        let me = this;
        let data, rec, id;

        for (data of items) {
            id = entityType.idFromData(data);
            rec = me.peekRecord(entityType, id);
            
            if (!rec) {
                rec = me.createRecord(entityType, data, /* phantom = */ true);
            }
            else {
                me.onInvalidEntityCreate(entityType, id);
            }
        }
    }

    /**
     * Process a drop block for entities from the {@link #update} method.
     * @param {Model} entityType The entity type.
     * @param {Object[]} ids The identifiers of the items to drop.
     *
     * @private
     */
    dropEntities (entityType, ids) {
        // Handle writeAllFields here, we may not have an array of raw ids
        let extractId = ids.length && is.object(ids[0]);
        let rec, id;

        for (id of ids) {
            if (extractId) {
                id = entityType.idFromData(id);
            }
            
            rec = this.peekRecord(entityType, id);
            
            if (rec) {
                rec.drop();
            }
            else {
                this.onInvalidEntityDrop(entityType, id);
            }
        }
    }

    /**
     * Remove a record and any references from the session.
     * @param {Model} record The record
     *
     * @private
     */
    evict (record) {
        let me = this;
        let entityName = record.entityName;
        let entities = me.data[entityName];
        let id = record.id;

        if (entities && entities[id]) {
            me.untrackRecordState(record);

            // While we don't actually call join() for the session, we need to
            // tell the records that they are being detached from the session in
            // some way.
            record.unjoin(me);

            delete entities[id];

            // see also destroy()
        }
    }

    /**
     * Transforms a list of ids into a list of records for a particular type.
     * @param {Model} entityType The entity type.
     * @param {Object[]} ids The ids to transform.
     * @return {Model[]} The models corresponding to the ids.
     * @private
     */
    getEntityList (entityType, ids) {
        let len = ids.length;
        let ret = ids;
        let i, id, rec;

        for (i = 0; i < len; ++i) {
            id = ids[i];
            rec = this.peekRecord(entityType, id);
            
            if (rec) {
                ids[i] = rec;
            }
            else {
                ids[i] = ret = null;
                
                this.onInvalidAssociationEntity(entityType, id);
            }
        }

        return ret || ids.filter(it => it !== null);
    }

    /**
     * Return an entry for the data property for a particular type/id.
     * @param {String/Model} type The entity name or model type.
     * @param {Object} [id] The id of the record of the first parameter is not a record.
     * @return {Object}
     * @private
     */
    getEntry (type, id) {
        if (type.isModel) {
            id = type.id;
            type = type.constructor;
        }

        // eslint-disable-next-line vars-on-top
        let entityType = this.checkModelType(type);
        let entityName = entityType.entityName;
        let data = this.data;
        let entry;

        entry = data[entityName] || (data[entityName] = {});
        entry = entry[id] || (entry[id] = {});

        return entry;
    }

    getIdentifier (entityType) {
        let me = this;
        let cache = me.identifierCache;
        let key = entityType.entityName;
        let ret = cache[key];
        let cfg, id, identifier, identifiers, parent;

        if (!ret) {
            if (!(parent = me.parent)) {
                identifiers = me.identifiers;
                identifier = entityType.identifier;
                cfg = identifier.$rawConfig;
                id = identifier.id;

                if (id && cfg) {
                    if (!(ret = identifiers[id])) {
                        identifiers[id] = ret = Base.Factory.identifier(cfg);
                    }
                }
                else {
                    ret = identifier.cacheable ? identifier : identifier.clone().reset();
                }
            }
            else {
                ret = parent.getIdentifier(entityType);
            }

            cache[key] = ret;
        }

        return ret;
    }

    getMatrix (matrix, preventCreate) {
        let name = matrix.isManyToMany ? matrix.name : matrix;
        let matrices = this.matrices;
        let ret = matrices[name] || null;
        
        if (!ret && !preventCreate) {
            matrices[name] = ret = new Matrix(this, matrix);
        }
        
        return ret;
    }

    getMatrixSlice (role, id) {
        let matrix = this.getMatrix(role.association);
        let side = matrix[role.side];

        return side.get(id);
    }

    getRefs (record, role, includeParent) {
        let me = this;
        let entry = me.getEntry(record);
        let refs = entry && entry.refs && entry.refs[role.role];
        let parent = includeParent && me.parent;
        let parentRefs = parent && parent.getRefs(record, role);
        let id, rec;

        if (parentRefs) {
            for (id in parentRefs) {
                rec = parentRefs[id];
                
                if (!refs || !refs[id]) {
                    // We don't know about this record but the parent does. We need to
                    // pull it down so it may be edited as part of the collection
                    me.getRecord(rec.constructor, rec.id);
                }
            }
            
            // Recalculate our refs after we pull down all the required records
            refs = entry && entry.refs && entry.refs[role.role];
        }

        return refs || null;
    }

    onIdChanged (record, oldId, newId) {
        let me = this;
        let matrices = me.matrices;
        let entityName = record.entityName;
        let id = record.id;
        let bucket = me.data[entityName];
        let entry = bucket[oldId];
        let associations = record.associations;
        let refs = entry.refs;
        let association, fieldName, refId, role, roleName, roleRefs, key;

        //<debug>
        assert(!bucket[newId], 'Cannot change {0} id from {1} to {2} (id already exists)',
               entityName, oldId, newId);
        //</debug>

        delete bucket[oldId];
        bucket[newId] = entry;

        for (key in matrices) {
            matrices[key].updateId(record, oldId, newId);
        }

        if (refs) {
            for (roleName in refs) {
                roleRefs = refs[roleName];
                role = associations[roleName];
                association = role.association;

                if (!association.isManyToMany) {
                    fieldName = association.field.name;

                    for (refId in roleRefs) {
                        roleRefs[refId].set(fieldName, id, _setNoRefs);
                    }
                }
            }
        }

        me.registerReferences(record, oldId);
    }

    /**
     * Triggered when an associated item from {@link #update} references a record
     * that does not exist in the session.
     * @param {Model} entityType The entity type.
     * @param {Object} id The id of the model.
     *
     * @protected
     * @template
     */
    onInvalidAssociationEntity (entityType, id) {
        raise(`Cannot read association entity: ${id}@${entityType.entityName}`);
    }

    /**
     * Triggered when an drop block from {@link #update} tries to create a record
     * that already exists.
     * @param {Model} entityType The entity type.
     * @param {Object} id The id of the model.
     *
     * @protected
     * @template
     */
    onInvalidEntityCreate (entityType, id) {
        raise(`Cannot create, record already not exists: ${id}@${entityType.entityName}`);
    }

    /**
     * Triggered when an drop block from {@link #update} references a record
     * that does not exist in the session.
     * @param {Model} entityType The entity type.
     * @param {Object} id The id of the model.
     *
     * @protected
     * @template
     */
    onInvalidEntityDrop (entityType, id) {
        raise(`Cannot drop, record does not exist: ${id}@${entityType.entityName}`);
    }

    /**
     * Triggered when an drop block from {@link #update} tries to create a record
     * that already exists.
     * @param {Model} entityType The entity type.
     * @param {Object} id The id of the model.
     *
     * @protected
     * @template
     */
    onInvalidEntityRead (entityType, id) {
        raise(`Cannot read, record already not exists: ${id}@${entityType.entityName}`);
    }

    /**
     * Triggered when an update block from {@link #update} references a record
     * that does not exist in the session.
     * @param {Model} entityType The entity type.
     * @param {Object} id The id of the model.
     * @param {Boolean} dropped `true` if the record was dropped.
     *
     * @protected
     * @template
     */
    onInvalidEntityUpdate (entityType, id, dropped) {
        if (dropped) {
            raise(`Cannot update, record dropped: ${id}@${entityType.entityName}`);
        }
        else {
            raise(`Cannot update, record does not exist: ${id}@${entityType.entityName}`);
        }
    }

    /**
     * Process a read block of entities from the {@link #update} method.
     * @param {Model} entityType The entity type.
     * @param {Object[]} items The data objects to read.
     *
     * @private
     */
    readEntities (entityType, items) {
        let me = this;
        let data, rec, id;

        for (data of items) {
            id = entityType.idFromData(data);
            rec = me.peekRecord(entityType, id);
            
            if (rec) {
                me.onInvalidEntityRead(entityType, id);
            }
            else {
                // We've been read from a "server", so we aren't a phantom,
                // regardless of whether or not we have an id
                rec = me.createRecord(entityType, data, /* phantom = */ false);
            }
        }
    }

    recordCreator (data, Model) {
        let me = this;
        let id = Model.idFromData(data);
        let record = me.peekRecord(Model, id, true);

        if (record) {
            // We may have a stub that is loading the record (in fact this may be the
            // call coming from that Reader), but the resolution is simple. By creating
            // the record it is registered in the data[entityName][id] entry anyway
            // and the stub will deal with it onLoad.
            record = me.getRecord(Model, id);
            record.mergeData(data);
        }
        else {
            record = new Model(data, me);
        }

        return record;
    }

    registerReferences (record, oldId) {
        let id = record.id;
        let recordData = record.data;
        let remove = oldId || oldId === 0;
        let entry, fk, reference, refs, roleName;

        // Register this records references to other records
        for (reference of record.references) {
            // e.g., reference is an orderId field
            fk = recordData[reference.name]; // fk is the orderId

            if (fk || fk === 0) {
                reference = reference.reference; // the "order" association role
                roleName = reference.inverse.role;

                // Track down the entry for the associated record
                entry = this.getEntry(reference.cls, fk);
                refs = entry.refs || (entry.refs = {});
                refs = refs[roleName] || (refs[roleName] = {});

                refs[id] = record;
                
                if (remove) {
                    delete refs[oldId];
                }
            }
        }
    }

    /**
     * Process an update block for entities from the {@link #update} method.
     * @param {Model} entityType The entity type.
     * @param {Object[]} items The data objects to update.
     *
     * @private
     */
    updateEntities (entityType, items) {
        let me = this;
        let data, rec, id;

        // Repeating some code here, but we want to optimize this for speed
        if (is.array(items)) {
            for (data of items) {
                id = entityType.idFromData(data);
                rec = me.peekRecord(entityType, id);
                
                if (rec) {
                    rec.set(data);
                }
                else {
                    me.onInvalidEntityUpdate(entityType, id);
                }
            }
        }
        else {
            for (id in items) {
                data = items[id];
                rec = me.peekRecord(entityType, id);
                
                if (rec && !rec.dropped) {
                    rec.set(data);
                }
                else {
                    me.onInvalidEntityUpdate(entityType, id, !!rec);
                }
            }
        }
    }

    updateReference (record, field, newValue, oldValue) {
        let reference = field.reference;
        let entityName = reference.type;
        let roleName = reference.inverse.role;
        let id = record.id;
        let entry, refs;

        if (oldValue || oldValue === 0) {
            // We must be already in this entry.refs collection
            refs = this.getEntry(entityName, oldValue).refs[roleName];
            delete refs[id];
        }

        if (newValue || newValue === 0) {
            entry = this.getEntry(entityName, newValue);
            refs = entry.refs || (entry.refs = {});
            refs = refs[roleName] || (refs[roleName] = {});
            refs[id] = record;
        }
    }
}

export { Session };
