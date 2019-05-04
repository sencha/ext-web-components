import {
    Ext, Empty, EMPTY,
    assert, canonicalName, defineProp, indexOf, is, remove, defProp
} from './Misc';

import { config, define } from './MetaClass';
import { Base } from './Base';
import { Config } from './Config';
import { Timer } from './Timer';

const actualSym = Symbol('actualListener');
const firingSym = Symbol('eventFiring');
const ownDataSym = Symbol('watchableOwnData');
const sortedSym = Symbol('watchersSorted');
const twinSym = Symbol('twinWatcherMethod');

const ownerSym = Symbol('owner');
const incrSym = Symbol('increment');
const decrSym = Symbol('decrement');

const watchSym = Config.symbols.watch;

const STOP = Symbol('stopFiring');

const cnames = canonicalName.cache;

const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Listeners are recorded in an array for efficiency. These constants name the elements
// of that array:
const FN = 0;
const SCOPE = 1;
const RESOLVE = 2;
const PRIORITY = 3;
const NAME = 4;

const ONCE = Object.freeze({ once: 1 });

const orderPriority = {
    before: 100,
    after: -100
};

// Differences
//  - No bubbled events
//  - Suspended events are discarded; they do not queue

// TODO delay: 'asap', 'idle', 'raf'
// TODO buffer: 'asap', 'idle', 'raf'
// TODO options: target, element, delegate, stopPropagation, preventDefault, stopEvent

const internals = {
    symbols: {
        decrement: decrSym,
        increment: incrSym,

        actualFn: actualSym,
        ownData: ownDataSym
    },
    
    options: new Empty({
        scope: 1,
        destroyable: 1,
        once: 1,
        single: 1,
        priority: 1,
        order: 1,

        delay: 1,
        buffer: 1,
        raf: 1
    }),

    wrappers: {
        buffer (name, listener, options) {
            let tickFn = (...args) => {
                Watchable._invokeListener(this, listener, args);
            };

            let fn = Timer.buffer(tickFn, options.buffer);

            return [ fn ];
        },

        delay (name, listener, options) {
            let tickFn = (...args) => {
                Watchable._invokeListener(this, listener, args);
            };

            let fn = Timer.delay(tickFn, options.delay);

            return [ fn ];
        },

        once (name, listener, options) {
            let counter = options.once;

            if (counter === true) {
                counter = 1;
            }

            let onceFn = (...args) => {
                if (!--counter) {
                    // To do the removal, we need the actual fn/scope:
                    let [fn, scope] = onceFn[actualSym];

                    this._updateListeners(0, name, fn, scope);
                }

                // "listener" will be the actual as long as once is the first wrapper:
                Watchable._invokeListener(this, listener, args);
            };

            return [onceFn];
        },

        raf (name, listener) {
            return [
                Timer.framed((...args) => {
                    Watchable._invokeListener(this, listener, args);
                })
            ];
        }
    },

    wrapperOrder: [
        // The once wrapper must come first (i.e., be wrapped first and called last)
        'once',

        // 'target',

        'raf',
        'delay',
        'buffer'
    ]
};

//----------------------------------------

/**
 * This class is created to correspond to a Watchable class. It is prototype-chained to
 * the HasListeners class created for its super class so that listeners recorded at the
 * level of that class are counted.
 */
function HasListeners () {}

// We use symbols to name our instance helper methods to ensure we don't collide with any
// user-defined event names.
Object.defineProperties(HasListeners.prototype = Object.create(Empty.prototype), {
    [decrSym]: {
        // value (ev, count) {
        value (ev) {
            // count is optionally passed when clearing listeners in bulk
            // e.g. when clearListeners is called on a component that has listeners that
            // were attached using the "delegate" option
            // if (count == null) {
            //     count = 1;
            // }
    
            if ((this[ev] -= 1) < 1) {
                // Delete this entry, since 0 does not mean no one is listening, just
                // that no one is *directly* listening. This allows the eventBus or
                // class observers to "poke" through and expose their presence.
                delete this[ev];
            }
        }
    },

    [incrSym]: {
        value (ev) {
            if (this.hasOwnProperty(ev)) {
                // if we already have listeners at this level, just increment the count...
                ++this[ev];
            }
            else {
                // otherwise, start the count at 1 (which hides whatever is in our prototype
                // chain)...
                this[ev] = 1;
            }
        }
    }
});

