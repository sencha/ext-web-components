const chain = Object.create;
const defineProp = Object.defineProperty;
const defineProps = Object.defineProperties;
const getOwnNames = Object.getOwnPropertyNames;
const getOwnSymbols = Object.getOwnPropertySymbols;
const toString = Object.prototype.toString;

const unreapableSym = Symbol('unreapable');
const arrayLike = new Set([ 'arguments', 'nodelist' ]);
const propOptions = {};
const propModes = { c: 'configurable', e: 'enumerable', w: 'writable' };

// Helpful debug aid:
// const defineProp = (inst, name, def) => {
//     Object.defineProperty(inst, name, def);
// };

let canonicalNames;

// =================================================================================

/**
 * The `Ext` object.
 */
const Ext = {
    arrayLike,
    _suppressIdle: false,

    EMPTY: Object.freeze([]),

    /**
     * Copies all the properties of `config` to the specified `object`. There are two levels
     * of defaulting supported:
     * 
     *      Ext.apply(obj, { a: 1 }, { a: 2 });
     *      //obj.a === 1
     * 
     *      Ext.apply(obj, {  }, { a: 2 });
     *      //obj.a === 2
     * 
     * Note that if recursive merging and cloning without referencing the original objects
     * or arrays is needed, use {@link Ext.Object#merge} instead.
     * 
     * @param {Object} object The receiver of the properties.
     * @param {Object} config The primary source of the properties.
     * @param {Object} [defaults] An object that will also be applied for default values.
     * @return {Object} returns `object`.
     */
    apply (object, config, defaults) {
        return copy(object, defaults, config);
    },
    
    arrayify (a) {
        if (a != null && !is.array(a)) {
            if (a && arrayLike.has(typeOf(a))) {
                a = Array.prototype.slice.call(a);
            }
            else {
                a = [ a ];
            }
        }
        
        return a;
    },
    
    assert (b, msg = 'Assertion failed', ...extra) {
        if (!b) {
            raise(Ext.format(msg, ...extra));
        }
    },
    
    assertIn (key, obj, msg = 'Expected "{0}" to be one of: {1}') {
        let a = is.array(obj);
        
        if (a ? !obj.includes(key) : !(key in obj)) {
            raise(Ext.format(msg, key, a ? obj : Object.keys(obj)));
        }
    },
    
    boolProps (props) {
        let ret = props;
        let prop, value;
        
        if (ret.length === 1 && typeof ret[0] !== 'string') {
            ret = ret[0];
        }
        else {
            ret = {};
            
            for (prop of props) {
                if (!(value = prop[0] !== '!')) {
                    prop = prop.substr(1);
                }
                
                ret[prop] = value;
            }
        }

        return ret;
    },
    
    canonicalName (name) {
        // https://jsperf.com/canonicalname/1
        // Tried "/[A-Z]/.test(s) ? s.toLowerCase() : s" but it was slower 
        return canonicalNames[name] || (canonicalNames[name] = name.toLowerCase());
    },
    
    capitalize (str) {
        return str ? str[0].toUpperCase() + str.substr(1) : '';
    },
    
    comparator (key) {
        return (lhs, rhs) => {
            return (lhs && rhs) ? comparePrimitive(lhs[key], rhs[key]) : (lhs ? 1 : -1);
        };
    },
    
    comparePrimitive (lhs, rhs) {
        return (lhs < rhs) ? -1 : ((rhs < lhs) ? 1 : 0);
    },
    
    configFromType (config) {
        let ret = config;
        let t;
        
        if (ret) {
            t = typeof config;
            
            ret = (t === 'string' || t === 'function') ? { type: config } : copy({}, config);
        }
        
        return ret;
    },
    
    copy (dest, ...sources) {
        if (dest) {
            for (let src of sources) {
                if (src) {
                    for (let key in src) {
                        dest[key] = src[key];
                    }
                }
            }
        }
    
        return dest;
    },
    
    copyIf (dest, ...sources) {
        if (dest) {
            for (let src of sources) {
                if (src) {
                    for (let key in src) {
                        if (!(key in dest)) {
                            dest[key] = src[key];
                        }
                    }
                }
            }
        }
    
        return dest;
    },
    
    clone (object) {
        let c = object;
        let i;
    
        if (object) {
            let type = typeOf(object);
    
            if (type === 'array') {
                c = [];
    
                // go backwards to establish length first
                for (i = object.length; i-- > 0; /* empty */) {
                    c[i] = clone(object[i]);
                }
            }
            else if (type === 'date') {
                c = new Date(+object);
            }
            else if (type === 'object' && object.constructor === Object) {
                c = {};
    
                for (i in object) {
                    c[i] = clone(object[i]);
                }
            }
        }
    
        return c;
    },

    decapitalize (str) {
        return str ? str[0].toLowerCase() + str.substr(1) : '';
    },
    
    decode (str) {
        return JSON.parse(str);
    },
    
    destroy (...objects) {
        for (let object of objects) {
            if (object) {
                if (is.array(object)) {
                    destroy(...object);
                }
                else if (typeof object.destroy === 'function') {
                    object.destroy();
                }
            }
        }
    },
    
    emptyFn () {
        // nada
    },
    
    encode (...args) {
        return JSON.stringify(...args);
    },
    
    format (msg, ...args) {
        let s = msg;
        let i = 0;
        let t;

        for (let p of args) {
            t = `{${i++}}`;
            s = s.split(t).join(is.array(p) ? `"${p.join('", "')}"` : p);
        }
        
        return s;
    },

    getOwnDescriptors (object) {
        let ret = {
            obj: object,
            keys: getOwnKeys(object),
            props: new Empty(),
            statics: null
        };
    
        for (let key of ret.keys) {
            ret.props[key] = Object.getOwnPropertyDescriptor(object, key);
        }
    
        return ret;
    },

    getOwnObject (obj, name) {
        if (!obj.hasOwnProperty(name)) {
            obj[name] = obj.super ? Object.create(getOwnObject(obj.super, name)) : {};
        }

        return obj[name];
    },

    identityFn (x) {
        return x;
    },

    indexOf (array, item) {
        return array ? array.indexOf(item) : -1;
    },

    /**
     * Compares the `typeOf` of the specified `value` to the given `type` string or RegExp
     * and returns `true` if they match.
     * 
     * This function object also has methods of its own that are used to classify objects
     * in other ways:
     * 
     *  - `is.array(v)`: Returns `true` if `v` is an Array (as in Array.isArray).
     *  - `is.callable(v)`: Returns `true` if `v` is a callable function.
     *  - `is.date(v)`: Returns `true` if `v` is a Date.
     *  - `is.empty(v, allowEmptyString)`: Returns `true` if `v` is `null`, `undefined`,
     *    an empty Array or the empty string (unless `allowEmptyString` is `true`).
     *  - `is.number(v)`: Returns `true` if `v` is a finite Number.
     *  - `is.iterable(v)`: Returns `true` if `v` is an array-like iterable object.
     *  - `is.object(v)`: Returns `true` if `v` is a simple Object.
     *  - `is.primitive(v)`: Returns `true` if `v` is a boolean, number or string.
     *  - `is.thenable(v)`: Returns `true` if `v` is Promise-like.
     * 
     * @param value The value whose type is to be tested.
     * @param {String/RegExp} type The String or RegExp to match against.
     * @param {Boolean} [truthy] Pass `true` if `value` must be truthy to match (for perf).
     * @returns {Boolean}
     */
    is (value, type, truthy) {
        if (truthy && !value) {
            return false;
        }

        let t = typeOf(value);
    
        return (type.charAt) ? t === type : type.test(t);
    },

    merge (target, ...sources) {
        if (target) {
            let key, t, v;
    
            for (let src of sources) {
                if (src) {
                    for (key in src) {
                        v = src[key];
                        t = target[key];
    
                        if (v && t && v.constructor === Object && t.constructor === Object) {
                            merge(t, v);
                        }
                        else {
                            target[key] = clone(v);
                        }
                    }
                }
            }
        }
    
        return target;
    },
    
    raise (msg, promise) {
        let e = new Error(msg);

        if (promise) {
            return Promise.reject(e);
        }

        throw e;
    },
    
    remove (array, item) {
        let index = array ? array.indexOf(item) : -1;
        
        if (index > -1) {
            array.splice(index, 1);
        }
        
        return index;
    },
    
    ticks () {
        return Ticker.now() - tickBase;
    },

    toArray (src) {
        return (src && !is.array(src)) ? [src] : src;
    },

    toSet (strings, value = true) {
        let ret, t;
    
        if (!strings) {
            ret = null;
        }
        else if (typeof strings !== 'string' && !(t = is.array(strings))) {
            ret = strings;
        }
        else {
            ret = new Empty();
    
            if (t) {
                for (t of strings) {
                    ret[t] = value;
                }
            }
            else {
                ret[strings] = value;
            }
        }
    
        return ret;
    },
        
    tuplize (tuple, ...defaults) {
        // [x, y, z] = detuple(val, xdef, ydef, zdef);
        
        if (!is.array(tuple)) {
            tuple = [tuple];
        }

        for (let i = Math.min(tuple.length, defaults.length); i-- > 0; /* empty */) {
            defaults[i] = tuple[i];
        }
        
        return defaults;
    },

    typeOf (value) {
        if (value === null) {
            return 'null';
        }
    
        let type = typeof value;
    
        if (!typeOf.simpletons[type]) {
            let s = toString.call(value);
            let cache = typeOf.cache;
    
            if (!(type = cache[s])) {
                let m = typeOf.parseRe.exec(s);
    
                cache[s] = type = m ? m[1].toLowerCase() : s; // "[object Date]"  ==>  "date"
            }
        }
    
        return type;
    }
};

