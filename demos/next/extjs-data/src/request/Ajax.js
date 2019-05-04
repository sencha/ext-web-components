import { define, copy, emptyFn, is } from '../../../extjs-core/src';
import { callback } from '../../../extjs-util/src';

import { Request } from './Request';

/**
 * This class manages a pending Ajax request. Instances of this type are created by the
 * `{@link Connection#request}` method.
 */
@define({
    type: 'ajax'
})
class AjaxRequest extends Request {
    /**
     * Checks if the response status was successful
     * @param {Number} status The status code
     * @param {Object} response The Response object
     * @return {Object} An object containing success/status state
     * @private
     */
    static parseStatus (status, response) {
        let type, len, success, isException;

        if (response) {
            // We have to account for binary and other response types
            type = response.responseType;
            
            if (type === 'arraybuffer') {
                len = response.byteLength;
            }
            else if (type === 'blob') {
                len = response.response.size;
            }
            else if (type === 'json' || type === 'document') {
                len = 0;
            }
            else if ((type === 'text' || type === '' || !type) && response.responseText) {
                len = response.responseText.length;
            }
        }

        // see: https://prototype.lighthouseapp.com/projects/8886/tickets/129-ie-mangles-http-response-status-code-204-to-1223
        status = status === 1223 ? 204 : status;

        isException = false;
        
        // Status can be 0 for file:/// requests
        success = (status >= 200 && status < 300) || status === 304 ||
                  (status === 0 && is.number(len));

        if (!success) {
            switch (status) {
                case 12002:
                case 12029:
                case 12030:
                case 12031:
                case 12152:
                case 13030:
                    isException = true;
                    break;
            }
        }

        return {
            success: success,
            isException: isException
        };
    }

    //---------------------------------------------------------------------------------
    // Properties (alphabetic order)
    
    get loading () {
        let me = this;
        let xhr = me.xhr;
        let state = xhr && xhr.readyState;
        let loading = false;

        if (xhr && !me.aborted && !me.timedout) {
            loading = state !== 0 && state !== 4;
        }

        return loading;
    }

    //---------------------------------------------------------------------------------
    // Methods (alphabetic order)
    
    /**
     * Aborts an active request.
     */
    abort (force) {
        let me = this;
        let xhr = me.xhr;

        if (force || me.loading) {
            /*
             * Clear out the onreadystatechange here, this allows us
             * greater control, the browser may/may not fire the function
             * depending on a series of conditions.
             */
            try {
                xhr.onreadystatechange = null;
            }
            catch (e) {
                // Setting onreadystatechange to null can cause problems in IE, see
                // http://www.quirksmode.org/blog/archives/2005/09/xmlhttp_notes_a_1.html
                xhr.onreadystatechange = emptyFn;
            }
            
            xhr.abort();
            
            super.abort(force);
            
            me.onComplete();
            me.cleanup();
        }
    }
    
    /**
     * Cleans up any left over information from the request
     */
    cleanup () {
        this.xhr = null;
    }

    //---------------------------------------------------------------------------------
    // Internal (alphabetic order)

    /**
     * Creates the response object
     * @param {Object} xhr
     * @private
     */
    createResponse (xhr) {
        let me = this;
        let headers = {};
        let lines = xhr.getAllResponseHeaders().replace(/\r\n/g, '\n').split('\n');
        let count = lines.length;
        let line, index, key, response;

        while (count--) {
            line = lines[count];
            index = line.indexOf(':');
            
            if (index >= 0) {
                key = line.substr(0, index).toLowerCase();
                
                if (line.charAt(index + 1) === ' ') {
                    ++index;
                }
                
                headers[key] = line.substr(index + 1);
            }
        }
        
        response = {
            request: me,
            requestId: me.id,
            status: xhr.status,
            statusText: xhr.statusText,
            getResponseHeader (header) {
                return headers[header.toLowerCase()];
            },
            getAllResponseHeaders () {
                return headers;
            }
        };

        if (me.binary) {
            response.responseBytes = me.getByteArray(xhr);
        }
        else {
            if (xhr.responseType) {
                response.responseType = xhr.responseType;
            }
            
            if (xhr.responseType === 'blob') {
                response.responseBlob = xhr.response;
            }
            else if (xhr.responseType === 'json') {
                response.responseJson = xhr.response;
            }
            else if (xhr.responseType === 'document') {
                response.responseXML = xhr.response;
            }
            else {
                // an error is thrown when trying to access responseText or responseXML
                // on an xhr object with responseType with any value but "text" or "",
                // so only attempt to set these properties in the response if we're not
                // dealing with other specified response types
                response.responseText = xhr.responseText;
                response.responseXML = xhr.responseXML;
            }
        }

        return response;
    }
    
