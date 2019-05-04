import {
    //<debug>
    assert,
    //</debug>

    Ext, Base,
    define, copy, copyIf, is, merge, STOP
} from '../../../extjs-core/src';

import { addQuery, toQueryString } from '../../../extjs-util/src/url';

const getRe = /^GET$/i;

/**
 * @class RequestOptions
 * 
 * This class represents the options for a `Request` made by a {@link ServerProxy} or
 * derived class or a {@link Connection}.
 */

const configs = {
    /**
     * @cfg {String} action
     * The name of the action this Request represents. Usually one of 'create', 'read',
     * 'update' or 'destroy'.
     */
    action: null,

    /**
     * @cfg {Boolean} async
     * `true` if this request should run asynchronously. Setting this to `false` from the
     * main UI thread is deprecated by all modern browsers (because doing so significantly
     * degrades the user experience by blocking user interaction with the browser). It is
     * acceptable, however, in a Worker thread.
     */
    async: true,

    /**
     * @cfg {Boolean} autoAbort
     * Whether this request should abort any pending requests.
     */
    autoAbort: null,

    /**
     * @cfg {Boolean} binary
     * Set to `true` to request binary data from the server. The binary data will be
     * accessible as `responseBytes` on the response object.
     */
    binary: false,

    /**
     * @cfg {Array} binaryData
     * 
     * An array of bytes to submit in binary form. Any params will be appended to the
     * URL. If `binaryData` is present, you must set also set `binary` to `true` and
     * `method` to `'POST'`.
     */
    binaryData: null,

    /**
     * @cfg {Boolean} cache
     * Set to `true` or `false` to either enable or disable HTTP caching, respectively.
     * By default this is `null` to allow the `Proxy` to control this behavior.
     */
    cache: null,

    /**
     * @cfg {String} cacheString
     * The name of the query param added to the URL when using disabling the `cache`.
     */
    cacheString: '_dc',

    /**
     * @cfg {Function} callback
     * The function to be called upon receipt of the HTTP response. The callback is
     * called regardless of success or failure.
     * 
     * @cfg {Object} callback.options The parameter to the request call.
     * 
     * @cfg {Boolean} callback.success True if the request succeeded.
     * 
     * @cfg {Object} callback.response The XMLHttpRequest object containing the
     * response data.
     * 
     * See [www.w3.org/TR/XMLHttpRequest/](http://www.w3.org/TR/XMLHttpRequest/) for
     * details about accessing elements of the response.
     */
    callback: null,

    /**
     * @cfg {String} callbackKey
     * Some requests (like JsonP) want to send an additional key that contains
     * the name of the callback function.
     */
    callbackKey: null,

    /**
     * @cfg {String} defaultContentType
     * The default `Content-Type` header to be sent out with any POST request.
     */
    defaultContentType: null,

    /**
     * @cfg {Function} failure
     * The function to be called upon failure of the request.
     * @cfg {Object} failure.response The XMLHttpRequest object containing the response
     * data.
     * @cfg {Object} failure.options The parameter to the request call.
     */    
    failure: null,

    /**
     * @cfg {HTMLElement/String} form
     * The `form` Element or the id of the `<form>` from which to pull parameters.
     */
    form: null,

    /**
     * @cfg {Object} headers
     * Some requests (like XMLHttpRequests) want to send additional server headers.
     * This configuration can be set for those types of requests.
     * 
     * The following headers will be present by default:
     * 
     *      {
     *          'Content-Type': auto,
     *          'X-Requested-With': 'XMLHttpRequest'
     *      };
     * 
     * By default an appropriate `Content-Type` is determined based on the params and/or
     * data passed to the request. To prevent this, set the `Content-Type` header to any
     * value. Setting any header value to `null` or `undefined` will cause it to not be
     * sent.
     */
    headers: null,

    /**
     * @cfg {Boolean} isUpload
     * **Only meaningful when used with the `form` option.**
     *
     * True if the form object is a file upload (will be set automatically if the form
     * was configured with **`enctype`** `"multipart/form-data"`).
     *
     * File uploads are not performed using normal "Ajax" techniques, that is they are
     * not performed using XMLHttpRequests. Instead the form is submitted in the
     * standard manner with the DOM `form` element temporarily modified to have its
     * [target](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/target)
     * set to refer to a dynamically generated, hidden `iframe` element which is
     * inserted into the document and removed after the return data has been gathered.
     *
     * The server response is parsed by the browser to create the document for the
     * IFRAME. If the server is using JSON to send the return object, then the
     * [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
     * header must be set to "text/html" in order to tell the browser to insert the
     * text unchanged into the document body.
     *
     * The response text is retrieved from the document, and a fake XMLHttpRequest
     * object is created containing a `responseText` property in order to conform to
     * the requirements of event handlers and callbacks.
     *
     * Be aware that file upload packets are sent with the content type
     * [multipart/form](https://tools.ietf.org/html/rfc7233#section-4.1) and some
     * server technologies (notably JEE) may require some custom processing in order
     * to retrieve parameter names and parameter values from the packet content.
     *
     *  - [target](http://www.w3.org/TR/REC-html40/present/frames.html#adef-target)
     *  - [Content-Type](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17)
     *  - [multipart/form](http://www.faqs.org/rfcs/rfc2388.html)
     */
    isUpload: false,

    /**
     * @cfg {Object} jsonData
     * This is used by some write actions to attach data to the request without
     * encoding it as a parameter.
     * 
     * Note: This will be used instead of params for the post data. Any params will be
     * appended to the URL.
     */
    jsonData: null,

    /**
     * @cfg {'GET'/'POST'/'PUT'/'DELETE'} method
     * The HTTP method to use on this Request. Defaults to "GET" if no parameters are
     * being sent, and "POST" if parameters are being sent. Note that the method name is
     * case-sensitive and should be all caps.
     */
    method: null,

    /**
     * @cfg {Object/String/Function} params
     * An object containing properties which are used as parameters to the request, a
     * URL encoded string or a function to call to get either. The scope of the
     * function is specified by the `scope` option.
     */
    params: null,

    /**
     * @cfg {String} password
     * Most oData feeds require basic HTTP authentication. This configuration allows
     * you to specify the password. This also applies when using `withCredentials`.
     */
    password: null,

    /**
     * @cfg {String} rawData
     * 
     * A raw string to use as the post. Note: This will be used instead of params for
     * the post data. Any params will be appended to the URL.
     */
    rawData: null,

    /**
     * @cfg {Object} scope
     * The scope in which to execute the callbacks: The `this` object for any callback
     * functions. If the `url` or `params` options were specified as functions from
     * which to draw values, then this also serves as the `this` pointer for those
     * functions.
     */
    scope: null,

    /**
     * @cfg {Function} success
     * The function to be called upon success of the request.
     * 
     * @cfg {Object} success.response The XMLHttpRequest object containing the
     * response data.
     * 
     * @param {Object} success.options The parameter to the request call.
     */    
    success: null,

    /**
     * @cfg {Number} timeout
     * The timeout in milliseconds to be used for this request.
     *
     * When a request fails due to `timeout` the response object will contain:
     *
     *     timedout: true
     */
    timeout: null,

    /**
     * @cfg {String/Function} url
     * The URL to which to send the request, or a function to call which returns a URL
     * string. The scope of the function is specified by the `scope`.
     */
    url: null,
    
    urlParams: null,
    
    /**
     * @cfg {String} username
     * Most oData feeds require basic HTTP authentication. This configuration allows
     * you to specify the username. This also applies when using `withCredentials`.
     */
    username: null,

    /**
     * @cfg {Boolean} withCredentials
     * Set to `true` to add the `withCredentials` property to the XHR object. This is
     * necessary when using cross-origin resource sharing.
     */
    withCredentials: false,

    /**
     * @cfg {Object} xmlData
     * This is used by some write actions to attach data to the request without
     * encoding it as a parameter, but instead sending it as XML.
     * 
     * Note: This will be used instead of params for the post data. Any params will be
     * appended to the URL.
     */
    xmlData: null
};

