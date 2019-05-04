import {
    //<debug>
    assert,
    //</debug>

    Base, Empty, ExMap,
    define, config, arrayify, buffered, copy, configFromType, is, prototype
} from '../../../extjs-core/src';

import { ObjectTemplate } from '../../../extjs-util/src/template';

import { Namer } from './Namer';
import { OneToOne } from './OneToOne';
import { ManyToMany } from './ManyToMany';
import { ManyToOne } from './ManyToOne';

@prototype({
    associationCount: 0,
    cls: null,
    rank: null
})
class EntityInfo {
    constructor (name) {
        this.name = name;
        this.associations = new Empty();
    }

    connect (cls) {
        //<debug>
        assert(!this.cls, 'Duplicate entity name "{0}"', this.name);
        //</debug>

        this.cls = cls;

        cls.prototype.associations = cls.associations = this.associations;
    }
}

@define({
    prototype: {
        cascadeQueue: null
    }
})
class Schema extends Base {
    /**
     * @cfg {Schema} default
     * An application can set this as a convenient way to track their default `Schema`
     * instance. This would be inappropriate for a library to set, and should be reserved
     * for the top-level of an application architecture. It can be useful, however, for a
     * library as a way to pull a default value should a `Schema` be needed. For example,
     * the `Session` class has a `schema` config that defaults to this value:
     * 
     *      @config('defer')
     *      schema = Schema.default;
     * 
     * The use of `'defer'` saves the evaluation of `Schema.default` for instantiation
     * time of the `Session`, allowing an application to load the library prior to setting
     * this value as long as no `Session` instance is created before it is set.
     * @static
     */
    static default = null;

    //-------------------------------------------------------------------------
    // Configs

    /**
     * @cfg {Number} cascadeDelay
     * The time to wait (in ms) before checking for `null` foreign keys on records that
     * will cause them to be dropped. This is useful for allowing records to be moved to
     * a different source.
     * @private
     */
    @config('initial')
    cascadeDelay = 10;

    /**
     * @cfg {Object} identifiers
     * This object holds named `Identifier` configs that can be used by `Model`s to resolve
     * their `{@link Model#identifier}` config.
     */
    @config
    identifiers = {};

    /**
     * @cfg {String/Object/Namer} namer
     * Specifies or configures the name generator for the schema.
     */
    @config
    namer = 'default';

    /**
     * @cfg {Object/ObjectTemplate} proxy
     * This is a template used to produce `Proxy` configurations for Models that do not
     * define an explicit `{@link Model#cfg!proxy proxy}`.
     *
     * This template is processed with the Model class as the data object which means
     * any static properties of the Model are available. The most useful of these are
     *
     *  * `prefix` - The `urlPrefix` property of this instance.
     *  * `entityName` - The {@link Model#entityName name} of the Model
     *      (for example, "User").
     *  * `schema` - This instance.
     */
    @config
    proxy = {
        type: 'ajax',
        url: '{prefix}/{entityName}'
    };

    /**
     * @cfg {String} [urlPrefix=""]
     * This is the URL prefix used for all requests to the server. It could be something
     * like "/~api". This value is included in the `proxy` template data as "prefix".
     */
    @config
    urlPrefix = '';

    //-------------------------------------------------------------------------
    // Life-cycle
    
    ctor () {
        this.clear();
    }

    clear () {
        let me = this;

        // for testing
        delete me.setConfig;

        // me.timer = destroy(me.timer);

        me.assocMap = new ExMap();

        /**
         * @property {Model[]} entities
         * The array model classes registered in this `Schema`.
         */
        me.entities = [];
        me.entities.byName = new Empty(
            // entityName: EntityInfo
        );
    }

    //-------------------------------------------------------------------------
    // Static Methods

    static resolve (entity) {
        let ret = entity;
        
        if (typeof entity === 'string') {
            ret = this.default.entities.byName[entity];
        }
        
        //<debug>
        assert(!ret || ret.prototype.isModel, 'Invalid model name "{0}"', entity);
        //</debug>
        
        return ret;
    }

