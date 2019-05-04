import {
    //<debug>
    assert,
    //</debug>
    Ext, Watchable,
    define, config, STOP, remove
} from '../../../extjs-core/src';

import { callback } from '../../../extjs-util/src';
import { Completable } from '../../../extjs-util/src/mixins';

import { RequestOptions } from './Options';

/**
 * The Connection class encapsulates a connection to the page's originating domain, allowing
 * requests to be made either to a configured URL, or to a URL specified at request time.
 *
 * Requests made by this class are asynchronous, and will return immediately. No data from
 * the server will be available to the statement immediately following the {@link #request}
 * call. To process returned data, use a success callback in the request options object,
 * or an {@link #requestcomplete event listener}.
 *
 * # File Uploads
 *
 * File uploads are not performed using normal "Ajax" techniques, that is they are not
 * performed using XMLHttpRequests. Instead the form is submitted in the standard manner
 * with the DOM &lt;form&gt; element temporarily modified to have its target set to refer
 * to a dynamically generated, hidden &lt;iframe&gt; which is inserted into the document
 * but removed after the return data has been gathered.
 *
 * The server response is parsed by the browser to create the document for the IFRAME. If
 * the server is using JSON to send the return object, then the Content-Type header must
 * be set to "text/html" in order to tell the browser to insert the text unchanged into
 * the document body.
 *
 * Characters which are significant to an HTML parser must be sent as HTML entities, so
 * encode `<` as `&lt;`, `&` as `&amp;` etc.
 *
 * The response text is retrieved from the document, and a fake XMLHttpRequest object is
 * created containing a responseText property in order to conform to the requirements of
 * event handlers and callbacks.
 *
 * Be aware that file upload packets are sent with the content type multipart/form and
 * some server technologies (notably JEE) may require some custom processing in order to
 * retrieve parameter names and parameter values from the packet content.
 *
 * Also note that it's not possible to check the response code of the hidden iframe, so the
 * success handler will ALWAYS fire.
 *
 * # Binary Posts
 *
 * The class supports posting binary data to the server using native browser capabilities.
 */
@define({
    prototype: {
        enctypeRe: /multipart\/form-data/i
    }
})
class Connection extends Watchable {
    // statics: {
    //     requestId: 0
    // },

    /**
     * @cfg {Boolean} async
     * `true` if this request should run asynchronously. Setting this to `false` from the
     * main UI thread is deprecated by all modern browsers (because doing so significantly
     * degrades the user experience by blocking user interaction with the browser). It is
     * acceptable, however, in a Worker thread.
     */
    @config
    async = true;

    /**
     * @cfg {Boolean} autoAbort
     * Whether this request should abort any pending requests.
     */
    @config
    autoAbort = false;

    /**
     * @cfg {Boolean} binary
     * True if the response should be treated as binary data.  If true, the binary
     * data will be accessible as a "responseBytes" property on the response object.
     */
    @config
    binary = false;

    /**
     * @cfg {Boolean} cache
     * Set to `true` to remove the unique cache-buster param on GET requests.
     */
    @config
    cache = false;

    /**
     * @cfg {String} cacheString
     * The name of the query param added to the URL when using disabling the `cache`.
     */
    @config
    cacheString = '_dc';

    /**
     * @cfg {String} defaultContentType
     * The default `Content-Type` header to be sent out with any POST request.
     */
    @config
    defaultContentType = 'application/x-www-form-urlencoded; charset=UTF-8';

    /**
     * @cfg {Object} headers
     * An object containing request headers which are added to each request made by this
     * object.
     */
    @config
    headers = {
        'X-Requested-With': 'XMLHttpRequest'
    };

    /**
     * @cfg {String} method
     * The default HTTP method to be used for requests.
     *
     * If not set, but {@link #request} params are present, POST will be used;
     * otherwise, GET will be used.
     */
    @config
    method = null;

    /**
     * @cfg {Object} params
     * Any parameters to be appended to the request.
     */
    @config
    params = null;

    /**
     * @cfg {String} password
     * The password to pass when using {@link #withCredentials}.
     */
    @config
    password = null;

