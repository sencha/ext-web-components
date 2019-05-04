import {
    //<debug>
    assert, assertIn, typeOf,
    unreapableSym,
    //</debug>

    Ext, Deferred, Destroyable, Empty,
    copy, destroy, emptyFn, getOwnDescriptors, is, prototype, raise,
    defineProps, defProp
} from './Misc';

const deliveries = {
    all: {
        all: true,
        first: false,
        last: false
    },

    first: {
        all: false,
        first: true,
        last: false
    },

    last: {
        all: false,
        first: false,
        last: true
    }
};

// milliseconds-per-frame
const MSPF = 1000 / 60;

function bogusTimer (promise) {
    return raise(`Invalid use of Timer #${this.id} after calling destroy`, promise);
}

//<debug>
function bogusInvoker () {
    raise(`Invalid use of Timer method ${this.bound} after calling destroy`);
}

bogusInvoker[unreapableSym] = bogusTimer[unreapableSym] = true;
//</debug>


//------------------------------------------------------------------------------------

function bindTimer (me, name, invoker) {
    let timers = me.$timers;
    let boundInvoker;
    
    if (!timers) {
        (timers = []).byName = new Empty();

        defProp(me, '$timers', timers, 'cw');

        if (me.isDestroyable) {
            me.conjoin(timers);
        }
    }
    
    boundInvoker = invoker.bind(me);
    
    return boundInvoker.wrapper;
}

//------------------------------------------------------------------------------------

/**
 * This class manages calling user's timer functions. There are two basic ways to use
 * `Invoker` objects: create a function wrapper to call the user's function as prescribed
 * by the given options; just parse out the optional arguments and hold the invocation
 * plan to be used by other calling mechanisms.
 * 
 * Since the first (primary) use case does its work using the result of the second, it is
 * simpler to start there. When constructed, an `Invoker` is given the same positional
 * arguments that timer creation functions accept:
 * 
 *      new Invoker('method', scope, delay, args);
 * 
 * Since several signatures are possible due to default arguments and type inference, it
 * is somewhat involved to deduce the intent:
 * 
 *      new Invoker(fn, 30);            // call fn in 30ms using 'timeout' Timer
 *      new Invoker(fn, 'asap');        // call fn using 'asap' Timer
 *      new Invoker(fn, obj, 50);       // call fn.call(obj) in 50ms
 *      new Invoker(fn, obj, 'raf');    // call fn.call(obj) via RequestAnimationFrame
 *      new Invoker(fn, 50, { opts });  // call fn in 50ms w/opts config options
 * 
 * The `Invoker` constructor will perform all of the deductive steps and store the results
 * in the follow properties:
 * 
 *  - `method`: The function to call.
 *  - `scope`: The `this` pointer to use when calling `method`.
 *  - `delay`: The millisecond delay to use when scheduling `method` calls.
 *  - `args`: The `arguments` to pass to the `method`.
 *  - `type`: The type of `Timer` to use to schedule `method` calls.
 * 
 * If the first argument is an object, that object's properties are used to configure
 * the `Invoker`.
 * 
 * The primary use case is to use these options deduced from construction to produce the
 * 'wrapper' function. The `wrapper` function is used as a stand-in function for the user
 * `method`. That is to say, the arguments passed to `wrapper` are (eventually) delivered
 * to the user's `method` via the timer's call of the `Invoker` instance's `tick` method.
 * 
 * The `wrapper` method has two distinct modes of operation: bound and unbound. Normally
 * a simple function is wrapped in an unbound way. That is to say, calls to the `wrapper`
 * function are funneled through a single `Timer` that is lazily created when needed. The
 * unbound behavior is also appropriate to static class methods, however, not appropriate
 * for class instance methods.
 * 
 * For instance methods the `wrapper` is used in bound mode. In bound mode, the `wrapper`
 * function associates `Timer` instances with `this` pointer of the instance. The `Base`
 * class handles automatically destroying these timers when `destroy()` is called.
 * 
 * Some of the other `Invoker` config options are:
 * 
 *  - `deliver`: How arguments passed to multiple calls to `wrapper` are consolidated.
 *  - `trigger`: How multiple calls to `wrapper` affect the `Timer`.
 */
@prototype({
    /**
     * @cfg {Array} args
     * An optional arguments array that will be used in place of any arguments passed to
     * the generated wrapper function.
     */
    args: null,
    
    async: false,

    /**
     * @cfg {String} bound
     * The name by which this `Invoker` should bind its timer. Bound invokers create
     * chained instances of themselves keyed by this name on the `Timer.symbols.bound`
     * expando object stored on the `scope` object.
     */
    bound: null,

    deferred: null,

    /**
     * @cfg {Number} delay
     * The number of milliseconds to delay on calls to the specified `method`.
     */
    delay: 0,

    /**
     * @cfg {'all'/'first'/'last'} [deliver='last']
     * Set to `'first'` to lock in the first `this` and `arguments` passed to the `wrapper`
     * function even if multiple calls are made while a call to the target is pending. By
     * default, the `'last'` delivery option indicates that multiple calls replace
     * previously captured `this` and `arguments` values. Set to `'all'` to accumulate the
     * `arguments` for all calls in an array and pass that to `method`.
     */
    deliver: 'last',

    destroyed: false,
    
    got: null,

    immediate: false,

    lastTime: 0,
    
    /**
     * @cfg {Function/String} method
     * The target function or name of the method on the given `this` object.
     */
    method: null,

    /**
     * @property {Object} owner
     * The object that owns this invoker.
     */
    owner: null,

    /**
     * @cfg {Object} scope
     * The `this` pointer for the `method`. When the `method` is a string, that method
     * must exist on the specified object.
     */
    scope: null,

    suspended: 0,
    
    timer: null,

    trigger: 'trailing',
    
    type: 'timeout',
    
    wrapper: null
})
class Invoker extends Destroyable {
    /**
     * @property triggers
     * This object hold methods named by the value of the `trigger` config. They accept
     * an `Invoker` instance and return the `wrapper` function.
     * @private
     */
    static triggers = {
        leading (invoker) {
            return function (...callArgs) {
                let target = invoker.capture(this, callArgs);
                let timer;
                
                if (!target.suspended && !target.immediate) {
                    timer = target.getTimer();

                    timer.start();  // do not reschedule (i.e., start not restart)
                }

                return target.result(this);
            };
        },

        trailing (invoker) {
            return function (...callArgs) {
                let target = invoker.capture(this, callArgs);
                let timer;

                if (!target.suspended && !target.immediate) {
                    timer = target.getTimer();

                    timer.restart();
                }

                return target.result(this);
            };
        },

        throttle (invoker) {
            return function (...callArgs) {
                let target = invoker.capture(this, callArgs);

                if (!target.suspended && !target.immediate) {
                    let delay = invoker.delay;
                    let elapsed = invoker.getTicks() - target.lastTime;
                    let later = elapsed < delay;
                    let timer = target.getTimer(/* autoCreate = */later);

                    if (later) {
                        if (!timer.active) {
                            timer.delay = delay - elapsed;
                            timer.start();
                        }
                    }
                    else {
                        if (timer) {
                            timer.stop();
                        }

                        target.tick();
                    }
                }

                return target.result(this);
            };
        }
    };
    