//----------------------------------------

class Relayer {
    static create (source, target, options) {
        let relay = target;

        if (!target || !target.isEventRelayer) {
            relay = new this(options);
            relay.target = target;
        }

        relay.source = source;

        let data = source.$watchable;
        let relayers = data.relayers;

        if (!relayers) {
            data.relayers = relayers = [ relay ];
            relayers[firingSym] = 0;
        }
        else if (!relayers.includes(relay)) {
            if (relayers[firingSym]) {
                data.relayers = relayers = fork(relayers);
            }

            relayers.push(relay);
        }

        return relay;
    }

    constructor (config) {
        let map = null;
        let wildcard = true;

        this.source = this.target = null;

        if (is.callable(config)) {
            this.relay = config;
            this.relayAsync = null;
        }
        else if (config) {
            map = new Empty();

            if (is.array(config)) {
                for (let event of config) {
                    map[event] = event;
                }
            }
            else {
                for (let event of Object.keys(config)) {
                    let val = config[event];

                    if (event !== '*' && (val === true || val === 1)) {
                        val = event;
                    }

                    map[event] = val;
                }
            }

            wildcard = '*' in map;
        }

        this.map = map;
        this.wildcard = wildcard;
    }

    destroy () {
        let source = this.source;
        let data = source.$watchable;
        let relayers = data.relayers;
        let index = indexOf(relayers, this);

        if (index > -1) {
            if (relayers[firingSym]) {
                data.relayers = relayers = fork(relayers);
            }

            relayers.splice(index, 1);
        }
    }

    doRelay (event, args) {
        return this.target.fireEventArgs(event, args);
    }
    
    doRelayAsync (event, args) {
        return this.target.fireEventArgsAsync(event, args);
    }
    
    hasListener (event) {
        let map = this.map;
        let ret = this.wildcard;
        
        if (map && event in map) {
            ret = !!map[event];
        }
        
        return ret;
    }

    relay (event, args) {
        let map = this.map;
        let entry, ret;

        if (!map) {
            ret = this.doRelay(event, args);
        }
        else {
            entry = (event in map) ? map[event] : map['*'];

            if (entry) {
                if (is.callable(entry)) {
                    ret = entry.call(this, event, args);
                }
                else {
                    // entry == true only for map['*']
                    ret = this.doRelay((entry === true) ? event : entry, args);
                }
            }
        }

        return ret;
    }

    async relayAsync (event, args) {
        let map = this.map;
        let entry, ret;

        if (!map) {
            ret = this.doRelayAsync(event, args);
        }
        else {
            entry = (event in map) ? map[event] : map['*'];

            if (entry) {
                if (is.callable(entry)) {
                    ret = await entry.call(this, event, args, true);
                }
                else {
                    ret = await this.doRelayAsync((entry === true) ? event : entry, args);
                }
            }
        }

        return ret;
    }
}

Relayer.prototype.isEventRelayer = true;

//----------------------------------------

class Token {
    constructor (instance, options) {
        this.instance = instance;
        this.listeners = [];
        this.options = options;
    }

    destroy () {
        for (let listener of this.listeners) {
            this.instance._removeListenerEntry(listener[NAME], listener);
        }
    }
}

//----------------------------------------

function fork (watchers) {
    let ret = watchers.slice();

    ret[firingSym] = 0;
    ret[sortedSym] = watchers[sortedSym];

    return ret;
}

function listen (instance, fn, scope, options) {
    let priority = options && (
        options.order ? orderPriority[options.order] : (options.priority || 0)
    );
    let listener = [ fn, scope, false, priority ];  // , name

    if (typeof scope === 'string' || (fn.charAt && !scope)) {
        //<debug>
        assert(instance.resolveListenerScope,
               'Watchable instance does not support scope resolution');
        //</debug>

        listener[RESOLVE] = true;
    }

    return listener;
}

function match (listener, fn, scope) {
    let [ lfn, lsc ] = listener[FN][actualSym] || listener;

    return fn === lfn && (scope ? lsc === scope : !lsc);
}

