import {
    //<debug>
    assert,
    //</debug>
    
    Ext, define, config
} from '../../../extjs-core/src';

import { push } from '../../../extjs-util/src/Array';

import { RequestOptions, ResultSet } from '../request';

import { Proxy } from './Proxy';

/**
 * ServerProxy is a superclass of {@link JsonPProxy} and {@link AjaxProxy}, and would not
 * usually be used directly.
 */
@define({
    type: 'server',
    tags: 'isRemote'
})
class ServerProxy extends Proxy {
    /**
     * @cfg {Object} api
     * Specific urls to call on CRUD action methods "create", "read", "update" and "destroy".
     *
     * The url is built based upon the action being executed [create|read|update|destroy]
     * using the commensurate {@link #api} property, or if `null` will default to the
     * configured {@link Store}'s proxy.
     *
     * For example:
     *
     *     api: {
     *         create  : '/controller/new',
     *         read    : '/controller/load',
     *         update  : '/controller/update',
     *         destroy : '/controller/destroy_action'
     *     }
     *
     * If the specific URL for a given CRUD action is null, the CRUD action request will
     * be directed to the configured {@link #url url}.
     */
    @config
    api = {
        create: null,
        read: null,
        update: null,
        destroy: null
    };

    /**
     * @cfg {Boolean} cache
     * Set to `true` or `false` to either enable or disable HTTP caching, respectively. If
     * `false`, a {@link #cacheString parameter} is appended to the request to ensure that
     * no caching is performed.
     */
    @config
    cache = false;

    /**
     * @cfg {String} cacheString
     * The name of the cache param added to the url when using disabling the `cache`.
     */
    @config
    cacheString = '_dc';

    /**
     * @cfg {String} directionParam
     * The name of the direction parameter to send in a request. **This is only used when
     * simpleSortMode is set to true.**
     * 
     * If this is set to the same value as the {@link #sortParam}, then the sort property
     * name *and* direction of each sorter is passed as a single, space separated parameter,
     * looking like a database `order by` specification.
     *
     * So if there are multiple sorters, the single sort parameter will look like this:
     *
     *     ?sort=name%20ASC&sort=age%20DESC
     */
    @config
    directionParam = 'dir';

    /**
     * @cfg {String} filterParam
     * The name of the 'filter' parameter to send in a request. Defaults to 'filter'. Set
     * this to `''` if you don't want to send a filter parameter.
     */
    @config
    filterParam = 'filter';

    /**
     * @cfg {String} groupDirectionParam
     * The name of the direction parameter to send in a request. **This is only used when
     * simpleGroupMode is set to true.**
     * If this is set to the same value as the {@link #groupParam}, then the group property
     * name *and* direction of each grouper is passed as a single, space separated parameter,
     * looking like a database `group by` specification.
     *
     * So if there are multiple groupers, the single group parameter will look like this:
     *
     *     ?group=name%20ASC&group=age%20DESC
     */
    @config
    groupDirectionParam = 'groupDir';

    /**
     * @cfg {String} groupParam
     * The name of the 'group' parameter to send in a request. Set to `null` if you don't
     * want to send a group parameter.
     */
    @config
    groupParam = 'group';

    /**
     * @cfg {String} idParam
     * The name of the parameter which carries the id of the entity being operated upon.
     */
    @config
    idParam = 'id';

    /**
     * @cfg {String} limitParam
     * The name of the 'limit' parameter to send in a request. Set to `null` if you don't
     * want to send a limit parameter.
     */
    @config
    limitParam = 'limit';

    /**
     * @cfg {String} pageParam
     * The name of the 'page' parameter to send in a request. Set to `null` if you don't
     * want to send a page parameter.
     */
    @config
    pageParam = 'page';

    /**
     * @cfg {Object} params
     * Extra parameters that will be included on every request. Individual requests with
     * params of the same name will override these params when they are in conflict.
     */
    @config
    params = {};

    /**
     * @cfg {Boolean} simpleGroupMode
     * Enabling simpleGroupMode in conjunction with remoteGroup will only send one group
     * property and a direction when a remote group is requested. The
     * {@link #groupDirectionParam} and {@link #groupParam} will be sent with the property
     * name and either 'ASC' or 'DESC'.
     */
    @config
    simpleGroupMode = false;