    static wrapperApi = {
        // NOTE: `this` is the `wrapper` function:

        //------------------------
        // Properties

        get async () {
            return this.invoker.async;
        },

        set async (value) {
            this.invoker.async = value;
        },

        get delay () {
            return this.invoker.delay;
        },

        set delay (value) {
            let invoker = this.invoker;
            let timer = invoker.timer;
            
            invoker.delay = value;
            
            if (timer) {
                timer.delay = value;
                
                if (timer.active) {
                    timer.restart();
                }
            }
        },

        get immediate () {
            return this.invoker.immediate;
        },

        set immediate (value) {
            if (value) {
                this.invoker.flush();
            }

            this.invoker.immediate = value;
        },

        get pending () {
            let timer = this.timer;
            
            return timer ? timer.active : false;
        },
        
        get suspended () {
            return this.invoker.suspended > 0;
        },
        
        get timer () {
            return this.invoker.timer;
        },

        //------------------------
        // Methods

        cancel () {
            this.invoker.cancel();
        },

        done () {
            return this.invoker.getTimer().tock();
        },

        flush () {
            return this.invoker.flush();
        },

        now (...callArgs) {
            this(...callArgs);

            return this.invoker.flush();
        },

        resume (all) {
            this.invoker.resume(all);
        },

        suspend () {
            this.invoker.suspend();
        }
    };
    
    constructor (method, scope, delay, args) {
        super();

        let me = this;
        let t;
        
        if (typeof method === 'object') {
            copy(me, method);
        }
        else {
            t = typeof scope;
            
            if (t === 'number' || t === 'string') {
                // scope is not an object
                args = delay;
                delay = scope;
                scope = null;
            }

            me.method = method;
            me.scope = scope || null;

            if (delay in Timer.api) {
                me.type = delay;
            }
            else if (delay && typeof delay === 'object') {
                args = delay;
            }
            else if (delay != null) {
                me.delay = delay;
            }

            if (args) {
                if (is.array(args)) {
                    me.args = args;
                }
                else {
                    copy(me, args);
                }
            }
        }

        //<debug>
        assertIn(me.type, Timer.api, `Invalid Timer type "{0}" (expected one of {1})`);
        assertIn(me.deliver, deliveries, 'Invalid delivery type "{0}" (expected {1})');
        assertIn(me.trigger, Invoker.triggers, 'Invalid trigger type "{0}" (expected {1})');
        
        assert(me.type !== 'timeout' || typeof me.delay === 'number',
               'Timer delay must be a number of milliseconds');
        //</debug>
        
        if (!me.hasOwnProperty('trigger')) {
            me.trigger = Timer.api[me.type].defaultTrigger;
        }

        me.named = typeof me.method === 'string';
        me.deliver = deliveries[me.deliver];
    }
    
    destruct () {
        destroy(this.timer);

        //<debug>
        this.getTimer = this.tick = this.wrap = bogusInvoker;
        //</debug>

        super.destruct();
    }
    
    bind (scope) {
        let boundInvoker = Object.create(this);
        let name = boundInvoker.bound;
        let timers = scope.$timers;

        boundInvoker.scope = scope;

        timers.push(timers.byName[name] = boundInvoker);

        defProp(scope, name, boundInvoker.wrap(), 'cw');
        
        return boundInvoker;
    }

    cancel () {
        let timer = this.timer;

        if (timer) {
            timer.stop();
            this.got = null;  // clear scope/args from any calls
        }
    }

    /**
     * This method is called by the `wrapper` function to track the `this` (i.e., `scope`)
     * pointer and arguments it receives.
     * 
     * @param {Object} scope
     * @param {Array} args
     * @returns {Invoker}
     */
    capture (scope, args) {
        // The target may be this instance or an instance bound to the scope object:
        let me = this;
        let deliver, got;
        
        if (me.async && !me.deferred) {
            me.deferred = new Deferred();
            // TODO test case needed for call when async in progress
        }
        
        if (!me.suspended) {
            deliver = me.deliver;
            got = me.got || (me.got = []);

            if (deliver.all) {
                got[0] = scope;
                (got[1] || (got[1] = [])).push(args);
            }
            else if (!got[1] || deliver.last) {
                got[0] = scope;
                got[1] = me.args || (args.length && args) || null;
            }
        }
        
        return me;
    }
    
    createTimer () {
        let me = this;

        return new Timer({
            type: me.type,
            args: me.args,
            delay: me.delay,
            tick: 'tick',
            scope: me,
            owner: me
        });
    }

    flush () {
        let timer = this.timer;
        let ret;
        
        if (timer && timer.active) {
            timer.stop();
            ret = this.tick();
        }
        
        return ret;
    }
    
    getTicks () {
        // This method is here to allow tests to mock it...
        return Ext.ticks();
    }
    
    getTimer (autoCreate = true) {
        return this.timer || (autoCreate ? this.timer = this.createTimer() : null);
    }
    
