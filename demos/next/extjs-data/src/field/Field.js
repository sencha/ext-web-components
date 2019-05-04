import {
    //<debug>
    assertIn,
    //</debug>

    Base, Factoryable,
    define, config, copy, is
} from '../../../extjs-core/src';

import { Locale, parseCode } from '../../../extjs-util/src';
import { flatten } from '../../../extjs-util/src/Array';

/**
 * Fields are used to define the members of a Model. They aren't instantiated directly;
 * instead, when we create a class that extends {@link Model}, it automatically
 * creates Field instances for each field configured in a {@link Model Model}.
 * For example, we might set up a model like this:
 *
 *     Ext.define('User', {
 *         extend: 'Model',
 *         fields: [
 *             'name', 'email',
 *             { name: 'age', type: 'int' },
 *             { name: 'gender', type: 'string', defaultValue: 'Unknown' }
 *         ]
 *     });
 *
 * Four fields will have been created for the User Model - name, email, age and gender.
 * Note that we specified a couple of different formats here; if we only pass in the string
 * name of the field (as with name and email), the field is set up with the 'auto' type.
 * It's as if we'd done this instead:
 *
 *     Ext.define('User', {
 *         extend: 'Model',
 *         fields: [
 *             { name: 'name', type: 'auto' },
 *             { name: 'email', type: 'auto' },
 *             { name: 'age', type: 'int' },
 *             { name: 'gender', type: 'string', defaultValue: 'Unknown' }
 *         ]
 *     });
 *
 * # Field Types
 *
 * Fields come in various types. When declaring a field, the `type` property is used to
 * specify the type of `Field` derived class used to manage values.
 *
 * The predefined set of types are:
 *
 *  - {@link Field auto} (Default, implies no conversion)
 *  - {@link StringField string}
 *  - {@link IntegerField int}
 *  - {@link NumberField number}
 *  - {@link BooleanField boolean}
 *  - {@link DateField date}
 *
 * # Conversion
 *
 * When reading fields it is often necessary to convert the values received before using
 * them or storing them in records. To handle these cases there is the
 * `{@link #method!deserialize deserialize}` method. This method is passed the received
 * value (as well as the current record instance, but see below) and it returns the value
 * to carry forward.
 *
 * For `auto` fields there is no `{@link #method!deserialize deserialize}` method. This is
 * for efficiency. For other field types, there are often `deserialize` methods. You can
 * provide a `{@link #cfg!convert convert}` config when the field is defined like this:
 *
 *      {
 *          name: 'timestamp',
 *
 *          convert: function (value) {
 *              return new Date(value);
 *          }
 *      }
 *
 * While this can be convenient, see below for details on defining Custom Types as that is
 * often a better practice and avoids repeating these functions.
 *
 * Note that when a `defaultValue` is specified, it will also be passed through to the
 * `{@link #method!deserialize deserialize}` method or the `{@link #cfg!convert convert}`
 * config.
 *
 * ## Calculated Values
 *
 * In some cases fields are the result of a calculation from other fields. Historically
 * this was a second role for `{@link #cfg!convert convert}` but that has some short
 * comings. The simpler solution is the `{@link #cfg!calculate calculate}` config.
 *
 * Values produced by `{@link #cfg!calculate calculate}` and `{@link #cfg!convert convert}`
 * are stored in the record as with any other field. In fact, if we define a calculated
 * "firstName" field and log out all of the data, we'll see this:
 *
 *     var rec = new User({ name: 'Abe Lincoln' });
 *
 *     console.log(rec.data);
 *
 *     //outputs this:
 *     {
 *         age: 0,
 *         email: "",
 *         firstName: "Abe",  // calculated field
 *         name: "Abe Lincoln"
 *     }
 *
 * ### Using `calculate`
 *
 *      {
 *          name: 'firstName',
 *
 *          calculate: function (data) {
 *              return data.name.split(' ')[0];
 *          }
 *      }
 *
 * Using `{@link #cfg!calculate calculate}` is the simplest and safest way to define a
 * calculated field. The most important part of this is that, internally, the code of the
 * supplied function is parsed to extract its dependencies. In this case, the "name" field
 * is the only dependency. This means that "firstName" will only need to be recalculated
 * when "name" is modified.
 *
 * **Note:** Fields used by the calculate method must be explicitly defined in the
 * {@link Model#cfg!fields #fields} of the model.
 *
 * ### Using `convert`
 *
 * Following is the equivalent technique using `{@link #cfg!convert convert}`
 *
 *      {
 *          name: 'firstName',
 *
 *          convert: function (value, record) {
 *              return record.get('name').split(' ')[0];
 *          },
 *
 *          depends: [ 'name' ]
 *      }
 *
 * When a `{@link #method!convert convert}` function accepts a 2nd argument (a reference to
 * the record), it is considered a calculated field. If a `{@link #cfg!depends depends}`
 * config is not provided then this field's dependencies are unknown. In this case, the
 * `{@link #cfg!depends depends}` are provided as would be automatically determined with
 * the `{@link #cfg!calculate calculate}` config.
 *
 * ### Updating
 *
 * Fields modified with the {@link Model#set set} method will have their stored 
 * value set using the convert / calculate method when present.
 * 
 * For example:
 *
 *      @define({
 *          fields: [{
 *              name: 'salary',
 *              convert (val) {
 *                  var startingBonus = val * .1;
 *                  return val + startingBonus;
 *              }
 *          }],
 *          
*           convertOnSet: false
 *      })
 *      class Employee extends Model {
 *          // ...
 *      }
 *     
 *      let tina = new Employee({
 *          salary: 50000
 *      });
 *     
 *      console.log(tina.get('salary')); // logs 55000
 *     
 *      tina.set('salary', 60000);
 *      console.log(tina.get('salary')); // logs 60000
 * 
 * This default behavior can be disabled by setting the Model's 
 * `{@link Model#cfg!convertOnSet}` config to `false`.
 * 
 * **Note:** convertOnSet `false` only prevents the convert / calculate call when the 
 * set `fieldName` param matches the field's `{@link #name}`.  See 
 * {@link Model#convertOnSet convertOnSet} for additional details.
 *
 * ### Dependencies
 *
 * When a field's `{@link #cfg!convert convert}` processes values from the record
 * (vs. just the field's value), it is best to also provide a `depends` config as shown
 * above. Fields that provide a `{@link #cfg!calculate calculate}` method must follow the
 * proper form for using fields so that dependencies can be extracted.
 *
 * Calculated fields are processed after other fields based on their dependencies. Fields
 * with `{@link #cfg!convert convert}` functions that use the provided record that do *not*
 * specify a `{@link #cfg!depends depends}` config are processed as a group after all other
 * fields since such converters can rely on anything in the record. The order of processing
 * these fields with respect to each other is unspecified and should not be relied upon.
 *
 * # Serialization
 *
 * To handle the inverse scenario of `deserialize` and `convert` there is the `serialize`
 * method. This method is called to produce the value to send to a server based on the
 * internal value as would be returned from `convert`. In most cases, these methods should
 * "round trip" a value:
 *
 *      assertTrue(value === field.serialize(field.deserialize(value)));
 *
 * By default, only `{@link DateField date}` fields have a `serialize` method.
 * Other types simply send their value unmodified.
 *
 * # Custom Types
 *
 * Developers may create their own application-specific data types by deriving from this
 * class. This is typically much better than applying multiple configuration values on
 * field instances as these often become repetitive.
 *
 * To illustrate, we define a "time" field type that stores a time-of-day represented as a
 * number of minutes since Midnight.
 *
 *      @define({
 *          type: 'time'
 *      })
 *      class TimeField extends Field {
 *          @config
 *          timeFormat = 'g:i';
 *
 *          deserialize (value) {
 *              let ret = value;
 *              
 *              if (typeof value === 'string') {
 *                  ret = ExtDate.parse(value, this.timeFormat);
 *                  
 *                  if (ret) {
 *                      ret = ret.getHours() * 60 + ret.getMinutes();
 *                  }
 *              }
 *
 *              return ret;
 *          }
 *          
 *          serialize (value) {
 *              let ret = value;
 *              
 *              if (typeof value === 'number') {
 *                  ret = new Date();
 *                       
 *                  ret.setHours(Math.floor(value / 60));
 *                  ret.setMinutes(value % 60);
 *                       
 *                  ret = ExtDate.format(ret, this.timeFormat);
 *              }
 *
 *              return ret;
 *          }
 *      }
 *
 * ## Validation
 *
 * Custom field types can override the `{@link #method!validate validate}` method or
 * provide a set of `{@link #cfg!validators validators}`.
 *
 *      @define({
 *          type: 'phonenumber'
 *      })
 *      class PhoneNumberField extends Field {
 *          @config
 *          validators = {
 *              type: 'phone'
 *          };
 *      }
 *
 * Once the class is defined, fields can be declared using the new type (based on its
 * `alias`) like so:
 *
 *      @define({
 *          fields: [
 *              { name: 'startTime', type: 'time' },
 *              { name: 'phoneNumber', type: 'phonenumber' }
 *          ]
 *      })
 *      class PhoneCall extends Model {
 *          // ...
 *      });
 */
