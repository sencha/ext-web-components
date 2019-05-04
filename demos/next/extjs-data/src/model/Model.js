import {
    //<debug>
    assert, raise,
    //</debug>

    Base, Empty, EMPTY,
    define, config, configFromType,
    clone, copy, decapitalize, defineProps,
    emptyFn, is, merge, remove, arrayify
} from '../../../extjs-core/src';


import { callback } from '../../../extjs-util/src';
import { Template } from '../../../extjs-util/src/template';

import { ResultSet } from '../request';
import { Field } from '../field';
import { Schema } from '../schema/Schema';

import '../identifier/Sequential';
import '../proxy/Proxy';

// This object is used whenever the set() method is called and given a string as the
// first argument. This approach saves memory (and GC costs) since we could be called
// a lot.
const singleProp = {};

/**
 * This class is the base class for data model classes.
 * 
 * It is recommended that all models in an applicaton derive from a common base and that
 * this base define at least the `schema` they will share.
 * 
 * For example:
 * 
 *      import { Model, Schema } from '../../../extjs-data';
 * 
 *      let schema = new Schema();
 *
 *      @define
 *      class BaseModel extends Model {
 *          @config
 *          static schema = schema;
 *      }
 *      
 *      export { BaseModel };
 * 
 * This base class can define any number of other helpful things, but the `schema` allows
 * an application's `Model`s to relate to each other via associations.
 */
@define({
    /**
     * @property {Boolean} isModel
     * The value `true` to identify this class and its subclasses.
     * @readonly
     */

    prototype: {
        associations: null,  // added by the Schema

        /**
         * @property {Boolean} dirty
         * True if this record has been modified.
         * @readonly
         */
        dirty: false,
    
        /**
         * @property {Boolean} dropped
         * True if this record is pending delete on the server. This is set by the `drop`
         * method and transmitted to the server by the `save` method.
         * @readonly
         */
        dropped: false,
        
        /**
         * @property {Boolean} editing
         * Internal flag used to track whether or not the record is currently being
         * edited.
         * @readonly
         */
        editing: false,
    
        /**
         * @property {Boolean} erased
         * True if this record has been erased on the server. This flag is set of the `erase`
         * method.
         * @readonly
         */
        erased: false,
        erasing: false,
    
        loadOperation: null,
        loadCount: 0,
        
        /**
         * @property {Boolean} phantom
         * Is set to `true` when the record does not yet exist in a server-side. This is
         * inferred by the presence of the `idProperty` in the `data` object presented to
         * the constructor. This property is `true` if and only if `crudState` is set to
         * `'C'`.
         */
        phantom: false,
    
        /**
         * @property {Session} session
         * The {@link Session} for this record.
         * @readonly
         */
        session: null,
    
        /**
         * @property {"C"/"R"/"U"/"D"} crudState
         * This value is initially "R" or "C" indicating the initial CRUD state. As the
         * record changes and the various joined parties (stores, sessions, etc.) are
         * notified this value is updated prior to these calls. In other words, the joined
         * parties are notified after the `crudState` is updated. This means that the
         * `crudState` property may be briefly out of sync with underlying changes if this
         * state is used outside of these notifications.
         *
         * The possible states have these meanings:
         *
         *  * "R" - The record is in a cleanly retrieved (unmodified) state.
         *  * "C" - The record is in a newly created (`phantom`) state.
         *  * "U" - The record is in an updated, `modified` (`dirty`) state.
         *  * "D" - The record is in a `dropped` state.
         *
         * @readonly
         */
        crudState: 'R',
    
        /**
         * @property {"C"/"R"/"U"/"D"} crudStateWas
         * This property holds the previous value of `crudState`. It is initially `'C'`
         * if this record is created as a `phantom` or `'R'` otherwise.
         * 
         * As the record changes and the various joined parties (stores, sessions, etc.)
         * are notified this value is updated for the *subsequent* calls. In other words,
         * the joined parties are notified and then `crudStateWas` is modified for the next
         * update.
         *
         * The value of this property has the same meaning as `crudState`.
         * @readonly
         */
        crudStateWas: 'R',
        
        /**
         * @property {Field[]} fields
         * The fields array for this record's model. This is placed on the prototype when
         * the class {@link #cfg!fields fields config} is processed.
         */
        fields: null,

        /**
         * @property {Number} generation
         * This property is incremented on each modification of a record.
         * @readonly
         */
        generation: 1,
    
        /**
          * @property {Object} modified
          * A hash of field values which holds the initial values of fields before a set
          * of edits are {@link #commit committed}.
          */
        modified: null,
    
        /**
         * @property {Object} previousValues
         * This object is similar to the `modified` object except it holds the data values
         * as they were prior to the most recent change.
         * @readonly
         * @private
         */
        previousValues: undefined, // Not "null" so getPrevious returns undefined first time

        //----------------------------
        // Private:
        
        // The same array as on the class.
        references: EMPTY,

        _commitOptions: {
            commit: true
        },
        _getChangesOptions: {
            changes: true
        },
        _getAssociatedOptions: {
            associated: true
        },
        _getNotAssociatedOptions: {
            associated: false
        },

        _metaProperties: {
            dirty: 'dirty',
            phantom: 'phantom',
            valid: 'isValid'
        },

        _rejectOptions: {
            convert: false,
            silent: true
        },
        
        _validation: null
    },
    
    extended (derived) {
        // Normally static configs wait for first use (via property get/set or instance
        // creation), but models need to register themselves for associations to find
        // their partners by name.
        derived.$meta.initClassConfig();
    }
})
class Model extends Base {
    //----------------------------------------------------------------------------
    // Configs - Model configs are all static as they affect the class (i.e., the
    // entity) and not the instances (i.e., the records).

    /**
     * @cfg {String} entityName
     * The name of this class in the `schema`. If set to `true`, this value will default
     * to the `name` of the class constructor and be registered in the schema.
     *
     * Note, that all entities in a given `schema` must have a unique `entityName`.
     * 
     * Otherwise, this value will be `''`.
     */
    @config
    static entityName = true;
    
    /**
     * @cfg {Field[]/String[]} fields
     * An array of `Field` config objects, simply the field {@link Field#name name}, or
     * a mix of config objects and strings. When only a field name is given, the field
     * type defaults to `'auto'`.
     * 
     * In a {@link Field} config object you may pass the alias of the type like so:
     * 
     *     // two fields are set:
     *     // - an 'auto' field with a name of 'firstName'
     *     // - and an Fieldfield with a name of 'age'
     *     fields: ['firstName', {
     *         type: 'int',
     *         name: 'age'
     *     }]
     * 
     * Fields will automatically be created at read time for any for any keys in the 
     * data passed to the Model's {@link #proxy proxy's} {@link Reader reader} whose
     * name is not explicitly configured in the `fields` config.
     * 
     * Extending a Model class will inherit all the `fields` from the superclass / 
     * ancestor classes.
     * 
     * @property {Object} fields.byName
     * This object indexes by field name and contains the `Field` by that name:
     * 
     *      @define
     *      class User extends Model {
     *          @config
     *          static fields = [
     *              { name: 'name' }
     *          ];
     *      }
     * 
     *      var nameField = User.fields.byName.name;
     *      
     *      // or, if you have an instance:
     *
     *      var user = new User();
     *      var nameField = user.fields.byName.name;
     * 
     * @property {Field[]} fields.criticals
     * This array holds all of the fields that have the `critical` config set.
     *
     * @property {Field[]} fields.ranked
     * The model's fields in "rank" order. This is typically the same as ordinal order
     * except that this order accounts for field `depends` requirements and ensures that
     * the fields on which a given field `depends` precede it in this array.
     *
     * @property {Field[]} fields.transients
     * This array holds all of the fields that do not have the `persist` config set.
     */
    @config({
        merge (newValue, oldValue, target) {
            let ret = [];
            let field, map, ordinal;
            
            if (!newValue) {
                return oldValue;
            }

            if (oldValue) {
                // Take existing values and copy them into the new array, tracking them
                // by name:
                map = new Map();
                
                for (field of oldValue) {
                    // Array.push returns new length, so 1, 2, 3...
                    map.set(field.name, ret.push(field));
                }
            }
            
            for (field of newValue) {
                //mjg field = (typeof field === 'string') ? { name: field } : copy({}, field);
                field = (typeof field === 'string') ? { name: field } : { name: field } ;


                if (!(ordinal = map && map.get(field.name))) {
                    // If the field is new, add it to the end of the fields[]
                    ret.push(field);
                    field.definedBy = target;
                }
                else {
                    // overwrite the field at the established ordinal
                    --ordinal;  // => 0-based
                    ret[ordinal] = field = merge({}, ret[ordinal], field);
                    // definedBy stays as the originating class
                }
            }
            
            return ret;
        }
    })
    static fields = [];

    /**
     * @cfg {String} idProperty
     * The name of the field treated as this Model's unique id.
     *
     * If changing the idProperty in a subclass, the generated id field will replace the
     * one generated by the superclass, for example;
     *
     *      Ext.define('Super', {
     *          extend: 'Model',
     *          fields: ['name']
     *      });
     *
     *      Ext.define('Sub', {
     *          extend: 'Super',
     *          idProperty: 'customId'
     *      });
     *
     *      var fields = Super.getFields();
     *      // Has 2 fields, "name" & "id"
     *      console.log(fields[0].name, fields[1].name, fields.length);
     *
     *      fields = Sub.getFields();
     *      // Has 2 fields, "name" & "customId", "id" is replaced
     *      console.log(fields[0].name, fields[1].name, fields.length);
     *
     * The data values for this field must be unique or there will be id value collisions
     * in the {@link Store}.
     */
    @config
    static idProperty = 'id';

    //------------------------------
    // The above are special enough to hoist, but the rest are in alpha order...
    
    /**
     * @cfg {String/Object/String[]/Object[]} belongsTo
     * One or more `BelongsTo` associations for this model.
     */
    @config
    static belongsTo = null;

    /**
     * @cfg {String} clientIdProperty
     * The name of the property a server will use to send back a client-generated id in a
     * `create` or `update` `{@link Operation operation}`.
     *
     * If specified, this property cannot have the same name as any other field.
     *
     * For example:
     *
     *      Ext.define('Person', {
     *          idProperty: 'id',  // this is the default value (for clarity)
     *
     *          clientIdProperty: 'clientId',
     *
     *          identifier: 'negative', // to generate -1, -2 etc on the client
     *
     *          fields: [ 'name' ]
     *      });
     *
     *      var person = new Person({
     *          // no id provided, so -1 is generated
     *          name: 'Clark Kent'
     *      });
     *
     * The server is given this data during the `create`:
     *
     *      {
     *          id: -1,
     *          name: 'Clark Kent'
     *      }
     *
     * The server allocates a real id and responds like so:
     *
     *      {
     *          id: 427,
     *          clientId: -1
     *      }
     *
     * This property is most useful when creating multiple entities in a single call to
     * the server in a `{@link CreateOperation create operation}`. Alternatively,
     * the server could respond with records that correspond one-to-one to those sent in
     * the `operation`.
     *
     * For example the client could send a `create` with this data:
     *
     *      [ { id: -1, name: 'Clark Kent' },
     *        { id: -2, name: 'Peter Parker' },
     *        { id: -3, name: 'Bruce Banner' } ]
     *
     * And the server could respond in the same order:
     *
     *      [ { id: 427 },      // updates id = -1
     *        { id: 428 },      // updates id = -2
     *        { id: 429 } ]     // updates id = -3
     *
     * Or using `clientIdProperty` the server could respond in arbitrary order:
     *
     *      [ { id: 427, clientId: -3 },
     *        { id: 428, clientId: -1 },
     *        { id: 429, clientId: -2 } ]
     *
     * **IMPORTANT:** When upgrading from previous versions be aware that this property
     * used to perform the role of `{@link Writer#clientIdProperty}` as
     * well as that described above. To continue send a client-generated id as other than
     * the `idProperty`, set `clientIdProperty` on the `writer`. A better solution, however,
     * is most likely a properly configured `identifier` as that would work better with
     * associations.
     */
    @config
    static clientIdProperty = null;