    result (instance) {
        let me = this;
        let deferred = me.deferred;
        let ret = instance;
        
        if (me.suspended) {
            me.deferred = null;

            if (deferred) {
                deferred.resolve(instance);
            }
        }
        else {
            if (me.immediate) {
                ret = me.tick();
            }
        }
        
        return deferred ? deferred.promise : ret;
    }
    
    resume (all) {
        let n = this.suspended;

        if (n) {
            this.suspended = all ? 0 : (n - 1);
        }
    }
    
    suspend () {
        let timer = this.timer;

        ++this.suspended;

        if (timer) {
            timer.stop();
        }
    }
    
    tick () {
        let me = this;
        let deferred = me.deferred;
        let method = me.method;
        let scope = me.scope;
        let [ that, args ] = me.got;
        let result;

        me.got = null;

        try {
            if (me.named) {
                if (args) {
                    result = scope[method](...args);
                }
                else {
                    result = scope[method]();
                }
            }
            else if (args) {
                result = method.apply(scope || that, args);
            }
            else {
                result = method.call(scope || that);
            }
            
            if (deferred) {
                me.deferred = null;
                deferred.resolve(result);
            }
            
            return result;
        }
        catch (e) {
            if (deferred) {
                me.deferred = null;
                deferred.reject(e);
            }
            else {
                throw e;
            }
        }
        finally {
            me.lastTime = Ext.ticks();
        }
    }

    wrap () {
        let me = this;
        let wrapper = me.wrapper = Invoker.triggers[me.trigger](me);

        wrapper.invoker = me;
        
        defineProps(wrapper, Invoker._wrapperApi);

        return wrapper;
    }
}

Invoker._wrapperApi = getOwnDescriptors(Invoker.wrapperApi).props;

//------------------------------------------------------------------------------------

/**
 * Timers are reusable, destroyable objects that call user-supplied methods at a later time.
 * In many cases timers are created and used for only one call cycle.
 *
 * The simplest way to create such timers is using one of the various static methods. The
 * set of factory methods that start single-firing timers are:
 *
 *  - `{@link #static-method!once once}`
 *  - `{@link #static-method!asap asap}`
 *  - `{@link #static-method!anim anim}`
 *
 * These method create repeating timers are:
 *
 *  - `{@link #static-method!repeat repeat}`
 *  - `{@link #static-method!anim animation}`
 *
 * To create timers and start them at a later time, the analogous methods are:
 *
 *  - `{@link #static-method!once oneShot}`
 *  - `{@link #static-method!asap createAsap}`
 *  - `{@link #static-method!anim animFrame}`
 *  - `{@link #static-method!repeat repeater}`
 *  - `{@link #static-method!anim animator}`
 *
 * Example usage:
 *
 *      Timer.once(function () {
 *          // stuff to do 100ms in the future
 *      }, 100);
 *
 *      Timer.asap(function () {
 *          // stuff to do as soon as possible after returning from this call stack.
 *      });
 *
 * To manage timers, simply capture the returned `Timer` instance:
 *
 *      let timer = Timer.once(...);
 *
 *      timer.destroy();  // stop any pending callback
 *
 * This is most commonly needed when using a repeating timer:
 *
 *      let timer = Timer.repeat(function () {
 *          // stuff to do every 500ms
 *
 *          if (eventually) {
 *              timer.destroy();
 *          }
 *      }, 500);
 *
 * In some cases, timers can be created and reused many times.
 *
 *      class Foo {
 *          constructor () {
 *              // The following timer is only created and not been yet started...
 *              //
 *              this.timer = Timer.oneShot('someMethod', this, 100);
 *
 *              // or...
 *
 *              // If the timer should repeat, we can do the following instead. As
 *              // with oneShot(), repeater() simply creates but does not start()
 *              // the timer instance.
 *              //
 *              this.timer = Timer.repeater('otherMethod', this, 500);
 *          }
 *
 *          destroy () {
 *              this.timer.destroy();
 *          }
 *
 *          run () {
 *              this.timer.start();
 *
 *              // calls this.someMethod in 100ms
 *              // or...
 *              // calls this.otherMethod repeatedly every 500ms
 *          }
 *
 *          someMethod () {
 *              // stuff to do 100ms after run()
 *          }
 *
 *          otherMethod () {
 *              // stuff to do every 500ms...
 *
 *              if (eventually) {
 *                  this.timer.stop();
 *
 *                  // a stopped timer can start() again
 *              }
 *          }
 *      }
 *
 * ## Function Wrapping
 *
 * Another useful timing technique is to wrap functions to automatically create timers
 * when called.
 *
 * The most common wrapper is `{@link #static-method!buffer buffer}`:
 *
 *      function sayHello (name) {
 *          console.log('Hello ' + name);
 *      }
 *
 *      let hello = Timer.buffer(sayHello, 100);  // buffer calls by 100ms
 *
 *      hello('Bill');
 *      hello('Ted');
 *
 *      ... 100ms later...
 *      > Hello Ted
 *
 * Another useful wrapper is `{@link #static-method!throttle throttle}`:
 *
 *      function sayHello (name) {
 *          console.log('Hello ' + name);
 *      }
 *
 *      let hello = Timer.throttle(sayHello, 100);  // buffer calls by 100ms
 *
 *      hello('Bill');
 *      > Hello Bill    (immediately)
 *
 *      hello('Ted');
 *      hello('Fred');
 *
 *      ... 100ms later...
 *      > Hello Fred
 *
 *      hello('Barb');
 *      > Hello Barb    (immediately)
 *      hello('Wanda');
 *
 *      ... 100ms later...
 *      > Hello Wanda
 */
