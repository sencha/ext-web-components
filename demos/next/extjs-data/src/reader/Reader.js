import {
    //<debug>
    raise,
    //</debug>

    Base, Factoryable, Watchable,
    define, config, emptyFn, identityFn, is
} from '../../../extjs-core/src';

import { Model } from '../model/Model';
import { ResultSet } from '../request/ResultSet';

/**
 * Readers are used to interpret data to be loaded into a {@link Model Model} instance
 * or a {@link Store Store} - often in response to an AJAX request. In general there is
 * usually no need to create a Reader instance directly, since a Reader is almost always used
 * together with a {@link Proxy Proxy}, and is configured using the Proxy's
 * {@link Proxy#cfg!reader reader} configuration property:
 * 
 *     new Store({
 *         model: 'User',
 *         proxy: {
 *             type: 'ajax',
 *             url: 'users.json',
 *             reader: {
 *                 type: 'json',
 *                 rootProperty: 'users'
 *             }
 *         },
 *     });
 *     
 * The above reader is configured to consume a JSON string that looks something like this:
 *  
 *     {
 *         "success": true,
 *         "users": [
 *             { "name": "User 1" },
 *             { "name": "User 2" }
 *         ]
 *     }
 * 
 *
 * # Loading Nested Data
 *
 * Readers have the ability to automatically load deeply-nested data objects based on the
 * {@link Association associations} configured on each Model. Below is an example
 * demonstrating the flexibility of these associations in a fictional CRM system which manages
 * a User, their Orders, OrderItems and Products. First we'll define the models:
 *
 *     class User extends Model {
 *         fields: [
 *             'id', 'name'
 *         ],
 *
 *         hasMany: {model: 'Order', name: 'orders'},
 *
 *         proxy: {
 *             type: 'rest',
 *             url : 'users.json',
 *             reader: {
 *                 type: 'json',
 *                 rootProperty: 'users'
 *             }
 *         }
 *     }
 *
 *     Ext.define("Order", {
 *         extend: 'Model',
 *         fields: [
 *             'id', 'total'
 *         ],
 *
 *         hasMany  : {model: 'OrderItem', name: 'orderItems', associationKey: 'order_items'},
 *         belongsTo: 'User'
 *     });
 *
 *     Ext.define("OrderItem", {
 *         extend: 'Model',
 *         fields: [
 *             'id', 'price', 'quantity', 'order_id', 'product_id'
 *         ],
 *
 *         belongsTo: ['Order', {model: 'Product', associationKey: 'product'}]
 *     });
 *
 *     Ext.define("Product", {
 *         extend: 'Model',
 *         fields: [
 *             'id', 'name'
 *         ],
 *
 *         hasMany: 'OrderItem'
 *     });
 *
 * This may be a lot to take in - basically a User has many Orders, each of which is composed of
 * several OrderItems. Finally, each OrderItem has a single Product. This allows us to consume data
 * like this:
 *
 *     {
 *         "users": [
 *             {
 *                 "id": 123,
 *                 "name": "Ed",
 *                 "orders": [
 *                     {
 *                         "id": 50,
 *                         "total": 100,
 *                         "order_items": [
 *                             {
 *                                 "id": 20,
 *                                 "price": 40,
 *                                 "quantity": 2,
 *                                 "product": {
 *                                     "id": 1000,
 *                                     "name": "MacBook Pro"
 *                                 }
 *                             },
 *                             {
 *                                 "id": 21,
 *                                 "price": 20,
 *                                 "quantity": 3,
 *                                 "product": {
 *                                     "id": 1001,
 *                                     "name": "iPhone"
 *                                 }
 *                             }
 *                         ]
 *                     }
 *                 ]
 *             }
 *         ]
 *     }
 *
 * The JSON response is deeply nested - it returns all Users (in this case just 1 for simplicity's
 * sake), all of the Orders for each User (again just 1 in this case), all of the OrderItems
 * for each Order (2 order items in this case), and finally the Product associated with each
 * OrderItem. Now we can read the data and use it as follows:
 *
 *     var store = Ext.create('Store', {
 *         model: "User"
 *     });
 *
 *     store.load({
 *         callback () {
 *             // the user that was loaded
 *             var user = store.first();
 *
 *             console.log("Orders for " + user.get('name') + ":")
 *
 *             // iterate over the Orders for each User
 *             user.orders().each(function (order) {
 *                 console.log("Order ID: " + order.getId() + ", which contains items:");
 *
 *                 // iterate over the OrderItems for each Order
 *                 order.orderItems().each(function (orderItem) {
 *                     // we know that the Product data is already loaded,
 *                     // so we can use the synchronous getProduct
 *                     // usually, we would use the asynchronous version (see #belongsTo)
 *                     var product = orderItem.getProduct();
 *
 *                     console.log(orderItem.get('quantity') + ' orders of ' + product.get('name'));
 *                 });
 *             });
 *         }
 *     });
 *
 * Running the code above results in the following:
 *
 *     Orders for Ed:
 *     Order ID: 50, which contains items:
 *     2 orders of MacBook Pro
 *     3 orders of iPhone
 */