function sorter (lhs, rhs) {
    return rhs[PRIORITY] - lhs[PRIORITY];
}

function track (from, to, key) {
    let data = from.$watchable;
    let array = data[key];
    
    if (!array) {
        data[key] = [to];
    }
    else if (!array.includes(to)) {
        array.push(to);
    }
}

function twin (descr) {
    descr.descriptor.value[twinSym] = true;

    return descr;
}

//--------------------------------------------------------------------------------

@define({
    tags: [
        'isObservable',  // compat
        'isWatchable'
    ],

    prototype: {
        resolveListenerScope: null
    }
})
class Watchable extends Base {
    // Since we are a base for many things and mixed into others, keep our property
    // footprint small. This property is "package private" so is exposed here to allow
    // other modules (e.g., Timer and tests) to access these details.
    static _watchable = internals;

    //---------------------------------------------------------------------------
    // Configs

    @config({
        merge (value, existingValue, cls) {
            if (cls && value) {
                // Since we are a class config (or a "declarative listener), we fix
                // up the scope:
                let scope = value.scope;
                let sc = (scope === 'controller') ? 'self.controller' : (scope ? 0 : 'self');

                if (sc) {
                    value.scope = sc;
                }
            }

            // The stock shard merge process tracks each individual config unit as array
            // elements owned by each class and ultimately the instance. This is what we
            // need to isolate scopes to their respective listener block, so delegate the
            // rest of the work there:
            return Config.mergers.shard.call(this, value, existingValue, cls);
        }
    })
    listeners = null;

    //---------------------------------------------------------------------------
    // Life-cycle

    static initWatchable () {
        // Putting properties on the class makes them inherit to derived classes, which
        // is not desirable for much of what we need to track. This object is created for
        // each class to hold class-specific properties.
        let data = this[ownDataSym] = {
            eventMap: new Empty(),

            inbound: null,
            outbound: null
        };

        if (this === Watchable) {
            data.HasListeners = HasListeners;
        }
        else {
            let sup = Object.getPrototypeOf(this).$watchable;  // recursive

            data.HasListeners = function () {};
            
            data.HasListeners.prototype = Object.create(sup.hasListeners);
        }
        
        data.hasListeners = data.HasListeners.prototype;
        data.hasListeners[ownerSym] = this;
        
        return data;
    }
    
    initWatchable () {
        let data = {
            class: this.constructor.$watchable,

            eventMap: new Empty(),

            relayers: null,
            suspended: new Empty(),

            inbound: null,  // objects watching this object
            outbound: null  // objects being watched by this object
        };
        
        data.hasListeners = new data.class.HasListeners();

        defProp(this, '$watchable', data);
        
        return data;
    }
    
    dtor () {
        // This method will run very late in the cleanup process since this class is high
        // up in most class hierarchies. This means events can be fired by derived classes
        // during their dtor() sequence and listeners will still be associated.
        this.clearListeners();
    }

    //---------------------------------------------------------------------------
    // Static Properties

    static get $watchable () {
        return this.hasOwnProperty(ownDataSym) ? this[ownDataSym] : this.initWatchable();
    }
    
    static get hasListeners () {
        return this.$watchable.hasListeners;
    }

    //---------------------------------------------------------------------------
    // Instance Properties - These are defined as getters on the prototype but
    // replace themselves with their computed values on first use so that all
    // further use just reads an instance value (no method call).

    get $watchable () {
        // We use this property on instances just like on the class itself to provide
        // the same shape to our @twin methods. The class needs that indirection but
        // instances benefit from it since it avoids name collisions with the many
        // derived classes and allows us to have simple names.
        return this.initWatchable();
    }

    get hasListeners () {
        let ret = this.$watchable.hasListeners;

        defProp(this, 'hasListeners', ret);
        
        return ret;
    }
    
    //---------------------------------------------------------------------------
    // Public Methods
    
    applyListeners (listeners) {
        if (is.array(listeners)) {
            for (let item of listeners) {
                this.applyListeners(item);
            }
        }
        else {
            this.on(listeners);
        }
    }
    
