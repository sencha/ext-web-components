import {
    Base, Factoryable,
    define, config, is
} from '../../../extjs-core/src';

import { ExtDate } from '../../../extjs-util/src';

import { RequestOptions } from '../request/Options';

/**
 * Base Writer class used by most subclasses of {@link Ext.data.proxy.Server}. This class
 * is responsible for taking a set of {@link Ext.data.operation.Operation} objects and a
 * {@link Request} object and modifying that request based on the Operations.
 *
 * For example a Ext.data.writer.Json would format the Operations and their
 * {@link Model} instances based on the config options passed to the JsonWriter's
 * constructor.
 *
 * Writers are not needed for any kind of local storage - whether via a
 * {@link WebStorageProxy} (see {@link LocalStorageProxy localStorage} and
 * {@link SessionStorageProxy}) or just in memory via a {@link MemoryProxy}.
 * 
 * # Dates
 *
 * Before sending dates to the server, they can be formatted using an {@link ExtDate}
 * format. These formats can be specified both on the field and the writer itself. In terms
 * of precedence, from highest to lowest:
 * 
 * - {@link #dateFormat Writer.dateFormat} The writer `dateFormat` will always have the
 *   highest precedence.
 * - {@link DateField#writeFormat} The `writeFormat` given to the field instance. This is
 *   handled by {@link DateField#method!serialize}.
 * - {@link DateField#format} This is handled by the field's `serialize` method.
 * - {@link DateField#readFormat} Also handled by the field's `serialize` method.
 */
@define({
    mixins: [
        Factoryable
    ],

    alias: 'writer.base',
    
    factory: {
        defaultType: null
    }
})
class Writer extends Base {
    /**
     * @cfg {Object} allDataOptions
     * This object contains the options passed to `{@link Model#getData}` when
     * writing `{@link Model#phantom}` records or when `writeAllFields` is set
     * to `true`.
     *
     * *NOTE:* The `serialize` option cannot be used here.
     */
    @config
    allDataOptions = {
        persist: true
    };

    /**
     * @cfg {String} clientIdProperty
     * When specified this property causes the `{@link Model#idProperty}` of
     * newly created records to be sent to the server as this name instead of the
     * value of the `idProperty`.
     *
     * For example, by default, the following code:
     *
     *      Ext.define('Person', {
     *          idProperty: 'id',  // this is the default value (for clarity)
     *
     *          fields: [ 'name' ]
     *      });
     *
     *      var person = new Person({
     *          // no id provided, so one is generated
     *          name: 'Clark Kent'
     *      });
     *
     * Will send this to the server:
     *
     *      {
     *          id: 'Person-1',
     *          name: 'Clark Kent'
     *      }
     *
     * This can be an issue if the server expects an integer for the "id" property.
     * You can use `{@link Model#identifier}` to produce identifiers that
     * the server would recognize or use this config to send the client's id in a
     * different property.
     *
     *      Ext.define('Person', {
     *          idProperty: 'id',  // this is the default value (for clarity)
     *
     *          proxy: {
     *              writer: {
     *                  clientIdProperty: 'clientId'
     *              }
     *          },
     *
     *          fields: [ 'name' ]
     *      });
     *
     * Given the above, the server is sent this data now:
     *
     *      {
     *          clientId: 'Person-1',
     *          name: 'Clark Kent'
     *      }
     *
     * While this config provides the behavior of `{@link Model#clientIdProperty}`
     * from previous releases, this property is not as useful as a suitable
     * `{@link Model#identifier}` due to id's appearing in foreign-key fields
     * and in `{@link Model#manyToMany}` associations.
     *
     * See `{@link Model#identifier}` for more on id generation.
     */
    @config
    clientIdProperty = null;

    /**
     * @cfg {String} dateFormat
     * This is used for each field of type date in the model to format the value before
     * it is sent to the server.
     */
    @config
    dateFormat = null;

    /**
     * @cfg {String} nameProperty
     * This property is used to read the key for each value that will be sent to the
     * server.
     *
     * For example:
     *
     *     Ext.define('Person', {
     *         extend: 'Model',
     *         fields: [{
     *             name: 'first',
     *             mapping: 'firstName'
     *         }, {
     *             name: 'last',
     *             mapping: 'lastName'
     *         }, {
     *             name: 'age'
     *         }]
     *     });
     *
     *     new Ext.data.writer.Writer({
     *         nameProperty: 'mapping'
     *     });
     *
     *     // This will be sent to the server
     *     {
     *         firstName: 'first name value',
     *         lastName: 'last name value',
     *         age: 1
     *     }
     *
     * If the value is not present, the field name will always be used.
     */
    @config
    nameProperty = 'name';

    /**
     * @cfg {Object} partialDataOptions
     * This object contains the options passed to `{@link Model#getData}` when
     * writing non `{@link Model#phantom}` records or when `writeAllFields` is
     * set to `false`.
     *
     * *NOTE:* The `serialize` option cannot be used here.
     */
    @config
    partialDataOptions = {
        changes: true,
        critical: true
    };
    