    /**
     * @cfg {Boolean} convertOnSet
     * Set to `false` to prevent any converters from being called on fields specified in 
     * a {@link Model#set set} operation.
     * 
     * **Note:** Setting the config to `false` will only prevent the convert / calculate 
     * call when the set `fieldName` param matches the field's `{@link #name}`.  In the 
     * following example the calls to set `salary` will not execute the convert method 
     * on `set` while the calls to set `vested` will execute the convert method on the 
     * initial read as well as on `set`.
     * 
     * Example model definition:
     * 
     *     Ext.define('MyApp.model.Employee', {
     *         extend: 'Model',
     *         fields: ['yearsOfService', {
     *             name: 'salary',
     *             convert: function (val) {
     *                 var startingBonus = val * .1;
     *                 return val + startingBonus;
     *             }
     *         }, {
     *             name: 'vested',
     *             convert: function (val, record) {
     *                 return record.get('yearsOfService') >= 4;
     *             },
     *             depends: 'yearsOfService'
     *         }],
     *         convertOnSet: false
     *     });
     *     
     *     var tina = Ext.create('MyApp.model.Employee', {
     *         salary: 50000,
     *         yearsOfService: 3
     *     });
     *     
     *     console.log(tina.get('salary')); // logs 55000
     *     console.log(tina.get('vested')); // logs false
     *     
     *     tina.set({
     *         salary: 60000,
     *         yearsOfService: 4
     *     });
     *     console.log(tina.get('salary')); // logs 60000
     *     console.log(tina.get('vested')); // logs true
     */
    @config
    static convertOnSet = true;

    // Associations configs and properties
    /**
     * @cfg {String/Object/String[]/Object[]} hasMany
     * One or more `HasMany` associations for this model.
     */
    @config
    static hasMany = null;

    /**
     * @cfg {String/Object/String[]/Object[]} hasOne
     * One or more `HasOne` associations for this model.
     */
    @config
    static hasOne = null;

    /**
     * @cfg {String/Object/Identifier} identifier
     * The `identifier` generates values for the {@link #idProperty} when no value is
     * given. Records with client-side generated values for {@link #idProperty} are called
     * {@link #phantom} records since they are not yet known to the server.
     *
     * This can be overridden at the model level to provide a custom generator for a
     * model. The simplest form of this would be:
     * 
     *      import { SequentialIdentifier } from '../../../extjs-data/identifier';
     *
     *      @define
     *      class MyModel extends Model
     *          @config
     *          static identifier = SequentialIdentifier;
     *          ...
     *      });
     *
     * The above would generate {@link SequentialIdentifier sequential} id's like 1, 2, 3
     * etc..
     *
     * Another useful id generator is {@link UuidIdentifier}:
     *
     *      import { UuidIdentifier } from '../../../extjs-data/identifier';
     *      
     *      @define
     *      class MyModel extends Model
     *          @config
     *          static identifier = UuidIdentifier;
     *          ...
     *      });
     *
     * An identifier can also be configured:
     *
     *      @define
     *      class MyModel extends Model
     *          @config
     *          static identifier = {
     *              type: 'sequential',
     *              seed: 1000,
     *              prefix: 'ID_'
     *          };
     *          
     *          ...
     *      });
     *
     * The above would generate id's such as `'ID_1000'`, `'ID_1001'`, `'ID_1002'` etc..
     *
     * If multiple models share an id space, a single generator can be shared directly (by
     * providing the same instance for the `identifier`) or indirectly by registering
     * them in the  `identifiers` config of the `schema`.
     * 
     *      let schema = new Schema({
     *          identifiers: {
     *              xy: {
     *                  type: SequentialIdentifier,
     *                  prefix: 'XY_'
     *              }
     *          }
     *      }
     *      
     *      @define
     *      class BaseModel extends Model {
     *          @config
     *          static schema = schema;
     *      }
     *      
     *      ...
     *      
     *      @define
     *      class ModelX extends BaseModel {
     *          @config
     *          static identifier = 'xy';
     *      }
     *      
     *      @define
     *      class ModelY extends BaseModel {
     *          @config
     *          static identifier = 'xy';
     *      }
     *
     * This form of shared `identifier` is used by a `Session` where it clones the `schema`
     * values and uses them to assign identifiers to newly created records.
     */
    @config
    static identifier = 0;  // run applyIdentifier
    
    @config
    static idField = null;

    @config('lazy')
    static initializer = 0;  // trigger applier

    /**
     * @cfg {Object} manyToMany
     * A config object for {@link ManyToMany} associations.
     */
    @config
    static manyToMany = null;

    /**
     * @cfg {String/Object/Proxy} proxy
     * The {@link Proxy proxy} to use for this class.
     *
     * By default, the proxy is configured from the {@link Schema schema}.
     * You can ignore the schema defaults by setting `schema: false` on the `proxy`
     * config.
     *
     *      @define
     *      class CustomProxy extends AjaxProxy {
     *          @config
     *          url = 'users.json';
     *      });
     *
     *      @define
     *      class CustomModel extends BaseModel {
     *          @config
     *          static fields = ['name'];
     *
     *          @config
     *          static proxy = {
     *              type: CustomProxy,
     *              schema: false
     *          };
     *      });
     *
     * With `schema: false`, the `url` of the proxy will be used instead of what has been
     * defined on the `schema`.
     */
    @config('lazy')
    static proxy = 0;  // trigger applier
    
    /**
     * @cfg {Schema} schema
     * The {@link Schema schema} to which this entity and its associations belong. The
     * recommended way for Model classes to share a `Schema` is to inherit it from a base
     * class defined by the application:
     * 
     *      let schema = new Schema();
     *      
     *      @define
     *      class BaseModel extends Model {
     *          @config
     *          static schema = schema;
     *      }
     *      
     *      // All other models extends BaseModel
     * 
     * Models are registered in their schema by their `entityName`. This defaults to the
     * name used to declare their `class` (i.e., 'BaseModel' above).
     */
    @config
    static schema = null;

    /**
     * @cfg {Object} storeDefaults
     * A `Store` config object that will be applied when the store factory creates new
     * stores which specify this (or a derived class) as its {@link Store#cfg!model model}.
     */
    @config
    static storeDefaults = null;
    
    /**
     * @cfg {Object} summary
     * Summary fields are a special kind of field that is used to assist in creating an
     * aggregation for this model. A new model type that extends this model will be
     * created, accessible via {@link #summaryModel}. This summary model will
     * have these virtual aggregate fields in the fields collection like a normal model.
     * Each key in the object is the field name. The value for each field should mirror
     * the {@link #cfg!fields}, excluding the `name` option. The summary model generated
     * will have 2 fields, 'rate', which will aggregate using an average and maxRate,
     * which will aggregate using the maximum value.
     *
     * See {@link Summary} for more information.
     *
     *      @define
     *      class User extends Model {
     *          @config
     *          static fields = [{
     *              name: 'rate',
     *              summary: 'avg'
     *          }],
     *
     *          @config
     *          static summary = {
     *              maxRate: {
     *                  field: 'rate', // calculated from rate field
     *                  summary: 'max'
     *              }
     *          }
     *      });
     */
    @config({ merge: 'blend' })
    static summary = null;
    // The blend merge allows new keys to be added by mixins even if a base already
    // has some keys.

    @config('lazy')
    static summaryModel = {};

    /**
     * @cfg {String} validationSeparator
     * If specified this property is used to concatenate multiple errors for each field
     * as reported by the `validators`.
     */
    @config
    static validationSeparator = null;

    /**
     * @cfg {Object[]/Validator[]} validators
     * An array of {@link Validator validators} for this model.
     *
     * Models have built-in support for field validators. For example:
     *
     *      @define
     *      class User extends Model {
     *          @config
     *          static fields = [
     *              { name: 'name',     type: 'string' },
     *              { name: 'age',      type: 'int' },
     *              { name: 'phone',    type: 'string' },
     *              { name: 'gender',   type: 'string' },
     *              { name: 'username', type: 'string' },
     *              { name: 'alive',    type: 'boolean', defaultValue: true }
     *          ];
     *
     *          @config
     *          static validators = {
     *              age: 'presence',
     *              name: { type: 'length', min: 2 },
     *              gender: { type: 'inclusion', list: ['Male', 'Female'] },
     *              username: [
     *                  { type: 'exclusion', list: ['Admin', 'Operator'] },
     *                  { type: 'format', matcher: /([a-z]+)[0-9]{2,3}/i }
     *              ]
     *          }
     *      }
     *
     * The derived type of `Field` can also provide validators. If `validators` need to
     * be duplicated on multiple fields, instead consider creating a custom field type.
     */
    @config({
        lazy: true,
        merge (newValue, oldValue) {
            let name, old, ret, val;
            
            //<debug>
            assert(!newValue || (is.object(newValue) && !is.array(newValue)),
                   'Model validators config must be an object');
            //</debug>

            // When merging old and new objects by key, we concat the arrays that are
            // the values.
            if (oldValue && newValue) {
                ret = clone(oldValue);
                
                for (name in newValue) {
                    val = newValue[name];

                    if (val) {
                        old = oldValue[name];

                        if (old) {
                            val = (is.array(old) ? old : [old]).concat(val);
                        }
                    }
                    
                    ret[name] = val;
                }
            }
            else {
                ret = newValue;
            }
            
            return ret;
        }
    })
    static validators = null;

    /**
     * @cfg {String} versionProperty
     * If specified, this is the name of the property that contains the entity "version".
     * The version property is used to manage a long-running transaction and allows the
     * detection of simultaneous modification.
     * 
     * The way a version property is used is that the client receives the version as it
     * would any other entity property. When saving an entity, this property is always
     * included in the request and the server uses the value in a "conditional update".
     * If the current version of the entity on the server matches the version property
     * sent by the client, the update is allowed. Otherwise, the update fails.
     * 
     * On successful update, both the client and server increment the version. This is
     * done on the server in the conditional update and on the client when it receives a
     * success on its update request.
     */
    @config
    static versionProperty = null;

    /**
     * @property {Number} rank
     * The `rank` of a Model class is its order amongst other Model classes in its
     * `schema` based on association dependencies. For example, a child model that has a
     * `reference` field to a parent will have a greater `rank` than its parent model.
     * 
     * This property is used internally to order operations in a `BatchOperation`.
     * @readonly
     */
    static _rank = null;
    
    static get rank () {
        let rank = this._rank;
        let schema;
        
        if (rank === null) {
            schema = this.schema;
            
            if (schema) {
                schema.rankEntities();

                rank = this._rank;
            }
        }
        
        return rank;
    }
    
    static set rank (value) {
        this._rank = value;
    }

    /**
     * @property {Field[]} references
     * The array of `Field` instances that have a `reference` to other model classes.
     * @readonly
     * @private
     */
    static references = EMPTY;

    //----------------------------------------------------------------------------
    // Life-cycle