@prototype({
    /**
     * @property {Boolean} active
     * This property is managed by the `start` and `stop` methods. It is `true` when the
     * timer is pending and `false` otherwise.
     * @readonly
     */
    active: false,

    generation: 0,
    
    owner: null,

    /**
     * @property $tid
     * The internal system timer id (the value returned by `setTimeout` or other API).
     * This will be `null` if there is no system provided timer id (such as when using
     * Promise.resolve to schedule callbacks or via the shared animation frame timer).
     * @readonly
     * @private
     */
    $tid: null,

    $tock: null,

    //---------------------------------------------------------------------------
    // Configs

    /**
     * @cfg {Array} args
     * An array of arguments to pass to the `tick` function.
     */
    args: null,

    /**
     * @cfg {Number} delay
     * The number of milliseconds to delay before call the `tick` callback. This value
     * does not apply when using `asap` timers.
     */
    delay: 0,

    /**
     * @cfg {Boolean} idle
     * Set to `false` to prevent the call to `Ext.fireIdle()` after the timer fires.
     * @private
     */
    idle: true,

    /**
     * @cfg {Boolean} repeat
     * Set to `true` to restart the timer after each `tick`. Such timers must be manually
     * stopped or destroyed.
     */
    repeat: false,

    /**
     * @cfg {Object} scope
     * The `this` pointer to use when calling the `tick` callback.
     */
    scope: null,

    /**
     * @cfg {Function/String} tick (required)
     * The method to call when time timer fires. This can be the function itself or the
     * name of the method. This config goes along with the `scope` config to establish
     * the `this` pointer for method calls or named method lookup.
     */
    tick: null,

    /**
     * @cfg {'asap'/'idle'/'raf'/'timeout'} type
     * The type of this timer. The default type ('timeout') uses the `setTimeout` API to
     * provide the timer. This config cannot be changed after a timer is created.
     */
    type: 'timeout'
})
class Timer extends Destroyable {
    /**
     * @property {Map} live
     * This Map holds all `active` timers keyed by their `id`.
     * @static
     * @readonly
     */
    static live = new Map();

    /**
     * @property {Number} nextId
     * This value that will be assigned to the next timer's `id` (and then incremented).
     * @static
     * @private
     */
    static nextId = 1;

    /**
     * @property {RegExp} notScopeRe
     * This regex is used to reject parameters as valid `scope` values based on `typeof`.
     * @static
     * @private
     */
    static notScopeRe = /^(?:number|boolean|string)$/;

    /**
     * @property _frameId
     * The timer id returned by the last call to `requestAnimationFrame`.
     * @static
     * @private
     */
    static _frameId = null;

    /**
     * @property {Number} _framePending
     * The `Ext.ticks()` value of the last call to `requestAnimationFrame`.
     * @static
     * @private
     */
    static _framePending = 0;

    /**
     * @property {Object} api
     * This object holds timer management API implementations. Each API consists of a
     * method that accepts a timer instance and returns a cancel function.
     * @static
     * @private
     */
    static api = {
        asap (timer) {
            let queue = Timer._queue;
            let cancel = false;
            
            if (!queue) {
                Timer._queue = queue = Promise.resolve();
            }

            queue.then(() => {
                if (!cancel) {
                    timer.onTick();
                }
            });

            // we cannot cancel a Promise.then callback, so we just flag it...
            return () => {
                cancel = true;
            };
        },
        
        asap0 (timer) {
            timer.delay = 0;

            return Timer.api.timeout(timer);
        },

        idle (timer) {
            Ext.once('idle', timer.onTick);

            timer.idle = false;  // do not call fireIdle onTick()

            return () => {
                Ext.un('idle', timer.onTick);
            };
        },

        immediate (timer) {
            // IE (and Node.js) provide this API which is useful since IE does not
            // provide native Promise support.
            let id = timer.$tid = setImmediate(timer.onTick);

            return () => {
                if (id !== null && id === timer.$tid) {
                    clearImmediate(id);
                    timer.$tid = id = null;
                }
            };
        },

        raf () {
            // animationFrame timers are just tracked as active in "live" and then
            // dispatched as a group when we get the next frame. No need to mess with
            // cancelAnimationFrame then since we'd have to count the active timers.
            Timer._requestFrame();

            return emptyFn;
        },

        timeout (timer) {
            let id = timer.$tid = setTimeout(timer.onTick, timer.delay);

            return () => {
                if (id !== null && id === timer.$tid) {
                    clearTimeout(id);
                    timer.$tid = id = null;
                }
            };
        }
    };
    
    //---------------------------------------------------------------------------
    // Life-cycle

    constructor (config) {
        super();

        let me = this;

        copy(me, config);

        me.id = ++Timer.nextId;

        me.onTick = function () {
            me.$tid = null;

            // if (Ext.elevateFunction) {
            //     Ext.elevateFunction(me._onTick, me);
            // }

            me._onTick();
        };
    }

    destruct () {
        let me = this;
        let tock = me.$tock;

        me.$tock = null;

        if (tock) {
            tock.reject(new Error(`Timer #${me.id} destroyed`));
        }

        me.stop();
        me.stop = emptyFn;

        //<debug>
        me.start = bogusTimer;
        //</debug>
        
        super.destruct();
    }

    /**
     * Stops and (optionally) reconfigures this timer.
     * @param {Object/Number} [config] A new `delay` value or set of config options.
     * @return {Timer} this
     * @chainable
     */
    reset (config) {
        this.stop();

        if (typeof config === 'number') {
            this.delay = config;
        }
        else if (config) {
            copy(this, config);
        }

        return this;
    }

    /**
     * Restarts and (optionally) reconfigures this timer.
     * @param {Object/Number} [config] A new `delay` value or set of config options.
     * @return {Timer} this
     * @chainable
     */
    restart (config) {
        return this.reset(config).start();
    }

    /**
     * Starts this timer instance using its config options. If this timer is already
     * `active`, this method does nothing.
     * @return {Timer} this
     * @chainable
     */
    start () {
        let me = this;

        if (!me.active) {
            Timer.live.set(me.id, me);
            me.active = true;
        }

        if (!me.timerId) {
            // timerId signals that we have an system timer pending which may not be
            // the case even if me.active is true (when that timer fires for example).
            me.timerId = Timer.api[me.type](me);
            ++me.generation;
        }

        return me;
    }