    //-------------------------------------------------------------------------
    // Methods

    /**
     * Returns the entity (a Model-derived class) given its name.
     * @param {String} name The name of the entity
     * @return {Model}
     */
    getEntity (name) {
        let entry = this.entities.byName[name];

        return (entry && entry.cls) || null;
    }

    /**
     * Returns the `entityName` of the given string (already an entity name) or the
     * model class.
     * @param {String/Model} cls The model class or name of the class.
     * @return {String}
     */
    getEntityName (cls) {
        return (typeof cls === 'string') ? cls : (cls && cls.entityName);
    }
    
    getIdentifier (id) {
        let identifiers = this.identifiers;
        
        return identifiers && identifiers.get(id) || null;
    }

    /**
     * Returns `true` if there are associations attached to the entity that need to be
     * read when using nested loading.
     * 
     * @param {String/Class/Model} entity The name, instance or Model class.
     * @return {Boolean}
     */
    hasAssociations (entity) {
        let name = this.getEntityName(entity);
        let entry = this.entities.byName[name];
        
        return !!(entry && entry.associationCount);
    }

    /**
     * Return `true` if the entity is defined in this schema.
     * @param {String/Model} entity The name or model
     * @return {Boolean}
     */
    hasEntity (entity) {
        let name = this.getEntityName(entity);
        let entry = this.entities.byName[name];

        return entry && !!((entity === name) ? entry : (entry.cls === entity));
    }

    //-------------------------------------------------------------------------
    // Config logic

    //--------------------
    // cascadeDelay

    updateCascadeDelay (delay) {
        this.cascadeDeleteSome.delay = delay;
    }

    //--------------------
    // identifiers

    applyIdentifiers (identifiers) {
        let ret = new Map();
        let config, id, ident;
        
        for (id in identifiers) {
            config = identifiers[id];

            if (config) {
                if (config.isIdentifier) {
                    ident = config;
                }
                else {
                    config = configFromType(config);

                    ident = Base.Factory.identifier(config);
                    ident.$rawConfig = config;
                }
                
                ret.set(ident.id = id, ident);
            }
        }
        
        return ret;
    }

    //--------------------
    // namer

    applyNamer (namer) {
        let ret = Namer.create(namer);
        
        ret.schema = this;
        
        return ret;
    }

    //--------------------
    // proxy

    applyProxy (proxy) {
        return ObjectTemplate.create(proxy);
    }

    //---------------------------------------------------------------------------------
    // Internals (alphabetic order)

    addAssociation (association) {
        let assocMap = this.assocMap;
        let entities = this.entities.byName;
        let name = association.name;
        let left = association.left;
        let right = association.right;
        let leftEntry = entities[left.type];
        let rightEntry = entities[right.type];
 
        if (!assocMap.has(name)) {
            assocMap.set(name, association);

            leftEntry.associations[right.role] = right;
            rightEntry.associations[left.role] = left;

            ++leftEntry.associationCount;
            ++rightEntry.associationCount;
        }
        //<debug>
        else {
            // eslint-disable-next-line vars-on-top
            let existing = assocMap.get(name);

            assert(existing.constructor === association.constructor);
            assert(existing.left.type === association.left.type);
            assert(existing.left.role === association.left.role);
            assert(existing.right.type === association.right.type);
            assert(existing.right.role === association.right.role);
        }
        //</debug>
    }
    