@define({
    tags: 'isDataField',
    
    mixins: [
        Factoryable
    ],
    
    alias: 'data.field.auto',
    configurable: 'open',

    factory: {
        defaultProperty: 'name'
    },
    
    prototype: {
        //-----------------------------------------------------------------------------
        // Configs - These configs do not (currently) need any special handling, so we
        // just place them on the prototype and allow our open configurability to pour
        // them on as simple instance properties.

        /**
         * @cfg {Boolean} allowBlank
         * @private
         *
         * Used for validating a {@link Model model}. Defaults to true. An empty value here
         * will cause {@link Model}.{@link Model#isValid isValid} to evaluate to
         * `false`.
         */
        allowBlank: true,

        /**
         * @cfg {Boolean} allowNull
         *
         * Use when converting received data into a {@link IntegerField `int`},
         * {@link NumberField `float`}, {@link field.Boolean `bool`}
         * or {@link StringField `string`} type. If the value cannot be
         * parsed, `null` will be used if allowNull is true, otherwise a default value for
         * that type will be used:
         *
         * - for `int` and `float` - `0`.
         * - for `string` - `""`.
         * - for `bool` - `false`.
         *
         * Note that when parsing of {@link DateField `date`} type fails, the value
         * will be `null` regardless of this setting.
         */
        allowNull: null,  // allow defaulting in initConfig

        /**
         * @cfg {Boolean} critical
         * A critical field is a field that must always be sent to the server even if it has
         * not changed. The most common example of such a field is the "id" of a record (see
         * `{@link Model#idProperty}` but the
         * `{@link Model#versionProperty}` is similarly a `critical` field.
         */
        critical: false,

        /**
         * @cfg {String} defaultInvalidMessage
         * The default message to present for an invalid field.
         */
        defaultInvalidMessage: 'This field is invalid',

        /**
         * @cfg {String} name
         *
         * The name by which the field is referenced within the Model. This is referenced by,
         * for example, the `dataIndex` property in column definition objects passed to
         * {@link Ext.grid.property.HeaderContainer}.
         *
         * Note: In the simplest case, if no properties other than `name` are required, a
         * field definition may consist of just a String for the field name.
         */
        name: null,

        /**
         * @cfg {Boolean} persist
         *
         * False to exclude this field from the {@link Model#modified} fields in a
         * record. This will also exclude the field from being written using a
         * {@link writer.Writer}. This option is useful when fields are used to keep
         * state on the client but do not need to be persisted to the server.
         *
         * Defaults to `false` for `calculated` fields and `true` otherwise.
         */
        persist: null,

        /**
         * @cfg {String/Object} reference
         * The {@link Model#entityName name} of the entity referenced by this field.
         * In most databases, this relationship is represented by a "foreign key". That is, a
         * value for such a field matches the value of the
         * {@link Model#idProperty id} for an entity of this type.
         *
         * For further documentation, see {@link schema.Reference}.
         */
        reference: null,

        /**
         * @cfg serialize
         * @inheritdoc Field#method!serialize
         */

        /**
         * @cfg {String/Field} summaryField
         * A field to use as the basis for calculating a summary. This is used in
         * conjunction with the virtual summary fields. See
         * {@link Model#cfg!summary}.
         *
         * @private
         */
        summaryField: null,

        /**
         * @cfg {Boolean} [unique=false]
         * `true` if the value of this field is unique amongst all instances. When used with a
         * `reference` this describes a "one-to-one" relationship. It is almost always the
         * case that a `unique` field cannot also be {@link #allowBlank nullable}.
         */
        unique: false,
    
        //---------------------------------------------------------------------------
        // Properties
    
        /**
         * @property {Boolean} calculated
         * This property is `true` if this field has a `{@link #cfg!calculate calculate}`
         * method or a `{@link #method!convert convert}` method that operates on the entire
         * record as opposed to just the data value. This property is determined from the
         * `length` of the `{@link #method!convert convert}` function which means this is
         * *not* calculated:
         *
         *      convert: function (value) {
         *          return ...
         *      }
         *
         * While this *is* calculated:
         *
         *      convert: function (value, record) {
         *          return ...
         *      }
         *
         * **NOTE:** It is recommended for such fields to use 
         * `{@link #cfg!calculate calculate}` or explicitly specify the fields used by 
         * `{@link #method!convert convert}` using `{@link #cfg!depends depends}`.
         *
         * @readonly
         */
        calculated: false,

        /**
         * @property {Class} definedBy
         * The class (derived from {@link Model}) that defined this field.
         *
         *      @define
         *      class Foo extends Model {
         *          @config
         *          static fields = [
         *              { name: 'bar' }
         *          ];
         *          ...
         *      }
         *
         *      let barField = Foo.getField('bar');
         *
         *      console.log(barField.definedBy === Foo);
         *      // > true
         *
         * When a field is inherited, this value will reference the class that originally
         * defined the field.
         *
         *      @define
         *      class Foo extends Model {
         *          @config
         *          static fields = [
         *              { name: 'bar' }
         *          ];
         *          ...
         *      }
         *      
         *      @define
         *      class Bar extends Foo {
         *          ...
         *      }
         *
         *      let fooField = Bar.getField('foo');
         *
         *      console.log(fooField.definedBy === Foo);
         *      // > true
         * 
         * Contrast this with `owner` which is the class that is most directly connected
         * with this Field instance.
         */
        definedBy: null,

        /**
         * @property {Field[]} dependents
         * This array tracks the fields that have indicated this field in their `depends`
         * list. If no fields depend on this field, this will be `null`.
         * @readonly
         * @private
         */
        dependents: null,

        /**
         * @property {Boolean} generated
         * Set to `true` for fields added implicitly by a model, for example, to define
         * the `idProperty`.
         */
        generated: false,

        /**
         * @property {Boolean} hasMapping
         * Automatically set to `true` if this field has a `mapping` defined.
         * @readonly
         */
        hasMapping: false,

        /**
         * @property {Number} ordinal
         *
         * The position of this field in the {@link Model} in which it was defined.
         */
        ordinal: null,

        /**
         * @property {Class} owner
         * The class (derived from {@link Model}) that owns this field.
         *
         *      @define
         *      class Foo extends Model {
         *          @config
         *          static fields = [
         *              { name: 'bar' }
         *          ];
         *          ...
         *      }
         *
         *      let barField = Foo.getField('bar');
         *
         *      console.log(barField.owner === Foo);
         *      // > true
         *
         * When a field is inherited, this value will reference the derived class:
         *
         *      @define
         *      class Foo extends Model {
         *          @config
         *          static fields = [
         *              { name: 'bar' }
         *          ];
         *          ...
         *      }
         *      
         *      @define
         *      class Bar extends Foo {
         *          ...
         *      }
         *
         *      let fooField = Bar.getField('foo');
         *
         *      console.log(fooField.owner === Bar);
         *      // > true
         * 
         * Contrast this with `definedBy` which is the class originally defined the field
         * with this `name`.
         */
        owner: null,

        /**
         * @property {Number} rank
         * This is a 1-based value that describes the dependency order of this field. This is
         * initialized to `null` (falsy) so we can cheaply topo-sort the fields of a class.
         * @private
         * @readonly
         */
        rank: null,
    
        /**
         * @property {RegExp} stripRe
         * A regular expression for stripping non-numeric characters from a numeric value.
         * This should be overridden for localization.
         * @readonly
         * @protected
         */
        stripRe: /[$,%]/g,

        /**
         * @property {Boolean} evil
         * This flag is set to true for fields that have `convert` methods which take the
         * 2nd argument (the record) and do not specify a `depends` set. Good fields indicate
         * the fields on which they depend (if any).
         * @private
         * @readonly
         */
        evil: false,
    
        /**
         * @property {Boolean} identifier
         * This property is set to `true` if this is an {@link Model#idProperty id}
         * field.
         * @readonly
         */
        identifier: false,

        //----------------------------------------------------------------
        
        calculateRe: /[^.a-z0-9_]([a-z_][a-z_0-9]*)\.([a-z_][a-z_0-9]*)/gi,
        
        _validators: null
    }
})
class Field extends Base {
    /**
     * @property {RegExp} stripTagsRe
     * The regular expression used to strip tags
     */
    static stripTagsRe = /<\/?[^>]+>/gi;

