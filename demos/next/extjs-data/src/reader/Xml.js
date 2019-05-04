import {
    //<debug>
    assert,
    //</debug>

    Ext,
    define, config, is
} from '../../../extjs-core/src';

import { Query } from '../../../extjs-util/src/xml';

import { Reader } from './Reader';

/**
 * The XML Reader is used by a Proxy to read a server response that is sent back in XML format.
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
 *             url: 'users.xml',
 *             reader: {
 *                 type: 'xml',
 *                 record: 'user',
 *                 rootProperty: 'users'
 *             }
 *         }
 *     });
 *
 * The example above creates a 'User' model. Models are explained in the
 * {@link Model Model} docs if you're not already familiar with them.
 *
 * We created the simplest type of XML Reader possible by simply telling our
 * {@link Store Store}'s {@link Ext.data.proxy.Proxy Proxy} that we want a XML Reader.
 * The Store automatically passes the configured model to the Store, so it is as if we passed
 * this instead:
 *
 *     reader: {
 *         type: 'xml',
 *         model: 'User',
 *         record: 'user',
 *         rootProperty: 'users'
 *     }
 *
 * The reader we set up is ready to read data from our server - at the moment it will accept
 * a response like this:
 *
 *     <?xml version="1.0" encoding="UTF-8"?>
 *     <users>
 *         <user>
 *             <id>1</id>
 *             <name>Ed Spencer</name>
 *             <email>ed@sencha.com</email>
 *         </user>
 *         <user>
 *             <id>2</id>
 *             <name>Abe Elias</name>
 *             <email>abe@sencha.com</email>
 *         </user>
 *     </users>
 *
 * First off there's {@link #rootProperty} option to define the root node `<users>` (there should be
 * only one in a well-formed XML document). Then the XML Reader uses the configured {@link #record}
 * option to pull out the data for each record - in this case we set record to 'user', so each
 * `<user>` above will be converted into a User model.
 *
 * Note that XmlReader doesn't care whether your {@link #rootProperty} and {@link #record} elements
 * are nested deep inside a larger structure, so a response like this will still work:
 *
 *     <?xml version="1.0" encoding="UTF-8"?>
 *     <deeply>
 *         <nested>
 *             <xml>
 *                 <users>
 *                     <user>
 *                         <id>1</id>
 *                         <name>Ed Spencer</name>
 *                         <email>ed@sencha.com</email>
 *                     </user>
 *                     <user>
 *                         <id>2</id>
 *                         <name>Abe Elias</name>
 *                         <email>abe@sencha.com</email>
 *                     </user>
 *                 </users>
 *             </xml>
 *         </nested>
 *     </deeply>
 *
 * If this Reader is being used by a {@link Ext.data.TreeStore TreeStore} to read tree-structured
 * data in which records are nested as descendant nodes of other records, then this lenient
 * behaviour must be overridden by using a more specific child node selector as your {@link #record}
 * selector which will not select all descendants, such as:
 *
 *     record: '>user'
 *
 * # Response metadata
 *
 * The server can return additional data in its response, such as the {@link #totalProperty total
 * number of records} and the {@link #successProperty success status of the response}. These are
 * typically included in the XML response like this:
 *
 *     <?xml version="1.0" encoding="UTF-8"?>
 *     <users>
 *         <total>100</total>
 *         <success>true</success>
 *         <user>
 *             <id>1</id>
 *             <name>Ed Spencer</name>
 *             <email>ed@sencha.com</email>
 *         </user>
 *         <user>
 *             <id>2</id>
 *             <name>Abe Elias</name>
 *             <email>abe@sencha.com</email>
 *         </user>
 *     </users>
 *
 * If these properties are present in the XML response they can be parsed out by the XmlReader
 * and used by the Store that loaded it. We can set up the names of these properties by specifying
 * a final pair of configuration options:
 *
 *     reader: {
 *         type: 'xml',
 *         rootProperty: 'users',
 *         totalProperty: 'total',
 *         successProperty: 'success'
 *     }
 *
 * These final options are not necessary to make the Reader work, but can be useful when the server
 * needs to report an error or if it needs to indicate that there is a lot of data available
 * of which only a subset is currently being returned.
 *
 * # Response format
 *
 * **Note:** in order for the browser to parse a returned XML document, the Content-Type header
 * in the HTTP response must be set to "text/xml" or "application/xml". This is very important -
 * the XmlReader will not work correctly otherwise.
 */
@define({
    type: 'xml',
    
    prototype: {
        responseType: 'document'
    }
})
class XmlReader extends Reader {
    // requires: [
    //     'Ext.dom.Query'
    // ],

    /**
     * @cfg {String} record (required)
     * The `Query` path to the repeated element which contains record information.
     *
     * By default, the elements which match the selector may be nested at any level
     * below the {@link #rootProperty}
     *
     * If this Reader is being used by a {@link Ext.data.TreeStore TreeStore} to read
     * tree-structured data, then only first generation child nodes of the root element must be
     * selected, so the record selector must be specified with a more specific selector which
     * will not select all descendants. For example:
     *
     *     record: '>node'
     *
     */
    @config
    record = null;