@define({
    // These configs are not things we copy from Connection/Proxy/Operation configs.
    prototype: copy({
        _data: undefined,
        _paramStrings: null,

        /**
         * @cfg {Operation} operation
         * The `Operation` that owns this request instance.
         */
        operation: null,
    
        /**
         * @cfg {Proxy} proxy
         * The proxy this request belongs to.
         */
        proxy: null,
    
        /**
         * @cfg {Request} request
         * The Request object (Ajax/JsonP/Other).
         * @private
         */
        request: null,
    
        records: null,

        /**
         * @cfg {String} type
         * The request type alias. Standard request types are `'ajax'` and `'form'`. If
         * this is not specified, the type is deduced based on other options such as `form`.
         */
        type: null

    }, configs)
})
class RequestOptions extends Base {
    /**
     * Returns a `RequestOptions` instance from the given `options`.
     * @param {Object/RequestOptions} options
     * @return {RequestOptions}
     */
    static from (options) {
        return (options && options.isRequestOptions) ? options : new RequestOptions(options);
    }

    //---------------------------------------------------------------------------------
    // Life-cycle

    construct (config) {
        let me = this;
        let source = config && config.isRequestOptions && config;
        
        me.headers = {};

        me.apply(config);

        if (source) {
            me.source = source;
            copy(me, config);
        }
    }