@define({
    mixins: [
        Watchable,
        Factoryable
    ],
    
    alias: 'reader.base',
    
    factory: {
        defaultType: null
    }
})
class Reader extends Base {
    /**
     * @cfg {String/Function} groupRootProperty
     * Name of the property from which to retrieve remote grouping summary information.
     * There should be an item for each group.
     *
     * The remote summary data should be parseable as a {@link #model} used by this reader.
     */
    @config
    groupRootProperty = '';

    /**
     * @cfg {Boolean} implicitIncludes
     * True to automatically parse models nested within other models in a response object.
     * See the Reader intro docs for full explanation.
     */
    @config
    implicitIncludes = true;

    /**
     * @cfg {Boolean} keepRawData
     * Determines if the Reader will keep raw data received from the server in the
     * {@link #rawData} property.
     *
     * While this might seem useful to do additional data processing, keeping raw data
     * might cause adverse effects such as memory leaks. It is recommended to set
     * `keepRawData` to `false` if you do not need the raw data.
     *
     * If you need to process data packet to extract additional data such as row summaries,
     * it is recommended to use {@link #transform} function for that purpose.
     *
     * Note that starting with Ext JS 6.0 the default behavior has been changed to
     * **not** keep the raw data because of the high potential for memory leaks.
     * @since 5.1.1
     */
    @config
    keepRawData = null;

    /**
     * @cfg {String/Function} messageProperty
     * The name of the property which contains a response message for exception handling. If you
     * want to return a false success response from the server, maybe due to some server-side
     * validation, the messageProperty can hold the error message. For example:
     *
     *     {
     *         "success": false,
     *         "error": "There was an error with your request"
     *     }
     *
     * You can retrieve this error message in a callback when loading a
     * {@link Store Store} or {@link Model Model} like:
     *
     *     var store = new Store({
     *         fields : ['foo'],
     *         proxy  : {
     *             type   : 'ajax',
     *             url    : 'data.json',
     *             reader : {
     *                 type            : 'json',
     *                 rootProperty    : 'data',
     *                 messageProperty : 'error'
     *             }
     *         }
     *     });
     *
     *     store.load({
     *         callback (records, operation, success) {
     *             if (success) {
     *                 // ...
     *             } else {
     *                 var error = operation.getError();
     *
     *                 Ext.Msg.alert('Error', error);
     *             }
     *         }
     *     });
     *
     * In this example, the callback will execute with `success` being `false` and will
     * therefore show the alert with the error string returned in the response.
     */
    @config
    messageProperty = '';

    /**
     * @cfg {String/Model} model
     * The model to use for this reader. This config is only required if the reader is being
     * used without a proxy, otherwise the proxy will automatically set the model.
     */
    @config
    model = null;

    /**
     * @cfg {Proxy} proxy
     * The proxy attached to this reader. Typically only needed onMetaChange so that
     * we can set the new model on the proxy.
     * @private
     */
    @config
    proxy = null;

    /**
     * @cfg {Boolean} readRecordsOnFailure
     * True to extract the records from a data packet even if the {@link #successProperty}
     * returns false.
     */
    @config
    readRecordsOnFailure = true;