    static sortTypes = {
        /**
         * Default sort.
         * @param v The value to convert
         */
        auto (v) {
            return v;
        },
        
        /**
         * Case insensitive string.
         * 
         * NOTE: This type was called `'asUCString'` in previous releases.
         * @param v The value to convert
         */
        caseless (v) {
            return (v != null) ? String(v).toUpperCase() : '\u0000';
        },
        
        /**
         * Strips all HTML tags to sort on text only - Case insensitive
         *
         * NOTE: This type was called `'asUCText'` in previous releases.
         * @param v The value to convert
         */
        caselessText (v) {
            /* eslint-disable-next-line newline-per-chained-call */
            return (v != null) ? String(v).toUpperCase().replace(Field.stripTagsRe, '') : '\u0000';
        },
        
        /**
         * Date sort.
         * @param v The value to convert
         */
        date (v) {
            return v ? (is.date(v) ? +v : Date.parse(String(v))) : 0;
        },
        
        /**
         * Float sort. Non-numbers are sorted the same as 0.
         * @param v The value to convert
         */
        float (v) {
            let val = parseFloat(Locale.current.stripThousands(v));
            
            return isNaN(val) ? 0 : val;
        },
        
        /**
         * Integer sort. Non-numbers are sorted the same as 0.
         * @param v The value to convert
         */
        int (v) {
            let val = parseInt(Locale.current.stripThousands(v), 10);
            
            return isNaN(val) ? 0 : val;
        },
        
        /**
         * Number-only sort. Null/undefined are sorted first.
         * @param {Number} v The value to convert
         */
        nullFirst (v) {
            return (v == null) ? -Infinity : v;
        },
        
        /**
         * Number-only sort. Null/undefined are sorted last.
         * @param {Number} v The value to convert
         */
        nullLast (v) {
            return (v == null) ? Infinity : v;
        },
        
        /**
         * Strips all HTML tags to sort on text only.
         * @param v The value to convert
         */
        text (v) {
            // If allowNull, return the Unicode null character.
            return (v != null) ? String(v).replace(Field.stripTagsRe, '') : '\u0000';
        }
    };