    /**
     * Stops this timer. If this timer is not `active` this method does nothing. Unlike
     * `destroy`, a timer that has had stop() called can be reused by calling start().
     * @return {Timer} this
     * @chainable
     */
    stop () {
        let me = this;
        let timerId = me.timerId;

        if (timerId) {
            me.timerId = null;
            timerId();
        }

        if (me.active) {
            Timer.live.delete(me.id);

            me.active = false;
        }

        ++me.generation;

        return me;
    }
    
    tock () {
        let me = this;
        let tock = me.$tock;
        let promise;
        
        if (!tock) {
            if (me.destroyed) {
                return bogusTimer.call(this, true);
            }
            
            promise = new Promise((resolve, reject) => {
                me.$tock = tock = { resolve, reject };
            });
            
            tock.promise = promise;
        }
        
        return tock.promise;
    }

    //---------------------------------------------------------------------------------
    // Factory functions

    /**
     * This method schedules a repeating animation frame callback. Since this timer will
     * repeat, it must eventually be stopped or destroyed.
     *
     *      let timer = Timer.animation(() => {
     *          // stuff to do on each animation frame
     *
     *          if (done) {
     *              timer.destroy();
     *          }
     *      });
     *
     * For more details about timers consult the {@link Timer class documentation}.
     *
     * @param {String/Function} fn The method to call or its name in the given `scope`.
     * @param {Object} [scope] The `this` pointer for the `tick` method.
     * @return {Timer}
     */
    static animation (fn, scope, args) {
        return Timer.animator(fn, scope, args).start();
    }

    /**
     * This method creates an `animation` timer that can be started when needed.
     *
     *      let timer = Timer.animator(() => {
     *          // stuff to do on each animation frame
     *
     *          if (done) {
     *              timer.stop();  // not destroy so timer can be reused
     *          }
     *      });
     *
     *      timer.start(); // now schedule the callback
     *
     * This method is the same as `animation` except that the returned timer has not been
     * started.
     *
     * @param {String/Function} fn The method to call or its name in the given `scope`.
     * @param {Object} [scope] The `this` pointer for the `tick` method.
     * @return {Timer}
     */
    static animator (fn, scope, args) {
        return Timer._create([ fn, scope, args ], ['tick', 'this', 'args'], {
            type: 'raf',
            idle: false,
            repeat: true
        });
    }

    /**
     * This method schedules a callback "as soon as possible" after leaving this trip in from
     * the message queue.
     *
     *      Timer.asap(() => {
     *          // stuff to do really soon
     *      });
     *
     * The callback can be cancelled using the returned timer instance.
     *
     *      let timer = Timer.asap(() => {
     *          // stuff to do really soon
     *      });
     *
     *      timer.destroy();
     *
     * For more details about timers consult the {@link Timer class documentation}.
     *
     * **NOTE:** Using this callback technique may not leave the browser time to paint itself
     * if used for too much continuous work, so use sparingly.
     *
     * @param {String/Function} fn The method to call or its name in the given `scope`.
     * @param {Object} [scope] The `this` pointer for the `tick` method.
     * @return {Timer}
     */
    static asap (fn, scope, args) {
        return Timer.createAsap(fn, scope, args).start();
    }

    /**
     * This method creates an `asap` timer that can be started when needed.
     *
     *      let timer = Timer.createAsap(() => {
     *          // stuff to do really soon
     *      });
     *
     *      timer.start(); // now schedule the callback
     *
     * This method is the same as `asap` except that the returned timer has not been started.
     *
     * @param {String/Function} fn The method to call or its name in the given `scope`.
     * @param {Object} [scope] The `this` pointer for the `tick` method.
     * @return {Timer}
     */
    static createAsap (fn, scope, args) {
        return Timer._create([fn, scope, args], ['tick', 'scope', 'args'], {
            type: 'asap'
        });
    }
    
    /**
     * This method schedules a call to the provided method a given number of milliseconds in
     * the future.
     *
     *      Timer.once(() => {
     *          // stuff to do in 100ms
     *      }, 100);
     *
     * The callback can be cancelled using the returned timer instance.
     *
     *      let timer = Timer.once(() => {
     *          // stuff to do in 100ms
     *      }, 100);
     *
     *      timer.destroy();
     *
     * @param {String/Function} fn The method to call or its name in the given `scope`.
     * @param {Object} [scope] The `this` pointer for the `tick` method.
     * @param {Number} [delay=0] The number of milliseconds to wait before calling `tick`.
     * @return {Timer}
     */
    static once (fn, scope, delay, args) {
        return Timer.oneShot(fn, scope, delay, args).start();
    }
    
    /**
     * This method creates an `once` timer that can be started when needed.
     *
     *      let timer = Timer.oneShot(() => {
     *          // stuff to do in 100ms
     *      }, 100);
     *
     *      timer.start(); // now schedule the callback
     *
     * This method is the same as `once` except that the returned timer has not been started.
     * In other words, `Timer.once` could be implemented like this:
     *
     *      static once (...args) {
     *          let timer = Timer.oneShot(...args);
     *          timer.start();
     *          return timer;
     *      }
     *
     * @param {String/Function} fn The method to call or its name in the given `scope`.
     * @param {Object} [scope] The `this` pointer for the `tick` method.
     * @param {Number} [delay=0] The number of milliseconds to wait before calling `tick`.
     * @return {Timer}
     */
    static oneShot (fn, scope, delay, args) {
        return Timer._create([ fn, scope, delay, args ], ['tick', 'scope', 'delay', 'args'], {
            type: 'timeout'
        });
    }

    /**
     * This method schedules a animation frame callback.
     *
     *      Timer.raf(() => {
     *          // stuff to do at the next animation frame
     *      });
     *
     * Often, animations may take several steps. One way to do this is to do some work in
     * one frame and request another if there is more to do:
     *
     *      let timer = Timer.raf(() => {
     *          // stuff to do at the next animation frame
     *
     *          if (more) {
     *              timer.start();  // schedule another frame
     *          }
     *      });
     *
     * The callback can be cancelled using the returned timer instance.
     *
     *      let timer = Timer.raf(() => {
     *          // stuff to do at the next animation frame
     *      });
     *
     *      timer.destroy();
     *
     * For more details about timers consult the {@link Timer class documentation}.
     *
     * @param {String/Function} fn The method to call or its name in the given `scope`.
     * @param {Object} [scope] The `this` pointer for the `tick` method.
     * @return {Timer}
     */
    static raf (fn, scope, args) {
        return Timer.createRaf(fn, scope, args).start();
    }