export const {
    arrayify, assert, assertIn, boolProps,
    canonicalName, capitalize, comparator, comparePrimitive,
    configFromType, copy, copyIf, clone, decapitalize, destroy,
    emptyFn, format, getOwnDescriptors, getOwnObject, identityFn,
    indexOf, is, merge, raise, remove, toArray,
    toSet, tuplize, typeOf,
    EMPTY
} = Ext;

//-----------------------------------------------------------------------

Ext.log = /* istanbul ignore next */ function (...args) {
    console.log(...args);
};

Ext.log.debug = console.debug;
Ext.log.error = console.error;
Ext.log.info = console.info;
Ext.log.warn = console.warn;

const NodeTicker = {
    now () {
        let [ sec, nano ] = process.hrtime();  // eslint-disable-line no-undef 
        
        return nano / 1e6 + sec * 1e3;
    }
};

let tickBase = 0;

const Ticker =
    // eslint-disable-next-line no-undef
    (typeof process !== 'undefined' /* istanbul ignore next */ && process.hrtime)
        ? NodeTicker
        /* istanbul ignore next */
        : (typeof performance !== 'undefined' /* istanbul ignore next */ && performance.now)
            /* istanbul ignore next */
            ? performance
            /* istanbul ignore next */
            : Date;

tickBase = Ext.ticks();