    /**
     * @cfg {String/Function} rootProperty
     * The property that contains data items corresponding to the 
     * Model(s) of the configured Reader. `rootProperty` varies by Reader type.
     * 
     * ##JSON Reader 
     * `rootProperty` is a property name. It may also be a dot-separated 
     * list of property names if the root is nested. The root JSON array will be 
     * used by default.
     * 
     *     // rootPropety config
     *     rootProperty: 'embedded.myresults'
     *     
     *     // server response
     *     {
     *         embedded: {
     *             myresults: [{
     *                 name: 'Scott',
     *                 age: 22
     *             }, {
     *                 name: 'Ramona',
     *                 age: 24
     *             }]
     *         },
     *         success: true
     *     }
     * 
     * ##XML Reader 
     * `rootProperty` is a CSS selector. The root XML element will be used
     * by default.
     * 
     *     // rootProperty config (plus record config)
     *     rootProperty: 'myresults',
     *     record: 'user'
     *     
     *     // server response
     *     <?xml version="1.0" encoding="UTF-8"?>
     *     <embedded>
     *         <myresults>
     *             <user>
     *                 <name>Scott</name>
     *                 <age>22</age>
     *             </user>
     *             <user>
     *                 <name>Ramona</name>
     *                 <age>24</age>
     *             </user>
     *         </myresults>
     *     </embedded>
     * 
     * ##Array Reader 
     * `rootProperty` is not typically applicable since the data is assumed to be a
     * single-level array of arrays.  However, if the array of records is returned 
     * within a JSON response a `rootProperty` config may be used:
     * 
     *     // rootProperty config
     *     rootProperty: 'embedded.myresults'
     *     
     *     // server response
     *     {
     *         embedded: {
     *             myresults: [['Scott', 22], ['Ramona', 24]]
     *         },
     *         success: true
     *     }
     * 
     * ##rootProperty as a function
     * The `rootProperty` may also be a function that returns the root node from 
     * the dataset. For example:
     *
     *     var store = Ext.create('Ext.data.TreeStore', {
     *         proxy: {
     *             type: 'memory',
     *             reader: {
     *                 type: 'json',
     *                 rootProperty (data){
     *                     // Extract child nodes from the items or children property
     *                     // in the dataset
     *                     return data.items || data.children;
     *                 }
     *             }
     *         }, 
     *         data: {
     *             items: [{
     *                 text: 'item 1',
     *                 children: [{
     *                     text: 'child A',
     *                     leaf: true
     *                 }]
     *             }]
     *         }
     *     });
     *
     *     Ext.create('Ext.tree.Panel', {
     *         title: 'rootProperty as a function',
     *         width: 200,
     *         height:150,
     *         store: store,
     *         rootVisible: false,
     *         renderTo: Ext.getBody()
     *     });
     */
    @config
    rootProperty = null;

    /**
     * @cfg {String} successProperty
     * Name of the property from which to retrieve the `success` attribute, the value of which
     * indicates whether a given request succeeded or failed (typically a boolean or
     * 'true'|'false'). See
     * {@link ServerProxy}.{@link ServerProxy#exception exception} for
     * additional information.
     */
    @config
    successProperty = 'success';

    /**
     * @cfg {String/Function} summaryRootProperty
     * Name of the property from which to retrieve remote summary information.
     *
     * The remote summary data should be parseable as a {@link #model} used by this reader.
     */
    @config
    summaryRootProperty = null;

    /**
     * @cfg {String} totalProperty
     * Name of the property from which to retrieve the total number of records in the dataset.
     * This is only needed if the whole dataset is not passed in one go, but is being paged from
     * the remote server.
     */
    @config
    totalProperty = 'total';