    /**
     * This method creates an `raf` timer that can be started when needed.
     *
     *      let timer = Timer.createRaf(() => {
     *          // stuff to do on animation frame
     *      });
     *
     *      timer.start(); // now schedule the callback
     *
     * This method is the same as `raf` except that the returned timer has not been started.
     *
     * @param {String/Function} fn The method to call or its name in the given `scope`.
     * @param {Object} [scope] The `this` pointer for the `tick` method.
     * @return {Timer}
     */
    static createRaf (fn, scope, args) {
        return Timer._create([ fn, scope, args ], ['tick', 'this', 'args'], {
            type: 'raf',
            idle: false
        });
    }

    /**
     * This method schedules a repeating calls to the specified method every given number of
     * milliseconds.
     *
     *      Timer.repeat(() => {
     *          // stuff to do every 500ms
     *      }, 500);
     *
     * The callback can be cancelled using the returned timer instance.
     *
     *      let timer = Timer.repeat(() => {
     *          // stuff to do every 500ms
     *
     *          if (eventually) {
     *              timer.destroy();
     *          }
     *      }, 500);
     *
     * @param {String/Function} fn The method to call or its name in the given `scope`.
     * @param {Object} [scope] The `this` pointer for the `tick` method.
     * @param {Number} [delay=0] The number of milliseconds to wait before calling `tick`.
     * @return {Timer}
     */
    static repeat (fn, scope, delay, args) {
        return Timer.repeater(fn, scope, delay, args).start();
    }

    /**
     * This method creates an `repeat` timer that can be started when needed.
     *
     *      let timer = Timer.repeater(() => {
     *          // stuff to do every 500ms
     *
     *          if (eventually) {
     *              timer.stop();  // not destroy so timer can be reused
     *          }
     *      }, 500);
     *
     *      timer.start(); // now schedule the callback
     *
     * This method is the same as `repeat` except that the returned timer has not been
     * started.
     *
     * @param {String/Function} fn The method to call or its name in the given `scope`.
     * @param {Object} [scope] The `this` pointer for the `tick` method.
     * @param {Number} [delay=500] The number of milliseconds to wait before calling `tick`.
     * @return {Timer}
     */
    static repeater (fn, scope, delay, args) {
        return Timer._create([ fn, scope, delay, args ], ['tick', 'scope', 'delay', 'args'], {
            type: 'timeout',
            repeat: true
        });
    }
    
    //---------------------------------------------------------------------------------
    // Function Wrapper Helpers

    /**
     * This method wraps a given function or method in a new function that will invoke
     * the specified target after it is invoked. If the wrapper function is invoked again
     * while a previous invocation is still pending delivery to the target, the new
     * `this` pointer and `arguments` will either be ignored or will replace the original
     * values based on the `delivery` parameter.
     *
     * Each time the wrapper function is invoked, any pending delivery is rescheduled to
     * the full `delay` value.
     *
     * The `this` pointer and `arguments` passed to this wrapper function are available
     * to the target `method` unless a `scope` or `args` parameters are specified.
     *
     * Basic usage:
     *
     *      bufferedMethod = Timer.buffer('method', this, 500);
     *
     * @param {Function/String/Invoker} method The target function or name of the method
     * on the given `scope`. Alternatively, this can be a config object for the `Invoker`.
     *
     * @param {Object} [scope] The `this` pointer for the `method`. When the `method` is
     * a string, that method must exist on the `scope` object.
     *
     * @param {Number} delay The number of milliseconds to delay before calling the target
     * method.
     *
     * @param {Array/Invoker} [args] An optional arguments array that will be used in
     * place of any arguments passed to the returned wrapper function. Alternatively, this
     * argument can be a config object for the `Invoker`.
     *
     * @return {Function}
     */
    static buffer (method, scope, delay, args) {
        let invoker = new Invoker(method, scope, delay, args);

        invoker.trigger = 'trailing';

        return invoker.wrap();
    }

    /**
     * This method wraps a given function or method in a new function that will invoke
     * the specified target whenever it is invoked, but after a given `delay`.
     *
     * The `this` pointer and `arguments` passed to this wrapper function are available
     * to the target `method` unless a `scope` or `args` parameters are specified.
     *
     * Basic usage:
     *
     *      delayedMethod = Timer.delay('method', this, 100);
     *
     * @param {Function/String} method The target function or name of the method on the
     * given `scope`.
     *
     * @param {Object} [scope] The `this` pointer for the `method`. When the `method` is
     * a string, that method must exist on the `scope` object.
     *
     * @param {Number} delay The number of milliseconds to delay before calling the target
     * method.
     *
     * @param {Array} [args] An optional arguments array that will be used in place of
     * any arguments passed to the returned wrapper function.
     *
     * @return {Function}
     */
    static delay (method, scope, delay, args) {
        // Since each call to the returned wrapper function starts a new timer, we can
        // only create an Invoker to help parse the arguments.
        let invoker = new Invoker(method, scope, delay, args);

        let wrap = function (...args) {
            let timer = Timer.once(invoker.method, invoker.scope, invoker.delay);

            timer.creator = wrap;
            timer.args = invoker.args || args;
        };

        wrap.invoker = invoker;

        return wrap;
    }

    static framed (method, scope, args) {
        let invoker = new Invoker(method, scope, args);

        invoker.trigger = 'leading';
        invoker.type = 'raf';

        return invoker.wrap();
    }