//-----------------------------------------------------------------------

function defProp (instance, prop, value, mode = '') {
    let options = propOptions[mode];
    let c;

    if (!options) {
        propOptions[mode] = options = {};

        for (c of mode) {
            //<debug>
            assertIn(c, propModes);
            //</debug>
            options[propModes[c]] = true;
        }
    }

    options.value = value;
    defineProp(instance, prop, options);
    options.value = null;

    return instance;
}

// https://jsperf.com/object-create-null-vs-new-empty-prototype
function Empty (src) {
    if (src) {
        copy(this, src);
    }
}

// Too many folks use "obj.hasOwnProperty" to make this a truly empty object:
defProp(Empty.prototype = Object.create(null),
        'hasOwnProperty',
        Object.prototype.hasOwnProperty);

function unreapable (obj) {
    if (obj) {
        obj[unreapableSym] = true;
    }

    return obj;
}

canonicalName.cache = canonicalNames = new Empty();

unreapable(emptyFn).$nullFn = true;
unreapable(identityFn).$nullFn = true;

// =================================================================================

copy(is, {
    array: Array.isArray,

    callable (fn) {
        return typeof fn === 'function';
    },
    
    class (v) {
        return !!(v && v.prototype) && typeof v === 'function';
    },

    date (value) {
        return is(value, 'date', /* truthy = */true);
    },

    empty (value, allowEmptyString) {
        return (value == null) ||
            (!allowEmptyString && value === '') ||
            (is.array(value) && value.length === 0);
    },
    
    keyless (value) {
        if (value) {
            // noinspection LoopStatementThatDoesntLoopJS
            for (let k in value) {
                return false;
            }
        }
        
        return true;
    },

    number (value) {
        return typeof value === 'number' && isFinite(value);
    },

    object (value) {
        return is(value, 'object', /* truthy = */true);
    },

    iterable (obj) {
        // https://jsperf.com/arraylike/1

        // Too weak but also not terribly fast for some reason:
        // return obj ? Symbol.iterator in obj && typeof obj.length === 'number' : false;

        // Correct but slow:
        // let t = typeOf(obj);
        //
        // return t === 'array' || t === 'arguments';

        // Fastest if obj is an array (but lots on some browsers):
        return (obj && (is.array(obj) || arrayLike.has(typeOf(obj)))) || false;
    },
    
    primitive (value) {
        let type = typeof value;

        return type === 'boolean' || type === 'string' ||
            (type === 'number' && isFinite(value));
    },
    
    string (value) {
        return typeof value === 'string';
    },

    thenable (val) {
        return val && typeof val.then === 'function';
    }
});