    /**
     * @cfg {Function} calculate
     * This config defines a simple field calculation function. A calculate method only
     * has access to the record data and should return the value of the calculated field.
     * When provided in this way, the `depends` config is automatically determined by
     * parsing the `calculate` function. For example:
     *
     *      fields: [{
     *          name: 'firstName',
     *          type: 'string'
     *      },{
     *          name: 'lastName',
     *          type: 'string'
     *      },{
     *          name: 'fullName',
     *          calculate: function (data) {
     *              return data.firstName + ' ' + data.lastName;
     *          }
     *      }]
     *
     * The above 'fullName' field is equivalent to:
     *
     *      {
     *          name: 'fullName',
     *          convert: function (v, rec) {
     *              return rec.get('firstName') + ' ' + rec.get('lastName');
     *          },
     *          depends: ['firstName', 'lastName']
     *      }
     *
     * The restrictions on form for a `calculate` method are that the accesses to field
     * values must match the following regular expression (case insensitive):
     *
     *      data.([a-z_][a-z0-9_]*)
     *      // where 'data' is the param passed to the calculate method
     *
     * The only advantage of a `calculate` method over a `convert` method is automatic
     * determination of `depends`.
     *
     * **Note:** The use of calculate and {@link #method!convert} are exclusive.  The
     * calculate method will override the convert method if both are configured.
     *
     * **Note:** Fields used by the calculate method must be explicitly defined in the
     * {@link Model#cfg!fields #fields} of the model.
     *
     * @param {Object} data An object with all values for each field in the parent
     * model.  See {@link Model#getData getData}.
     * @return {*} value The value of the calculated field
     */
    @config
    calculate = null;
    