    /**
     * @cfg {Function|String|Object} transform
     * If a transform function is set, it will be invoked just before {@link #readRecords}
     * executes. It is passed the raw (deserialized) data object. The transform function
     * returns a data object, which can be a modified version of the original data object,
     * or a completely new data object. The transform can be a function, or a method name
     * on the Reader instance, or an object with a 'fn' key and an optional 'scope' key.
     *
     * Example usage:
     *
     *     Ext.create('Store', {
     *         model: 'User',
     *         proxy: {
     *             type: 'ajax',
     *             url : 'users.json',
     *             reader: {
     *                 type: 'json',
     *                 transform: {
     *                     fn (data) {
     *                         // do some manipulation of the raw data object
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
     * @cfg {String} typeProperty
     * The name of the property in a node raw data block which indicates the type of the
     * model to be created from that raw data. Useful for heterogeneous trees.
     *
     * For example, hierarchical geographical data may look like this:
     *
     *     {
     *         nodeType: 'Territory',
     *         name: 'EMEA',
     *         children: [{
     *             nodeType: 'Country',
     *             name: 'United Kingdon',
     *             children: [{
     *                 nodeType: 'City',
     *                 name: 'London'
     *             }]
     *         }]
     *     }
     *
     * You would configure the typeProperty in this case to be `"nodeType"` which would
     * cause the models named "Territory", "Country" and "City" to be used.
     */
    @config
    typeProperty = null;
    
    /**
     * @property {Object} rawData
     * The raw data object that was last passed to {@link #readRecords}. rawData is populated 
     * based on the results of {@link ServerProxy#processResponse}. `rawData` will 
     * maintain a cached copy of the last successfully returned records. In other words, 
     * if processResponse is unsuccessful, the records from the last successful response 
     * will remain cached in rawData.
     *
     * Tou can use the {@link #keepRawData} config option to control this behavior.
     */
    
    /**
     * @property {Object} metaData
     * The raw meta data that was most recently read, if any. Meta data can include
     * existing Reader config options like {@link #totalProperty}, etc. that get
     * automatically applied to the Reader, and those can still be accessed directly from
     * the Reader if needed. However, meta data is also often used to pass other custom
     * data to be processed by application code. For example, it is common when reconfiguring
     * the data model of a grid to also pass a corresponding column model config to be
     * applied to the grid. Any such data will not get applied to the Reader directly (it
     * just gets passed through and is ignored by Ext).
     * 
     * This metaData property gives you access to all meta data that was passed, including
     * any such custom data ignored by the reader.
     * 
     * This is a read-only property, and it will get replaced each time a new meta data
     * object is passed to the reader. Note that typically you would handle proxy's
     * {@link Proxy#metachange metachange} event which passes this exact same meta
     * object to listeners. However this property is available if it's more convenient to
     * access it via the reader directly in certain cases.
     * @readonly
     */

    // constructor (config) {
    //     let me = this;
    //    
    //     me.duringInit = 1;
    //     // Will call initConfig
    //     me.mixins.observable.constructor.call(me, config);
    //     --me.duringInit;
    //    
    //     me.buildExtractors();
    // }
    //
    // destroy () {
    //     var me = this;
    //
    //     me.model = me.getTotal = me.getSuccess = me.getMessage = me.rawData = null;
    //    
    //     // Proxy could have created a sequence
    //     me.onMetaChange = null;
    //    
    //     // Transform function can be bound
    //     me.transform = null;
    //    
    //     me.callParent();
    // }

    copyFrom (reader) {
        this.setConfig(reader.getCurrentConfig());
    }

    /**
     * This method provides a hook to do any data transformation before the reading process
     * begins. By default this function just returns what is passed to it. It can be
     * overridden in a subclass to return something else.
     * See {@link XmlReader} for an example.
     * 
     * @param {Object} data The data object
     * @return {Object} The normalized data object
     */
    getData (data) {
        return data;
    }

    //<debug>
    /**
     * Takes a raw response object (as passed to the {@link #read} method) and returns the
     * useful data segment from it. For example, a JSON object or an XML document.
     * This must be implemented by each subclass.
     * @param {Object} response The response object
     * @return {Object}
     */
    getResponseData (response) {
        raise('getResponseData must be implemented by derived class');
    }
    //</debug>