    construct (data, session, phantom) {
        // NOTE: We don't call super.construct() which blocks initConfig/ctor/dtor/etc...
        // on purpose, of course, to avoid that overhead for each record.
        
        if (typeof session === 'boolean') {
            phantom = session;
            session = null;
        }

        let me = this;
        let cls = me.constructor;
        let idProperty = cls.idProperty;
        let array = data && is.array(data) && data;
        // me.$meta is a value property (no fn call) vs the initializer config getter:
        let initializer = me.$meta.$initializer || cls.initializer;
        let id, len, i, fields, identifier;

        //<debug>
        assert(!session || session.isSession,
               'Bad Model constructor argument 2: expected a Session instance');
        //</debug>

        if (array) {
            data = {};
            fields = me.fields;
            len = Math.min(fields.length, array.length);
            
            for (i = 0; i < len; ++i) {
                data[fields[i].name] = array[i];
            }
        }

        // Yes, this is here on purpose. See EXTJS-16494. The second
        // assignment seems to work around a strange JIT issue that prevents
        // this.data being assigned in random scenarios, even though the data
        // is passed into the constructor. The issue occurs on 4th gen iPads and
        // lower, possibly other older iOS devices.
        // A similar issue can occur with the hasListeners property of Observable
        // (see the constructor of Ext.mixin.Observable)
        // me.data = me.data = data || (data = {});

        me.data = data || (data = {});
        
        if (!initializer.$nullFn) {
            initializer(me);
        }

        // Must do this after running the initializer due to converters on idField
        if (!me.isSummaryModel) {
            if (!(me.id = id = data[idProperty]) && id !== 0) {
                //<debug>
                assert(!cls.idField || !data[idProperty],
                       'The model ID configured in data ("{0}") has been rejected by the ' +
                       '{1} field converter for the {2} field',
                       data[idProperty], cls.idField && cls.idField.type, idProperty);
                //</debug>

                identifier = session ? session.getIdentifier(cls) : cls.identifier;
                id = identifier.generate();

                if (phantom !== false) {
                    me.phantom = true;
                    me.crudState = 'C';
                }
                
                if (me.idField.dependents) {
                    me.set(idProperty, id);
                }
                else {
                    data[idProperty] = me.id = id;
                }
            }
            else if (phantom) {
                me.phantom = true;
                me.crudState = 'C';
            }

            if (session) {
                session.add(me);
            }

            // Needs to be set after the add to the session
            if (me.phantom) {
                me.crudStateWas = 'C';
            }
        }

        if (me.init && is.callable(me.init)) {
            me.init();
        }
    }

    /**
     * Sets the record's id field to the given id.
     * @param {Number/String} id The new id.
     * @param {Object} [options] See {@link #set}.
     */
    setId (id, options) {
        this.set(this.idProperty, id, options);
    }
    
    //<debug>
    static toString () {
        // This is used in assert formatting and replaces the nearly useless
        // "class Model ... {}" stringification we'd otherwise get.
        return this.$className || this.entityName || this.name;
    }
    //</debug>

    //----------------------------------------------------------------------------
    // Properties

    /**
     * @property {Boolean} loading
     * This property is `true` if this record is loading data from the {@link #proxy}.
     */
    get loading () {
        return !!this.loadOperation;
    }
    
    get proxy () {
        return this.constructor.proxy;
    }
    
    //----------------------------------------------------------------------------
    // Methods (alphabetic order)
    
    /**
     * Aborts a pending {@link #method!load} operation. If the record is not loading,
     * this does nothing.
     */
    abort () {
        let operation = this.loadOperation;
        
        if (operation) {
            operation.abort();
        }
    }

    /**
     * Begins an edit. While in edit mode, no events (e.g.. the `update` event) are
     * relayed to the containing store. When an edit has begun, it must be followed by
     * either `endEdit` or `cancelEdit`.
     */
    beginEdit () {
        let me = this;
        let modified = me.modified;
        let previousValues = me.previousValues;

        if (!me.editing) {
            me.editing = true;

            me.editMemento = {
                dirty: me.dirty,
                data: copy({}, me.data),
                generation: me.generation,
                modified: modified && copy({}, modified),
                previousValues: previousValues && copy({}, previousValues)
            };
        }
    }

    /**
     * Cancels all changes made in the current edit operation.
     */
    cancelEdit () {
        let me = this;
        let editMemento = me.editMemento;
        let validation = me._validation;

        if (editMemento) {
            me.editing = false;

            // reset the modified state, nothing changed since the edit began
            copy(me, editMemento);
            me.editMemento = null;

            if (validation && validation.syncGeneration !== me.generation) {
                validation.syncGeneration = 0;
            }
        }
    }

    /**
     * Creates a clone of this record. States like `dropped`, `phantom` and `dirty` are
     * all preserved in the cloned record.
     *
     * @param {Session} [session] The session to which the new record
     * belongs.
     * @return {Model} The cloned record.
     */
    clone (session) {
        let me = this;
        let modified = me.modified;
        let ret = me.copy(me.id, session);

        if (modified) {
            // Restore the modified fields state
            ret.modified = copy({}, modified);
        }

        ret.dirty = me.dirty;
        ret.dropped = me.dropped;
        ret.phantom = me.phantom;

        return ret;
    }

    /**
     * Usually called by the {@link Store} which owns the record. Commits all changes made
     * to the record since either creation or the last commit operation.
     *
     * Developers should subscribe to the {@link Store#event!update} event to have their
     * code notified of commit operations.
     *
     * @param {Boolean} [silent=false] Pass `true` to skip notification of the owning store
     * of the change.
     * @param {String[]} [modifiedFieldNames] Array of field names changed during sync with
     * server if known. Omit or pass `null` if unknown. An empty array means that it is
     * known that no fields were modified by the server's response.
     */
    commit (silent, modifiedFieldNames) {
        let me = this;
        let versionProperty = me.constructor.versionProperty;
        let data = me.data;
        let erased;

        me.clearState();
        
        if (versionProperty && !me.phantom && !isNaN(data[versionProperty])) {
            ++data[versionProperty];
        }
        
        me.phantom = false;

        if (me.dropped) {
            me.erased = erased = true;
        }

        if (!silent) {
            if (erased) {
                me.callJoined('afterErase');
            }
            else {
                me.callJoined('afterCommit', [modifiedFieldNames]);
            }
        }
    }

    /**
     * Creates a clean copy of this record. The returned record will not consider any its
     * fields as modified.
     *
     * To generate a phantom instance with a new id pass `null`:
     *
     *     var rec = record.copy(null); // clone the record but no id (one is generated)
     *
     * @param {String} [newId] A new id, defaults to the id of the instance being copied.
     * See `{@link Model#cfg!idProperty idProperty}`.
     * @param {Session} [session] The session to which the new record
     * belongs.
     *
     * @return {Model}
     */
    copy (newId, session) {
        let me = this;
        let data = copy({}, me.data);
        let idProperty = me.idProperty;
        let T = me.constructor;

        if (newId || newId === 0) {
            data[idProperty] = newId;
        }
        else if (newId === null) {
            delete data[idProperty];
        }

        return new T(data, session);
    }
    
    /**
     * Marks this record as `dropped` and waiting to be deleted on the server. When a
     * record is dropped, it is automatically removed from all association stores and
     * any child records associated to this record are also dropped (a "cascade delete")
     * depending on the `cascade` parameter.
     *
     * @param {Boolean} [cascade=true] Pass `false` to disable the cascade to drop child
     * records.
     * @since 5.0.0
     */
    drop (cascade) {
        let me = this;
        let associations = me.associations;
        let session = me.session;
        let roleName;

        if (me.erased || me.dropped) {
            return;
        }
        
        me.dropped = true;
        
        if (associations && cascade !== false) {
            for (roleName in associations) {
                associations[roleName].onDrop(me, session);
            }
        }
        
        me.callJoined('afterDrop');
        
        if (me.phantom) {
            me.setErased();
        }
    }

    /**
     * Ends an edit. If any data was modified, the containing store is notified
     * (ie, the store's `update` event will fire).
     * @param {Boolean} [silent] True to not notify any stores of the change.
     * @param {String[]} [modifiedFieldNames] Array of field names changed during edit.
     */
    endEdit (silent, modifiedFieldNames) {
        let me = this;
        let editMemento = me.editMemento;

        if (editMemento) {
            me.editing = false;
            me.editMemento = null;

            // Since these reflect changes we never notified others about, the real set
            // of "previousValues" is what we captured in the memento:
            me.previousValues = editMemento.previousValues;

            if (!silent) {
                if (!modifiedFieldNames) {
                    modifiedFieldNames = me.getModifiedFieldNames(editMemento.data);
                }

                if (me.dirty || (modifiedFieldNames && modifiedFieldNames.length)) {
                    me.callJoined('afterEdit', [modifiedFieldNames]);
                }
            }
        }
    }

    /**
     * Destroys the model using the configured proxy.  The erase action is
     * asynchronous.  Any processing of the erased record should be done in a callback.
     *
     *     Ext.define('MyApp.model.User', {
     *         extend: 'Model',
     *         fields: [
     *             {name: 'id', type: 'int'},
     *             {name: 'name', type: 'string'}
     *         ],
     *         proxy: {
     *             type: 'ajax',
     *             url: 'server.url'
     *         }
     *     });
     *
     *     var user = new MyApp.model.User({
     *         name: 'Foo'
     *     });
     *
     *     // pass the phantom record data to the server to be saved
     *     user.save({
     *         success (record, operation) {
     *             // do something if the save succeeded
     *             // erase the created record
     *             record.erase({
     *                 failure (record, operation) {
     *                     // do something if the erase failed
     *                 },
     *                 success (record, operation) {
     *                     // do something if the erase succeeded
     *                 },
     *                 callback (record, operation, success) {
     *                     // do something if the erase succeeded or failed
     *                 }
     *             });
     *         }
     *     });
     *
     * **NOTE:** If a {@link #phantom} record is erased it will not be processed via the
     * proxy.  However, any passed `success` or `callback` functions will be called.
     *
     * The options param is an {@link DestroyOperation} config object
     * containing success, failure and callback functions, plus optional scope.
     * @param {Object} [options]
     * @return {DestroyOperation}
     */
    erase (options) {
        let me = this;

        me.erasing = true;

        // Drop causes a removal from the backing Collection.
        // The store's onCollectionRemove will respond to this by adding the record to
        // its "to remove" stack and setting its needsSync
        // flag unless the above "erasing" flag is set.
        me.drop();

        me.erasing = false;
        
        return me.save(options);
    }
    
    /**
     * Returns the value of the given field.
     * @param {String} fieldName The name of the field.
     * @return {Object} The value of the specified field.
     */
    get (fieldName) {
        return this.data[fieldName];
    }