    /**
     * Gets binary data from the xhr response object and returns it as a byte array
     * @param {Object} xhr the xhr response object
     * @return {Uint8Array/Array}
     * @private
     */
    getByteArray (xhr) {
        let response = xhr.response;

        // Modern browsers (including IE10) have a native byte array
        // which can be created by passing the ArrayBuffer (returned as
        // the xhr.response property) to the Uint8Array constructor.
        /* eslint-disable-next-line no-undef */
        return response ? new Uint8Array(response) : [];
    }

    /**
     * Do not remove this method. This is where Ajax simulator injects request stubs.
     * @private
     */
    getXhrInstance () {
        return new XMLHttpRequest();
    }
    
    /**
     * To be called when the request has come back from the server
     * @return {Object} The response
     * @private
     */
    onComplete () {
        let me = this;
        let owner = me.owner;
        let options = me.options;
        let xhr = me.xhr;
        let failure = { success: false, isException: false };
        let result, success, response;
        
        if (!xhr || me.destroyed) {
            return me.result = failure;
        }
        
        try {
            result = AjaxRequest.parseStatus(xhr.status, xhr);
            
            if (result.success) {
                // This is quite difficult to reproduce, however if we abort a request
                // just before it returns from the server, occasionally the status will be
                // returned correctly but the request is still yet to be complete.
                result.success = xhr.readyState === 4;
            }
        }
        catch (e) {
            // In some browsers we can't access the status if the readyState is not 4,
            // so the request has failed
            result = failure;
        }
        
        success = me.success = result.success;

        if (success) {
            response = me.createResponse(xhr);
            
            owner.fireEvent('requestComplete', owner, response, options);
            
            callback(options.success, options.scope, [response, options]);
        }
        else {
            if (result.isException || me.aborted || me.timedout) {
                response = me.createException(xhr);
            }
            else {
                response = me.createResponse(xhr);
            }
            
            owner.fireEvent('requestException', owner, response, options);
            
            callback(options.failure, options.scope, [response, options]);
        }
        
        me.result = response;
        
        callback(options.callback, options.scope, [options.request, success, response]);
        
        owner.onRequestComplete(me);
        
        super.onComplete();
        
        return response;
    }

    onStateChange () {
        let me = this;
        let xhr = me.xhr;

        if (xhr && xhr.readyState === 4) {
            me.clearTimer();
            
            me.onComplete();
            
            me.cleanup();
        }
    }

    /**
     * Creates and opens an appropriate XHR transport for a given request on this browser.
     * This logic is contained in an individual method to allow for overrides to process all
     * of the parameters and options and return a suitable, open connection.
     * @private
     */
    openRequest () {
        let me = this;
        let isAsync = me.async;
        let method = me.method;
        let responseType = me.responseType;
        let url = me.url;
        let username = me.username;
        let xhr = me.getXhrInstance();

        if (username) {
            xhr.open(method, url, isAsync, username, me.password);
        }
        else {
            xhr.open(method, url, isAsync);
        }

        if (me.binary) {
            xhr.responseType = 'arraybuffer';
        }
        
        if (responseType) {
            xhr.responseType = responseType;
        }

        if (me.withCredentials) {
            xhr.withCredentials = true;
        }

        return xhr;
    }

    /**
     * Setup all the headers for the request
     * @private
     */
    setupHeaders () {
        let me = this;
        let Content_Type = 'Content-Type';
        let contentType = me.defaultContentType;
        let data = me.data;
        let headers = me.headers;
        let params = me.params;
        let xhr = me.xhr;
        let key, header;

        if (!headers.hasOwnProperty(Content_Type) && (data || params)) {
            if (data) {
                if (me.rawData) {
                    contentType = 'text/plain';
                }
                else if (me.xmlData) {
                    contentType = 'text/xml';
                }
                else if (me.jsonData) {
                    contentType = 'application/json';
                }
            }
            
            headers[Content_Type] = contentType;
        }

        // If undefined/null, remove it and don't set the header.
        // Allow the browser to do so.
        if (headers[Content_Type] == null) {
            delete headers[Content_Type];
        }

        // set up all the request headers on the xhr object
        try {
            for (key in headers) {
                if ((header = headers[key]) != null) {
                    xhr.setRequestHeader(key, header);
                }
            }
        }
        catch (e) {
            // TODO Request shouldn't fire events from its owner
            me.owner.fireEvent('exception', key, header);
        }
        
        return headers;
    }

    start (data) {
        let me = this;
        let xhr = me.openRequest();

        me.xhr = xhr;
        me.setupHeaders();

        if (me.async) {
            xhr.onreadystatechange = me.onStateChange.bind(me);
        }
        
        // Parent will set the timeout if needed
        super.start(data);
        
        // start the request!
        xhr.send(data);
        
        return me.async ? me : me.onComplete();
    }
}

export { AjaxRequest };