    @twin
    clearListeners (event) {
        let me = this;
        let hasListeners = me.hasListeners;
        let ownData = me.$watchable;
        let eventMap = ownData.eventMap;
        let inbound = ownData.inbound;
        let other, outbound;

        if (event) {
            event = cnames[event] || canonicalName(event);

            if (eventMap[event]) {
                eventMap[event] = null;
                delete hasListeners[event];
                me.onTrackEventListeners(event, false);
            }
        }
        else {
            for (let name in eventMap) {
                eventMap[name] = null;
                delete hasListeners[name];

                me.onTrackEventListeners(name, false);
            }
            
            if (inbound) {
                ownData.inbound = null;
    
                // Any objects previously watching us are no longer, so remove us from
                // their outbound list:
                for (other of inbound) {
                    remove(other.$watchable.outbound, me);
                }
            }
    
            outbound = ownData.outbound;
            
            if (outbound) {
                ownData.outbound = null;
                
                // Remove our listeners from any object that we are watching...
                for (other of outbound) {
                    other._removeWatcher(me);
                }
            }
        }
    }

    fireEvent (event, ...args) {
        return this.fireEventArgs(event, args);
    }

    fireEventArgs (event, args) {
        let data = this.$watchable;
        let suspended = data.suspended;
        let cls, relay, relayers, ret;

        if (!suspended[''] && !suspended[event = cnames[event] || canonicalName(event)]) {
            // The hasListeners object is proto-chained up the class hierarchy so we only
            // do all this if there is at least one listener for the event.
            if (data.hasListeners[event]) {
                // The instance data has a reference to its class watchable data which is
                // an easy way to tell if there are any class-level listeners in play.
                if (data.class.hasListeners[event]) {
                    for (cls of this.$meta.classes) {
                        data = cls.$watchable;

                        // This check does not equate to this class having its own listener
                        // but will eliminate classes that have none in it or any super
                        // class (and we also needed to see if the class is a Watchable).
                        if (data && data.hasListeners[event]) {
                            cls.doFireEvent(event, args);
                        }
                    }
                }
                
                ret = this.doFireEvent(event, args);
            }

            if (ret !== STOP) {
                relayers = data.relayers;
                
                if (relayers) {
                    ++relayers[firingSym];

                    for (relay of relayers) {
                        ret = relay.relay(event, args);
                        
                        if (ret === STOP) {
                            break;
                        }
                    }

                    --relayers[firingSym];
                }
            }
        }
        
        return ret;
    }

    fireEventAsync (event, ...args) {
        return this.fireEventArgsAsync(event, args);
    }

    async fireEventArgsAsync (event, args) {
        let data = this.$watchable;
        let suspended = data.suspended;
        let cls, relay, relayers, ret;

        if (!suspended[''] && !suspended[event = cnames[event] || canonicalName(event)]) {
            // The hasListeners object is proto-chained up the class hierarchy so we only
            // do all this if there is at least one listener for the event.
            if (data.hasListeners[event]) {
                // The instance data has a reference to its class watchable data which is
                // an easy way to tell if there are any class-level listeners in play.
                if (data.class.hasListeners[event]) {
                    for (cls of this.$meta.classes) {
                        data = cls.$watchable;

                        // This check does not equate to this class having its own listener
                        // but will eliminate classes that have none in it or any super
                        // class (and we also needed to see if the class is a Watchable).
                        if (data && data.hasListeners[event]) {
                            await cls.doFireEventAsync(event, args);
                        }
                    }
                }
                
                ret = await this.doFireEventAsync(event, args);
            }

            if (ret !== STOP) {
                relayers = data.relayers;
                
                if (relayers) {
                    ++relayers[firingSym];

                    for (relay of relayers) {
                        if (relay.relayAsync) {
                            ret = await relay.relayAsync(event, args);

                            if (ret === STOP) {
                                break;
                            }
                        }
                    }

                    --relayers[firingSym];
                }
            }
        }
        
        return ret;
    }