    /**
     * Gets all of the data from this Models *loaded* associations. It does this
     * recursively. For example if we have a User which hasMany Orders, and each Order
     * hasMany OrderItems, it will return an object like this:
     *
     *     {
     *         orders: [
     *             {
     *                 id: 123,
     *                 status: 'shipped',
     *                 orderItems: [
     *                     ...
     *                 ]
     *             }
     *         ]
     *     }
     *
     * @param {Object} [result] The object on to which the associations will be added. If
     * no object is passed one is created. This object is then returned.
     * @param {Boolean/Object} [options] An object containing options describing the data
     * desired.
     * @param {Boolean} [options.associated=true] Pass `true` to include associated data from
     * other associated records.
     * @param {Boolean} [options.changes=false] Pass `true` to only include fields that
     * have been modified. Note that field modifications are only tracked for fields that
     * are not declared with `persist` set to `false`. In other words, only persistent
     * fields have changes tracked so passing `true` for this means `options.persist` is
     * redundant.
     * @param {Boolean} [options.critical] Pass `true` to include fields set as `critical`.
     * This is only meaningful when `options.changes` is `true` since critical fields may
     * not have been modified.
     * @param {Boolean} [options.persist] Pass `true` to only return persistent fields.
     * This is implied when `options.changes` is set to `true`.
     * @param {Boolean} [options.serialize=false] Pass `true` to invoke the `serialize`
     * method on the returned fields.
     * @return {Object} The nested data set for the Model's loaded associations.
     */
    getAssociatedData (result, options) {
        let me = this;
        let associations = me.associations;
        let deep, i, item, items, itemData, length, record, role, roleName, opts, clear,
            associated;

        result = result || {};

        me.$gathering = 1;

        if (options) {
            options = copy({}, options);
        }

        for (roleName in associations) {
            role = associations[roleName];
            item = role.getAssociatedItem(me);
            
            if (!item || item.$gathering) {
                continue;
            }

            if (item.isStore) {
                item.$gathering = 1;

                items = item.data.items; // get the records for the store
                length = items.length;
                itemData = [];

                for (i = 0; i < length; ++i) {
                    // NOTE - we don't check whether the record is gathering here because
                    // we cannot remove it from the store (it would invalidate the index
                    // values and misrepresent the content). Instead we tell getData to
                    // only get the fields vs descend further.
                    record = items[i];
                    deep = !record.$gathering;
                    record.$gathering = 1;
                    
                    if (options) {
                        associated = options.associated;
                        
                        if (associated === undefined) {
                            options.associated = deep;
                            clear = true;
                        }
                        else if (!deep) {
                            options.associated = false;
                            clear = true;
                        }
                        
                        opts = options;
                    }
                    else {
                        opts = deep ? me._getAssociatedOptions : me._getNotAssociatedOptions;
                    }
                    
                    itemData.push(record.getData(opts));
                    
                    if (clear) {
                        options.associated = associated;
                        clear = false;
                    }
                    
                    delete record.$gathering;
                }

                delete item.$gathering;
            }
            else {
                opts = options || me._getAssociatedOptions;
                
                if (options && options.associated === undefined) {
                    opts.associated = true;
                }
                
                itemData = item.getData(opts);
            }

            result[roleName] = itemData;
        }

        delete me.$gathering;

        return result;
    }

    /**
     * Gets an object of only the fields that have been modified since this record was
     * created or committed. Only persistent fields are tracked in the `modified` set so
     * this method will only return changes to persistent fields.
     *
     * For more control over the returned data, see `{@link #getData}`.
     * @return {Object}
     */
    getChanges () {
        return this.getData(this._getChangesOptions);
    }

    /**
     * Gets all values for each field in this model and returns an object containing the
     * current data. This can be tuned by passing an `options` object with various
     * properties describing the desired result. Passing `true` simply returns all fields
     * *and* all associated record data.
     *
     * To selectively gather some associated data, the `options` object can be used as
     * follows:
     *
     *      var data = order.getData({
     *          associated: {
     *              orderItems: true
     *          }
     *      });
     *
     * This will include all data fields as well as an "orderItems" array with the data
     * for each `OrderItem`. To include the associated `Item` for each `OrderItem`, the
     * call would look like:
     *
     *      var data = order.getData({
     *          associated: {
     *              orderItems: {
     *                  item: true
     *              }
     *          }
     *      });
     *
     * @param {Boolean/Object} [options] An object containing options describing the data
     * desired. If `true` is passed it is treated as an object with `associated` set to
     * `true`.
     * @param {Boolean/Object} [options.associated=false] Pass `true` to recursively
     * include all associated data. This is equivalent to pass `true` as the only argument.
     * See `getAssociatedData`. If `associated` is an object, it describes the specific
     * associations to gather.
     * @param {Boolean} [options.changes=false] Pass `true` to only include fields that
     * have been modified. Note that field modifications are only tracked for fields that
     * are not declared with `persist` set to `false`. In other words, only persistent
     * fields have changes tracked so passing `true` for this means `options.persist` is
     * redundant.
     * @param {Boolean} [options.critical] Pass `true` to include fields set as `critical`.
     * This is only meaningful when `options.changes` is `true` since critical fields may
     * not have been modified.
     * @param {Boolean} [options.persist] Pass `true` to only return persistent fields.
     * This is implied when `options.changes` is set to `true`.
     * @param {Boolean} [options.serialize=false] Pass `true` to invoke the `serialize`
     * method on the returned fields.
     * @return {Object} An object containing all the values in this model.
     */
    getData (options) {
        let me = this;
        let cls = me.constructor;
        let fieldsByName = me.fields.byName;
        let ret = {};
        let opts = (options === true) ? me._getAssociatedOptions : (options || ret);
        let data = me.data;
        let associated = opts.associated;
        let changes = opts.changes;
        let critical = changes && opts.critical;
        let content = changes ? me.modified : data;
        let persist = opts.persist;
        let serialize = opts.serialize;
        let criticalFields, field, n, name, value;

        // DON'T use "opts" from here on...

        // Keep in mind the two legacy use cases:
        //  - getData() ==> copy({}, me.data)
        //  - getData(true) ==> copy(copy({}, me.data), me.getAssociatedData())

        if (content) { // when processing only changes, me.modified could be null
            for (name in content) {
                value = data[name];

                field = fieldsByName[name];
                
                if (field) {
                    if (persist && !field.persist) {
                        continue;
                    }
                    
                    if (serialize && field.serialize) {
                        value = field.serialize(value, me);
                    }
                }

                ret[name] = value;
            }
        }

        if (critical) {
            criticalFields = cls.fields.criticals;
            
            for (n = criticalFields.length; n-- > 0;) {
                name = (field = criticalFields[n]).name;

                if (!(name in ret)) {
                    value = data[name];
                    
                    if (serialize && field.serialize) {
                        value = field.serialize(value, me);
                    }
                    
                    ret[name] = value;
                }
            }
        }

        if (associated) {
            if (typeof associated === 'object') {
                me.getNestedData(opts, ret);
            }
            else {
                me.getAssociatedData(ret, opts);
            }
        }

        return ret;
    }

    getField (name) {
        return this.constructor.getField(name);
    }
    
    /**
     * Returns the original value of a modified field. If there is no modified value,
     * `undefined` will be return. Also see {@link #isModified}.
     * @param {String} fieldName The name of the field for which to return the original
     * value.
     * @return {Object} modified
     */
    getModified (fieldName) {
        let modified = this.modified;
        let out;
        
        if (modified && modified.hasOwnProperty(fieldName)) {
            out = modified[fieldName];
        }
        
        return out;
    }

    getNestedData (options, result) {
        let me = this;
        let associations = me.associations;
        let graph = options.associated;
        let i, item, items, itemData, length, record, role, roleName, opts;

        result = result || {};

        // For example:
        //
        //      associated: {
        //          orderItems: true
        //      }
        //
        //      associated: {
        //          orderItems: {
        //              item: true
        //          }
        //      }
        //
        for (roleName in graph) {
            role = associations[roleName];
            opts = graph[roleName];
            
            if (opts === true) {
                delete options.associated;
            }
            else {
                options.associated = opts;
            }

            item = role.getAssociatedItem(me);
            
            if (item.isStore) {
                items = item.data.items; // get the records for the store
                length = items.length;
                itemData = [];

                for (i = 0; i < length; ++i) {
                    record = items[i];
                    itemData.push(record.getData(options));
                }
            }
            else {
                itemData = item.getData(options);
            }

            result[roleName] = itemData;
        }

        options.associated = graph; // restore the original value

        return result;
    }

    /**
     * This method returns the value of a field given its name prior to its most recent
     * change.
     * @param {String} fieldName The field's {@link Field#name name}.
     * @return {Object} The value of the given field prior to its current value. `undefined`
     * if there is no previous value;
     */
    getPrevious (fieldName) {
        let previousValues = this.previousValues;
        
        return previousValues && previousValues[fieldName];
    }

    /**
     * Returns true if the passed field name has been `{@link #modified}` since the load
     * or last commit.
     * @param {String} fieldName The field's {@link Field#name name}.
     * @return {Boolean}
     */
    isModified (fieldName) {
        let modified = this.modified;
        
        return !!(modified && modified.hasOwnProperty(fieldName));
    }

    /**
     * Returns `true` if this record is valid as defined by its `validators`. See also
     * {@link #validation}.
     * @return {Boolean}
     */
    isValid () {
        return this.validation.isValid();
    }

    /**
     * Tells this record that an observer is looking at it.
     * @param {Store} owner The store or other owner object to which this model
     * has been added.
     */
    join (owner) {
        let me = this;
        let joined = me.joined;

        // Optimize this, gets called a lot
        if (!joined) {
            joined = me.joined = [owner];
        }
        else if (!joined.length) {
            joined[0] = owner;
        }
        else if (!joined.includes(owner)) { // TODO: do we need the includes here?
            joined.push(owner);
        }

        if (owner.isStore && !me.store) {
            /**
            * @property {Store} store
            * The {@link Store} to which this instance belongs.
            *
            * **Note:** If this instance is bound to multiple stores, this property
            * will reference only the first.
            */
            me.store = owner;
        }
    }