    /**
     * @cfg {Number} [timeout=30000] The timeout in milliseconds to be used for
     * requests.
     * Defaults to 30000 milliseconds (30 seconds).
     *
     * When a request fails due to timeout the XMLHttpRequest response object will
     * contain:
     *
     *     timedout: true
     */
    @config
    timeout = 30000;

    /**
     * @cfg {String} url
     * The URL for this connection.
     */
    @config
    url = null;

    /**
     * @cfg {String} username
     * The username to pass when using {@link #withCredentials}.
     */
    @config
    username = null;

    /**
     * @cfg {Boolean} withCredentials
     * True to set `withCredentials = true` on the XHR object
     */
    @config
    withCredentials = false;

    ctor () {
        this.requests = [];  // in order of birth ([0] === oldest)
    }

    //---------------------------------------------------------------------------------
    // Properties (alphabetic order)

    /**
     * @property {Boolean} loading
     * This property is `true` if this connection has a request outstanding.
     */
    get loading () {
        let request = this.getLatest();

        return request ? request.loading : false;
    }

    //---------------------------------------------------------------------------------
    // Methods (alphabetic order)

    /**
     * Aborts an active request.
     * @param {Request} [request] Defaults to the last request
     */
    abort (request) {
        request = request || this.getLatest();

        if (request) {
            request.abort();
        }
    }

    /**
     * Aborts all active requests
     */
    abortAll () {
        let requests = this.requests;
        
        // Even though abort() will remove the item, it is safer to avoid the risk of an
        // infinite loop by using pop() here:
        while (requests.length) {
            this.abort(requests.pop());
        }
    }

    /**
     * Sends an HTTP (Ajax) request to a remote server.
     *
     * **Important:** Ajax server requests are asynchronous, and this call will
     * return before the response has been received.
     *
     * You can process the returned data using a promise:
     *
     *      Ext.Ajax.request({
     *          url: 'ajax_demo/sample.json'
     *      }).then(
     *          function (response) {
     *              let obj = Ext.decode(response.responseText);
     *              
     *              console.dir(obj);
     *          },
     *          function (err) {
     *              console.log('Server error code', err.response.status);
     *          })
     *      ;
     *
     * Or, in an `async` method you can `await` the result:
     * 
     *      async method () {
     *          let request = Ext.Ajax.request({
     *              url: 'ajax_demo/sample.json'
     *          });
     *          
     *          try {
     *              let response = await request;
     *              let obj = Ext.decode(response.responseText);
     *              
     *              console.dir(obj);
     *          }
     *          catch (e) {
     *              console.log('Server error code', e.response.status);
     *          }
     *      }
     *
     * Or in callback functions:
     *
     *      Ext.Ajax.request({
     *          url: 'ajax_demo/sample.json',
     *
     *          success (response, opts) {
     *              let obj = Ext.decode(response.responseText);
     *              
     *              console.dir(obj);
     *          },
     *
     *          failure (response, opts) {
     *              console.log('Server error code', response.status);
     *          }
     *      });
     *
     * To execute a callback function in the correct scope, use the `scope` option.
     *
     * @param {Object/RequestOptions} options The options object or `RequestOptions`
     * instance. The options object may also contain any other properties as needed to
     * perform postprocessing in a callback because it is passed to callback functions.)
     *
     * @return {Request}
     */
    request (options) {
        let me = this;
        let request, ret;

        // If options is already a RequestOptions we copy its configs and it will be
        // kept as the "source" property on our new options object:
        options = RequestOptions.from(options);
        options.owner = me;

        if (me.fireEvent('beforerequest', me, options) !== STOP) {
            me.setOptions(options);

            request = me.createRequest(options);

            ret = request.start(options.data);  // === request if async else result
        }
        else {
            // Reusing for response
            request = ret = me.createAbortResponse(options);

            callback(options.callback, options.scope, [ options, false, request ]);
        }
        
        return ret;
    }

    //---------------------------------------------------------------------------------
    // Internals (alphabetic order)
    
    createAbortResponse (options) {
        let ret = new Completable();
        let err;

        ret.then = ret._then;
        ret.status = -1;
        ret.statusText = 'Request cancelled by beforeRequest event handler';
        ret.options = options;

        err = new Error(ret.statusText);
        err.request = ret;

        ret._completionFail(err);
        
        return ret;
    }

