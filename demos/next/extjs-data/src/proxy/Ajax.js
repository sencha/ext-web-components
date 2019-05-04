import { define, config, merge } from '../../../extjs-core/src';

import { Ajax } from '../request/Connection';

import { ServerProxy } from './Server';

/**
 * AjaxProxy is one of the most widely-used ways of getting data into your application. It uses AJAX
 * requests to load data from the server, usually to be placed into a {@link Store Store}.
 * Let's take a look at a typical setup. Here we're going to set up a Store that has an Ajax Proxy.
 * To prepare, we'll also set up a {@link Model Model}:
 *
 *      Ext.define('User', {
 *          extend: 'Model',
 *          fields: ['id', 'name', 'email']
 *      });
 *
 *      // The Store contains the AjaxProxy as an inline configuration
 *      var store = Ext.create('Store', {
 *          model: 'User',
 *          proxy: {
 *              type: 'ajax',
 *              url: 'users.json'
 *          }
 *      });
 *
 *      store.load();
 *
 * Our example is going to load user data into a Store, so we start off by defining a
 * {@link Model Model} with the fields that we expect the server to return. Next we set up
 * the Store itself, along with a {@link Store#proxy proxy} configuration.
 * This configuration was automatically turned into an Ext.data.proxy.Ajax instance, with the url
 * we specified being passed into AjaxProxy's constructor. It's as if we'd done this:
 *
 *     new AjaxProxy({
 *         url: 'users.json',
 *         model: 'User',
 *         reader: 'json'
 *     });
 *
 * A couple of extra configurations appeared here - {@link #model} and {@link #reader}. These are
 * set by default when we create the proxy via the Store - the Store already knows about the Model,
 * and Proxy's default {@link Reader} is {@link JsonReader}.
 *
 * Now when we call store.load(), the AjaxProxy springs into action, making a request to the url
 * we configured ('users.json' in this case). As we're performing a read, it sends a GET request
 * to that url (see {@link #actionMethods} to customize this - by default any kind of read will be
 * sent as a GET request and any kind of write will be sent as a POST request).
 *
 * # Limitations
 *
 * AjaxProxy cannot be used to retrieve data from other domains. If your application is running
 * on http://domainA.com it cannot load data from http://domainB.com because browsers have
 * a built-in security policy that prohibits domains talking to each other via AJAX.
 *
 * If you need to read data from another domain and can't set up a proxy server (some software
 * that runs on your own domain's web server and transparently forwards requests to
 * http://domainB.com, making it look like they actually came from http://domainA.com), you can use
 * {@link Ext.data.proxy.JsonP} and a technique known as JSON-P (JSON with Padding), which can help
 * you get around the problem so long as the server on http://domainB.com is set up to support
 * JSON-P responses. See {@link Ext.data.proxy.JsonP JsonPProxy}'s introduction docs for more
 * details.
 *
 * # Readers and Writers
 *
 * AjaxProxy can be configured to use any type of {@link Reader} to decode
 * the server's response. If no Reader is supplied, AjaxProxy will default to using a
 * {@link JsonReader}. Reader configuration can be passed in as a simple
 * object, which the Proxy automatically turns into a {@link Reader} instance:
 *
 *     var proxy = new Ext.data.proxy.Ajax({
 *         model: 'User',
 *         reader: {
 *             type: 'xml',
 *             rootProperty: 'users'
 *         }
 *     });
 *
 *     proxy.reader; // an XmlReader instance based on the config we supplied
 *
 * # Url generation
 *
 * AjaxProxy automatically inserts any sorting, filtering, paging and grouping options into the url
 * it generates for each request. These are controlled with the following configuration options:
 *
 * - {@link #pageParam} - controls how the page number is sent to the server (see also
 *   {@link #startParam} and {@link #limitParam})
 * - {@link #sortParam} - controls how sort information is sent to the server
 * - {@link #groupParam} - controls how grouping information is sent to the server
 * - {@link #filterParam} - controls how filter information is sent to the server
 *
 * Each request sent by AjaxProxy is described by an {@link Ext.data.operation.Operation Operation}.
 * To see how we can customize the generated urls, let's say we're loading the Proxy
 * with the following Operation:
 *
 *      var proxy = new Ext.data.proxy.Ajax({
 *          url: '/users'
 *      });
 *
 *      var operation = proxy.createOperation({
 *          type: 'read',
 *          page: 2
 *      });
 *
 * Now we'll issue the request for this Operation by calling {@link #read}:
 *
 *      proxy.read(operation); // GET /users?page=2
 *
 * Easy enough - the Proxy just copied the page property from the Operation. We can customize
 * how this page data is sent to the server:
 *
 *      var proxy = new Ext.data.proxy.Ajax({
 *          url: '/users',
 *          pageParam: 'pageNumber'
 *      });
 *
 *     proxy.read(operation); // GET /users?pageNumber=2
 *
 * Alternatively, our Operation could have been configured to send start and limit parameters
 * instead of page:
 *
 *      var proxy = new Ext.data.proxy.Ajax({
 *          url: '/users'
 *      });
 *
 *      var operation = proxy.createOperation({
 *          type: 'read',
 *          start: 50,
 *          limit: 25
 *      });
 *
 *      proxy.read(operation); // GET /users?start=50&limit;=25
 *
 * Again we can customize this url:
 *
 *      var proxy = new Ext.data.proxy.Ajax({
 *          url: '/users',
 *          startParam: 'startIndex',
 *          limitParam: 'limitIndex'
 *      });
 *
 *      proxy.read(operation); // GET /users?startIndex=50&limitIndex;=25
 *
 * AjaxProxy will also send sort and filter information to the server. Let's take a look at how
 * this looks with a more expressive Operation object:
 *
 *      var operation = proxy.createOperation({
 *          type: 'read',
 *          sorters: [
 *              new Ext.util.Sorter({
 *                  property: 'name',
 *                  direction: 'ASC'
 *              }),
 *              new Ext.util.Sorter({
 *                  property: 'age',
 *                  direction: 'DESC'
 *              })
 *          ],
 *          filters: [
 *              new Ext.util.Filter({
 *                  property: 'eyeColor',
 *                  value: 'brown'
 *              })
 *          ]
 *      });
 *
 * This is the type of object that is generated internally when loading a
 * {@link Store Store} with sorters and filters defined. By default the AjaxProxy will
 * JSON encode the sorters and filters, resulting in something like this (note that the url
 * is escaped before sending the request, but is left unescaped here for clarity):
 *
 *     var proxy = new Ext.data.proxy.Ajax({
 *         url: '/users'
 *     });
 *
 *     // GET /users?sort=[{"property":"name","direction":"ASC"},
 *                         {"property":"age","direction":"DESC"}]
 *                         &filter;=[{"property":"eyeColor","value":"brown"}]
 *     proxy.read(operation);
 *
 * We can again customize how this is created by supplying a few configuration options. Let's say
 * our server is set up to receive sorting information is a format like "sortBy=name#ASC,age#DESC".
 * We can configure AjaxProxy to provide that format like this:
 *
 *      var proxy = new Ext.data.proxy.Ajax({
 *          url: '/users',
 *          sortParam: 'sortBy',
 *          filterParam: 'filterBy',
 *
 *          // our custom implementation of sorter encoding -
 *          // turns our sorters into "name#ASC,age#DESC"
 *          encodeSorters (sorters) {
 *              var length = sorters.length,
 *                  sortStrs = [],
 *                  sorter, i;
 *
 *              for (i = 0; i < length; i++) {
 *                  sorter = sorters[i];
 *
 *                  sortStrs[i] = sorter.property + '#' + sorter.direction
 *              }
 *
 *              return sortStrs.join(",");
 *          }
 *      });
 *
 *      // GET /users?sortBy=name#ASC,age#DESC&filterBy;=[{"property":"eyeColor","value":"brown"}]
 *      proxy.read(operation);
 *
 * We can also provide a custom {@link #encodeFilters} function to encode our filters.
 *
 * # Debugging your Ajax Proxy
 *
 * If the data is not being loaded into the store as expected, it could be due to a mismatch
 * between the the way that the {@link #reader} is configured, and the shape of the incoming data.
 *
 * To debug from the point that your data arrives back from the network, set a breakpoint
 * inside the callback function created in the `createRequestCallback` method of the Ajax
 * Proxy class, and follow the data to where the {@link #reader} attempts to consume it.
 *
 * Note that if this ServerProxy is being used by a {@link Store Store}, then the Store's
 * call to {@link Store#method!load load} will override any specified callback and params
 * options. In this case, use the {@link Store Store}'s events to modify parameters,
 * or react to loading events.
 */