    /**
     * Loads the record using the configured proxy. The load action is asynchronous. Any
     * processing of the loaded record should be done in a callback.
     *
     *     Ext.define('MyApp.model.User', {
     *         extend: 'Model',
     *         fields: [
     *             {name: 'id', type: 'int'},
     *             {name: 'name', type: 'string'}
     *         ],
     *         proxy: {
     *             type: 'ajax',
     *             url: 'server.url'
     *         }
     *     });
     *
     *     var user = new MyApp.model.User();
     *     user.load({
     *         scope: this,
     *         failure (record, operation) {
     *             // do something if the load failed
     *         },
     *         success (record, operation) {
     *             // do something if the load succeeded
     *         },
     *         callback (record, operation, success) {
     *             // do something whether the load succeeded or failed
     *         }
     *     });
     *
     * The options param is an {@link ReadOperation} config object containing
     * success, failure and callback functions, plus optional scope.
     *
     * @param {Object} [options] Options to pass to the proxy.
     * @param {Function} options.success A function to be called when the
     * model is processed by the proxy successfully.
     * The callback is passed the following parameters:
     * @param {Model} options.success.record The record.
     * @param {Operation} options.success.operation The operation.
     * 
     * @param {Function} options.failure A function to be called when the
     * model is unable to be processed by the server.
     * The callback is passed the following parameters:
     * @param {Model} options.failure.record The record.
     * @param {Operation} options.failure.operation The operation.
     * 
     * @param {Function} options.callback A function to be called whether the proxy
     * transaction was successful or not.
     * The callback is passed the following parameters:
     * @param {Model} options.callback.record The record.
     * @param {Operation} options.callback.operation The operation.
     * @param {Boolean} options.callback.success `true` if the operation was successful.
     * 
     * @param {Object} options.scope The scope in which to execute the callback
     * functions. Defaults to the record.
     *
     * @return {ReadOperation}
     */
    load (options) {
        options = copy({
            type: 'read'
        }, options);

        /* eslint-disable-next-line vars-on-top */
        let me = this;
        let scope = options.scope || me;
        let proxy = me.constructor.proxy;  // proxy is lazy, so must read it from there
        let fn = options.callback;
        let operation = me.loadOperation;
        let id = me.id;
        let extras;

        if (operation) {
            // Already loading, push any callbacks on and jump out
            extras = operation.extraCalls;
            
            if (!extras) {
                extras = operation.extraCalls = [];
            }
            
            extras.push(options);
            
            return operation;
        }

        //<debug>
        let doIdCheck = true; // eslint-disable-line vars-on-top, one-var
        
        if (me.phantom) {
            doIdCheck = false;
        }
        //</debug>

        options.id = id;

        // Always set the recordCreator. If we have a session, we're already
        // part of said session, so we don't need to handle that.
        options.recordCreator = (data, type, readOptions) => {
            // Important to change this here, because we might be loading associations,
            // so we do not want this to propagate down. If we have a session, use that
            // so that we end up getting the same record. Otherwise, just remove it.
            let session = me.session;
            
            if (readOptions) {
                readOptions.recordCreator = session ? session.recordCreator : null;
            }
            
            me.set(data, me._commitOptions);
            
            //<debug>
            // Do the id check after set since converters may have run
            assert(!doIdCheck || me.id === id,
                   'Invalid record id returned for {0}@{1}', id, me.entityName);
            //</debug>
            
            return me;
        };

        options.internalCallback = (operation) => {
            let success = operation.wasSuccessful() && operation.records.length > 0;
            let op = me.loadOperation;
            let extras = op.extraCalls;
            let successFailArgs = [me, operation];
            let callbackArgs = [me, operation, success];

            me.loadOperation = null;
            ++me.loadCount;

            if (success) {
                callback(options.success, scope, successFailArgs);
            }
            else {
                callback(options.failure, scope, successFailArgs);
            }
            
            callback(fn, scope, callbackArgs);

            // Some code repetition here, however in a vast majority of cases
            // we'll only have a single callback, so optimize for that case rather
            // than setup arrays for all the callback options
            if (extras) {
                for (options of extras) {
                    if (success) {
                        callback(options.success, scope, successFailArgs);
                    }
                    else {
                        callback(options.failure, scope, successFailArgs);
                    }
                    
                    callback(options.callback, scope, callbackArgs);
                }
            }
            
            me.callJoined('afterLoad');
        };
        
        delete options.callback;

        me.loadOperation = operation = proxy.createOperation(options);
        operation.execute();

        return operation;
    }

    /**
     * Merge incoming data from the server when this record exists
     * in an active session. This method is not called if this record is
     * loaded directly via {@link #method!load}. The default behaviour is to use incoming
     * data if the record is not {@link #dirty}, otherwise the data is
     * discarded. This method should be overridden in subclasses to
     * provide a different behavior.
     * @param {Object} data The model data retrieved from the server.
     */
    mergeData (data) {
        if (!this.dirty) {
            this.set(data, this._commitOptions);
        }
    }

    /**
     * This method is called by the {@link Reader} after loading a model from
     * the server. This is after processing any inline associations that are available.
     * 
     * @method onLoad
     *
     * @protected
     * @template
     */

    /**
     * Usually called by the {@link Store} to which this record has been
     * {@link #join joined}. Rejects all changes made to the record since either creation,
     * or the last commit operation. Modified fields are reverted to their original values.
     *
     * Developers should subscribe to the {@link Store#event!update} event to have their
     * code notified of reject operations.
     *
     * @param {Boolean} [silent=false] `true` to skip notification of the owning store of the
     * change.
     */
    reject (silent) {
        let me = this;
        let modified = me.modified;

        //<debug>
        assert(!me.erased, 'Cannot reject once a record has been erased.');
        //</debug>

        if (modified) {
            me.set(modified, me._rejectOptions);
        }

        me.dropped = false;
        me.clearState();

        if (!silent) {
            me.callJoined('afterReject');
        }
    }
    
    /**
     * Saves the record using the configured proxy.  The save action is asynchronous. Any
     * processing of the saved record should be done in a callback.
     *
     * Create example:
     *
     *     Ext.define('MyApp.model.User', {
     *         extend: 'Model',
     *         fields: [
     *             {name: 'id', type: 'int'},
     *             {name: 'name', type: 'string'}
     *         ],
     *         proxy: {
     *             type: 'ajax',
     *             url: 'server.url'
     *         }
     *     });
     *
     *     var user = new MyApp.model.User({
     *         name: 'Foo'
     *     });
     *
     *     // pass the phantom record data to the server to be saved
     *     user.save({
     *         failure (record, operation) {
     *             // do something if the save failed
     *         },
     *         success (record, operation) {
     *             // do something if the save succeeded
     *         },
     *         callback (record, operation, success) {
     *             // do something whether the save succeeded or failed
     *         }
     *     });
     *
     * The response from a create operation should include the ID for the newly created
     * record:
     *
     *     // sample response
     *     {
     *         success: true,
     *         id: 1
     *     }
     *
     *     // the id may be nested if the proxy's reader has a rootProperty config
     *     Ext.define('MyApp.model.User', {
     *         extend: 'Model',
     *         proxy: {
     *             type: 'ajax',
     *             url: 'server.url',
     *             reader: {
     *                 type: 'ajax',
     *                 rootProperty: 'data'
     *             }
     *         }
     *     });
     *
     *     // sample nested response
     *     {
     *         success: true,
     *         data: {
     *             id: 1
     *         }
     *     }
     *
     * (Create + ) Update example:
     *
     *     Ext.define('MyApp.model.User', {
     *         extend: 'Model',
     *         fields: [
     *             {name: 'id', type: 'int'},
     *             {name: 'name', type: 'string'}
     *         ],
     *         proxy: {
     *             type: 'ajax',
     *             url: 'server.url'
     *         }
     *     });
     *
     *     var user = new MyApp.model.User({
     *         name: 'Foo'
     *     });
     *     user.save({
     *         success (record, operation) {
     *             record.set('name', 'Bar');
     *             // updates the remote record via the proxy
     *             record.save();
     *         }
     *     });
     *
     * (Create + ) Destroy example - see also {@link #erase}:
     *
     *     Ext.define('MyApp.model.User', {
     *         extend: 'Model',
     *         fields: [
     *             {name: 'id', type: 'int'},
     *             {name: 'name', type: 'string'}
     *         ],
     *         proxy: {
     *             type: 'ajax',
     *             url: 'server.url'
     *         }
     *     });
     *
     *     var user = new MyApp.model.User({
     *         name: 'Foo'
     *     });
     *     user.save({
     *         success (record, operation) {
     *             record.drop();
     *             // destroys the remote record via the proxy
     *             record.save();
     *         }
     *     });
     *
     * **NOTE:** If a {@link #phantom} record is {@link #drop dropped} and subsequently
     * saved it will not be processed via the proxy.  However, any passed `success`
     * or `callback` functions will be called.
     *
     * The options param is an Operation config object containing success, failure and
     * callback functions, plus optional scope.  The type of Operation depends on the
     * state of the model being saved.
     *
     *  - {@link #phantom} model - {@link CreateOperation}
     *  - {@link #isModified modified} model - {@link UpdateOperation}
     *  - {@link #dropped} model - {@link DestroyOperation}
     *
     * @param {Object} [options] Options to pass to the proxy.
     * @param {Function} options.success A function to be called when the
     * model is processed by the proxy successfully.
     * The callback is passed the following parameters:
     * @param {Model} options.success.record The record.
     * @param {Operation} options.success.operation The operation.
     * 
     * @param {Function} options.failure A function to be called when the
     * model is unable to be processed by the server.
     * The callback is passed the following parameters:
     * @param {Model} options.failure.record The record.
     * @param {Operation} options.failure.operation The operation.
     * 
     * @param {Function} options.callback A function to be called whether the proxy
     * transaction was successful or not.
     * The callback is passed the following parameters:
     * @param {Model} options.callback.record The record.
     * @param {Operation} options.callback.operation The operation.
     * @param {Boolean} options.callback.success `true` if the operation was successful.
     * 
     * @param {Object} options.scope The scope in which to execute the callback
     * functions. Defaults to the record.
     * @return {CreateOperation/UpdateOperation/DestroyOperation}
     * The operation instance for saving this model.  The type of operation returned
     * depends on the model state at the time of the action.
     *
     *  - {@link #phantom} model - {@link CreateOperation}
     *  - {@link #isModified modified} model - {@link UpdateOperation}
     *  - {@link #dropped} model - {@link DestroyOperation}
     */
    save (options) {
        let me = this;
        let phantom = me.phantom;
        let dropped = me.dropped;
        let proxy = me.proxy;
        let fn, operation, scope;

        options = {
            type: dropped ? 'destroy' : (phantom ? 'create' : 'update'),
            ...options
        };

        scope = options.scope || me;
        fn = options.callback;
        options.records = [me];
        
        options.internalCallback = operation => {
            let args = [me, operation];
            let success = operation.wasSuccessful();
                
            if (success) {
                callback(options.success, scope, args);
            }
            else {
                callback(options.failure, scope, args);
            }
            
            args.push(success);
            callback(fn, scope, args);
        };
        
        delete options.callback;
        
        operation = proxy.createOperation(options);

        // Not a phantom, then we must perform this operation on the remote datasource.
        // Record will be removed from the store in the callback upon a success response
        if (dropped && phantom) {
            // If it's a phantom, then call the callback directly with a dummy successful ResultSet
            operation.resultSet = ResultSet.EMPTY;
            me.setErased();
            operation.setSuccessful(true);
        }
        else {
            operation.execute();
        }
        
        return operation;
    }