    /**
     * @cfg {Boolean} simpleSortMode
     * Enabling simpleSortMode in conjunction with remoteSort will send the sorted field
     * names in the parameter named by {@link #sortParam}, and the directions for each
     * sorted field in a parameter named by {@link #directionParam}.
     *
     * In the simplest case, with one Sorter, this will result in HTTP parameters like
     * this:
     *
     *     ?sort=name&dir=ASC
     *
     * If there are multiple sorters, the parameters will be encoded like this:
     *
     *     ?sort=name&sort=age&dir=ASC&dir=DESC
     */
    @config
    simpleSortMode = false;

    /**
     * @cfg {String} sortParam
     * The name of the 'sort' parameter to send in a request. Set to `null` if you don't
     * want to send a sort parameter.
     */
    @config
    sortParam = 'sort';

    /**
     * @cfg {String} startParam
     * The name of the 'start' parameter to send in a request. Set to `null` if you don't
     * want to send a start parameter.
     */
    @config
    startParam = 'start';

    /**
     * @cfg {Number} timeout
     * The number of milliseconds to wait for a response.
     */
    @config
    timeout = 30000;

    /**
     * @cfg {String} url
     * The URL from which to request the data object.
     */
    @config
    url = null;

    //---------------------------------------------------------------------------------
    // CRUD Operation Methods
    //
    // All four CRUD operations are executed in the same manner and just call doRequest.

    create (...args) {
        return this.doRequest(...args);
    }

    erase (...args) {
        return this.doRequest(...args);
    }

    read (...args) {
        return this.doRequest(...args);
    }

    update (...args) {
        return this.doRequest(...args);
    }

    //---------------------------------------------------------------------------------
    // Configs (alphabetic order)

    // params
    
    updateParams (newParams, oldParams) {
        this.fireEvent('paramschanged', newParams, oldParams);
    }

    //---------------------------------------------------------------------------------
    // Methods (alphabetic order)

    /**
     * Encodes the array of {@link Filter} objects into a string to be sent in the request
     * url. By default, this simply JSON-encodes the filter data
     * @param {Filter[]} filters The array of {@link Filter Filter} objects
     * @return {String}
     */
    encodeFilters (filters) {
        let out = [];
        let length = filters.length;
        let encode, i;

        for (i = 0; i < length; i++) {
            encode |= filters[i].serializeTo(out);
        }

        // If any Filters return Objects encapsulating their full state, then the parameters
        // needs JSON encoding.
        return encode ? this.applyEncoding(out) : out;
    }

    /**
     * Encodes the array of {@link Sorter} objects into a string to be sent in the request
     * url. By default, this simply JSON-encodes the sorter data
     * @param {Sorter[]} sorters The array of {@link Sorter Sorter} objects
     * @param {Boolean} [preventArray=false] Prevents the items from being output as an array.
     * @return {String}
     */
    encodeSorters (sorters, preventArray) {
        let out = [];
        let length = sorters.length;
        let i;
        
        for (i = 0; i < length; i++) {
            out[i] = sorters[i].serialize();
        }

        return this.applyEncoding(preventArray ? out[0] : out);
    }

    /**
     * Sets a value in the underlying {@link #params}.
     * @param {String} name The key for the new value
     * @param {Object} value The value
     */
    setParam (name, value) {
        let me = this;
        let oldParams = me.params;
        let params = me.params = {
            ...oldParams,
            [name]: value
        };
        
        me.fireEvent('extraparamschanged', params, oldParams);
    }

    //---------------------------------------------------------------------------------
    // Internal (alphabetic order)

    /**
     * Optional callback function which can be used to clean up after a request has
     * completed.
     * @param {RequestOptions} request The Request object
     * @param {Boolean} success True if the request was successful
     * @protected
     */
    afterRequest () {
        // empty
    }

