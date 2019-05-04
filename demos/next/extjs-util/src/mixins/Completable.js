import { Base, define, config, defProp } from '../../../extjs-core/src';

/**
 * A simple mixin that provides the `completion` Promise. This is used for classes that
 * have asynchronous state that does not fit well into a simple Promise.
 * 
 *      @define({
 *          mixins: [Completable]
 *      })
 *      class Request extends Base {
 *          //
 *      }
 *      
 *      @define
 *      class Connection extends Base {
 *          request (...) {
 *              let request = new Request(...);
 *              
 *              // prepare and send
 *              
 *              return request;
 *          }
 *      }
 *      
 *      export const Ajax = new Connection();
 *      
 * User code would look like this:
 *      
 *      let request = ajax.request(...);
 *      
 *      await request.completion();
 * 
 * The `Request` class in this example can declare itself as `thenable`:
 *
 *      @define({
 *          mixins: [Completable]
 *      })
 *      class Request extends Base {
 *          @config
 *          static thenable = true;
 *          
 *          //
 *      }
 * 
 * Doing so enables the following alternative:
 *      
 *      let request = await ajax.request(...);
 * 
 * When `thenable` is enabled for the `Request` class, a `then` method is provided that
 * automatically delegates to the `completion()` promise. In some cases, the benefits are
 * obvious in that the caller can opt to `await` in one step or delay the `await` and get
 * the request reference first.
 */
@define({
    prototype: {
        _deferred: null
    }
})
class Completable extends Base {
    /**
     * @cfg {Boolean} thenable
     * When `true`, this class will provide a `then` method and act like a Promise. This
     * promise instance is the `completion` promise.
     * @static
     */
    @config
    static thenable = false;
    
    dtor () {
        this._nonThenable();
    }

    static updateThenable (thenable) {
        let proto = this.prototype;

        proto.then = thenable ? proto._then : null;
    }

    /**
     * Returns a `Promise` for this object's eventual result.
     * @return {Promise}
     */
    completion () {
        let deferred = this._deferred;
        
        return (deferred && deferred.promise) || this._createPromise();
    }
    
    _then (...args) {
        return this.completion().then(...args);
    }

    /**
     * This method should be called when the asynchronous activity has failed.
     * @param {Error} err The `Error` instance to pass to the promise rejection (i.e., to
     * throw to an `async` method).
     * @private
     */
    _completionFail (err) {
        let deferred = this._deferred || (this._deferred = {});

        if (deferred.promise) {
            deferred.reject(err);
        }
        else {
            deferred.err = err;
        }
    }

    /**
     * This method should be called when the asynchronous activity has succeeded.
     * 
     * @param [result] Pass a result other than `this`.
     * @private
     */
    _completionOK (result = this) {
        let me = this;
        let deferred = me._deferred || (me._deferred = {});

        if (deferred.promise) {
            me._nonThenable();
            deferred.resolve(result);
        }
        else {
            deferred.ok = result;
        }
    }
    
    _createPromise () {
        let me = this;
        let ret = me._deferred || (me._deferred = {});
        
        ret.promise = new Promise((resolve, reject) => {
            ret.resolve = resolve;
            ret.reject = reject;
            
            if ('ok' in ret) {
                me._nonThenable();
                resolve(ret.ok);
            }
            else if ('err' in ret) {
                reject(ret.err);
            }
        });
        
        return ret.promise;
    }

    /**
     * Makes this instance no longer then-able. This is important when resolving the
     * promise to ourselves.
     * @private
     */
    _nonThenable () {
        defProp(this, 'then', null);
    }
}

export { Completable };
