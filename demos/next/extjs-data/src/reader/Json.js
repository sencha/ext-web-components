import {
    //<debug>
    assert,
    //</debug>

    Ext, define, config,
    copy, is
} from '../../../extjs-core/src';

import { toInt } from '../../../extjs-util/src/Number';
import {
    digitsStickRe, identifierStickyRe, quotedStringStickyRe, unquote
} from '../../../extjs-util/src/string';

import { Reader } from './Reader';

/**
 * The JSON Reader is used by a Proxy to read a server response that is sent back in JSON format.
 * This usually happens as a result of loading a Store - for example we might create something
 * like this:
 *
 *     Ext.define('User', {
 *         extend: 'Model',
 *         fields: ['id', 'name', 'email']
 *     });
 *
 *     var store = Ext.create('Store', {
 *         model: 'User',
 *         proxy: {
 *             type: 'ajax',
 *             url: 'users.json',
 *             reader: {
 *                 type: 'json'
 *             }
 *         }
 *     });
 *
 * The example above creates a 'User' model. Models are explained in the
 * {@link Model Model} docs if you're not already familiar with them.
 *
 * We created the simplest type of JSON Reader possible by simply telling our
 * {@link Store Store}'s {@link Ext.data.proxy.Proxy Proxy} that we want a JSON Reader.
 * The Store automatically passes the configured model to the Store, so it is as if we passed
 * this instead:
 *
 *     reader: {
 *         type: 'json',
 *         model: 'User'
 *     }
 *
 * The reader we set up is ready to read data from our server - at the moment it will accept
 * a response like this:
 *
 *     [
 *         {
 *             "id": 1,
 *             "name": "Ed Spencer",
 *             "email": "ed@sencha.com"
 *         },
 *         {
 *             "id": 2,
 *             "name": "Abe Elias",
 *             "email": "abe@sencha.com"
 *         }
 *     ]
 *
 * ## Reading other JSON formats
 *
 * If you already have your JSON format defined and it doesn't look quite like what we have above,
 * you can usually pass JsonReader a couple of configuration options to make it parse your format.
 * For example, we can use the {@link #rootProperty} configuration to parse data that comes back
 * like this:
 *
 *     {
 *         "users": [
 *            {
 *                "id": 1,
 *                "name": "Ed Spencer",
 *                "email": "ed@sencha.com"
 *            },
 *            {
 *                "id": 2,
 *                "name": "Abe Elias",
 *                "email": "abe@sencha.com"
 *            }
 *         ]
 *     }
 *
 * To parse this we just pass in a {@link #rootProperty} configuration that matches the 'users'
 * above:
 *
 *     reader: {
 *         type: 'json',
 *         rootProperty: 'users'
 *     }
 *
 * Sometimes the JSON structure is even more complicated. Document databases like CouchDB often
 * provide metadata around each record inside a nested structure like this:
 *
 *     {
 *         "total": 122,
 *         "offset": 0,
 *         "users": [
 *             {
 *                 "id": "ed-spencer-1",
 *                 "value": 1,
 *                 "user": {
 *                     "id": 1,
 *                     "name": "Ed Spencer",
 *                     "email": "ed@sencha.com"
 *                 }
 *             }
 *         ]
 *     }
 *
 * In the case above the record data is nested an additional level inside the "users" array as each
 * "user" item has additional metadata surrounding it ('id' and 'value' in this case). To parse
 * data out of each "user" item in the JSON above we need to specify the {@link #record}
 * configuration like this:
 *
 *     reader: {
 *         type: 'json',
 *         rootProperty: 'users',
 *         record: 'user'
 *     }
 *
 * ## Response MetaData
 *
 * The server can return metadata in its response, in addition to the record data, that describe
 * attributes of the data set itself or are used to reconfigure the Reader. To pass metadata
 * in the response you simply add a `metaData` attribute to the root of the response data.
 * The metaData attribute can contain anything, but supports a specific set of properties
 * that are handled by the Reader if they are present:
 * 
 * - {@link #rootProperty}: the property name of the root response node containing the record data
 * - {@link #totalProperty}: property name for the total number of records in the data
 * - {@link #successProperty}: property name for the success status of the response
 * - {@link #messageProperty}: property name for an optional response message
 * - {@link Model#fields fields}: Config used to reconfigure the Model's fields
 *   before converting the response data into records
 * 
 * An initial Reader configuration containing all of these properties might look like this
 * ("fields" would be included in the Model definition, not shown):
 *
 *     reader: {
 *         type: 'json',
 *         rootProperty: 'root',
 *         totalProperty: 'total',
 *         successProperty: 'success',
 *         messageProperty: 'message'
 *     }
 *
 * If you were to pass a response object containing attributes different from those initially
 * defined above, you could use the `metaData` attribute to reconfigure the Reader on the fly.
 * For example:
 *
 *     {
 *         "count": 1,
 *         "ok": true,
 *         "msg": "Users found",
 *         "users": [{
 *             "userId": 123,
 *             "name": "Ed Spencer",
 *             "email": "ed@sencha.com"
 *         }],
 *         "metaData": {
 *             "rootProperty": "users",
 *             "totalProperty": 'count',
 *             "successProperty": 'ok',
 *             "messageProperty": 'msg'
 *         }
 *     }
 *
 * You can also place any other arbitrary data you need into the `metaData` attribute which will be
 * ignored by the Reader, but will be accessible via the Reader's {@link #metaData} property
 * (which is also passed to listeners via the Proxy's
 * {@link Ext.data.proxy.Proxy#metachange metachange} event (also relayed by the store).
 * Application code can then process the passed metadata in any way it chooses.
 * 
 * A simple example for how this can be used would be customizing the fields for a Model that is
 * bound to a grid. By passing the `fields` property the Model will be automatically updated by the
 * Reader internally, but that change will not be reflected automatically in the grid unless you
 * also update the column configuration. You could do this manually, or you could simply pass
 * a standard grid {@link Ext.panel.Table#columns column} config object as part of the `metaData`
 * attribute and then pass that along to the grid. Here's a very simple example for how that
 * could be accomplished:
 *
 *     // response format:
 *     {
 *         ...
 *         "metaData": {
 *             "fields": [
 *                 { "name": "userId", "type": "int" },
 *                 { "name": "name", "type": "string" },
 *                 { "name": "birthday", "type": "date", "dateFormat": "Y-j-m" },
 *             ],
 *             "columns": [
 *                 { "text": "User ID", "dataIndex": "userId", "width": 40 },
 *                 { "text": "User Name", "dataIndex": "name", "flex": 1 },
 *                 { "text": "Birthday", "dataIndex": "birthday", "flex": 1,
 *                   "format": 'Y-j-m', "xtype": "datecolumn" }
 *             ]
 *         }
 *     }
 *
 * The Reader will automatically read the meta fields config and rebuild the Model based on the new
 * fields, but to handle the new column configuration you would need to handle the metadata within
 * the application code. This is done simply enough by handling the metachange event on either
 * the store or the proxy, e.g.:
 *
 *     var store = Ext.create('Store', {
 *         ...
 *         listeners: {
 *             'metachange' (store, meta) {
 *                 myGrid.reconfigure(store, meta.columns);
 *             }
 *         }
 *     });
 *
 */