    /**
     * Sets the given field to the given value. For example:
     * 
     *      record.set('name', 'value');
     * 
     * This method can also be passed an object containing multiple values to set at once.
     * For example:
     * 
     *      record.set({
     *          name: 'value',
     *          age: 42
     *      });
     * 
     * The following store events are fired when the modified record belongs to a store:
     *
     *  - {@link Store#event!beginupdate beginupdate}
     *  - {@link Store#event!update update}
     *  - {@link Store#event!endupdate endupdate}
     * 
     * @param {String/Object} fieldName The field to set, or an object containing key/value
     * pairs.
     * @param {Object} newValue The value for the field (if `fieldName` is a string).
     * @param {Object} [options] Options for governing this update.
     * @param {Boolean} [options.convert=true] Set to `false` to  prevent any converters from
     * being called during the set operation. This may be useful when setting a large bunch of
     * raw values.
     * @param {Boolean} [options.dirty=true] Pass `false` if the field values are to be
     * understood as non-dirty (fresh from the server). When `true`, this change will be
     * reflected in the `modified` collection.
     * @param {Boolean} [options.commit=false] Pass `true` to call the {@link #commit} method
     * after setting fields. If this option is passed, the usual after change processing will
     * be bypassed. {@link #commit Commit} will be called even if there are no field changes.
     * @param {Boolean} [options.silent=false] Pass `true` to suppress notification of any
     * changes made by this call. Use with caution.
     * @return {String[]} The array of modified field names or null if nothing was modified.
     */
    set (fieldName, newValue, options) {
        let me = this;
        let cls = me.constructor;
        let data = me.data;
        let idProperty = me.idProperty;
        let modified = me.modified;
        let prevVals = me.previousValues;
        let session = me.session;
        let single = is.string(fieldName);
        let opt = (single ? options : newValue);
        let convertOnSet = opt ? opt.convert !== false : cls.convertOnSet;
        let fieldsByName = me.fields.byName;
        let silent = opt && opt.silent;
        let commit = opt && opt.commit;
        let updateRefs = !(opt && opt.refs === false) && session;
        // Don't need to do dirty processing with commit, since we'll always
        // end up with nothing modified and not dirty
        let dirty = !(opt && opt.dirty === false && !commit);
        let modifiedFieldNames = null;
        let dirtyRank = 0;
        let associations = me.associations;
        let rankedFields = me.fields.ranked;
        let numFields = rankedFields.length;
        let currentValue, field, idChanged, key, name, oldId, comparator, dep, dependents,
            i, newId, reference, value, values, roleName;

        if (single) {
            values = singleProp;
            values[fieldName] = newValue;
        }
        else {
            values = fieldName;
        }

        do {
            for (name in values) {
                value = values[name];
                currentValue = data[name];
                comparator = me;
                field = fieldsByName[name];

                if (field) {
                    if (convertOnSet) {
                        value = field.deserialize(value, me);
                    }
                    
                    comparator = field;
                    reference = field.reference;
                }
                else {
                    reference = null;
                }

                if (comparator.isEqual(currentValue, value)) {
                    continue; // new value is the same, so no change...
                }

                data[name] = value;
                (modifiedFieldNames || (modifiedFieldNames = [])).push(name);
                (prevVals || (me.previousValues = prevVals = {}))[name] = currentValue;

                // We need the cls to be present because it means the association class is
                // loaded, otherwise it could be pending.
                if (reference && reference.cls) {
                    if (updateRefs) {
                        session.updateReference(me, field, value, currentValue);
                    }
                    
                    reference.onValueChange(me, session, value, currentValue);
                }

                i = (dependents = field && field.dependents) && dependents.length;
                
                while (i-- > 0) {
                    // we use the field instance to hold the dirty bit to avoid any
                    // extra allocations... we'll clear this before we depart. We do
                    // this so we can perform the fewest recalculations possible as
                    // each dependent field only needs to be recalculated once.
                    (dep = dependents[i]).dirty = true;
                    dirtyRank = dirtyRank ? Math.min(dirtyRank, dep.rank) : dep.rank;
                }

                if (!field || field.persist) {
                    if (modified && modified.hasOwnProperty(name)) {
                        if (!dirty || comparator.isEqual(modified[name], value)) {
                            // The original value in me.modified equals the new value, so
                            // the field is no longer modified:
                            delete modified[name];
                            me.dirty = -1; // fix me.dirty later (still truthy)
                        }
                    }
                    else if (dirty) {
                        if (!modified) {
                            me.modified = modified = {}; // create only when needed
                        }
                        
                        me.dirty = true;
                        modified[name] = currentValue;
                    }
                }

                if (name === idProperty) {
                    idChanged = true;
                    oldId = currentValue;
                    newId = value;
                }
            }

            if (!dirtyRank) {
                // Unless there are dependent fields to process we can break now. This is
                // what will happen for all code pre-dating the depends or simply not
                // using it, so it will add very little overhead when not used.
                break;
            }

            // dirtyRank has the minimum rank (a 1-based value) of any dependent field
            // that needs recalculating due to changes above. The way we go about this
            // is to use our helper object for processing single argument invocations
            // to process just this one field. This is because the act of setting it
            // may cause another field to be invalidated, so while we cannot know at
            // this moment all the fields we need to recalculate, we know that only
            // those following this field in rankedFields can possibly be among them.

            field = rankedFields[dirtyRank - 1]; // dirtyRank is 1-based
            field.dirty = false; // clear just this field's dirty state

            if (single) {
                delete values[fieldName]; // cleanup last value
            }
            else {
                values = singleProp; // switch over
                single = true;
            }

            fieldName = field.name;
            values[fieldName] = data[fieldName];
            // We are now processing a dependent field, so we want to force a
            // convert to occur because it's the only way it will get a value
            convertOnSet = true;

            // Since dirtyRank is 1-based and refers to the field we need to handle
            // on this pass, we can treat it like an index for a minute and look at
            // the next field on towards the end to find the index of the next dirty
            // field.
            for (; dirtyRank < numFields; ++dirtyRank) {
                if (rankedFields[dirtyRank].dirty) {
                    break;
                }
            }

            if (dirtyRank < numFields) {
                // We found a field after this one marked as dirty so make the index
                // a proper 1-based rank:
                ++dirtyRank;
            }
            else {
                // We did not find any more dirty fields after this one, so clear the
                // dirtyRank and we will perhaps fall out after the next update
                dirtyRank = 0;
            }
        } while (1); // eslint-disable-line no-constant-condition

        if (me.dirty < 0) {
            // We might have removed the last modified field, so check to see if there
            // are any modified fields remaining and correct me.dirty:
            me.dirty = false;
            
            for (key in modified) {
                if (modified.hasOwnProperty(key)) {
                    me.dirty = true;
                    
                    break;
                }
            }
        }

        if (single) {
            // cleanup our reused object for next time... important to do this before
            // we fire any events or call anyone else (like afterEdit)!
            delete values[fieldName];
        }

        ++me.generation;

        if (idChanged) {
            me.id = newId;
            me.onIdChanged(newId, oldId);
            me.callJoined('onIdChanged', [oldId, newId]);
            
            if (associations) {
                for (roleName in associations) {
                    associations[roleName].onIdChanged(me, oldId, newId);
                }
            }
        }

        if (commit) {
            me.commit(silent, modifiedFieldNames);
        }
        else if (!silent && !me.editing && modifiedFieldNames) {
            me.callJoined('afterEdit', [modifiedFieldNames]);
        }

        return modifiedFieldNames;
    }

    /**
     * Tells this record that it has been removed from the store.
     * @param {Store} owner The store or other owner object from which this
     * model has been removed.
     */
    unjoin (owner) {
        let me = this;
        let joined = me.joined;
        let store = me.store;

        if (owner === me.session) {
            me.session = null;
        }
        // TreeModels are never joined to their TreeStore.
        // But we are called by the base class's onCollectionRemove, so joined may
        // be undefined.
        else if (joined) {
            remove(joined, owner);

            if (store === owner) {
                store = null;
                
                for (owner of joined) {
                    if (owner.isStore) {
                        store = owner;
                        break;
                    }
                }
                
                me.store = store;
            }
        }
    }

    /**
     * @property {Validation} validation
     * Lazily creates and returns the `Validation` record for this record. Also ensures
     * that it is current by calling its `refresh` method.
     */
    get validation () {
        let me = this;
        let validation = me._validation;
        
        if (!validation) {
            me._validation = validation = new Validation().attach(me);
        }

        return validation.refresh();
    }

    //-------------------------------------------------------------------------
    // Statics
    
    /**
     * Returns the extractor function for the given `reader`. The extractor function takes
     * a raw data object and returns the record data object based on both the particulars
     * of the `reader` and details of this model (e.g., its `fields` and their `mapping`
     * options). Any `reader` config that affects the extractor are included in a cache
     * key to constrain the number of possible combinations to only a handful.
     * 
     * @param {Reader} reader
     * @return {Function}
     * @private
     */
    static getExtractor (reader) {
        let cls = this;
        let key = reader.getExtractorKey();
        let readerInfo = cls.hasOwnProperty('$reader')
            ? cls.$reader
            : (cls.$reader = { extractors: new Map() });
        let extractors = readerInfo.extractors;
        let extractor = extractors.get(key);  // Map can have complex keys (eg, a function)

        if (!extractor) {
            extractors.set(key, extractor = reader.buildExtractor(cls));
        }
        
        return extractor;
    }

    /**
     * Returns the `Field` by the given `name`.
     * @return {Field}
     */
    static getField (name) {
        return this.fields.byName[name] || null;
    }

    /**
     * Asynchronously loads a record by id. Any processing of the loaded record should be
     * done in a callback.
     *
     * Sample usage:
     *
     *     Ext.define('MyApp.User', {
     *         extend: 'Model',
     *         fields: [
     *             {name: 'id', type: 'int'},
     *             {name: 'name', type: 'string'}
     *         ]
     *     });
     *
     *     MyApp.User.load(10, {
     *         scope: this,
     *         failure (record, operation) {
     *             //do something if the load failed
     *         },
     *         success (record, operation) {
     *             //do something if the load succeeded
     *         },
     *         callback (record, operation, success) {
     *             //do something whether the load succeeded or failed
     *         }
     *     });
     *
     * @param {Number/String} id The ID of the model to load.
     * **NOTE:** The model returned must have an ID matching the param in the load
     * request.
     *
     * @param {Object} [options] The options param is an
     * {@link ReadOperation} config object containing success, failure and
     * callback functions, plus optional scope.
     *
     * @param {Function} options.success A function to be called when the
     * model is processed by the proxy successfully.
     * The callback is passed the following parameters:
     * @param {Model} options.success.record The record.
     * @param {Operation} options.success.operation The operation.
     * 
     * @param {Function} options.failure A function to be called when the
     * model is unable to be processed by the server.
     * The callback is passed the following parameters:
     * @param {Model} options.failure.record The record.
     * @param {Operation} options.failure.operation The operation.
     * 
     * @param {Function} options.callback A function to be called whether the proxy
     * transaction was successful or not.
     * The callback is passed the following parameters:
     * @param {Model} options.callback.record The record.
     * @param {Operation} options.callback.operation The
     * operation.
     * @param {Boolean} options.callback.success `true` if the operation was
     * successful.
     * 
     * @param {Object} options.scope The scope in which to execute the callback
     * functions. Defaults to the record.
     *
     * @param {Session} [session] The session for this record.
     *
     * @return {Model} The newly created model. Note that the model will
     * (probably) still be loading once it is returned from this method. To do any
     * post-processing on the data, the appropriate place to do see is in the
     * callback.
     */
    static load (id, options, session) {
        let data = {};
        let rec;

        if (session) {
            rec = session.peekRecord(this, id);
        }

        if (!rec) {
            data[this.idProperty] = id;
            rec = new this(data, session);
        }

        rec.load(options);
        
        return rec;
    }

    /**
     * Create a model while also parsing any data for associations.
     * @param {Object} data The model data, including any associated data if required.
     * The type of data should correspond to what the configured data reader would expect.
     * @param {Session} [session] The session.
     * @return {Model} The model.
     */
    static loadData (data, session) {
        let rec;

        if (data) {
            rec = this.proxy.reader.readRecords([data], session
                ? { recordCreator: session.recordCreator }
                : undefined, this._associatedReadOptions)[0];
        }
        else {
            rec = new this(data, session);
        }

        return rec;
    }

    /**
     * This method is called by the `Store` factory when it receives a config object that
     * specifies this class as its the `model`. The provided config object can be modified
     * or a substitute config object can be returned.
     * 
     * When this method is used by a `Role` to create its association stores, the `role`
     * property is specified in the `config` object.
     * 
     * @param {Object} config A `Store` config object.
     * @return {Object}
     */
    static preconfigureStore (config) {
        let storeDefaults = this.storeDefaults;
        
        if (storeDefaults) {
            config = merge({}, storeDefaults, config);
        }
        
        return config;
    }

    /**
     * Summarizes a set of records into a `summaryRecord`. If no `summaryRecord` is passed,
     * an instance of this model's `summaryModel` is created.
     * 
     * @param {Model[]} records The records to summarize.
     * @param {Model} [summaryRecord] An optionally pre-existing instance of this model's
     * `summaryModel`.
     * @return {Model}
     */
    static summarize (records, summaryRecord) {
        summaryRecord = summaryRecord || new this.summaryModel();
        
        return summaryRecord.summarize(records);
    }

    //=========================================================================
    // Internals

    //-------------------------------------------------------------------------
    // Config logic

    //--------------------
    // belongsTo
    