    /**
     * Reads the given response object. This method normalizes the different types of response
     * object that may be passed to it. If it's an XMLHttpRequest object, hand off to the subclass'
     * {@link #getResponseData} method. Else, hand off the reading of records to the
     * {@link #readRecords} method.
     * @param {Object} response The response object. This may be either an XMLHttpRequest object or
     * a plain JS object
     * @param {Object} [readOptions] Various options that instruct the reader on how to read the
     * data
     * @param {Function} [readOptions.recordCreator] A function to construct the model based on the
     * processed data. By default, this just calls the model constructor and passes the raw data.
     * @return {ResultSet} The parsed or default ResultSet object
     */
    read (response, readOptions) {
        let me = this;
        let data, result, responseText;

        if (response) {
            responseText = response.responseText;
            
            if (response.responseType || responseText) {
                result = me.getResponseData(response);
                
                if (result && result.__$isError) {
                    return new ResultSet({
                        total: 0,
                        count: 0,
                        records: [],
                        success: false,
                        message: result.msg
                    });
                }
                else {
                    data = me.readRecords(result, readOptions);
                }
            }
            else if (responseText !== '') {
                data = me.readRecords(response, readOptions);
            }
        }

        return data || ResultSet.EMPTY;
    }

    /**
     * Abstracts common functionality used by all Reader subclasses. Each subclass is expected to
     * call this function before running its own logic and returning the ResultSet
     * instance. For most Readers additional processing should not be needed.
     * @param {Object} data The raw data object
     * @param {Object} [readOptions] See {@link #read} for details.
     * @param {Object} [internalReadOptions] (private)
     * @return {ResultSet} A ResultSet object
     */
    readRecords (data, readOptions, internalReadOptions) {
        let me = this;
        let recordsOnly = internalReadOptions && internalReadOptions.recordsOnly;
        let asRoot = internalReadOptions && internalReadOptions.asRoot;
        let groupData = null;
        let summaryData = null;
        let success, recordCount, records, root, remoteTotal, total, value, message,
            transform, meta, summaryOptions;

        // Extract the metadata to return with the ResultSet.
        // If found reconfigure accordingly.
        // The calling Proxy fires its metachange event if it finds metadata in the ResultSet.
        meta = me.getMeta ? me.getMeta(data) : data.metaData;
        
        if (meta) {
            me.onMetaChange(meta);
        }

        transform = me.transform;
        
        if (transform) {
            data = transform(data);
        }
          
        if (me.keepRawData) {
            me.rawData = data;
        }
        
        me.fireEvent('rawdata', data);

        data = me.getData(data);
        
        success = true;
        recordCount = 0;
        records = [];
            
        if (me.successProperty) {
            value = me.getSuccess(data);
            
            if (value === false || value === 'false') {
                success = false;
            }
        }
        
        if (me.messageProperty) {
            message = me.getMessage(data);
        }

        
        // Only try and extract other data if call was successful
        if (success || me.readRecordsOnFailure) {
            // If we pass an array as the data, we don't use getRoot on the data.
            // Instead the root equals to the data.
            root = (asRoot || is.array(data)) ? data : me.getRoot(data);

            if (root) {
                total = root.length;
            }

            if (me.totalProperty) {
                value = parseInt(me.getTotal(data), 10);
                
                if (!isNaN(value)) {
                    remoteTotal = total = value;
                }
            }

            if (root) {
                records = me.extractData(root, readOptions);
                recordCount = records.length;
            }

            if (me.groupRootProperty) {
                root = me.getGroupRoot(data);
                
                if (root) {
                    summaryOptions = {
                        includes: false,
                        model: me.model.summaryModel
                    };
                    
                    groupData = me.extractData(root, summaryOptions) || null;
                }
            }

            if (me.summaryRootProperty) {
                root = me.getSummaryRoot(data);
                
                if (root) {
                    summaryOptions = summaryOptions || {
                        includes: false,
                        model: me.model.summaryModel
                    };
                    
                    summaryData = me.extractData(root, summaryOptions) || null;
                    
                    // This always returns an array, so transform it
                    if (summaryData) {
                        summaryData = summaryData[0];
                    }
                }
            }
        }

        /* eslint-disable-next-line multiline-ternary */
        return recordsOnly ? records : new ResultSet({
            total: total || recordCount,
            remoteTotal: remoteTotal,
            metadata: meta,
            records: records,
            success: success,
            message: message,
            groupData: groupData,
            summaryData: summaryData
        });
    }
    