@define({
    type: 'json',
    
    prototype: {
        responseType: 'json'
    }
})
class JsonReader extends Reader {
    static opratorRe = /[[.]/g;
    
    // requires: [
    //     'Ext.JSON'
    // ],
    
    /**
     * @cfg {String} [metaProperty]
     * Name of the property from which to retrieve the `metaData` attribute. See
     * {@link #metaData}.
     */
    @config
    metaProperty = 'metaData';
    
    /**
     * @cfg {Boolean} preserveRawData
     * The reader will keep a copy of the most recent request in the {@link #rawData} property.
     * For performance reasons, the data object for each record is used directly as the model
     * data. This means that these objects may be modified and thus modify the raw data.
     * To ensure the objects are copied, set this option to `true`.
     * 
     * This only applies to items that are read as part of the data array, any other
     * metadata will not be modified:
     * 
     *     {
     *         "someOtherData": 1, // Won't be modified
     *         "root": [{}, {}, {}] // The objects here will be modified
     *     }
     */
    @config
    preserveRawData = false;

    /**
     * @cfg {String} record
     * The optional location within the JSON response that the record data itself can be
     * found at. See the JsonReader intro docs for more details. This is not often needed.
     */
    @config
    record = null;

    /**
     * @cfg {Boolean} useSimpleAccessors
     * True to ensure that field names/mappings are treated as literals when reading values.
     *
     * For example, by default, using the mapping "foo.bar.baz" will try and read a property
     * foo from the root, then a property bar from foo, then a property baz from bar.
     * Setting the simple accessors to true will read the property with the name "foo.bar.baz"
     * direct from the root object.
     */
    @config
    useSimpleAccessors = false;

    getResponseData (response) {
        let me = this;
        let error;
        
        if (typeof response.responseJson === 'object') {
            return response.responseJson;
        }

        try {
            return Ext.decode(response.responseText);
        }
        catch (ex) {
            error = me.createReadError(ex.message);

            //<debug>
            Ext.log.warn('Unable to parse the JSON returned by the server');
            //</debug>

            me.fireEvent('exception', me, response, error);
            
            return error;
        }
    }

    //--------------------------------------------------------------------------------
    // Internals

    buildAccessor (mapping) {
        let extractor, ret;

        if (typeof mapping !== 'number' && !this.useSimpleAccessors) {
            extractor = JsonReader.parseMapping(mapping);
            
            if (extractor.length > 1) {
                return raw => {
                    let v = raw;
                    let key;

                    for (key of extractor) {
                        if (!v) {
                            break;
                        }

                        v = v[key];
                    }
                    
                    return v;
                };
            }

            mapping = extractor[0];
        }
        
        ret = raw => raw[mapping];

        return ret;
    }

    buildExtractor (entityType) {
        let me = this;
        let cls = me.constructor;
        let isArray = me.isArrayReader;   // a cheat, but saves lots of complexity
        let fields = entityType.fields;
        let mappers = [];
        let extractors = [];
        let extractor, field, mapping, fn, t;
        
        for (field of fields) {
            t = typeof(mapping = field.mapping);

            if (t === 'function') {
                mappers.push(field);
            }
            else {
                if (t === 'number' || (mapping && me.useSimpleAccessors)) {
                    extractor = [ mapping ];
                }
                else if (mapping) {
                    extractor = cls.parseMapping(mapping);
                }
                else if (isArray) {
                    extractor = [ field.ordinal ];
                }
                else {
                    continue;
                }

                // An extractor is [ field.name, prop0, ..., propN ]. The prop0 is the
                // first key to acquire from the raw data object. That value is further
                // descended into using prop2...propN but checking for null along the
                // way.
                extractor.unshift(field.name);
                extractors.push(extractor);
            }
        }

        // This extractor locks in the current settings for those things that we use in
        // the extractor key. Since the extractor fn can be reused by other readers of
        // our type, these settings cannot be allowed to drift.
        fn = function (raw) {
            // This function is called using the Reader's this reference so that we can
            // access its preserveRawData config:
            // noinspection JSPotentiallyInvalidUsageOfClassThis
            let data = this.preserveRawData ? copy({}, raw) : (isArray ? {} : raw);
            let i, k, n, v;
            
            for (extractor of extractors) {
                for (v = raw, i = 1, n = extractor.length; i < n; ++i) {
                    k = extractor[i];

                    if (k in v) {
                        v = v[k];
                    }
                    else {
                        break;
                    }
                }
                
                if (i === n) {
                    data[extractor[0]] = v;
                }
            }
            
            for (field of mappers) {
                v = field.mapping(raw);
                
                if (v !== undefined) {
                    data[field.name] = v;
                }
            }
            
            return data;
        };

        // Primarily for test inspection:
        fn.extractors = extractors;
        fn.mappers = mappers;
        
        return fn;
    }

    /**
     * We're just preparing the data for the superclass by pulling out the record objects we want.
     * If a {@link #record} was specified we have to pull those out of the larger JSON object,
     * which is most of what this function is doing
     * @param {Object} root The JSON root node
     * @param {Object} [readOptions] See {@link #read} for details.
     * @return {Model[]}
     * @private
     */
    extractData (root, readOptions) {
        let recordName = this.record;
        let data = [];
        let length, i;

        if (recordName) {
            length = root.length;
            
            if (!length && is.object(root)) {
                length = 1;
                root = [root];
            }

            for (i = 0; i < length; i++) {
                data[i] = root[i][recordName];
            }
        }
        else {
            data = root;
        }
        
        return super.extractData(data, readOptions);
    }

    getExtractorCacheKey () {
        // These options affect the extractor fn, so need to be included in the key:
        return (this.useSimpleAccessors ? ':simple' : '');
    }

    getMeta (raw) {
        return this.callAccessor(raw, 'getMeta', 'metaProperty');
    }
    
    /**
     * Returns an accessor function for the given property string. Support properties such
     * as the following:
     *
     * - '0'
     * - 'someProperty'
     * - 'values[0]'
     * - 'some.property'
     * - 'foo["\\"Big\\" Bob\'s Used Carpet"].bar'
     *
     * If the `expr` does not contain operators, a 1-element array is returned. Otherwise,
     * an array of parsed components is returned. These array elements contain the unquoted
     * strings and parsed numbers and can be used to access the appropriate members of data
     * objects in a loop.
     * 
     * The returned array for the above examples would be:
     *
     * - `[ 0 ]`
     * - `[ 'someProperty' ]`
     * - `[ 'values', 0 ]`
     * - `[ 'some', 'property' ]`
     * - `[ 'foo', '"Big" Bob\'s Used Carpet', 'bar' ]`
     * 
     * @return {Array}
     * @private
     */
    static parseMapping (expr) {
        let i = toInt(expr);
        let re = JsonReader.opratorRe;
        let ret = [];
        let m;
        
        re.lastIndex = 0;  // a global re, so reset before we test

        if (i !== null) {
            ret.push(i);
        }
        else if (!re.test(expr)) {
            ret.push(expr);
        }
        else {
            for (i = 0; i < expr.length; /* empty */) {
                if (expr[i] === '[') {
                    ++i;
                    
                    m = quotedStringStickyRe.matchAt(i, expr);
                    
                    if (m) {
                        i = quotedStringStickyRe.lastIndex;
                        ret.push(unquote(m[0]));
                    }
                    else {
                        m = digitsStickRe.matchAt(i, expr);

                        //<debug>
                        assert(m, 'Invalid JSON mapping: "{0}"', expr);
                        //</debug>

                        i = digitsStickRe.lastIndex;
                        ret.push(+m[0]);
                    }

                    //<debug>
                    assert(expr[i] === ']', 'Invalid JSON mapping: "{0}"', expr);
                    //</debug>
                    
                    ++i;  // skip the ']'
                }
                else {
                    m = identifierStickyRe.matchAt(i, expr);
                    //<debug>
                    assert(m, 'Invalid JSON mapping: "{0}"', expr);
                    //</debug>
                    
                    ret.push(m[0]);
                    i += m[0].length;
                }
                
                if (expr[i] === '.') {
                    // we can have '.' only after an identifier token or a []
                    ++i;
                }
            }
        }
        
        return ret;
    }
    
    updateMetaProperty () {
        delete this.getMeta;
    }

    /**
     * @method readRecords
     * Reads a JSON object and returns a `ResultSet`. Uses the `totalProperty` and
     * `successProperty` configs to retrieve these data from the response.
     * @param {Object} data The raw JSON data
     * @param {Object} [readOptions] See {@link #read} for details.
     * @return {ResultSet}
     */
}

export { JsonReader };