    /**
     * This method wraps a given function or method in a new function that will limit the
     * rate at which the target method can be invoked. Each time the wrapper function is
     * called, if the time since the last invocation of the target is at least the `delay`
     * value, the call will proceed immediately. If the elapsed time since the last call
     * to the target is below the `delay`, a timer is started to call the target as soon
     * as the minimum time `delay` is reached.
     *
     * If the wrapper function is invoked again while a previous invocation is still
     * pending delivery to the target, the new `this` pointer and `arguments` will either
     * be ignored or will replace the original values based on the `delivery` parameter.
     *
     * The `this` pointer and `arguments` passed to this wrapper function are available
     * to the target `method` unless a `scope` or `args` parameters are specified.
     *
     * Basic usage:
     *
     *      throttledMethod = Timer.throttle('method', this, 500);
     *
     * @param {Function/String/Invoker} method The target function or name of the method
     * on the given `scope`. If a single argument is passed, it is used as the config object
     * for the `Invoker`.
     *
     * @param {Object} [scope] The `this` pointer for the `method`. When the `method` is
     * a string, that method must exist on the `scope` object.
     *
     * @param {Number} delay The minimum number of milliseconds allowed between successive
     * calls to the target `method`.
     *
     * @param {Array} [args] An optional arguments array that will be used in place of
     * any arguments passed to the returned wrapper function.
     *
     * @return {Function}
     */
    static throttle (method, scope, delay, args) {
        let invoker = new Invoker(method, scope, delay, args);

        invoker.trigger = 'throttle';

        return invoker.wrap();
    }

    //---------------------------------------------------------------------------------
    // Internals
    
    static _create (args, argNames, defaults) {
        let config = args[0];
        let k = args.length;
        let options = { ...defaults };
        let n, v, i, j;

        if (config && config.constructor === Object) {
            // If the user passes just one object parameter, it is a config
            // object, so copy its properties...
            copy(options, config);
        }
        else {
            // Otherwise, look at the args passed and line them up with the
            // argNames given to place each in the options object.
            for (i = j = 0, k = Math.min(argNames.length, k); i < k; ++i, ++j) {
                n = argNames[i];
                v = args[j];

                // if ((n === 'scope' && Timer.notScopeRe.test(typeof v)) ||
                //     (n === 'args' && v != null && !is.array(v))) {
                if (n === 'scope' && Timer.notScopeRe.test(typeof v)) {
                    // the scope arg cannot be of that type, so skip to the next one
                    n = argNames[++i];
                    // if (!(n = argNames[++i])) {
                    //     break;
                    // }
                }

                options[n] = v;
            }
        }

        return new Timer(options);
    }

    /**
     * This method is used to call the user callback.
     * @private
     */
    _fire () {
        let me = this;
        let args = me.args;
        let tick = me.tick;
        let scope = me.scope;
        let ret;

        if (tick.charAt) {
            ret = args ? scope[tick](...args) : scope[tick]();
        }
        else {
            ret = args ? tick.apply(scope, args) : tick.call(scope);
        }

        return ret;
    }

    /**
     * This method called when the timer expires. It handles calling the user callback
     * and restarting the timer if `repeat` is enabled (and `stop` or `destroy` was not
     * called in the user callback).
     * @private
     */
    _onTick () {
        let me = this;
        let gen, tock;

        me.timerId = null;

        if (me.active) {
            // Because we are calling user code here, we have several, subtle behavioral
            // use cases to consider:
            //
            //  Non-repeating
            //      - We stop() the timer before calling "tick" then:
            //
            //      A) "tick" calls start(), stop() or destroy()
            //          - We notice generation was tweaked and do nothing else. Timer is
            //            in whatever state the user got it into.
            //
            //      B) "tick" sets "repeat" to true
            //          - No tweak to generation so we proceed
            //          - We re-read me.repeat and see it is true so we act like it
            //            was repeating all along and start() the timer again.
            //
            //      C) "tick" does neither
            //          - generation was not tweaked and me.repeating is false so we call
            //            stop() again.
            //          - This does nothing because the timer is already stopped.
            //
            //  Repeating
            //      - We do not stop() so "active" is still true but timerId is null.
            //      - We call "tick" then:
            //
            //      A) "tick" calls start(), stop() or destroy()
            //          - We notice generation was tweaked and do nothing else. Timer is
            //            in whatever state the user got it into.
            //
            //      B) "tick" sets "repeat" to false
            //          - No tweak to generation so we proceed
            //          - We re-read me.repeat and see it is false so we call stop().
            //          - The timer is now fully stopped.
            //
            //      C) "tick" does neither
            //          - generation was not tweaked so we proceed to call start().
            //
            if (!me.repeat) {
                me.stop();
            }

            gen = me.generation;

            if (!(tock = me.$tock)) {
                me._fire();
            }
            else {
                // We need to discard this promise in prep for another tock() request
                me.$tock = null;

                try {
                    tock.resolve(me._fire());
                }
                catch (e) {
                    tock.reject(e);
                }
            }

            if (gen === me.generation) {
                if (me.repeat) {
                    me.start();
                }
                else {
                    me.stop();
                }
            }

            if (me.idle) {
                Ext.fireIdle();
            }
        }
    }

    //---------------------------------------------------------------------------------
    // Animation Frame Support

    /**
     * @property {Number} [frameDropLimit=3]
     * The maximum number of dropped frames since the most recent `requestAnimationFrame`
     * before re-requesting. In some cases (notably Electron) the animation frame may never
     * be delivered.
     * @static
     * @private
     */
    static get frameDropLimit () {
        return Timer._frameDropMax / MSPF;
    }

    static set frameDropLimit (value) {
        Timer._frameDropMax = MSPF * value;
    }

    // Browser support (http://caniuse.com/#feat=requestanimationframe):
    //
    //  - IE 10
    //
    //  - Chrome 24 (Nov 2012)
    //      webkitRequestAnimationFrame (added in Chrome 10, Mar 2011) had no cancel
    //      Chrome 22 (Jul 2012) added cancel
    //
    //  - Firefox 23 (June 2013)
    //      mozRequestAnimationFrame (added in FF 4, Mar 2011) has no cancel
    //      FF 11 (Jan 2012) added cancel
    //
    //  - Safari 6.1 (Oct 2013)
    //      webkitRequestAnimationFrame (added in Safari 6, July 2012)
    //
    //  - iOS Safari 7.1 (Mar 2014)
    //      webkitRequestAnimationFrame (added in Safari 6.1, Jan 2013)
    //
    // No need to use the legacy fallback functions.
    //
    static _raf = {
        // These API's are wrapped in an object to allow unit tests to mock them. Also,
        // we cannot (easily) make calls to these in the test run, so we ignore them on
        // our coverage:
        /* istanbul ignore next */
        cancel (id) {
            cancelAnimationFrame(id);
        },

        /* istanbul ignore next */
        create (fn) {
            return requestAnimationFrame(fn);
        }
    };