    /**
     * @cfg {Function} convert
     * A function which converts the value provided by the Reader into the value that will
     * be stored in the record.
     *
     * If configured as `null`, then no conversion will be applied to the raw data property
     * when this field is read. This will increase performance. but you must ensure that
     * the data is of the correct type and does not need converting.
     *
     * Example of convert functions:
     *
     *     function fullName(v, record){
     *         return record.data.last + ', ' + record.data.first;
     *     }
     *
     *     function location(v, record){
     *         return !record.data.city ? '' : (record.data.city + ', ' + record.data.state);
     *     }
     *
     *     Ext.define('Dude', {
     *         extend: 'Model',
     *         fields: [
     *             {name: 'fullname',  convert: fullName},
     *             {name: 'firstname', mapping: 'name.first'},
     *             {name: 'lastname',  mapping: 'name.last'},
     *             {name: 'city', defaultValue: 'unknown'},
     *             'state',
     *             {name: 'location',  convert: location}
     *         ]
     *     });
     *
     *     // create the data store
     *     var store = Ext.create('Store', {
     *         model: 'Dude',
     *         proxy: {
     *             type: 'memory',
     *             reader: {
     *                 type: 'json',
     *                 rootProperty: 'daRoot',
     *                 totalProperty: 'total'
     *             }
     *         }
     *     });
     *
     *     var myData = [
     *         { key: 1,
     *           name: { first: 'Fat',    last:  'Albert' }
     *           // notice no city, state provided in data object
     *         },
     *         { key: 2,
     *           name: { first: 'Barney', last:  'Rubble' },
     *           city: 'Bedrock', state: 'Stoneridge'
     *         },
     *         { key: 3,
     *           name: { first: 'Cliff',  last:  'Claven' },
     *           city: 'Boston',  state: 'MA'
     *         }
     *     ];
     *
     * @param value The data value as read by the Reader, if undefined will use
     * the configured `defaultValue`.
     * @param {Model} record The data object containing the Model as read so far
     * by the Reader. Note that the Model may not be fully populated at this point as the
     * fields are read in the order that they are defined.
     * {@link Model#cfg!fields fields} array.
     * @return {*} The converted value for storage in the record.
     */
    @config
    convert = null;