    /**
     * Encode any values being sent to the server. Can be overridden in subclasses.
     * @param {Array} value An array of sorters/filters.
     * @return {String}
     * @protected
     */
    applyEncoding (value) {
        return Ext.encode(value);
    }

    /**
     * This is called from doRequest to create `RequestOptions`.
     * 
     * @param {Operation} operation The operation to execute
     * @return {RequestOptions}
     * @protected
     */
    buildRequest (operation) {
        let me = this;
        let options = new RequestOptions({
            params: me.getParams(operation)
        });

        options.apply(me);
        options.url = me.api[operation.action] || me.url;  // operation.url may smash this

        options.apply(operation);

        options.operation = operation;

        // This is needed by JsonSimlet in order to properly construct responses for
        // requests from this proxy:
        options.proxy = me;

        options.url = me.buildUrl(options);

        return options;
    }

    /**
     * Generates a URL based on a given `RequestOptions` object. By default, this will add
     * the cache-buster param if configured to `disableCaching`. Subclasses (e.g.,
     * `RestProxy`) may perform additional modifications.
     * 
     * @param {RequestOptions} options The request options.
     * @return {String}
     * @protected
     */
    buildUrl (options) {
        options.finishUrl();

        return options.url;
    }

    /**
     * This method allows subclasses to specify how to get the response for the reader.
     * @param {Object} response The server response
     * @return {Object} The response data to be used by the reader
     * @protected
     */
    extractResponseData (response) {
        return response;
    }

    /**
     * Finalize the parameters for the request, including (for `ReadOperation`) things like
     * sorters, filters etc.
     * @private
     */
    getParams (operation) {
        let me = this;
        let params = {};
        let operationId = operation.id;

        // Set up the entity id parameter according to the configured name.
        // This defaults to "id". But TreeStore has a "nodeParam" configuration which
        // specifies the id parameter name of the node being loaded.
        if (operationId != null) {
            params[me.idParam] = operationId;
        }

        if (operation.isReadOperation) {
            /* eslint-disable-next-line vars-on-top */
            let grouper = operation.grouper;
            let sorters = operation.sorters;
            let filters = operation.filters;
            let page = operation.page;
            let start = operation.start;
            let limit = operation.limit;
            let simpleSortMode = me.simpleSortMode;
            let simpleGroupMode = me.simpleGroupMode;
            let pageParam = me.pageParam;
            let startParam = me.startParam;
            let limitParam = me.limitParam;
            let groupParam = me.groupParam;
            let groupDirectionParam = me.groupDirectionParam;
            let sortParam = me.sortParam;
            let filterParam = me.filterParam;
            let directionParam = me.directionParam;
            let direction, hasGroups, i, len, property, sorter;
    
            if (pageParam && page) {
                params[pageParam] = page;
            }
    
            if (startParam && (start || start === 0)) {
                params[startParam] = start;
            }
    
            if (limitParam && limit) {
                params[limitParam] = limit;
            }
    
            hasGroups = groupParam && grouper;
            
            if (hasGroups) {
                // Grouper is a subclass of sorter, so we can just use the sorter method
                if (simpleGroupMode) {
                    params[groupParam] = grouper.property;
                    direction = grouper.direction;
    
                    // Allow for direction to be encoded into the same parameter
                    if (groupDirectionParam === groupParam) {
                        params[groupParam] += ' ' + direction;
                    }
                    else {
                        params[groupDirectionParam] = direction;
                    }
                }
                else {
                    params[groupParam] = me.encodeSorters([grouper], true);
                }
            }
    
            len = sorters && sorters.length;
    
            if (sortParam && len > 0) {
                if (simpleSortMode) {
                    // Group will be included in sorters, so skip sorter 0 if groups
                    for (i = (len > 1 && hasGroups) ? 1 : 0; i < len; ++i) {
                        sorter = sorters[i];
                        direction = sorter.direction;
                        property = sorter.property;
    
                        // Allow for direction to be encoded into the same parameter
                        if (directionParam === sortParam) {
                            property += ' ' + direction;
                        }
                        else {
                            params[directionParam] = push(params[directionParam] || [], direction);
                        }
                        
                        params[sortParam] = push(params[sortParam] || [], property);
                    }
                }
                else {
                    params[sortParam] = me.encodeSorters(sorters);
                }
            }
    
            if (filterParam && filters && filters.length > 0) {
                params[filterParam] = me.encodeFilters(filters);
            }
        }
        
        return params;
    }