    static applyBelongsTo (value) {
        this.schema.addKeylessSingle(this, value, false);
    }

    //--------------------
    // entityName
    
    static applyEntityName (value) {
        return ((value === '' || value === true) ? this.name : value) || '';
    }
    
    static updateEntityName (entityName) {
        this.prototype.entityName = entityName;
    }

    //--------------------
    // fields
    
    static applyFields (config) {
        let cls = this;
        let fieldsByName = new Empty();
        let proto = cls.prototype;
        let fields = proto.fields = [];
        let idProperty = proto.idProperty = cls.idProperty;
        let versionProperty = cls.versionProperty;
        let ordinal = 0;
        let field, idField;
        
        // Since we poke "fields" as a reference on the class prototype, we use it to
        // carry the rest of the related field baggage instead of dropping all that
        // private content onto the class and/or prototype.
        defineProps(fields, {
            byName: {
                value: fieldsByName
            },

            // These arrays are lazily generated at which ime these definitions will
            // be replaced with their values going forward.
            criticals: {
                configurable: true,
                get () {
                    cls.rankFields();

                    return fields.criticals;
                }
            },

            ranked: {
                configurable: true,
                get () {
                    cls.rankFields();

                    return fields.ranked;
                }
            },

            transients: {
                configurable: true,
                get () {
                    cls.rankFields();

                    return fields.transients;
                }
            }
        });
        
        if (cls !== Model) {
            for (field of config || EMPTY) {
                if (versionProperty === field.name && !('defaultValue' in field)) {
                    field = { defaultValue: 1, ...field };
                }

                fields.push(field = Field.create(field));

                field.owner = cls;
                fieldsByName[field.name] = field;
                field.ordinal = ordinal++;
            }

            if (!(idField = fieldsByName[idProperty])) {
                fields.push(fieldsByName[idProperty] = idField = new Field({
                    name: idProperty,
                    definedBy: cls,
                    owner: cls,
                    generated: true,
                    ordinal: ordinal++
                }));
            }

            cls.idField = idField;

            if (versionProperty) {
                if (!(field = fieldsByName[versionProperty])) {
                    fields.push(fieldsByName[versionProperty] = field = Field.create({
                        type: 'int',
                        name: versionProperty,
                        defaultValue: 1,
                        definedBy: cls,
                        owner: cls,
                        generated: true,
                        ordinal: ordinal++
                    }));
                }

                field.critical = true;
            }
        }
        
        return fields;
    }

    //--------------------
    // hasOne
    
    static applyHasOne (value) {
        this.schema.addKeylessSingle(this, value, true);
    }

    //--------------------
    // hasMany
    
    static applyHasMany (value) {
        let schema = this.schema;
        let assoc;
        
        for (assoc of arrayify(value)) {
            schema.addKeylessMany(this, assoc);
        }
    }

    //--------------------
    // identifier

    static applyIdentifier (config) {
        let cls = this;
        let schema = cls.schema;
        let prefix, ret, tpl;
        
        if (!config) {
            config = {
                type: 'sequential',
                prefix: decapitalize(cls.entityName || cls.name) + '-'
            };
        }
        
        if (config.isIdentifier) {
            ret = config;
        }
        else if (is.callable(config)) {
            ret = new config();
        }
        else if (!schema || !config.charAt || !(ret = schema.getIdentifier(config))) {
            prefix = config.prefix;
            
            if (prefix && prefix.includes('{')) {
                config = copy({}, config);
                
                tpl = Template.from(prefix);
                
                config.prefix = tpl.apply({
                    entityName: cls.entityName || cls.name,
                    name: cls.name
                });

                // config.prefix = prefix
                //         .split('{entityName}').join(cls.entityName || cls.name)
                //         .split('{name}').join(cls.name);
            }

            ret = Base.Factory.identifier(config);
        }
        
        return ret;
    }

    //--------------------
    // idField
    
    static updateIdField (idField) {
        idField.allowNull = idField.critical = idField.identifier = true;
        idField.defaultValue = null;

        this.prototype.idField = idField;
    }
    
    //--------------------
    // initializer
    
    static applyInitializer (value) {
        let initializer = value || this.makeInitializer();
        
        this.$meta.$initializer = initializer;
        
        return initializer;
    }

    //--------------------
    // manyToMany

    static applyManyToMany (value) {
        this.schema.addMatrices(this, value);
    }

    //--------------------
    // proxy
    
    static applyProxy (config) {
        let me = this;
        let proxy;
        
        if (config && config.isProxy) {
            proxy = (config.model && config.model !== me) ? config.clone() : config;
        }
        else {
            config = configFromType(config);

            if (config && config.type && config.schema === false) {
                config = copy({}, config);
                delete config.schema;
            }
            else {
                // We have nothing or a config for the proxy. Get some defaults from
                // the Schema and smash anything we've provided over the top.
                config = merge(
                    { type: 'memory' },
                    me.schema && me.schema.constructProxy(me),
                    config
                );
            }

            proxy = Base.Factory.proxy(config);
        }
        
        return proxy;
    }
    
    static updateProxy (proxy) {
        proxy.model = this;
    }

    //--------------------
    // schema
    
    static applySchema (config) {
        let ret = null;

        if (config.isSchema) {
            ret = config;
        }
        else if (config) {
            ret = Schema.default;

            if (config !== true && config !== 'default') {
                //<debug>
                assert(is.object(config), 'Invalid schema value');
                //</debug>

                ret.setConfig(config);

                //<debug>
                ret.setConfig = () =>
                    raise('The default schema can only be reconfigured once');
                //</debug>
            }
        }
        
        return ret;
    }
    
    static updateSchema (schema) {
        if (this.entityName && schema) {
            schema.addEntity(this);
        }
    }

    //--------------------
    // summaryModel

    static applySummaryModel (options) {
        // Build the summary model from a class looking like this:
        //
        //      @define
        //      class User extends Model {
        //          @config
        //          static fields = [{
        //              name: 'rate',
        //              summary: 'avg'
        //          }],
        //
        //          @config
        //          static summary = {
        //              maxRate: {
        //                  field: 'rate', // calculated from rate field
        //                  summary: 'max'
        //              }
        //          }
        //      });
        let cls = this;
        let entityName = cls.entityName;
        let summary = cls.summary;
        let summaryFields = [];
        let fields = cls.fields;
        let field, fieldSummary, mixins, name, summaryField, type;
        
        // Since we extend this model, we will inherit its fields[]. However, we have
        // delayed the construction of the `summary` config on those fields. We pay that
        // bill now and include in our fields[] a definition with the constructed Summary
        // instance. These field definitions will override (by name) their corresponding
        // entries in this model.
        for (field of fields) {
            fieldSummary = field.summary;
            
            if (fieldSummary) {
                summaryFields.push({
                    type: field.constructor,
                    name: field.name,
                    summary: fieldSummary
                });
            }
        }
        
        if (summary) {
            // The `summary` model config adds pure-summary fields, so loop over those
            // and append them.
            for (name in summary) {
                type = typeof(fieldSummary = summary[name]);

                //<debug>
                assert(!fields.byName[name],
                       `Cannot redefine field "{0}" in Model's summary config; ` +
                       `use the field's summary config`, name);
                //</debug>
                
                if (type === 'function' || type === 'string') {
                    field = {
                        name,
                        summary: fieldSummary
                    };
                }
                else {
                    field = {
                        ...fieldSummary,
                        name
                    };
                }

                summaryFields.push(field);

                // These pure-summary fields have an additional "field" config on them,
                // but we store that on the Field instance as "summaryField".
                summaryField = field.field;

                if (summaryField) {
                    delete field.field;
                    // It is ok for the field being used to not be explicitly defined:
                    field.summaryField = fields.byName[summaryField] || summaryField;
                }
            }
        }
        
        mixins = [ SummaryModel ];
        
        @define({
            ...options,
            mixins: options.mixins ? mixins.concat(options.mixins) : mixins
        })
        class SummaryModel_ extends cls {
            @config
            static entityName = entityName && (entityName + 'Summary');

            @config
            static fields = summaryFields;
            
            @config
            static schema = null;
            
            @config
            static summary = null;
            
            @config
            static summaryModel = null;
        }

        return SummaryModel_;
    }

    //--------------------
    // validators

    //<debug>
    static updateValidators (validators) {
        let name;
        
        if (validators) {
            for (name in validators) {
                assert(this.fields.byName[name], 'No field named "{0}" on {1}', name, this);
            }
        }
    }
    //</debug>

    //-------------------------------------------------------------------------
    // Internal Methods

    clearState () {
        let me = this;

        me.dirty = me.editing = false;
        me.editMemento = me.modified = null;
    }

    /**
     * Copies data from the passed record into this record. If the passed record is undefined,
     * does nothing.
     *
     * If this is a phantom record (represented only in the client, with no corresponding
     * database entry), and the source record is not a phantom, then this record acquires
     * the id of the source record.
     *
     * @param {Model} sourceRecord The record to copy data from.
     * @return {String[]} The names of the fields which changed value.
     * @private
     */
    copyFrom (sourceRecord) {
        let me = this;
        let fields = me.fields;
        let modifiedFieldNames = [];
        let idProperty = me.constructor.idProperty;
        let field, myData, sourceData, name, value;

        if (sourceRecord) {
            myData = me.data;
            sourceData = sourceRecord.data;
            
            for (field of fields) {
                name = field.name;

                // Do not use setters.
                // Copy returned values in directly from the data object.
                // Converters have already been called because new Records
                // have been created to copy from.
                // This is a direct record-to-record value copy operation.
                // don't copy the id, we'll do it at the end
                if (name !== idProperty) {
                    value = sourceData[name];

                    // If source property is specified, and value is different
                    // copy field value in and build updatedFields
                    if (value !== undefined && !me.isEqual(myData[name], value)) {
                        myData[name] = value;
                        modifiedFieldNames.push(name);
                    }
                }
            }

            // If this is a phantom record being updated from a concrete record, copy the ID in.
            if (me.phantom && !sourceRecord.phantom) {
                // beginEdit to prevent events firing
                // commit at the end to prevent dirty being set
                me.beginEdit();
                me.setId(sourceRecord.id);
                me.endEdit(true);
                me.commit(true);
            }
        }
        
        return modifiedFieldNames;
    }

    /**
     * Helper function used by afterEdit, afterReject and afterCommit. Calls the given
     * method on the `Store` that this instance has {@link #join joined}, if any.
     * The store function will always be called with the record as its single
     * argument. If this model is joined to a `NodeStore`, then this method calls
     * the given method on the NodeStore and the associated `TreeStore`.
     * @param {String} funcName The name function to call on each store.
     * @param {Array} [args] The arguments to pass to the method. This instance is
     * always inserted as the first argument.
     * @private
     */
    callJoined (funcName, args) {
        let me = this;
        let joined = me.joined;
        let session = me.session;
        let state = me.dropped ? 'D' : (me.phantom ? 'C' : (me.dirty ? 'U' : 'R'));
        let i, len, fn, item;

        me.crudState = state;

        if (joined || session) {
            if (args) {
                args.unshift(me);
            }
            else {
                args = [me];
            }

            fn = session && session[funcName];
            
            if (fn) {
                fn.apply(session, args);
            }

            if (joined) {
                for (i = 0, len = joined.length; i < len; ++i) {
                    item = joined[i];
                    
                    if (item && (fn = item[funcName])) {
                        fn.apply(item, args);
                    }
                }
            }
        }

        me.crudStateWas = state;
    }