    //--------------------------------------------------------------------------------
    // Internals

    /**
     * Creates an object that identifies a read error occurred.
     * @param {String} msg An error message to include
     * @return {Object} An error object
     * 
     * @private
     */
    createReadError (msg) {
        return {
            __$isError: true,
            msg: msg
        };
    }

    //<debug>
    /**
     * Returns a function that takes a raw data object and evaluates the specified `mapping`
     * to return the desired value from the raw data. The value of the `mapping` depends on
     * the derived class but comes from reader configs such as `totalProperty`.
     * 
     * @param {String} mapping
     * @return {Function}
     * @private
     */
    buildAccessor (mapping) {
        raise('buildAccessor must be implemented by derived class');
    }

    /**
     * Creates a function that takes a raw data object and returns a data object suitable
     * to be wrapped in a {@link Model record}.
     * 
     * These functions are cached on the `entityType` class keyed by the `getExtractorKey`
     * result, which in turn uses the derived class implementation of `getExtractorCacheKey`
     * to include reader config options.
     * 
     * @param {Class} entityType The Model-derived class
     * @return {Function}
     * @private
     */
    buildExtractor (entityType) {
        raise('buildExtractor must be implemented by derived class');
    }
    //</debug>

    /**
     * This method is called once per property (e.g., once for `totalProperty`, once for
     * `successProperty`, etc.) by the class get method. For example, `getTotal` defined
     * on the class is called on the first need to use the `totalProperty`. It calls this
     * method to produce a accessor function that is then placed on the instance to hide
     * the original method. These accessor functions are produced by the derived class and
     * process such things as XML selectors or JavaScript property path evaluation.
     * 
     * @param {Object} raw The raw data object.
     * @param {String} method The name of the calling method (to be replaced).
     * @param {String} property The name of the config property to process.
     * @param {Function} [defaultFn=emptyFn] An optional function to call if there is no
     * value for the specified `property`. Instead of the default of `emptyFn`, another
     * good choice is `identityFn`.
     * @return {*}
     * @private
     */
    callAccessor (raw, method, property, defaultFn) {
        let me = this;
        let mapping = me[property];
        let fn = (mapping || mapping === 0)
            ? ((typeof mapping === 'function') ? mapping : me.buildAccessor(mapping))
            : (defaultFn || emptyFn);

        me[method] = fn;

        return fn.call(me, raw);
    }

    defaultRecordCreator (data, Model) {
        return new Model(data);
    }

    defaultRecordCreatorFromServer (data, Model) {
        let record = new Model(data);
        
        // If the server did not include an id in the response data, the Model constructor will
        // mark the record as phantom. We need to set phantom to false here because records created
        // from a server response using a reader by definition are not phantom records.
        record.phantom = false;
        
        return record;
    }
    