@define({
    type: 'ajax',
    
    prototype: {
        // Keep a default copy of the action methods here. Ideally could just null
        // out actionMethods and just check if it exists & has a property, otherwise
        // fallback to the default. But at the moment it's defined as a public property,
        // so we need to be able to maintain the ability to modify/access it. 
        defaultActionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'POST',
            destroy: 'POST'
        },

        lastRequest: null
    }
    // requires: ['Ext.Ajax'],
})
class AjaxProxy extends ServerProxy {
    /**
     * @cfg {Object} actionMethods
     * Mapping of action name to HTTP request method. In the basic AjaxProxy these are set to
     * 'GET' for 'read' actions and 'POST' for 'create', 'update' and 'destroy' actions. The
     * {@link Ext.data.proxy.Rest} maps these to the correct RESTful methods.
     */
    @config
    actionMethods = {
        create: 'POST',
        read: 'GET',
        update: 'POST',
        destroy: 'POST'
    };
    
    /**
     * @cfg {Boolean} binary
     * True to request binary data from the server.  This feature requires
     * the use of a binary reader such as {@link Ext.data.amf.Reader AMF Reader}
     */
    @config
    binary = false;
    
    /**
     * @cfg {Object} [headers]
     * Any headers to add to the Ajax request.
     *
     * example:
     *
     *      proxy: {
     *          headers: {
     *              'Content-Type': 'text/plain'
     *          }
     *          ...
     *      }
     */
    @config
    headers = {
        'X-Requested-With': 'XMLHttpRequest'
    };