    /**
     * Fires all pending animation frame timers.
     * @private
     */
    static _fireFrames () {
        let timer;

        for (timer of Timer.live.values()) {
            if (timer.type === 'raf') {
                timer._onTick();
            }
        }
    }

    /**
     * This is the animation frame callback. It does some internal bookkeeping and calls
     * `_fireFrames`.
     * @private
     */
    static _frame () {
        Timer._framePending = 0;
        Timer._frameId = null;

        // if (Ext.elevateFunction) {
        //     Ext.elevateFunction(Timer._fireFrames);
        // }

        Timer._fireFrames();
    }

    /**
     * This method is called to request an animation frame. It is called any time an
     * animation timer is started.
     * @private
     */
    static _requestFrame () {
        let t = Ext.ticks();
        let frameId = Timer._frameId;

        // If we haven't requested a frame in a while, do so now. It is possible to
        // request frames and never get a callback, so we cannot simply remember the
        // frameId and avoid further calls to RAF. After a reasonable period has gone
        // by we must assume we won't be called for that frame.

        if (t - Timer._framePending > Timer._frameDropMax) {
            if (frameId) {
                // cancel the frame we requested (just in case)
                Timer._raf.cancel(frameId);
            }

            Timer._framePending = t;
            Timer._frameId = Timer._raf.create(Timer._frame);
        }
    }
} // class Timer

Timer.frameDropLimit = 3;  // calls the static setter

//-----------------------------------------------------------------------

// This IIFE is basically a bunch of feature detection and hence cannot really hit
// full coverage, so ignore it:
(/* istanbul ignore next */() => {
    let api = Timer.api;
    let key;

    if (typeof setImmediate !== 'function' || typeof clearImmediate !== 'function') {
        delete api.immediate;
    }
    
    // IE (and Node.js) have setImmediate, otherwise fall back to setTimeout(fn,0)
    if (typeof Promise === 'undefined') {
        api.asap = api.immediate || api.asap0;
    }

    for (key in api) {
        api[key].defaultTrigger = (key === 'timeout') ? 'trailing' : 'leading';
    }
})();

//-----------------------------------------------------------------------

function later (delay, options, defaults) {
    //<debug>
    assert(typeOf(delay) !== 'descriptor',
           '@{0}d requires parameters', defaults.trigger || 'buffere');
    //</debug>

    return descr => {
        let makeItSo = function (...args) {  // note: not an => function!
            return this[doName](...args);
        };

        let d = descr.descriptor;
        let fn = d.value;
        let name = descr.key;
        let doName = name + 'Now';
        let where = descr.placement;
        let instance = where !== 'static';
        let invoker = new Invoker(makeItSo, delay, copy(defaults, options));
        let descriptor, target;

        if (instance) {
            invoker.bound = name;

            // This getter is placed on the class prototype and is run only
            // on first get of the property. After this first call, the bind()
            // method on the invoker will defineProperty() on the wrapper for
            // direct access going forward.
            descriptor = {
                configurable: true,

                get () {
                    //<debug>
                    assert(this && this !== target, 'Cannot call bound timer method directly');
                    //</debug>

                    return bindTimer(this, name, invoker);
                }
            };
        }
        else {
            descriptor = {
                ...d,
                value: invoker.wrap()
            };
        }
        
        return {
            ...descr,
            descriptor,
            
            finisher (C) {
                target = instance ? C.prototype : (invoker.scope = C);
    
                //<debug>
                assert(!target.hasOwnProperty(doName),
                       // ex: "Class Foo has conflicting "fooNow" static method"
                       'Class {0} has conflicting "{1}" {2} method', C.name, doName, where);
                //</debug>

                defProp(target, doName, fn, 'cw');
            }
        };
    };
}

/**
 * This decorator is applied to class methods to convert them into buffered calls.
 * 
 * For example:
 * 
 *      class Something {
 *          @buffered(50)
 *          fooBar () {
 *              ...something costly
 *          }
 *      }
 * 
 * The method is used just like normal:
 * 
 *      let inst = new Something();
 *      
 *      inst.fooBar();
 * 
 * The difference, however, is that the "something costly" part is invoked 50ms after the
 * last such call. This means the method can be called many times in rapid succession and
 * the costly part will only run once and that after waiting 50ms to be sure the flood of
 * calls has settled down.
 * 
 * The original method (the "something costly") is placed on the class prototype with the
 * name "fooBarNow". Further, a few other help methods are added to the class prototype to
 * assist in managing the underlying timer. Has this all been written by hand (without
 * using this decorator), the code would look like this:
 * 
 *      class Something {
 *          fooBar () {
 *              // start/restart timer to delay call to fooBarNow
 *          }
 *          
 *          async fooBarDone () {
 *              await the next call to fooBarNow
 *          }
 *          
 *          fooBarNow () {
 *              ...something costly
 *          }
 *          
 *          get fooBarPending () {
 *              // return true if fooBarNow timer is created and active
 *          }
 *          
 *          fooBarCancel () {
 *              // if fooBarNow timer exists and is active, stop it
 *          }
 *          
 *          fooBarFlush () {
 *              // if fooBarNow timer exists and is active, stop it and flush the
 *              // pending call now.
 *          }
 *      }
 * 
 */
function buffered (delay, options) {
    return later(delay, options, {});
}

function throttled (delay, options) {
    return later(delay, options, { trigger: 'throttle' });
}

//-----------------------------------------------------------------------

export { Timer, buffered, throttled, Invoker };