    /**
     * Returns extracted, type-cast rows of data.
     * @param {Object[]/Object} root from server response
     * @param {Object} [readOptions] An object containing extra options.
     * @param {Function} [readOptions.model] The Model constructor to use.
     * @param {Function} [readOptions.recordCreator] A function to use to create and initialize
     * records. By default a function is supplied which creates *non-phantom* records on the
     * assumnption that a Reader is going to be used to read server-supplied data.
     * @param {Object} [readOptions.recordCreator.data] The raw data used to create a record.
     * @param {Function} [readOptions.recordCreator.Model] The Model constructor to use to create
     * the record.
     * @return {Array} An array of records containing the extracted data		
     * @private
     */
    extractData (root, readOptions) {
        let me = this;
        let entityType = readOptions && readOptions.model || me.model;
        let schema = entityType.schema;
        let includes = readOptions && 'includes' in readOptions
            ? readOptions.includes
            : schema && schema.hasAssociations(entityType) && me.implicitIncludes;
        let extractor = entityType.getExtractor(me);
        let length = root.length;
        let records = new Array(length);
        let typeProperty = me.typeProperty;
        let reader, node, nodeType, record, i;
            
        if (!length && is.object(root)) {
            root = [root];
            length = 1;
        }

        for (i = 0; i < length; i++) {
            record = root[i];
            
            if (!record.isModel) {
                // If we're given a record in the data, just push it on
                // without doing any conversion. Otherwise, create a record.
                node = record;

                // This Reader may be configured to produce different model types based on
                // a differentiator field in the incoming data:
                // typeProperty name be a string, a function which yields the child type, or an
                // object: {
                //     name: 'mtype',
                //     namespace: 'MyApp'
                // }
                if (typeProperty && (nodeType = me.getChildType(schema, node, typeProperty))) {
                    reader = nodeType.proxy.reader;

                    record = reader.extractRecord(
                        node, readOptions, nodeType,
                        schema.hasAssociations(nodeType) && reader.implicitIncludes,
                        nodeType.getExtractor(reader)
                    );
                }
                else {
                    record = me.extractRecord(node, readOptions, entityType, includes,
                                              extractor);
                }
                
                // Generally we don't want to have references to XML documents
                // or XML nodes to hang around in memory but Trees need to be able
                // to access the raw XML node data in order to process its children.
                // See https://sencha.jira.com/browse/EXTJS-15785 and
                // https://sencha.jira.com/browse/EXTJS-14286
                if (record.isModel && record.isNode) {
                    record.raw = node;
                }
            }
            
            if (record.onLoad) {
                record.onLoad();
            }
            
            records[i] = record;
        }

        return records;
    }

    extractRecord (node, readOptions, entityType, includes, extractor) {
        let me = this;
        let creatorFn = (readOptions && readOptions.recordCreator) || me.defaultRecordCreator;
        let modelData, record;
            
        // Create a record with an empty data object.
        // Populate that data object by extracting and converting field values from raw
        // data.
        // Must pass the ID to use because we pass no data for the constructor to pluck an
        // ID from
        modelData = extractor.call(me, node);

        record = creatorFn.call(me, modelData, entityType || me.model, readOptions);
        
        if (includes && record.isModel) {
            me.readAssociated(record, node, readOptions);
        }
        
        return record;
    }

    extractRecordData (node, readOptions) {
        let me = this;
        let entityType = readOptions && readOptions.model || me.model;
        let extractor = entityType.getExtractor(me);

        return me.extractRecord(node, readOptions, entityType, false, extractor);
    }

    /**
     * Returns a string describing the config options that affect the extractor function.
     * 
     * @return {String}
     * @private
     */
    getExtractorCacheKey () {
        return null;
    }

    /**
     * Returns the key to use to retrieve an extractor for this reader. These extractors
     * are cached on the Model-derived class, keyed by whatever this method returns. This
     * method is not overridden in derived classes. Instead they implement the
     * `getExtractorCacheKey` method.
     * 
     * @return {String}
     * @private
     */
    getExtractorKey () {
        let cls = this.constructor;
        let key = this.getExtractorCacheKey();
        let cache;
        
        if (key) {
            // If the derived class returns a cache key, we cannot use our class as the
            // extractor key, so we need something else. A Symbol fits the need but each
            // class will need its own Symbol so that means each class needs its own set
            // of extractorKeys.
            cache = cls.hasOwnProperty('extractorKeys')
                ? cls.extractorKeys
                : (cls.extractorKeys = {});
            
            key = cache[key] || (cache[key] = Symbol(cls.name + key));
        }

        return key || cls;
    }

    // Based upon a Reader's typeProperty config, determine the type of child node to
    // create from the raw data
    getChildType (schema, rawNode, typeProperty) {
        // TODO fixup wrt getType accessor
        let namespace;

        switch (typeof typeProperty) {
            case 'string':
                return schema.getEntity(rawNode[typeProperty]);
            
            case 'object':
                namespace = typeProperty.namespace;
                
                return schema.getEntity((namespace ? namespace + '.' : '') +
                       rawNode[typeProperty.name]);
            
            case 'function':
                return schema.getEntity(typeProperty(rawNode));
        }
    }

    getGroupRoot (raw) {
        return this.callAccessor(raw, 'getGroupRoot', 'groupRootProperty');
    }