copy(typeOf, {
    cache: new Empty(),
    parseRe: /^\[object ([^\]]+)]$/,
    simpletons: {
        boolean: 1,
        number: 1,
        string: 1,
        undefined: 1
    }
});

//---------------------------------------------------------------------------------------

function str (s) {
    return (s == null) ? '' : String(s);
}

//-------------------------------------------------------------------

function setProto__ (object, prototype) {
    object.__proto__ = prototype;
}

function noSetProto () {
    raise(`Cannot polyfill setPrototypeOf`);
}

noSetProto.unsupported = true;

let base = { works: 1 };
let pr = {};
pr.__proto__ = base;

const setProto =
    Object.setPrototypeOf /* istanbul ignore next */ ||
    (pr.works && setProto__) /* istanbul ignore next */ ||
    noSetProto;

//-------------------------------------------------------------------

function getAllKeys (object) {
    let keys = [];

    if (object) {
        for (let key in object) {
            keys.push(key);
        }
    }

    return keys;
}

function getAllOwnKeys (object) {
    let keys = getOwnNames(object);
    let symbols = getOwnSymbols(object);

    if (keys.length) {
        if (symbols.length) {
            keys.push(...symbols);
        }
    }
    else {
        keys = symbols;
    }

    return keys;
}

const getOwnKeys = getOwnSymbols
    /* istanbul ignore next */
    ? getAllOwnKeys
    /* istanbul ignore next */
    : getOwnNames;

//-----------------------------------------------------------------------
// Basic decorators

function prototype (properties) {
    return descriptor => {
        let { kind, elements } = descriptor;

        return {
            kind, elements,
            finisher (C) {
                copy(C.prototype, properties);
            }
        };
    };
}

function statics (properties) {
    return descriptor => {
        let { kind, elements } = descriptor;

        return {
            kind, elements,
            finisher (C) {
                copy(C, properties);
            }
        };
    };
}