    /**
     * @cfg {Function|Object} transform
     * If a transform function is set, it will be invoked just before {@link #writeRecords} 
     * executes. It is passed the unserialized data object and the
     * {@link Request request} object. The transform function returns a data object,
     * which can be a modified version of the original  data object, or a completely new data
     * object. The transform can be a function, or an object  with a 'fn' key and an optional
     * 'scope' key. Example usage:
     *
     *     Ext.create('Store', {
     *         model: 'User',
     *         proxy: {
     *             type: 'ajax',
     *             url : 'users.json',
     *             writer: {
     *                 type: 'json',
     *                 transform: {
     *                     fn: function (data, request) {
     *                         // do some manipulation of the unserialized data object
     *                         return data;
     *                     },
     *                     scope: this
     *                 }
     *             }
     *         },
     *     });
     *
     */
    @config
    transform = null;

    /**
     * @cfg {Boolean} writeAllFields `true` to write all fields from the record to the
     * server. If set to `false` it will only send the fields that were modified. Note
     * that any fields that have `{@link Field#persist}` set to `false`
     * will still be ignored while those with `{@link Field#critical}`
     * set to `true` will be included.
     *
     * The exact set of fields written is determined by `allDataOptions` (when `true`)
     * or `partialDataOptions` (when `false`). This option is ignored and treated as
     * `true` when writing `{@link Model#phantom}` records.
     *
     * It is seldom a good idea to use this config. Rather use `allDataOptions` or
     * `partialDataOptions` to control what fields are sent for records based on their
     * `{@link Model#phantom}` state.
     *
     * In the previous release, this was default `true`.
     */
    @config
    writeAllFields = false;

    /**
     * @cfg {Boolean} [writeRecordId]
     * By default, each record's id is always included in the output for non-phantom
     * records since in most cases the id will be required on the server to process
     * the record action. This is helpful since the id will normally not be modified,
     * and so would not be sent to the server unless {@link #writeAllFields} was
     * explicitly enabled.
     * 
     * However, there are cases where it is not desirable for the record id to be passed
     * in the data directly. For example, when using a RESTful API the record id would
     * typically be appended to the url instead.
     */
    @config
    writeRecordId = true;

    applyTransform (transform) {
        if (transform) {
            if (is.callable(transform)) {
                transform = { fn: transform };
            }
            
            return transform.fn.bind(transform.scope || this);
        }
        
        return transform;
    }

    /**
     * Prepares a Proxy's request options.
     * @param {RequestOptions} options The request options.
     * @return {RequestOptions}
     */
    write (options) {
        options = RequestOptions.from(options);

        let operation = options.operation;
        let records = operation.records || [];
        let len = records.length;
        let data = [];
        let i;

        for (i = 0; i < len; i++) {
            data.push(this.getRecordData(records[i], operation));
        }

        this.writeRecords(options, data);

        return options;
    }
    
    /**
     * @method writeRecords
     * Write the record data to the request in the appropriate format.
     * @param {RequestOptions} options The request options.
     * @param {Array} data An array of objects containing data.
     * @return {RequestOptions} The request options.
     * @protected
     */

    /**
     * Formats the data for each record before sending it to the server. This method should
     * be overridden to format the data in a way that differs from the default.
     *
     * @param {Model} record The record that we are writing to the server.
     * @param {Operation} [operation] An operation object.
     * @return {Object} An object of name/value keys to be written to the server.
     */
    getRecordData (record, operation) {
        let me = this;
        let nameProperty = me.nameProperty;
        let mapping = nameProperty !== 'name';
        let idField = record.constructor.idField;
        let key = idField ? (idField[nameProperty] || idField.name) : 'id';
        let value = record.id;
        let writeAll = me.writeAllFields;
        let ret, dateFormat, phantom, options, clientIdProperty, fieldsMap, data, field;

        if (idField && idField.serialize) {
            value = idField.serialize(value);
        }

        if (!writeAll && operation && operation.isDestroyOperation) {
            ret = {};
            ret[key] = value;
        }
        else {
            dateFormat = me.dateFormat;
            phantom = record.phantom;
            options = (phantom || writeAll) ? me.allDataOptions : me.partialDataOptions;
            clientIdProperty = phantom && me.clientIdProperty;
            fieldsMap = record.fields.byName;

            options.serialize = false; // we must take over this here
            data = record.getData(options);

            // If we are mapping we need to pour data into a new object, otherwise we do
            // our work in-place:
            ret = mapping ? {} : data;

            if (clientIdProperty) { // if (phantom and have clientIdProperty)
                ret[clientIdProperty] = value; // must read data and write ret
                delete data[key];  // in case ret === data (must not send "id")
            }
            else if (!me.writeRecordId) {
                delete data[key];
            }

            for (key in data) {
                value = data[key];

                if (!(field = fieldsMap[key])) {
                    // No defined field, so clearly no nameProperty to look up for this field
                    // but if we are mapping we need to copy over the value. Also there is no
                    // serializer to call in this case.
                    if (mapping) {
                        ret[key] = value;
                    }
                }
                else {
                    // Allow this Writer to take over formatting date values if it has a
                    // dateFormat specified. Only check isDate on fields declared as dates
                    // for efficiency.
                    if (field.isDateField && dateFormat && is.date(value)) {
                        value = ExtDate.format(value, dateFormat);
                    }
                    else if (field.serialize) {
                        value = field.serialize(value, record);
                    }

                    if (mapping) {
                        key = field[nameProperty] || key;
                    }

                    ret[key] = value;
                }
            }
        }

        return ret;
    }
}

export { Writer };