    /**
     * @cfg {String} namespace
     * A namespace prefix that will be prepended to the field name when reading a
     * field from an XML node.  Take, for example, the following Model:
     * 
     *     Ext.define('Foo', {
     *         extend: 'Model',
     *         fields: ['bar', 'baz']
     *     });
     *     
     * The reader would need to be configured with a namespace of 'n' in order to read XML
     * data in the following format:
     * 
     *     <foo>
     *         <n:bar>bar</n:bar>
     *         <n:baz>baz</n:baz>
     *     </foo>
     */
    @config
    namespace = null;

    /**
     * Normalizes the data object.
     * @param {Object} data The raw data object
     * @return {Object} The documentElement property of the data object if present, or the same
     * object if not.
     */
    getData (data) {
        return data.documentElement || data;
    }

    /**
     * Parses an XML document and returns a ResultSet containing the records.
     * @param {Object} doc Parsed XML document
     * @param {Object} [readOptions] See {@link #read} for details.
     * @param {Object} [internalReadOptions] (private)
     * @return {ResultSet}
     */
    readRecords (doc, readOptions, internalReadOptions) {
        // it's possible that we get passed an array here by associations.
        // Make sure we strip that out (see Ext.data.reader.Reader#readAssociated)
        if (is.array(doc)) {
            doc = doc[0];
        }

        return super.readRecords(doc, readOptions, internalReadOptions);
    }

    //--------------------------------------------------------------------------------
    // Internals

    buildAccessor (mapping) {
        return root => {
            return XmlReader.getNodeValue(Query.selectNode(mapping, root));
        };
    }

    buildExtractor (entityType) {
        let me = this;
        let namespace = me.namespace;
        let ns = namespace ? namespace + '|' : '';
        let fields = entityType.fields;
        let mappers = [];
        let extractors = [];
        let extractor, field, mapping, fn, t;

        // Note, even if we have no fields, we have to return an Object not a document,
        // so we don't try to optimize that odd corner case and proceed since that is
        // what will be generated in the degenerate case.
        
        for (field of fields) {
            t = typeof(mapping = field.mapping);

            if (t === 'function') {
                mappers.push(field);
            }
            else {
                extractor = [ field.name ];
                
                if (mapping) {
                    extractor[1] = mapping;
                    extractor[2] = 0;
                }
                else {
                    extractor[1] = ns + extractor[0];
                    extractor[2] = !namespace; // TODO  && Ext.supports.XmlQuerySelector
                }

                extractors.push(extractor);
            }
        }

        // This extractor locks in the current settings for those things that we use in
        // the extractor key. Since the extractor fn can be reused by other readers of
        // our type, these settings cannot be allowed to drift.
        fn = raw => {
            let data = {};
            let v;
            
            for (extractor of extractors) {
                if (extractor[2] && raw.querySelector) {
                    v = raw.querySelector(extractor[1]);
                }
                else {
                    v = Query.selectNode(extractor[1], raw);
                }

                data[extractor[0]] = XmlReader.getNodeValue(v);
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
     * We're just preparing the data for the superclass by pulling out the record nodes we want.
     * @param {Element} root The XML root node
     * @param {Object} [readOptions] See {@link #read} for details.
     * @return {Model[]}
     * @private
     */
    extractData (root, readOptions) {
        let recordName = this.record;

        //<debug>
        assert(recordName, 'Record is a required config');
        //</debug>

        if (recordName !== root.nodeName) {
            root = Query.select(recordName, root);
        }
        else {
            root = [root];
        }
        
        return super.extractData(root, readOptions);
    }

    getExtractorCacheKey () {
        // For an XML reader, only the namespace affects the extractor...
        return this.namespace;
    }

    getGroupRoot (data) {
        return this.getRootValue(data, this.groupRootProperty);
    }

    static getNodeValue (node) {
        let ret;
        
        if (node) {
            // overcome a limitation of maximum textnode size
            // http://reference.sitepoint.com/javascript/Node/normalize
            // https://developer.mozilla.org/En/DOM/Node.normalize
            if (typeof node.normalize === 'function') {
                node.normalize();
            }
            
            node = node.firstChild;
            
            if (node) {
                ret = node.nodeValue;
            }
        }
        
        return ret;
    }

    getResponseData (response) {
        let xml = response.responseXML;
        let error = 'XML data not found in the response';

        if (!xml) {
            //<debug>
            Ext.log.warn(error);
            //</debug>
            
            return this.createReadError(error);
        }

        return xml;
    }

    /**
     * Given an XML object, returns the Element that represents the root as configured by the
     * Reader's meta data.
     * @param {Object} data The XML data object
     * @return {Element} The root node element
     * @private
     */
    getRoot (data) {
        return this.getRootValue(data, this.rootProperty);
    }

    getRootValue (data, prop) {
        let nodeName = data.nodeName;

        if (!prop || (nodeName && nodeName === prop)) {
            return data;
        }
        else if (typeof prop === 'function') {
            return prop(data);
        }
        else if (Query.isXml(data)) {
            // This fix ensures we have XML data
            // Related to TreeStore calling getRoot with the root node, which isn't XML
            // Probably should be resolved in TreeStore at some point
            return Query.selectNode(prop, data);
        }
    }

    getSummaryRoot (data) {
        return this.getRootValue(data, this.summaryRootProperty);
    }
}

export { XmlReader };