    /**
     * @cfg {Object} defaultValue
     *
     * The default value used when the creating an instance from a raw data object,
     * and the property referenced by the `{@link Field#mapping mapping}`
     * does not exist in that data object.
     *
     * The value `undefined` prevents defaulting in a value.
     */
    @config('initial')
    defaultValue = undefined;

    /**
     * @cfg {String/String[]} depends
     * The field name or names within the {@link Model Model} on which the value
     * of this field depends, and from which a new value may be calculated. These values
     * are the values used by the `convert` method. If you do not have a `convert` method
     * then this config should not be specified.
     *
     * Before using this config you should consider if using a `calculate` method instead
     * of a `convert` method would be simpler.
     *
     * Whenever any of the named fields are set using the {@link Model#set set}
     * method, this fields will have its `convert` method called passing the
     * {@link Model record} so that the dependent value can be calculated from
     * all fields which it needs.
     *
     * For example, to display a person's full name, using two separate `firstName` and
     * `lastName` fields, configure the name field like this:
     *
     *     {
     *         name: 'name',
     *     
     *         // Will be called whenever forename or surname fields are set
     *         convert: function (v, rec) {
     *             return rec.get('firstName') + ' ' + rec.get('lastName');
     *         },
     *     
     *         depends: [ 'firstName', 'lastName' ],
     *     
     *         // It should not be returned to the server - it's not a database field
     *         persist: false
     *     }
     *
     * Note that if you do not want the calculated field to be part of the field set sent
     * back to the server when the store is synchronized, you should configure the field
     * with `persist` set to `false`.
     */
    @config
    depends = null;

    /**
     * @cfg {String/Number/Function} mapping
     *
     * (Optional) A path expression for use by the {@link reader.Reader}
     * implementation that is creating the {@link Model Model} to extract the
     * Field value from the data object. If the path expression is the same as the field
     * name, the mapping may be omitted. A function may be passed to do complex data
     * extraction. The examples below are simple just to demonstrate the capability,
     * typically, a function would not be used to extract such simple data.
     *
     * The form of the mapping expression depends on the Reader being used.
     *
     * - {@link reader.Json}
     *
     *   The mapping is a string containing the javascript expression to reference the
     *   data from an element of the data item's
     *   {@link reader.Json#cfg!rootProperty rootProperty} Array. Defaults to
     *   the field name. If a function is passed, a single argument is received which
     *   contains the raw json object:
     *
     *       // Server returns [{"name": "Foo", "age": 1}, {"name": "Bar", "age": 2}]
     *       mapping (data) {
     *           return data.name;
     *       }
     *
     * - {@link reader.Xml}
     *
     *   The mapping is an {@link Ext.DomQuery} path to the data item relative to the DOM
     *   element that represents the {@link reader.Xml#record record}. Defaults
     *   to the field name. If a function is passed, a single argument is received which
     *   contains the record node:
     *
     *       // Server returns:
     *       // <Root>
     *       //     <Person>
     *       //         <Name>Foo</Name>
     *       //         <Age>1</Age>
     *       //     </Person>
     *       //     <Person>
     *       //         <Name>Bar</Name>
     *       //         <Age>2</Age>
     *       //     </Person>
     *       // </Root>
     *       mapping (data) {
     *           return data.firstChild.textContent;
     *       }
     *
     * - {@link reader.Array}
     *
     *   The mapping is a number indicating the Array index of the field's value.
     *   Defaults to the field specification's Array position. If a function is passed, a
     *   single argument is received which contains the child array.
     *
     *       // Server returns [["Foo", 1], ["Bar", 2]]
     *       mapping (data) {
     *           return data[0];
     *       }
     *
     * If a more complex value extraction strategy is required, then configure the Field
     * with a {@link #cfg!convert} function. This is passed the whole row object, and may
     * interrogate it in whatever way is necessary in order to return the desired data.
     */
    @config
    mapping = null;