    /**
     * @cfg {Boolean} paramsAsJson
     * Set to `true` to have any request parameters sent as
     * {@link Connection#method!request jsonData} where they can be parsed from the
     * raw request. By default, parameters are sent via the
     * {@link Connection#method!request params} property.
     * **Note**: This setting does not apply when the request is sent as a 'GET' request.
     * See {@link #cfg!actionMethods} for controlling the HTTP verb that is used when sending
     * requests.
     */
    @config
    paramsAsJson = false;

    /**
     * @cfg {String} password
     * Most oData feeds require basic HTTP authentication. This configuration allows
     * you to specify the password.
     */
    @config
    password = null;

    /**
     * @cfg {String} username
     * Most oData feeds require basic HTTP authentication. This configuration allows
     * you to specify the username.
     */
    @config
    username = null;
    
    /**
     * @cfg {Boolean} withCredentials
     * This configuration is sometimes necessary when using cross-origin resource sharing.
     */
    @config
    withCredentials = false;
    
    doRequest (operation) {
        let me = this;
        let options = me.buildRequest(operation);

        me.getMethod(options);
            
        options = operation.write(options, me.writer) || options;

        options.callback = me.createRequestCallback(options, operation);
        
        if (!options.isGet && me.paramsAsJson) {
            options.encodeParamsAsJson();
        }
        
        if (me.withCredentials) {
            options.username = me.username;
            options.password = me.password;
            options.withCredentials = true;
        }
        
        return me.sendRequest(options);
    }
    
    /**
     * Fires a request
     * @param {RequestOptions} options The request options.
     * @return {Request}
     * @private
     */
    sendRequest (options) {
        let request = Ajax.request(options);

        // Save the request on the Operation. Operations don't usually care about Request
        // and Response data, but in the ServerProxy and any of its subclasses we add both
        // request and response as they may be useful for further processing
        options.operation.request = request;

        this.lastRequest = request;
        
        return request;
    }
    
    /**
     * Aborts a running request.
     * @param {Request} [request] The request to abort. If not passed, the most
     * recent active request will be aborted.
     */
    abort (request) {
        request = request || this.lastRequest;
        
        if (request) {
            request.abort();
        }
    }
    
    /**
     * Sets the HTTP method name ('GET', 'POST', 'PUT' or 'DELETE') into the request
     * options. By default this is based on a lookup on {@link #cfg!actionMethods}.
     * 
     * @param {RequestOptions} options The request options.
     */
    getMethod (options) {
        let actions = this.actionMethods;
        let action = options.action;
        let method;
            
        if (actions) {
            method = actions[action];
        }

        options.method = method || this.defaultActionMethods[action];
    }
    
    /**
     * TODO: This is currently identical to the JsonPProxy version except for the return
     * function's signature. There is a lot of code duplication inside the returned
     * function so we need to find a way to DRY this up.
     * @param {RequestOptions} options The request options.
     * @param {Operation} operation The Operation being executed
     * @return {Function} The callback function
     * @private
     */
    createRequestCallback (options, operation) {
        return (options, success, response) => {
            let me = this;

            if (options === me.lastRequest) {
                me.lastRequest = null;
            }
            
            if (!me.destroying) {
                me.processResponse(success, operation, options, response);
            }
        };
    }
}

export { AjaxProxy };