    /**
     * Adds an {@link Model entity} to this `schema`.
     * @param {Model} entityType A class derived from {@link Model}.
     * @private
     */
    addEntity (entityType) {
        let me = this;
        let entities = me.entities;
        let entitiesByName = entities.byName;
        let entityName = entityType.entityName;
        let entry = entitiesByName[entityName];
        let fields = entityType.fields;
        let associations, field, name;

        if (entry) {
            associations = entry.associations;
            
            for (name in associations) {
                // the associations collection describes the types to which this entity is
                // related, but the inverse descriptors need this entityType:
                associations[name].inverse.cls = entityType;

                // me.associationEntityMap[entityName] = true;

                // We already have an entry, which means other associations have likely
                // been added for us, so go ahead and do the inverse decoration
                me.decorateAssoc(associations[name].association);
            }
        }
        else {
            entitiesByName[entityName] = entry = new EntityInfo(entityName);
        }

        entry.connect(entityType);
        entities.push(entityType);

        for (field of fields) {
            if (field.reference) {
                me.addReferenceDescr(entityType, field);
            }
        }
    }

    addKeylessMany (entityType, assoc) {
        let me = this;
        let name, target, inverseOptions, child, declaredInverse;

        assoc = me.checkKeylessAssoc(entityType, assoc);
        name = assoc.type;
        target = me.getEntityInfo(name);
        
        name = entityType.entityName;

        // The assoc is really the inverse, so we only set the minimum.
        //
        //  class Order extends Model {
        //      static hasMany = ['OrderItems'];
        //
        //  class Order extends Model {
        //      static hasMany = [{
        //          type: 'OrderItem'
        //      }];
        //
        //  ==>
        //      {
        //          type: 'Order',
        //          inverse: {
        //              type: 'OrderItem'
        //          }
        //      }
        //      

        // Copy the inverse from assoc and apply it over assoc!
        declaredInverse = assoc.inverse;
        delete assoc.inverse;

        inverseOptions = copy({
            type: target.name
        }, assoc);

        assoc = copy({
            type: name,
            inverse: inverseOptions
        }, declaredInverse);

        child = inverseOptions.child;
        
        if (child) {
            delete inverseOptions.child;
            assoc.parent = name;
        }

        me.addReference(target.cls, null, assoc, false);
    }

    addKeylessSingle (entityType, entries, unique) {
        let me = this;
        let assoc;
        
        for (assoc of arrayify(entries)) {
            assoc = me.checkKeylessAssoc(entityType, assoc);
            assoc.fromSingle = true;

            me.addReference(entityType, null, assoc, unique);
        }
    }

    /**
     * Adds the matrix associations of an {@link Model} to this `schema`.
     * @param {Model} entityType A class derived from {@link Model}.
     * @param {Object/String[]} matrices The manyToMany matrices for the class.
     * @private
     */
    addMatrices (entityType, matrices) {
        let me = this;
        let matrix, matrixName;

        if (is.string(matrices)) {
            me.addMatrixDescr(entityType, null, matrices);
        }
        else if (matrices[0]) { // if (is.array)
            for (matrix of matrices) {
                me.addMatrixDescr(entityType, null, matrix);
            }
        }
        else {
            for (matrixName in matrices) {
                me.addMatrixDescr(entityType, matrixName, matrices[matrixName]);
            }
        }
    }