    //---------------------------------------------------------------------------------
    // Properties (alphabetic order)
    
    get data () {
        let me = this;
        let data = me._data;
        let binaryData, jsonData, rawData;

        if (data === undefined) {
            binaryData = me.binaryData;
            jsonData = me.jsonData;
            rawData = me.rawData;

            if (binaryData) {
                //<debug>
                assert(is.array(binaryData),
                       'Binary request data must be an array of bytes (not {0})',
                       typeof binaryData);
                //</debug>

                data = new Uint8Array(binaryData); // eslint-disable-line no-undef

                // send the underlying buffer, not the view, since that's not supported
                // on versions of chrome older than 22
                data = data.buffer;
            }
            else if (rawData) {
                data = rawData;
            }
            else if (jsonData) {
                data = is.primitive(jsonData) ? jsonData : Ext.encode(jsonData);
            }
            else {
                data = me.xmlData || null;
            }

            me._data = data;
        }

        return data;
    }
    
    set data (v) {
        this._data = v;
    }
    
    get isGet () {
        return getRe.test(this.method);
    }
    
    get paramString () {
        let ps = this.paramStrings;
        
        return ps.join('&');
    }
    
    get paramStrings () {
        let me = this;
        let ps = me._paramStrings;
        
        if (!ps) {
            me._paramStrings = [];

            me.addParam(me.params);

            ps = me._paramStrings;
        }
        
        return ps;
    }

    //---------------------------------------------------------------------------------
    // Methods (alphabetic order)

    /**
     * This method can be called to add a `name` / `value` pair to the `paramString`:
     * 
     *      opt.addParam('foo', 42);
     *      
     *      > foo=42
     * 
     * This method can also add multiple values by passing an object:
     * 
     *      opt.addParam({
     *          foo: 42,
     *          bar: 'abc
     *      });
     *      
     *      > foo=42&bar=abc
     * 
     * If a function is passed, it is invoked immediately using the configured `scope`
     * as the `this` pointer and its return value is passed to this method.
     * 
     * NOTE: This method operates directly on the `paramString` which can be cleared if a
     * parameter is changed via the `setParam` method. In other words, it is best to use
     * only one means to add parameters.
     *      
     * @param {String/Object/Function} name
     * @param [value]
     */
    addParam (name, value = STOP) {
        let me = this;
        let type;
        
        if (value === STOP) {  // if (1 arg passed)
            type = typeof name;
    
            if (type === 'string') {
                me.paramStrings.push(name);
            }
            else if (type === 'function') {
                me.addParam(name.call(me.scope));
            }
            else if (name) {
                me.addParam(toQueryString(name));
            }
        }
        else {
            name = encodeURIComponent(name);
            value = encodeURIComponent(String(value));
    
            me.addParam(`${name}=${value}`);
        }
    }

    /**
     * Returns the value for the {@link #params param} or `undefined` if it does not exist.
     * @param {String} name The name of the param.
     * @return {*}
     */
    getParam (name) {
        let params = this.materializeProp('params');
        let val;

        return params ? params[name] : val;
    }

    /**
     * Sets a single param value in the {@link #params}.
     * 
     * NOTE: This method resets the `paramString` property. It will be rebuilt when next
     * used, however, any values added directly by `addParam` will be lost.
     * 
     * @param {String} name The name of the param to set.
     * @param value The value to set.
     */
    setParam (name, value) {
        let me = this;
        let params = me.materializeProp('params') || (me.params = {});

        if (name in params) {
            me._paramStrings = null;
        }
        else {
            me.addParam(name, value);
        }
        
        params[name] = value;
    }