    createRequest (options) {
        let me = this;
        let request;

        // If request type is not specified we have to deduce it
        if (!options.type) {
            options.type = me.isFormUpload(options) ? 'form' : 'ajax';
        }

        // if autoAbort is set, cancel the current transactions (our config was applied
        // in setOptions as a default)
        if (options.autoAbort) {
            me.abort();
        }

        request = options.createRequest();

        me.requests.push(request);

        return request;
    }

    /**
     * Gets the form object from options.
     * @param {Object} options The request options
     * @return {HTMLElement} The form, null if not passed
     * @private
     */
    getForm (options) {
        return options.form && Ext.getDom(options.form);  // TODO
    }

    /**
     * Gets the most recent request
     * @return {Object} The request. Null if there is no recent request
     * @private
     */
    getLatest () {
        let requests = this.requests;
        let request = requests.length;

        if (request) {
            request = requests[request - 1];
        }

        return request || null;
    }

    /**
     * Detects whether the form is intended to be used for an upload.
     * @private
     */
    isFormUpload (options) {
        let fm = this.getForm(options);
        
        return fm ? options.isUpload || this.enctypeRe.test(fm.getAttribute('enctype')) : false;
    }

    onRequestComplete (request) {
        remove(this.requests, request);
    }

    /**
     * Sets various options such as the url, params for the request and returns the params
     * for the request.
     * @param {RequestOptions} options The request options
     * @return {Object}
     * @protected
     */
    setOptions (options) {
        let me = this;

        options.materialize();  // call any fn's for params or url now...

        // This copies any configs we have that are also configs for RequestOptions:
        options.applyDefaults(me);
        
        me.setupUrl(options);

        //<debug>
        assert(options.url, 'No URL specified');
        //</debug>

        me.setupParams(options);

        me.setupMethod(options);

        options.finishUrl();
    }

    /**
     * Template method for overriding method.
     * @param {RequestOptions} options The request options.
     * @protected
     */
    setupMethod (options) {
        let method = options.method;
        let hasData;
        
        if (this.isFormUpload(options)) {
            method = 'POST';
        }
        else {
            hasData = options.paramString || options.data;

            method = method ? method.toUpperCase() : (hasData ? 'POST' : 'GET');
        }

        options.method = method;
    }

    /**
     * Template method for overriding params
     * @param {Object} options
     * @return {String}
     * @protected
     */
    setupParams (options) {
        let form = this.getForm(options);
        let serializedForm;

        if (form && !this.isFormUpload(options)) {
            serializedForm = Ext.Element.serializeForm(form);

            options.addParam(serializedForm);
        }
    }

    /**
     * Template method for overriding url
     * @param {Object} options
     * @protected
     */
    setupUrl (options) {
        let form = this.getForm(options);
        
        if (form && !options.url) {
            options.url = form.action;
        }
    }
}

/**
 * @class Ajax
 * @singleton
 * A singleton instance of an `{@link Connection}`. This class is used to communicate with
 * your server side code. It can be used as follows:
 *
 *      try {
 *          let response = await Ajax.request({
 *              url: 'ajax_demo/sample.json'
 *          });
 *          
 *          let obj = Ext.decode(response.responseText);
 *          
 *          console.dir(obj);
 *      }
 *      catch (e) {
 *          console.log('server-side failure with status code ' + e.response.status);
 *      }
 *
 * Default options for all requests can be set by changing a property on the Ajax object:
 *
 *      Ajax.timeout = 60000; // 60 seconds
 *
 * Any options specified in the request method for the Ajax request will override any
 * defaults set on the `Ajax` singleton. In the code sample below, the timeout for the
 * request will be 60 seconds.
 *
 *      Ajax.timeout = 120000; // 120 seconds
 *
 *      Ajax.request({
 *          url: 'page.aspx',
 *          timeout: 60000
 *      });
 *
 * In general, this class will be used for all Ajax requests in your application. The main
 * reason for creating a separate `{@link Connection}` is for a series of requests that
 * share common settings that are different to all other requests in the application.
 */
export const Ajax = Ext.Ajax = new Connection({
    autoAbort: false
});

export { Connection };