    /**
     * Adds an entry from a {@link ManyToMany matrix config} declared by an
     * entity.
     * 
     * This is the ideal method to override in a derived class if the standard, default
     * naming conventions need to be adjusted. In the override, apply whatever logic is
     * appropriate to determine the missing values and pass along the proper results to
     * this method in the `callParent`.
     * 
     * @param {Model} entityType A class derived from `Model`.
     *
     * @param {String} matrixName The name of the matrix association.
     *
     * @param {String} [relation] A base name for the matrix. For information about the
     * meaning of this see {@link Schema#ManyToMany}.
     * 
     * @param {Object} left The descriptor for the "left" of the matrix.
     * @param {String} left.type The type of the entity on the "left" of the matrix.
     * 
     * @param {String} [left.field] The name of the field in the matrix table for the "left"
     * side entity. If not provided, this defaults to the `left.type` name
     * {@link Inflector#singularize singularized} and uncapitalized followed by
     * "Id". For example, "userId" for a `left.type` of "Users".
     * 
     * @param {String} [left.role] The name of the relationship from the `left.type` to the
     * `right.type`. If not provided, this defaults to the `left.type` name
     * {@link Inflector#pluralize pluralized} and uncapitalized. For example,
     * "users" for a `left.type` of "User".
     * 
     * @param {Object} right The descriptor for the "right" of the matrix.
     * @param {String} right.type The type of the entity on the "right" of the matrix.
     * 
     * @param {String} [right.field] The name of the field in the matrix table for the
     * "right" side entity. If not provided, this defaults in the same way as `left.field`
     * except this is based on `right.type`.
     * 
     * @param {String} [right.role] The name of the relationship from the `right.type` to
     * the `left.type`. If not provided, this defaults in the same way as `left.role`
     * except this is based on `right.type`.
     * @private
     */
    addMatrix (entityType, matrixName, relation, left, right) {
        let me = this;
        let namer = me.namer;
        let leftType = left.type;
        let rightType = right.type;
        let leftField = left.field || namer.apply('idField', leftType);
        let rightField = right.field || namer.apply('idField', rightType);
        let leftRole = left.role || namer.matrixRole(relation, leftType);
        let rightRole = right.role || namer.matrixRole(relation, rightType);
        let leftEntry = me.getEntityInfo(leftType);
        let rightEntry = me.getEntityInfo(rightType);
        let matrix;

        me.addAssociation(matrix = new ManyToMany({
            name: matrixName,
            schema: me,
            definedBy: entityType,
            left: {
                cls: leftEntry.cls,
                type: leftType,
                role: leftRole,
                field: leftField,
                associationKey: left.associationKey
            },
            right: {
                cls: rightEntry.cls,
                type: rightType,
                role: rightRole,
                field: rightField,
                associationKey: right.associationKey
            }
        }));

        me.decorateAssoc(matrix);
    }

    /**
     * Adds an entry from a {@link ManyToMany matrix config} declared by an
     * {@link Model entity}.
     *
     * @param {Model} entityType A class derived from {@link Model Entity}.
     * @param {String} [matrixName] The name of the matrix association.
     * @param {String/Object} matrixDef A {@link ManyToMany matrix config}
     * declared by an {@link Model entity}.
     * @private
     */
    addMatrixDescr (entityType, matrixName, matrixDef) {
        let me = this;
        let entityName = entityType.entityName;
        let namer = me.namer;
        let left = matrixDef.left;
        let right = matrixDef.right;
        let last, relation;

        if (matrixDef.charAt) {
            if (matrixDef.charAt(0) === '#') { // "#User" (entity is on the left)
                /*
                 *  Ext.define('User', {
                 *      extend: 'Model',
                 *      manyToMany: '#Group'
                 *  });
                 */
                left = { type: entityName }; // User
                right = { type: matrixDef.substring(1) }; // Group
            }
            else if (matrixDef.charAt(last = matrixDef.length - 1) === '#') { // "User#"
                /*
                 *  Ext.define('Group', {
                 *      extend: 'Model',
                 *      manyToMany: 'User#'
                 *  });
                 */
                left = { type: matrixDef.substring(0, last) }; // User
                right = { type: entityName }; // Group
            }
            else if (namer.apply('multiRole', entityName) <
                     namer.apply('multiRole', matrixDef)) {
                /*
                 *  Ext.define('Group', {
                 *      extend: 'Model',
                 *      manyToMany: 'User'
                 *  });
                 */
                left = { type: entityName };  // Group
                right = { type: matrixDef };  // User
            }
            else {
                /*
                 *  Ext.define('User', {
                 *      extend: 'Model',
                 *      manyToMany: 'Group'
                 *  });
                 */
                left = { type: matrixDef };  // Group
                right = { type: entityName };  // User
            }
        }
        else {
            if (matrixDef.isClass) {
                matrixDef = {
                    type: matrixDef.entityName
                };
            }
            //<debug>
            else {
                assert(is.string(matrixDef.type), 'No "type" for manyToMany in ' + entityName);
            }
            //</debug>

            relation = matrixDef.relation;

            if (left || (!right &&
                namer.apply('multiRole', entityName) < namer.apply('multiRole', matrixDef.type))
            ) {
                if (!left || left === true) {
                    /*
                     *  Ext.define('User', {
                     *      extend: 'Model',
                     *      manyToMany: {
                     *          type: 'Group',
                     *          left: true
                     *      }
                     *  });
                     */
                    left = { type: entityName }; // User
                }
                else {
                    /*
                     *  Ext.define('User', {
                     *      extend: 'Model',
                     *      manyToMany: {
                     *          type: 'Group',
                     *          left: {
                     *              role: 'useroids'
                     *          }
                     *      }
                     *  });
                     */
                    left = copy({ type: entityName }, left); // User
                }
                
                right = matrixDef;  // Group
            }
            else {
                if (!right || right === true) {
                    /*
                     *  Ext.define('Group', {
                     *      extend: 'Model',
                     *      manyToMany: {
                     *          type: 'User',
                     *          right: true
                     *      }
                     *  });
                     */
                    right = { type: entityName }; // Group
                }
                else {
                    /*
                     *  Ext.define('Group', {
                     *      extend: 'Model',
                     *      manyToMany: {
                     *          type: 'User',
                     *          right: {
                     *              role: 'groupoids'
                     *          }
                     *      }
                     *  });
                     */
                    right = copy({ type: entityName }, right); // Group
                }
                
                left = matrixDef; // User
            }
        }

        if (!matrixName) {
            matrixName = namer.manyToMany(relation, left.type, right.type);
        }

        if (!me.assocMap.has(matrixName)) {
            me.addMatrix(entityType, matrixName, relation, left, right);
        }
        //<debug>
        else {
            // In the case of a matrix association, both sides may need to declare it to
            // allow them to be used w/o the other present. In development mode, we want
            // to check that they declare the same thing!
            //
            me.addMatrix(entityType, matrixName, relation, left, right);
        }
        //</debug>
    }