    /**
     * Processes response, which may involve updating or committing records, each of which
     * will inform the owning stores and their interested views. Finally, we may perform
     * an additional layout if the data shape has changed. 
     * @protected
     */
    processResponse (success, operation, request, response) {
        let me = this;
        let exception, reader, resultSet, meta, destroyOp;
        
        // Async callback could have landed at any time, including during and after
        // destruction. We don't want to unravel the whole response chain in such case.
        if (me.destroying) {
            return;
        }

        // Processing a response may involve updating or committing many records
        // each of which will inform the owning stores, which will ultimately
        // inform interested views which will most likely have to do a layout
        // assuming that the data shape has changed.
        // Bracketing the processing with this event gives owning stores the ability
        // to fire their own beginupdate/endupdate events which can be used by interested
        // views to suspend layouts.
        me.fireEvent('beginprocessresponse', me, response, operation);

        if (success === true) {
            reader = me.reader;

            if (response.status === 204) {
                resultSet = ResultSet.EMPTY;
            }
            else {
                resultSet = reader.read(me.extractResponseData(response), {
                    // If we're doing an update, we want to construct the models ourselves.
                    recordCreator: operation.recordCreator ||
                        reader.defaultRecordCreatorFromServer
                });
            }

            if (!operation.$destroyOwner) {
                operation.$destroyOwner = me;
                destroyOp = true;
            }
            
            operation.process(resultSet, request, response);
            exception = !operation.wasSuccessful();
        }
        else {
            me.setException(operation, response);
            exception = true;
        }
        
        // It is possible that exception callback destroyed the store and owning proxy,
        // in which case we can't do nothing except punt.
        if (me.destroyed) {
            if (!operation.destroyed && destroyOp && operation.$destroyOwner === me) {
                operation.destroy();
            }
            
            return;
        }
        
        if (exception) {
            me.fireEvent('exception', me, response, operation);
        }
        else {
            // If a JsonReader detected metadata, process it now.
            // This will fire the metaChange event which the Store processes to fire its
            // own metaChange.
            meta = resultSet.metadata;
            
            if (meta) {
                me.onMetaChange(meta);
            }
        }

        // Ditto
        if (me.destroyed) {
            if (!operation.destroyed && destroyOp && operation.$destroyOwner === me) {
                operation.destroy();
            }
            
            return;
        }

        me.afterRequest(request, success);

        // Tell owning store processing has finished.
        // It will fire its endupdate event which will cause interested views to 
        // resume layouts.
        me.fireEvent('endprocessresponse', me, response, operation);
        
        if (!operation.destroyed && destroyOp && operation.$destroyOwner === me) {
            operation.destroy();
        }
    }
    
    /**
     * Sets up an exception on the operation
     * @param {Operation} operation The operation
     * @param {Object} response The response
     * @private
     */
    setException (operation, response) {
        operation.setException({
            status: response.status,
            statusText: response.statusText,
            response: response
        });
    }
    
    /**
     * @method doRequest
     * In ServerProxy subclasses, the {@link #method!create}, {@link #method!read},
     * {@link #method!update}, and {@link #method!erase} methods all call through to this
     * method.
     * 
     * Derived classes must implement the `doRequest` method - see {@link AjaxProxy} for
     * an example. This method has the same signature as each of the methods that delegate
     * to it.
     *
     * @param {Operation} operation The Operation object
     * @param {Function} callback The callback function to call when the Operation has completed
     * @param {Object} scope The scope in which to execute the callback
     */

    /**
     * @event exception
     * Fires when the server returns an exception. This event may also be listened
     * to in the event that a request has timed out or has been aborted.
     * @param {Ext.data.proxy.Proxy} this
     * @param {Ext.data.Response} response The response that was received
     * @param {Operation} operation The operation that triggered the request
     */
}

export { ServerProxy };