    /**
     * Returns a non-zero value if there are listeners for `event`. In simple cases this
     * will be the number of listeners, but when this cannot be relied upon in general.
     * The return value of 0 (falsy) is a reliable means to determine if there are no
     * listeners.
     * 
     * @param {String} event The name of the event.
     * @param {Boolean} [ignoreSuspend=false] Pass `true` to ignore event suspend state.
     * @returns {Number}
     */
    hasListener (event, ignoreSuspend) {
        event = cnames[event] || canonicalName(event);
        
        let ret = this.hasListeners[event];
        let relayer, relayers, suspended;
        
        if (!ret) {
            relayers = this.$watchable.relayers;
            
            if (relayers) {
                for (relayer of relayers) {
                    if (relayer.hasListener(event)) {
                        ret = 1;
                        break;
                    }
                }
            }
        }

        if (ret && !ignoreSuspend) {
            suspended = this.$watchable.suspended;

            if (suspended[''] || suspended[event]) {
                ret = 0;
            }
        }
        
        return ret || 0;
    }
    
    isSuspended (event) {
        let suspended = this.$watchable.suspended;

        return !!(suspended[''] || event && suspended[cnames[event] || canonicalName(event)]);
    }
    
    @twin
    on (name, fn, scope, options) {
        return this._updateListeners(1, name, fn, scope, options);
    }

    once (name, fn, scope) {
        return this.on(name, fn, scope, ONCE);
    }

    relayEvents (target, ...args) {
        let n = args.length;
        let options = n && args[0] || null;

        // relayEvents(target, 'foo', 'bar')
        // relayEvents(target, 'foo')
        if (n > 1 || typeof options === 'string') {
            options = args;
        }

        return Relayer.create(this, target, options);
    }

    resumeEvent (...names) {
        let suspended = this.$watchable.suspended;
        let event;

        for (event of names) {
            event = cnames[event] || canonicalName(event);

            if (suspended[event]) {
                --suspended[event];
            }
        }
    }

    resumeEvents () {
        this.resumeEvent('');
    }

    suspendEvent (...names) {
        let suspended = this.$watchable.suspended;
        let event;

        for (event of names) {
            event = cnames[event] || canonicalName(event);

            suspended[event] = (suspended[event] || 0) + 1;
        }
    }

    suspendEvents () {
        this.suspendEvent('');
    }

    @twin
    un (name, fn, scope) {
        return this._updateListeners(0, name, fn, scope);
    }
    
    static getConfigWatcher (instance) {
        return instance[watchSym] || (instance[watchSym] = new Watchable());
    }

    static watchConfig (instance, ...options) {
        let watcher = Watchable.getConfigWatcher(instance);

        return watcher.on(...options);
    }

    getConfigWatcher () {
        return Watchable.getConfigWatcher(this);
    }

    watchConfig (options) {
        return Watchable.watchConfig(this, options);
    }

    //---------------------------------------------------------------------------
    // Protected Methods

    @twin
    doAddListener (name, fn, scope, options, token) {
        let me = this;
        let eventMap = me.$watchable.eventMap;
        let watchers = eventMap[name];
        let listener = me._wrapListener(name, fn, scope, options);
        let candidate;
    
        if (watchers && firingSym in watchers) {
            // Ignore duplicate registrations
            for (candidate of watchers) {
                if (match(candidate, fn, scope)) {
                    return;
                }
            }
    
            if (watchers[firingSym]) {
                eventMap[name] = watchers = fork(watchers);
            }
    
            watchers.push(listener);
        }
        else if (watchers) {
            if (match(watchers, fn, scope)) {
                return;
            }
    
            eventMap[name] = watchers = [watchers, listener];
            watchers[firingSym] = 0;
        }
        else {
            eventMap[name] = listener;
    
            me.onTrackEventListeners(name, true);
        }
    
        me.hasListeners[incrSym](name);

        if (scope && scope !== me && scope.isWatchable) {
            track(me, scope, 'inbound');
            track(scope, me, 'outbound');
        }

        if (token) {
            token.listeners.push(listener);
            listener[NAME] = name;
        }
    }

    @twin
    doFireEvent (event, args) {
        let me = this;
        let eventMap = me.$watchable.eventMap;
        let watchers = eventMap[event];
        let listener, r, ret;
    
        if (watchers && firingSym in watchers) {
            ++watchers[firingSym];
            
            if (!watchers[sortedSym]) {
                watchers.sort(sorter);
                watchers[sortedSym] = true;
            }
    
            for (listener of watchers) {
                r = Watchable._invokeListener(me, listener, args);

                //<debug>
                assert(!is.thenable(r), 'Async event handler called for sync event');
                //</debug>
                
                if (r === STOP) {
                    ret = STOP;
                    break;
                }
            }
    
            --watchers[firingSym];
        }
        else if (watchers) {
            r = Watchable._invokeListener(me, watchers, args);
            
            //<debug>
            assert(!is.thenable(r), 'Async event handler called for sync event');
            //</debug>

            if (r === STOP) {
                ret = STOP;
            }
        }
    
        return ret;
    }