    getMessage (raw) {
        return this.callAccessor(raw, 'getMessage', 'messageProperty');
    }

    /**
     * This will usually need to be implemented in a subclass. Given a generic data object
     * (the type depends on the type of data we are reading), this function should return the
     * object as configured by the Reader's 'root' meta data config. See XmlReader's getRoot
     * implementation for an example. By default the same data object will simply be returned.
     *
     * @param {Object} raw The raw data object
     * @return {Object}
     * @private
     */
    getRoot (raw) {
        return this.callAccessor(raw, 'getRoot', 'rootProperty', identityFn);
    }

    getSuccess (raw) {
        return this.callAccessor(raw, 'getSuccess', 'successProperty');
    }
    
    getSummaryRoot (raw) {
        return this.callAccessor(raw, 'getSummaryRoot', 'summaryRootProperty');
    }
    
    getTotal (raw) {
        return this.callAccessor(raw, 'getTotal', 'totalProperty');
    }

    // getType (raw) {
    //     return this.callAccessor(raw, 'getType', 'typeProperty');
    // }

    /**
     * @private
     * Reconfigures the meta data tied to this Reader
     */
    onMetaChange (meta) {
        let me = this;
        let fields = meta.fields;
        let model, clientIdProperty, proxy;
        
        // save off the raw meta data
        me.metaData = meta;
        
        // set any reader-specific configs from meta if available
        if (meta.root) {
            me.rootProperty = meta.root;
        }
        
        if (meta.totalProperty) {
            me.totalProperty = meta.totalProperty;
        }
        
        if (meta.successProperty) {
            me.successProperty = meta.successProperty;
        }
        
        if (meta.messageProperty) {
            me.messageProperty = meta.messageProperty;
        }

        clientIdProperty = meta.clientIdProperty;
        
        if (fields) {
            @define
            class DynaModel extends Model {
                @config
                static fields = fields;

                @config
                static clientIdProperty = clientIdProperty;
            }
            
            me.model = DynaModel;
            proxy = me.proxy;
            
            if (proxy) {
                proxy.model = DynaModel;
            }
        }
        else if (clientIdProperty) {
            model = me.model;
            
            if (model) {
                model.clientIdProperty = clientIdProperty;
            }
        }
    }

    /**
     * Loads the record associations from the data object.
     * @param {Model} record The record to load associations for.
     * @param {Object} data The raw data object.
     * @param {Object} readOptions See {@link #read}.
     *
     * @private
     */
    readAssociated (record, data, readOptions) {
        let roles = record.associations;
        let key, role;
            
        for (key in roles) {
            if (roles.hasOwnProperty(key)) {
                role = roles[key];
                
                // The class for the other role may not have loaded yet
                if (role.cls) {
                    role.read(record, data, this, readOptions);
                }
            }
        }
    }

    //------------------------------------------------------------
    // Configs

    //--------------------
    // groupRootProperty

    updateGroupRootProperty () {
        delete this.getGroupRoot;  // put on the instance by first call of callAccessor
    }

    //--------------------
    // messageProperty

    updateMessageProperty () {
        delete this.getMessage;
    }

    //--------------------
    // rootProperty

    updateRootProperty () {
        delete this.getRoot;
    }

    //--------------------
    // successProperty

    updateSuccessProperty () {
        delete this.getSuccess;
    }

    //--------------------
    // totalProperty

    updateTotalProperty () {
        delete this.getTotal;
    }

    //--------------------
    // typeProperty

    // updateTypeProperty () {
    //     delete this.getType;
    // }

    //--------------------
    // transform

    applyTransform (transform) {
        if (transform) {
            if (is.callable(transform)) {
                transform = { fn: transform };
            }
            else if (transform.charAt) { // faster than Ext.isString()
                transform = { fn: this[transform] };
            }

            return transform.fn.bind(transform.scope || this);
        }

        return transform;
    }

    /**
     * @event exception
     * Fires when the reader receives improperly encoded data from the server
     * @param {Reader} reader A reference to this reader
     * @param {XMLHttpRequest} response The XMLHttpRequest response object
     * @param {ResultSet} error The error object
     */
}

export { Reader };