    /**
     * Gets the names of all the fields that were modified during an edit.
     * @param {Object} [old] The saved data from `beginEdit`.
     * @return {String[]} The array of modified field names.
     * @private
     */
    getModifiedFieldNames (old) {
        let me = this;
        let data = me.data;
        let modified = [];
        let oldData = old || me.editMemento.data;
        let key;

        for (key in data) {
            // we rarely use hasOwnProperty checks, but this object holds data fields by
            // name so this check isolates those names from inherited JS Object names:
            if (data.hasOwnProperty(key)) {
                if (!me.isEqual(data[key], oldData[key], key)) {
                    modified.push(key);
                }
            }
        }

        return modified;
    }

    interpret (name) {
        let me = this;
        let accessor = me._metaProperties[name];
        let ret;

        if (!accessor) {
            accessor = me.associations;
            // e.g. "orderItems"
            accessor = accessor && accessor[name] && accessor[name].getterName;
        }

        if (!accessor) {
            ret = me.data[name];
        }
        else if (is.callable(ret = me[accessor])) {
            ret = me[accessor](); // e.g., me.orderItems()
        }

        return ret;
    }

    /**
     * Checks if two values are equal, taking into account certain special factors, for
     * example dates.
     * @param {Object} lhs The first value.
     * @param {Object} rhs The second value.
     * @param {String/Field} [field] The field name or instance.
     * @return {Boolean} True if the values are equal.
     * @private
     */
    isEqual (lhs, rhs, field) {
        let f;

        if (field) {
            f = field.isField ? field : this.fields.byName[field];
            
            if (f) {
                return f.isEqual(lhs, rhs);
            }
        }

        // instanceof is ~10 times faster then Ext.isDate. Values here will not be
        // cross-document objects
        if (lhs instanceof Date && rhs instanceof Date) {
            return +lhs === +rhs;
        }
        
        return lhs === rhs;
    }

    /**
     * Called when an associated record instance has been set.
     * @param {Model} record The record.
     * @param {Role} role The role.
     *
     * @private
     */
    onAssociatedRecordSet (record, role) {
        this.callJoined('afterAssociatedRecordSet', [record, role]);
    }

    /**
     * Called when the model id is changed.
     * @param {Object} id The new id.
     * @param {Object} oldId The old id.
     * @private
     */
    onIdChanged () {
        // empty
    }
    
    setErased () {
        this.erased = true;
        this.callJoined('afterErase');
    }

    // /**
    //  * Set the session for this record.
    //  * @param {Session} session The session
    //  * @private
    //  */
    // setSession (session) {
    //     //<debug>
    //     if (session) {
    //         assert(!this.session, 'This model already belongs to a session.');
    //         assert(this.id, 'The model must have an id to participate in a session.');
    //     }
    //     //</debug>
    //    
    //     this.session = session;
    //    
    //     if (session) {
    //         session.add(this);
    //     }
    // }

    //-------------------------------------------------------------------------
    // Internal Statics

    /**
     * @property {Object} _associatedReadOptions
     * The options for the proxy reader for loadData.
     * @private
     */
    static _associatedReadOptions = {
        recordsOnly: true,
        asRoot: true
    };
    
    static createWithId (id, session) {
        let data = {};
        
        if (id || id === 0) {
            data[this.idProperty] = id;
        }
        
        return new this(data, session);
    }

    static idFromData (data) {
        let T = this;
        let idField = T.idField;

        return idField.calculated ? (new T(data)).id : data[idField.name];
    }

    /**
     * This method produces the `initializer` for this class. If there are no fields
     * requiring {@link Field#cfg!convert conversion} and no fields requiring
     * a {@link Field#defaultValue default value} then this method will return `null`.
     * @return {Function}
     * @private
     */
    static makeInitializer () {
        let fields = this.fields.ranked;

        // For non-calculated fields that have some work required (a convert method and/or
        // defaultValue), we need to process incoming data in some way.
        fields = fields.filter(fld => fld.converts || fld.defaultValue !== undefined);
        
        if (!fields.length) {
            return emptyFn;
        }

        return record => {
            let data = record.data;
            let converts, field, fieldName, hasDefValue, v;
            
            for (field of fields) {
                converts = field.converts;
                hasDefValue = (field.defaultValue !== undefined);

                v = data[fieldName = field.name];

                if (converts && hasDefValue) {
                    if (v !== undefined) {
                        v = field.deserialize(v, record);
                    }

                    if (v === undefined) {
                        v = field.defaultValue;

                        if (field.cloneDefaultValue) {
                            v = clone(v);
                        }
                    }

                    data[fieldName] = v;
                }
                else if (converts) { // no defaultValue
                    if ((v = field.deserialize(v, record)) !== undefined) {
                        data[fieldName] = v;
                    }
                }
                else if (hasDefValue) { // no convert
                    if (v === undefined) {
                        v = field.defaultValue;

                        if (field.cloneDefaultValue) {
                            v = clone(v);
                        }

                        data[fieldName] = v;
                    }
                }
            }
        };
    }

    static rankField (fields, ranked, field) {
        // let cls = this;  (we only have 1 use of this outside of debug blocks)
        let dep, targetField;

        //<debug>
        ranked.topoStack.push(field.name);

        assert(field.rank !== 0, // assert(not adding)
               '{0} has circular field dependencies: {1}', this, ranked.topoStack);

        assert(!ranked.topoStack.length || !field.evil,
               '{0}: Field {1} cannot depend on depends-less field {2}',
               this, ranked.topoStack[ranked.topoStack.length - 1], field.name);

        field.rank = 0; // adding (falsy but we can still detect cycles as above)
        //</debug>

        for (dep of field.depends || EMPTY) {
            // Get the targetField on which we depend and add this field to the
            // targetField.dependents[]
            targetField = fields.byName[dep];
            
            //<debug>
            assert(targetField, '{0}: Field {1} depends on undefined field {1}',
                   this, field.name, dep);
            //</debug>
            
            (targetField.dependents || (targetField.dependents = [])).push(field);

            if (!targetField.rank) {
                this.rankField(fields, ranked, targetField);
            }
        }

        // Little-known fact: Array.push returns the array length after adding
        field.rank = ranked.push(field); // 1-based (a truthy "added" state)

        //<debug>
        ranked.topoStack.pop();
        //</debug>
    }

    static rankFields () {
        let cls = this;
        let fields = cls.fields;
        let criticals = [];
        let ranked = [];
        let transients = [];
        let evilFields, field;
        
        defineProps(fields, {
            criticals: {
                value: criticals
            },

            ranked: {
                value: ranked
            },

            transients: {
                value: transients
            }
        });

        //<debug>
        ranked.topoStack = []; // diagnostic stack
        ranked.topoStack.toString = () => ranked.topoStack.join(' --> ');
        //</debug>

        // This first pass brings over any fields that have no dependencies at all
        // and gathers the evil fields to the side (the fields that could depend on
        // anything). This avoids the call to rankField that we must perform on all of
        // the fields that do have depends (which is good since most fields will be
        // handled here).
        for (field of fields) {
            if (field.critical) {
                criticals.push(field);
            }

            if (!field.persist) {
                transients.push(field);
            }

            if (field.evil) {
                (evilFields || (evilFields = [])).push(field);
            }
            else if (!field.depends) {
                field.rank = ranked.push(field); // 1-based
            }
        }

        for (field of fields) {
            if (!field.rank && !field.evil) {
                cls.rankField(fields, ranked, field);
            }
        }

        for (field of evilFields || EMPTY) {
            field.rank = ranked.push(field); // 1-based
        }

        //<debug>
        delete ranked.topoStack; // cleanup diagnostic stack
        //</debug>

        return fields;
    }
}

Model.idField = new Field({
    name: Model.idProperty,
    definedBy: Model,
    owner: Model,
    generated: true,
    ordinal: 0
});

//-------------------------------------------------------------------------------------

class SummaryModel extends Model {
    /**
     * Calculate all summary fields on this record.
     * @param {Model[]} records The records to use for calculation.
     */
    summarize (records) {
        let me = this;
        let fields = me.fields;
        let recLen = records.length;
        let result, summary, prop, name, field;

        for (field of fields) {
            summary = field.summary;
            
            if (summary) {
                name = field.name;
                prop = field.summaryField;
                prop = prop ? (prop.isField ? prop.name : prop) : name;

                result = result || {};
                result[name] = summary.calculate(records, prop, 'data', 0, recLen);
            }
        }

        if (result) {
            // Informs joined folks of the changes, but we are never in a dirty state
            me.set(result, me._commitOptions);
        }
        
        return me;
    }
}

//-------------------------------------------------------------------------------------

/**
 * This class is used to hold validation errors for a record. The results of the record's
 * `{@link Model#validators validators}` are stored as the field values of this
 * record. The first failed validation is all that is stored per field unless the Model
 * class has defined a `validationSeparator` config.
 */
@define({
    prototype: {
        /**
         * @property {Number} syncGeneration
         * This is a capture of the `{@link Model#generation}` value from the last
         * time the validation state was refreshed. This is used to determine if this object
         * is potentially out-of-date with its associated `record`.
         * @private
         * @readonly
         */
        syncGeneration: 0 // Model generation starts at 1 so we start out-of-sync
    }
})
class Validation extends Model {
    /**
     * Attaches this instance to its associated `record`.
     * @param {Model} record The associated record.
     * @return {Validation}
     * @private
     */
    attach (record) {
        /**
         * @property {Model} record
         * The associated record for this validation instance.
         * @readonly
         */
        this.record = record;

        // We need to remove the id property from our data as that is not meaningful for
        // a Validation pseudo-record.
        delete this.data.id;
        
        return this;
    }

    get validation () {
        return null;
    }

    /**
     * Returns true if the associated record (not this one) is valid.
     * @return {Boolean}
     */
    isValid () {
        return !this.refresh().dirty;
    }

    /**
     * This method updates the state of this record against its associated `record`. This
     * method is called with `force` as `false` whenever the {@link Model#validation}
     * property is evaluated. It is only necessary, therefore, to call this method directly
     * if the `force` parameter needs to be passed as `true`. This would be the case if
     * some change to the record has occurred other than normal field mutation and that
     * change is impacting on custom validators that use such information.
     * @param {Boolean} [force] Pass `true` to force an update of validation state.
     * @return {Validation}
     */
    refresh (force) {
        let me = this;
        let record = me.record;
        let generation = record.generation;
        let currentValue, data, defaultMessage, error, field, fields, msg, name,
            recordData, val, values;

        if (force || me.syncGeneration !== generation) {
            data = me.data;
            fields = record.fields;
            recordData = record.data;
            values = null;

            me.syncGeneration = generation;

            for (field of fields) {
                name = field.name;
                val = recordData[name];
                defaultMessage = field.defaultInvalidMessage;
                error = 0;

                if (!(name in data)) {
                    // Now is the cheapest time to populate our data object with "true"
                    // for all validated fields. This ensures that our non-dirty state
                    // equates to isValid.
                    data[name] = currentValue = true; // true === valid
                }
                else {
                    currentValue = data[name];
                }

                if (!field.validate.$nullFn) {
                    msg = field.validate(val, record.constructor.validationSeparator, null,
                                         record);
                    
                    if (msg !== true) {
                        error = msg || defaultMessage;
                    }
                }

                if (!error) {
                    error = true; // valid state is stored as true
                }
                
                if (error !== currentValue) {
                    (values || (values = {}))[name] = error;
                }
            }

            if (values) {
                // only need to do this if something changed...
                me.set(values);
            }
        }
        
        return me;
    }
}

export { Model, Validation };