    /**
     * @cfg {Function/String} sortType
     *
     * A function which converts a Field's value to a comparable value in order to ensure
     * correct sort ordering.
     *
     * Predefined functions are provided in {@link #sortTypes}. A custom sort
     * example:
     *
     *     // current sort     after sort we want
     *     // +-+------+          +-+------+
     *     // |1|First |          |1|First |
     *     // |2|Last  |          |3|Second|
     *     // |3|Second|          |2|Last  |
     *     // +-+------+          +-+------+
     *
     *     sortType (value) {
     *        switch (value.toLowerCase()) {
     *           case 'first': return 1;
     *           case 'second': return 2;
     *           default: return 3;
     *        }
     *     }
     *
     * May also be set to a String value, corresponding to one of the named sort types in
     * {@link #sortTypes}.
     */
    @config('cached')
    sortType = 'auto';

    /**
     * @cfg {String/Object/Function/Summary} summary
     * The summary type for this field. This is used to calculate a
     * summary value by the {@link Model Model}.
     *
     * - If a string, it should be an alias for one of the summary types.
     * - If an object, a config for one of the summary types.
     * - If a function, it should match the signature for
     * {@link summary.Base#method!calculate calculate}.
     */
    @config('lazy')
    summary = null;
    
    /**
     * @cfg {Object[]} validators
     * An array of {@link Validator validators} for this field. These `validators` will
     * only be passed a field value to validate.
     */
    @config({
        lazy: true,
        merge: 'shard'
    })
    validators = null;
    
    get converts () {
        return !this.deserialize.$nullFn;
    }
    
    //---------------------------------------------------------------
    // Configs
    
    initConfig (config) {
        if (typeof config === 'string') {
            config = {
                name: config
            };
        }

        // don't ask for configs before super.initConfig!
        super.initConfig(config);

        let me = this;
        let dv = me.defaultValue;
        
        if (me.allowNull === null) {
            me.allowNull = !!me.reference;
        }

        if (me.persist === null) {
            me.persist = !me.calculate;
        }

        me.cloneDefaultValue = dv != null && (is.date(dv) || is.array(dv) || is.object(dv));
    }

    //-------------
    // calculate
    
    updateCalculate (calc) {
        let me = this;
        let depends = me.depends;
        let code, dataProp, fld, map, match;
        
        if (!depends) {
            if (!(depends = calc.$depends)) {
                map = {};
                code = parseCode(calc);
                calc.$depends = depends = [];

                dataProp = code.args[0] || 'data';

                while ((match = me.calculateRe.exec(code.body))) {
                    if (dataProp === match[1] && !map[fld = match[2]]) {
                        map[fld] = 1;
                        depends.push(fld);
                    }
                }
            }

            me.depends = depends;
        }

        me.convert = me.doCalculate;
    }

    //-------------
    // convert
    
    updateConvert (convert) {
        let me = this;
        let calculated = convert.length > 1;
        
        me.calculated = calculated;
        me.evil = calculated && !me.depends;
        me.deserialize = convert;
    }

    //-------------
    // depends
    
    applyDepends (value) {
        if (value && typeof value === 'string') {
            value = [value];
        }
        
        return value;
    }

    //-------------
    // mapping
    
    updateMapping (v) {
        this.hasMapping = !!(v || v === 0);
    }

    //-------------
    // sortType
    
    applySortType (v) {
        let sortTypes = this.constructor.sortTypes;
        
        if (!v) {
            v = sortTypes.auto;
        }
        else if (typeof v === 'string') {
            //<debug>
            assertIn(v, sortTypes);
            //</debug>
            
            v = sortTypes[v];
        }

        return v;
    }

    //-------------
    // summary
    
    applySummary (summary) {
        return summary && Base.Factory.summary(summary);
    }

    //---------------------------------------------------------------
    // Methods

    /**
     * Compares two values to retrieve their relative position in sort order, taking
     * into account any {@link #sortType}. Also see {@link #compare}.
     * 
     * @param {Object} value1 The first value.
     * @param {Object} value2 The second value.
     * @return {Number} `-1` if `value1` is less than `value2`; `1` if `value1` is
     * greater than `value2`; `0` otherwise.
     */
    collate (value1, value2) {
        let lhs = this.sortType(value1);
        let rhs = this.sortType(value2);

        return (lhs === rhs) ? 0 : ((lhs < rhs) ? -1 : 1);
    }

    /**
     * Compares two values to retrieve their relative position in sort order. Also see
     * {@link #collate}.
     * @param {Object} value1 The first value.
     * @param {Object} value2 The second value.
     * @return {Number} `-1` if `value1` is less than `value2`; `1` if `value1` is greater than
     * `value2`; `0` otherwise.
     */
    compare (value1, value2) {
        return (value1 === value2) ? 0 : ((value1 < value2) ? -1 : 1);
    }