//-------------------------------------------------------------------

class Destroyable {
    conjoin (destroyable) {
        let destroyables = this.$destroyables;

        if (!destroyables) {
            defProp(this, '$destroyables', destroyables = [], 'cw');
        }

        destroyables.push(destroyable);
    }

    destroy () {
        let me = this;

        me.destroy = emptyFn;
        me.destroying = true;

        me.destruct();

        me.destroyed = true;
    }
    
    destruct () {
        let me = this;
        let destroyables = me.$destroyables;
        
        me.$destroyables = destroyables && destroy(destroyables);
        
        // Derived classes can add  other nuances to reapable (like 'async'), so we
        // only reap immediately if the value is strictly `true`:
        if (me.reapable === true) {
            me.reap();
        }
    }
    
    reap () {
        let me = this;
        let keys = Object.keys(me);  // get our own, enumerable property names
        let key, t, value;

        for (key of keys) {
            value = me[key];
            t = value && typeof value;

            // We can leave emptyFn and its ilk as instance properties (stuff like the
            // "this.destroy = emptyFn") as well as other non-objects. This is important
            // for things like id's to deal with the dead object in delayed event
            // handlers or other places.
            if (t && (t === 'object' || t === 'function') && !value[unreapableSym]) {
                me[key] = null;
            }
        }
    }
}

defineProps(Destroyable.prototype, {
    isDestroyable: {
        value: true
    },

    $destroyables: {
        writable: true,
        value: null
    },

    destroyed: {
        writable: true,
        value: false
    },

    destroying: {
        writable: true,
        value: false
    },

    reapable: {
        configurable: true,
        writable: true,
        value: true
    }
});

//-------------------------------------------------------------------

/**
 * This class holds a promise and its `resolve` and `reject` methods. It can be used in
 * two ways.
 *
 * First use case:
 *
 *      let deferred = new Deferred();
 *
 *      // use deferred.promise perhaps
 *
 *      deferred.resolve(42);  // deferred.promise is now resolved
 *      // or:
 *      deferred.reject(err);  // deferred.promise is now rejected
 *
 * Second use case:
 *
 *      let deferred = new Deferred(def => {
 *          // def is the new deferred instance...
 *          // start some work
 *      });
 *
 *      // work has started, so maybe:
 *
 *      return deferred.promise;
 *
 *      // and later call resolve/reject
 */
class Deferred {
    constructor (fn) {
        let me = this;

        me.promise = new Promise((resolve, reject) => {
            me.resolve = resolve;
            me.reject = reject;

            if (fn) {
                fn(me);
            }
        });
    }
}

//-------------------------------------------------------------------

class ExMap extends Map {
    constructor (iterable) {
        super(iterable);
    }

    addAll (src) {
        for (let ent of src) {
            this.set(ent[0], ent[1]);
        }

        return this;
    }

    clone () {
        return new ExMap(this);
    }
    
    get (key, defaultValue) {
        let ret = super.get(key);
        
        // Cannot tell if key is actually in the Map w/simple test of ret value...
        if (!ret && !this.has(key)) {
            ret = defaultValue;
        }
        
        return ret;
    }

    hasItem (key, value) {
        let v = this.get(key);

        // if v is truthy, we definitely have the key, otherwise we need to confirm by
        // calling has(key).
        return (v || this.has(key)) && v === value;
    }
}

//-------------------------------------------------------------------

class ExSet extends Set {
    constructor (iterable) {
        super(iterable);
    }

    addAll (src) {
        for (let v of src) {
            this.add(v);
        }

        return this;
    }

    clone () {
        return new ExSet(this);
    }
}

export { 
    Deferred, Destroyable, ExMap, ExSet,
    Ext, Empty, chain, defineProp, defineProps, defProp, unreapable,
    getAllKeys, getAllOwnKeys, getOwnKeys,
    prototype, statics, setProto, noSetProto, setProto__, str,
    unreapableSym
};