    //---------------------------------------------------------------------------------
    // Internals (alphabetic order)

    apply (options, defaults) {
        let me = this;
        let name, value;
        
        if (options) {
            if (options.isInstance) {
                // If we are given an object like a Connection, Operation or Proxy, we
                // only want to copy from it its configs that align wih our own.
                let values = options.getCurrentConfig();
                let open = options.$meta.configs.open;
                
                value = options.scope;

                if (open ? value !== undefined : ((name in values) || value != null)) {
                    me.applyProp('scope', value, defaults);
                }

                for (name in configs) {
                    value = options[name];

                    if (open ? value !== undefined : ((name in values) || value != null)) {
                        me.applyProp(name, value, defaults);
                    }
                }
            }
            else {
                // Otherwise, copy all the properties to allow expando's to come across:
                if ('scope' in options) {
                    me.applyProp('scope', options.scope, defaults);
                }
                    
                for (name in options) {
                    me.applyProp(name, options[name], defaults);
                }
            }
        }
        
        return me;
    }

    applyDefaults (options) {
        return this.apply(options, true);
    }
    
    applyProp (name, value, asDefault) {
        let me = this;
        let cp = asDefault ? copyIf : copy;

        if (name === 'headers') {
            cp(me.headers, value);
        }
        else if (name === 'params') {
            if (is.callable(value)) {
                value = value.call(me.scope, me);
            }

            if (is.string(value)) {
                me.paramStrings.push(value);
            }
            else if (me._paramStrings) {
                me.addParam(value);
            }
            else {
                cp(me.materializeProp('params') || (me.params = {}), value);
            }
        }
        else if (!asDefault || !me.hasOwnProperty(name)) {
            me[name] = value;
        }
    }
    
    createRequest () {
        let me = this;
        let config = {
            type: 'ajax',  // least priority default
            
            ...me.getCurrentConfig(),

            // We pass the whole object as "options" for historical reasons...
            options: me
        };

        return Base.Factory.request(config);  // this sets "me.request" as well
    }
    
    encodeParamsAsJson () {
        let me = this;
        let params = me.params;
        let jsonData;
        
        if (params) {
            jsonData = me.jsonData;
            
            if (jsonData) {
                jsonData = merge({}, jsonData, params);
            }
            else {
                jsonData = params;
            }
            
            me.jsonData = jsonData;
            me.params = me._paramStrings = null;
        }
    }
    
    finishUrl () {
        let me = this;
        let cache = me.cache;
        let isGet = me.isGet;
        let url = me.url;
        let urlParams = me.urlParams;
        let data, params;
        
        // if the method is get append date to prevent caching
        if (isGet && cache === false) {
            me.addParam(me.cacheString, Date.now());
        }

        params = me.paramString;

        // If the method is GET or there is data then append the params to the URL
        if (params) {
            data = me.data;

            if (isGet || data) {
                url = addQuery(url, params);
            }
            else if (!data && !isGet) {
                me.data = data = params;
            }
        }

        // Allow params to be forced into the URL:
        if (urlParams) {
            urlParams = is.object(urlParams) ? toQueryString(urlParams) : urlParams;

            url = addQuery(url, urlParams);
        }
        
        me.url = url;
    }
    
    getCurrentConfig () {
        let me = this;
        let ret = {};
        let isHeaders, isParams, key, value;
        
        // We only want those properties that have been set directly on this object,
        // not those in the prototype.
        for (key of Object.keys(me)) {
            if (key[0] !== '_') {  // skip _data and _paramStrings
                isHeaders = key === 'headers';
                isParams = key === 'params';

                if (isParams) {
                    me.materializeProp(key);
                }

                value = me[key];

                if (value && (isParams || isHeaders)) {
                    value = copy({}, value);

                    if (isHeaders && is.keyless(value)) {
                        continue;
                    }
                }

                ret[key] = value;
            }
        }
        
        value = me._data;

        if (value) {
            ret.data = value;
        }
        
        return ret;
    }
    
    materialize () {
        this.materializeProp('params');
        this.materializeProp('url');
    }
    
    materializeProp (prop) {
        let me = this;
        let value = me[prop];

        if (is.callable(value)) {
            me[prop] = value = value.call(me.scope, me);
        }
        
        return value;
    }
}

export { RequestOptions };