    /**
     * Converts the value received from the server (by the {@link Reader Reader}) to its
     * internal form. This method can be overridden in derived classes or replaced by the
     * `convert` config.
     *
     * @param {*} value The value to be deserialized.
     * @param {Model} record The record being deserialized.
     * @return {*}
     */
    deserialize (value) {
        // NOTE: This method is replaced by updateConvert. This cannot simply be a default
        // implementation named convert() because that would conflict with the config's
        // getter/setter both wanting to be on the class prototype. This is not true of
        // serialize which is replaced directly by a "serialize" instance config (due to
        // configurable: 'open'. This works because there are no side-effects to setting
        // the serialize config.
        return value;
    }

    /**
     * Tests whether two values are equal based on this field type.
     * This uses the {@link #compare} method to determine equality, so
     * this method should generally not be overridden.
     * @param {Object} value1 The first value.
     * @param {Object} value2 The second value.
     * @return {Boolean} `true` if the values are equal.
     */
    isEqual (value1, value2) {
        return this.compare(value1, value2) === 0;
    }

    /**
     * Converts the internal value for this field into a form which can be used by
     * the {@link Writer Writer} to send data to the server.
     *
     * @param {*} value The value to be serialized.
     * @param {Model} record The record being serialized.
     * @return {*}
     */
    serialize (value) {
        // This method is replaced by a "serialize" instance config due to the use of
        // configurable: 'open'. This works because we have no side-effects to manage
        // for this fellow.
        return value;
    }

    /**
     * Validates the passed value for this field.
     *
     * @param {Object} value The value to validate.
     * @param {String} [separator] This string is passed if the caller wants all validation
     * messages concatenated with this string between each. This can be handled as a
     * "falsy" value because concatenating with no separator is seldom desirable.
     * @param {Array} [errors] This parameter is passed if the caller wants all validation
     * results individually added to the collection.
     * @param {Model} record The record being validated
     * @return {Boolean/String} `true` if the value is valid. A string may be returned if
     * the value is not valid, to indicate an error message. Any other non `true` value
     * indicates the value is not valid.
     */
    validate (value, separator, errors, record) {
        let me = this;
        let validators = me.validators;  // time to get un-lazy
        let result, presence;

        presence = this.presence;

        if (presence && (value == null || value === '')) {
            result = me._runValidators(presence, value, separator, errors, record);
            
            if (result !== true) {
                return result;
            }
        }

        return me._runValidators(validators, value, separator, errors, record);
    }

    //---------------------------------------------------------------
    // Internals

    doCalculate (v, rec) {
        return rec ? this.calculate(rec.data) : v;
    }

    applyValidators (validators) {
        // Validators are merged using the shard algorithm to allow overrides and such
        // to properly work on base classes. By flattening we also ensure we have a new
        // array, even if !validators we will get back an empty array.
        let all = flatten(validators);
        let ownerValidators = this.owner;
        let i, item, presence;

        // Trigger the owner's lazy validators config
        ownerValidators = ownerValidators && ownerValidators.validators;
        ownerValidators = ownerValidators && ownerValidators[this.name];
        
        if (ownerValidators) {
            if (is.array(ownerValidators)) {
                all.unshift(...ownerValidators);
            }
            else {
                all.unshift(ownerValidators);
            }
        }

        for (i = 0; i < all.length; ++i) {
            item = Base.Factory.validator(all[i]);

            if (item.isPresenceValidator) {
                // Pull presence validators out of the array and put them to the side:
                presence = item;
                all.splice(i, 1);
                --i;
            }
            else {
                // Upgrade the element to the Validator instance:
                all[i] = item;
            }
        }

        if (presence) {
            this.presence = [presence];
        }

        return all;
    }

    _runValidators (validators, value, separator, errors, record) {
        let ret = '';
        let validator, result;

        for (validator of validators) {
            result = validator.validate(value, record);

            if (result !== true) {
                result = result || this.defaultInvalidMessage;
                
                if (errors) {
                    errors.push(result);

                    ret = ret || result;
                }
                else if (separator) {
                    if (ret) {
                        ret += separator;
                    }
                    
                    ret += result;
                }
                else {
                    ret = result;
                    break;
                }
            }
        }

        return ret || true;
    }
}

const st = Field.sortTypes;

Field.prototype.deserialize.$nullFn = true;
st.auto.$nullFn = true;

copy(st, {
    asDate: st.date,
    asFloat: st.float,
    asInt: st.int,
    asText: st.text,
    asUCString: st.caseless,
    asUCText: st.caselessText,
    none: st.auto
});

export { Field };