    @twin
    async doFireEventAsync (event, args) {
        let me = this;
        let eventMap = me.$watchable.eventMap;
        let watchers = eventMap[event];
        let listener, r, ret;
    
        if (watchers && firingSym in watchers) {
            ++watchers[firingSym];
            
            if (!watchers[sortedSym]) {
                watchers.sort(sorter);
                watchers[sortedSym] = true;
            }
    
            for (listener of watchers) {
                r = Watchable._invokeListener(me, listener, args);
                
                if (is.thenable(r)) {
                    // If the handler does not return a promise, it is not async, so r is
                    // the return value... otherwise we await that value:
                    r = await r;
                }

                if (r === STOP) {
                    ret = STOP;
                    break;
                }
            }
    
            --watchers[firingSym];
        }
        else if (watchers) {
            r = Watchable._invokeListener(me, watchers, args);

            if (is.thenable(r)) {
                // If the handler does not return a promise, it is not async, so r is
                // the return value... otherwise we await that value:
                r = await r;
            }

            if (r === STOP) {
                ret = STOP;
            }
        }
    
        return ret;
    }

    @twin
    doRemoveListener (name, fn, scope /* , options */) {
        let me = this;
        let eventMap = me.$watchable.eventMap;
        let watchers = eventMap[name];
        let hasListeners = me.hasListeners;
        let i;
    
        if (watchers) {
            if (firingSym in watchers) {
                for (i = watchers.length; i-- > 0;) {
                    if (match(watchers[i], fn, scope)) {
                        if (watchers.length < 2) {
                            eventMap[name] = null;
                        }
                        else {
                            if (watchers[firingSym]) {
                                eventMap[name] = watchers = fork(watchers);
                            }
                
                            watchers.splice(i, 1);
                            // don't bother to revert from array-of-one back to just
                            // storing the one listener on the eventMap... if we had
                            // two listeners before we may again so just keep the array
                            // we've already created.
                        }
    
                        hasListeners[decrSym](name);
                        break;  // duplicates are prevents by on()
                    }
                }
            }
            else if (match(watchers, fn, scope)) {
                hasListeners[decrSym](name);
                eventMap[name] = null;
            }
    
            if (!eventMap[name]) {
                // We cannot account for upstream listeners so this call is only good for
                // directly attached listeners.
                me.onTrackEventListeners(name, false);
            }
        }
    }

    /**
     * This method is called when the number of (direct) listeners changes to or from
     * zero.
     * @param {String} eventName The canonical name of the event (all lowercase).
     * @param {Boolean} watched Passed `true` if the event has gained its first listener
     * and `false` if the event as lost its last listener.
     */
    @twin
    onTrackEventListeners (eventName, watched) {
        // empty
    }

    //---------------------------------------------------------------------------
    // Private
    
    static _invokeListener (instance, listener, args) {
        args = args || EMPTY;
        
        let [ fn, scope, resolve ] = listener;
        let it = resolve ? instance.resolveListenerScope(scope, fn, listener) : scope;
        let isStr = fn.charAt;
        let [ x, y, z ] = args;
        let n = args.length;
        let ret;
    
        // fn.apply() and fn(...args) are notably slower then fn() and fn.call()
        if (n === 1) {
            ret = isStr ? it[fn](x) : (it ? fn.call(it, x) : fn(x));
        }
        else if (n === 2) {
            ret = isStr ? it[fn](x, y) : (it ? fn.call(it, x, y) : fn(x, y));
        }
        else if (n === 3) {
            ret = isStr ? it[fn](x, y, z) : (it ? fn.call(it, x, y, z) : fn(x, y, z));
        }
        else if (n) {
            ret = (isStr ? it[fn] : fn).apply(it, args);
        }
        else {
            ret = isStr ? it[fn]() : (it ? fn.call(it) : fn());
        }
    
        return ret;
    }