    /**
     * Adds a {@link Field#reference reference} field association for an entity
     * to this `schema`.
     * 
     * This is the ideal method to override in a derived class if the standard, default
     * naming conventions need to be adjusted. In the override, apply whatever logic is
     * appropriate to determine the missing values and pass along the proper results to
     * this method in the `callParent`.
     * 
     * @param {Model} entityType A class derived from `Model`.
     * 
     * @param {Field} referenceField The `field` with the `reference` config.
     * 
     * @param {Object} [descr] The `reference` descriptor from the `referenceField` if one
     * was given in the field definition.
     *
     * @param {String} [descr.association] The name of the association. If empty or null, this
     * will be derived from `entityType`, `role`, `inverse` and
     * `referenceField.unique`.
     *
     * @param {String} [descr.role] The name of the relationship from `entityType` to the target
     * `type`. If not specified, the default is the `referenceField.name` (minus any "Id"
     * suffix if present).
     *
     * @param {String} [descr.inverse] The name of the relationship from the target `type`
     * to the `entityType`. If not specified, this is derived from the
     * {@link Model#entityName entityName} of the `entityType`
     * ({@link Inflector#singularize singularized} or
     * {@link Inflector#pluralize pluralized} based on `referenceField.unique`).
     *
     * @param {String} descr.type The {@link Model#entityName entityName} of the
     * target of the reference.
     *
     * @param {Boolean} [unique=false] Indicates if the reference is one-to-one.
     * @private
     */
    addReference (entityType, referenceField, descr, unique) {
        let me = this;
        let namer = me.namer;
        let entities = me.entities;
        // When no entityType is passed, we are being called from a hasMany prior to the
        // target class becoming real, so get the name from the association descriptor:
        let entityName = entityType ? entityType.entityName : descr.inverse.type;
        let association = descr.association;
        let child = descr.child;
        let parent = descr.parent;
        let rightRole = descr.role;
        // Allow { child: 'OrderItem' } or the reverse (for one-to-one mostly):
        let rightType = descr.type || parent || child;
        let leftVal = descr.inverse;
        let left = is.string(leftVal) ? { role: leftVal } : leftVal;
        let references = entityType && entityType.references;
        let leftRole = left && left.role;
        let entry, T;
        
        if (is.class(rightType)) {
            //<debug>
            assert(rightType.schema === me, 'Model {0} is not part of this schema',
                   rightType.entityName);
            //</debug>

            rightType = rightType.entityName;
        }

        if (!rightRole) {
            // In a FK association, the left side has the key in a field named something
            // like "orderId". The default implementation of "fieldRole" namer is to drop
            // the id suffix which gives is the role of the right side.
            if (!referenceField || descr.legacy) {
                rightRole = namer.apply('uncapitalize', rightType);
            }
            else {
                rightRole = namer.apply('fieldRole', referenceField.name);
            }
        }

        if (!leftRole) {
            leftRole = namer.inverseFieldRole(entityName, unique, rightRole, rightType);
        }

        if (!association) {
            if (unique) {
                association = namer.oneToOne(leftRole, rightType, rightRole);
            }
            else {
                association = namer.manyToOne(leftRole, rightType, rightRole);
            }
        }

        //<debug>
        assert(!referenceField || referenceField.definedBy !== entities[rightType],
               'ForeignKey reference should not be owned by the target model');
        //</debug>

        // Lookup the entry for the target of the reference. Since it may not as yet be
        // defined, we may need to create the entry.
        entry = me.getEntityInfo(rightType);

        // as a field w/reference we are always "left":
        T = unique ? OneToOne : ManyToOne;
        
        association = new T({
            name: association,
            // Note: "parent" or "child" can be strings so don't assume otherwise
            owner: child ? 'left' : (parent ? 'right' : null),
            definedBy: entityType,
            schema: me,
            field: referenceField,
            nullable: referenceField ? !!referenceField.allowBlank : true,
            left: {
                role: leftRole,
                ...left,
                cls: entityType,
                type: entityName
            },
            right: {
                role: rightRole,
                ...descr,
                cls: entry.cls,
                type: rightType
            },
            meta: descr
        });

        if (referenceField) {
            if (!references.length) {
                entityType.references = entityType.prototype.references = references = [];
            }

            // Upgrade the "reference" string to the role:
            referenceField.reference = association.right;
            references.push(referenceField);
        }
        
        me.addAssociation(association);
        
        if (association.right.cls) {
            me.decorateAssoc(association);
        }
    }

