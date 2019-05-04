import {
    Base, Factoryable,
    define, config, emptyFn, buffered
} from '../../../extjs-core/src';

import { Completable, Identifiable } from '../../../extjs-util/src/mixins';

/**
 * This class manages a pending Ajax request. Instances of this type are created by the
 * `{@link Connection#request}` method.
 * 
 * Even though this class does not extend {@link RequestOptions} it supports all of the
 * same config properties.
 * 
 * For example, with just promises and `await`, you may have code like this:
 *
 *      try {
 *          let response = await Ajax.request({ ...options });
 *      }
 *      catch (e) {
 *          // e is just an Error (with some expandos)
 *      }
 *
 * Alternatively, you can acquire the `Request` and then `await` its completion so that
 * additional information is available:
 *
 *      let request = Ajax.request({ ...options });
 *
 *      try {
 *          let response = await request;
 *      }
 *      catch (e) {
 *          // use e and request
 *      }
 */
@define({
    mixins: [
        Completable,
        Factoryable,
        Identifiable
    ],

    configurable: 'open',

    // Since this class is abstract, we don't have an alias of our own for Factoryable
    // to use.
    factory: {
        type: 'request',
        defaultType: 'ajax'
    },
    
    prototype: {
        result: null,
    
        success: null
    }
})
class Request extends Base {
    @config
    static thenable = true;

    @config
    owner = null;
    
    @config
    options = null;

    @config
    timeout = null;

    //---------------------------------------------------------------------------------
    // Life-cycle

    setup () {
        this.options.request = this;
    }

    dtor () {
        this.abort();
    }

    //---------------------------------------------------------------------------------
    // Methods (alphabetic order)

    abort () {
        let me = this;

        me.clearTimer();

        if (!me.timedout) {
            me.aborted = true;
        }

        me.abort = emptyFn;
    }

    clearTimer () {
        this.watchDog.cancel();
    }
    
    createException () {
        let me = this;
        let result = {
            request: me,
            requestId: me.id,
            status: me.aborted ? -1 : 0,
            statusText: me.aborted ? 'Transaction aborted' : 'Communication failure',
            getResponseHeader: me._getHeader,
            getAllResponseHeaders: me._getHeaders
        };
        
        if (me.aborted) {
            result.aborted = true;
        }
        
        if (me.timedout) {
            result.timedout = true;
        }
        
        return result;
    }

    onComplete () {
        let me = this;
        let result = me.result;
        let err;

        me.completed = true;

        me.clearTimer();
        
        if (me.success) {
            me._completionOK(result);
        }
        else {
            err = new Error(result.statusText);

            err.request = me;
            err.response = result;

            me._completionFail(err);
        }
    }

    /**
     * Start the request.
     */
    start () {
        let me = this;
        let timeout = me.timeout;
        
        if (timeout && me.async) {
            me.watchDog.delay = timeout;
            me.watchDog();
        }
        
        return me;
    }
    
    @buffered(1)
    watchDog () {
        this.timedout = true;

        this.abort(true);
    }

    _getHeader (name) {
        let headers = this.headers;
        
        return headers && headers[name.toLowerCase()];
    }

    _getHeaders () {
        return this.headers;
    }

    /**
     * @property {Boolean} loading
     * This property is `true` if this request is in progress.
     */
}

export { Request };