    @twin
    _removeListenerEntry (name, listener) {
        let me = this;
        let hasListeners = me.hasListeners;
        let eventMap = me.$watchable.eventMap;
        let watchers = eventMap[name];
        let index, removed;

        if (watchers && firingSym in watchers) {
            if ((index = watchers.indexOf(listener)) > -1) {
                if (watchers.length < 2) {
                    eventMap[name] = null;
                }
                else {
                    if (watchers[firingSym]) {
                        eventMap[name] = watchers = fork(watchers);
                    }
    
                    watchers.splice(index, 1);
                }

                hasListeners[decrSym](name);
                removed = 1;
            }
        }
        else if (watchers === listener) {
            eventMap[name] = null;
            hasListeners[decrSym](name);
            removed = 1;
        }

        if (removed && !eventMap[name]) {
            me.onTrackEventListeners(name, false);
        }
        
        return !!removed;
    }

    @twin
    _removeWatcher (scope) {
        let me = this;
        let eventMap = me.$watchable.eventMap;
        let i, name, watchers;

        for (name in eventMap) {
            watchers = eventMap[name];

            if (watchers) {
                if (firingSym in watchers) {
                    for (i = watchers.length; i-- > 0; /* empty */) {
                        if (watchers[i][SCOPE] === scope) {
                            me._removeListenerEntry(name, watchers[i]);
                        }
                    }
                }
                else if (watchers[SCOPE] === scope) {
                    me._removeListenerEntry(name, watchers);
                }
            }
        }
    }

    @twin
    _updateListeners (add, name, fn, scope, options) {
        let me = this;
        let method = add ? 'doAddListener' : 'doRemoveListener';
        let token = null;
        let event;
    
        scope = scope || null;
        
        if (typeof name === 'string') {
            event = cnames[name] || canonicalName(name);

            me[method](event, fn, scope, options);
        }
        else if (name) {
            options = options ? { ...name, ...options } : name;
    
            scope = options.scope;
    
            if (add && options.destroyable !== false) {
                token = new Token(me, options);
            }
    
            for (let key of Object.keys(options)) {
                if (!internals.options[key]) {
                    event = cnames[key] || canonicalName(key);

                    me[method](event, options[key], scope, options, token);
                }
            }
        }
    
        return token || this;
    }

    @twin
    _wrapListener (name, fn, scope, options) {
        let me = this;
        let actual = listen(me, fn, scope, options);
        let ret = actual;
        let option;

        if (options) {
            if (options.single) {
                options = { ...options, once: true };
                delete options.single;
            }

            for (option of internals.wrapperOrder) {
                if (option in options) {
                    ret = internals.wrappers[option].call(me, name, ret, options);
        
                    ret[FN][actualSym] = actual;
                }
            }
        }
        
        return ret;
    }
}

(function (proto) {
    let names = Object.getOwnPropertyNames(proto);
    let desc, fn;
    
    // Copy our @twin method definitions from the prototype to the constructor:
    for (let name of names) {
        desc = getOwnPropertyDescriptor(proto, name);
        fn = desc.value;

        if (name === 'watchConfig' || name === 'getConfigWatcher') {
            defineProp(Base.prototype, name, desc);
        }
        else if (fn && fn[twinSym]) {
            defineProp(Watchable, name, desc);
        }
    }
})(Watchable.prototype);

// Create the Ext.GlobalEvents singleton and related helper methods:
const globalEvents = new Watchable();

Ext.GlobalEvents = globalEvents;

Ext.hasListeners = globalEvents.hasListeners;

Ext.on = function (...args) {
    return globalEvents.on(...args);
};

Ext.once = function (...args) {
    return globalEvents.once(...args);
};

Ext.un = function (...args) {
    return globalEvents.un(...args);
};

Ext.fireEvent = function (...args) {
    return globalEvents.fireEvent(...args);
};

Ext.fireIdle = function () {
    if (globalEvents.hasListeners.idle && !Ext._suppressIdle) {
        globalEvents.fireEventArgs('idle');
    }

    Ext._suppressIdle = false;
};

Ext._suppressIdle = false;

export { Relayer, STOP, Watchable };