    /**
     * Adds a {@link Field#reference reference} {@link Field field}
     * association for an entity to this `schema`. This method decodes the `reference`
     * config of the `referenceField` and calls {@link #addReference}.
     *
     * @param {Model} entityType A class derived from {@link Model Model}.
     * @param {Field} referenceField The `field` with the `reference` config.
     * @private
     */
    addReferenceDescr (entityType, referenceField) {
        let me = this;
        let ref = referenceField.reference;
        let descr;

        if (is.string(ref) || is.class(ref)) {
            descr = {
                type: ref
            };
        }
        else {
            descr = copy({}, ref);
        }

        me.addReference(entityType, referenceField, descr, referenceField.unique);
    }

    cascadeDelete (all) {
        let me = this;
        let cascadeQueue, item;

        while ((cascadeQueue = me.cascadeQueue)) {
            me.cascadeDeleteSome.cancel();
            me.cascadeQueue = null;

            for (item of cascadeQueue) {
                item[0].checkKeyForDrop(item[1]);
            }
            
            // Processing one drop may cause another drop to occur. If we're forcing the
            // state to resolve (all is truthy), then we trigger all the drops at once.
            // When "all" is falsy we break out after one iteration.
            if (!all) {
                break;
            }
        }
    }
    
    @buffered(10)
    cascadeDeleteSome () {
        this.cascadeDelete();
    }

    checkCascadeDelete (record, role) {
        (this.cascadeQueue || (this.cascadeQueue = [])).push([ role, record ]);

        this.cascadeDeleteSome();
    }

    checkKeylessAssoc (entityType, assoc) {
        if (is.string(assoc)) {
            assoc = {
                type: assoc
            };
        }
        else if (assoc.isClass) {
            assoc = {
                type: assoc.entityName
            };
        }
        else {
            assoc = copy({}, assoc);
    
            if (assoc.model) {
                assoc.type = assoc.model;
                delete assoc.model;
            }
        }

        // eslint-disable-next-line vars-on-top
        let name = assoc.name;
        
        if (name) {
            delete assoc.name;
            assoc.role = name;
        }

        assoc.type = this.getEntityName(assoc.child || assoc.parent || assoc.type);

        return assoc;
    }

    constructProxy (Model) {
        let me = this;
        let data = {
            entityName: Model.entityName,
            model: Model,
            prefix: me.urlPrefix,
            schema: me
        };

        return me.proxy.apply(data);
    }
    
    decorateAssoc (association) {
        this.decorateRole(association.left);
        this.decorateRole(association.right);
    }
    
    decorateRole (role) {
        let me = this;
        // To decorate a role like "users" (of a User / Group matrix) we need to add
        // getter/setter methods to access the "users" collection ... to Group! All
        // other data about the "users" role and the User class belong to the given
        // "role" but the receiver class is the inverse.
        let cls = role.inverse.cls;
        let namer = me.namer;
        let getter, setter, proto;

        // The cls may not be loaded yet, so we need to check if it is before
        // we can decorate it.
        if (cls && !role.decorated) {
            role.decorated = true;
            getter = role.getterName || (role.getterName = namer.getterName(role));

            proto = cls.prototype;
            proto[getter] = getter = role.createGetter();
            getter.role = role;

            // Not all associations will create setters
            if (role.createSetter) {
                setter = role.setterName || (role.setterName = namer.setterName(role));
                proto[setter] = setter = role.createSetter();
                setter.role = role;
            }
        }
    }

    getEntityInfo (name) {
        let entityName = name.entityName || name;
        let entities = this.entities.byName;

        return entities[entityName] || (entities[entityName] = new EntityInfo(entityName));
    }

    rankEntities () {
        let me = this;
        let entities = me.entities.byName;
        let entityNames = Object.keys(entities);
        let entityName, entityInfo;

        //<debug>
        me.topoStack = []; // diagnostic stack
        me.topoStack.toString = () => me.topoStack.join(' --> ');
        //</debug>

        me.rankSeed = 0;

        // We do an alpha sort to make the result consistent from run-to-run.
        entityNames.sort();

        for (entityName of entityNames) {
            entityInfo = entities[entityName];

            if (!entityInfo.rank) {
                me.rankEntity(entityInfo);
            }
        }

        //<debug>
        me.topoStack = null; // cleanup diagnostic stack
        //</debug>
    }

    rankEntity (entityInfo) {
        let me = this;
        let entityType = entityInfo.cls;
        let associations = entityType.associations;
        let associatedInfo, role, roleName;

        //<debug>
        me.topoStack.push(entityType.entityName);

        assert(entityInfo.rank !== 0,
               '{0} has circular foreign-key references: {1}', entityType.entityName,
               me.topoStack);

        entityInfo.rank = 0; // mark as "adding" so we can detect cycles
        //</debug>

        for (roleName in associations) {
            role = associations[roleName];
            
            // The role describes the thing to which entityType is associated, so we
            // want to know about *this* type and whether it has a foreign-key to the
            // associated type. The left side is the FK owner so if the associated
            // type is !left then entityType is left.
            //
            if (!role.left && role.association.field) {
                // This entityType has a foreign-key to the associated type, so add
                // that type first.
                associatedInfo = me.getEntityInfo(role.cls);
                
                if (!associatedInfo.rank) {
                    me.rankEntity(associatedInfo);
                }
            }
        }

        entityType._rank = entityInfo.rank = ++me.rankSeed;

        //<debug>
        this.topoStack.pop();
        //</debug>
    }
}

export { Schema };
