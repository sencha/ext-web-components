import {
    assert,
    Empty,
    chain, clone, copy, defineProp, is, merge, prototype, defProp
} from './Misc';

// Used to mark config property definitions that have meta-properties (e.g., "cached"):
const metaSym = Symbol('configMeta');

// These symbols are placed inside the values object:
const deferSym = Symbol('configDefer');
const initSym = Symbol('configInit');
const initialSym = Symbol('configInitial');
const ownerSym = Symbol('configOwner');
const shardSym = Symbol('configShard');
const watchSym = Symbol('configWatch');

const openSym = Symbol('configOpen');

const accessors = {
    '': {
        prop: 'def',
        getter: 'getDef'
    },
    
    init: {
        prop: 'initDef',
        getter: 'getInitDef'
    },
    
    static: {
        prop: 'staticDef',
        getter: 'getStaticDef'
    },
    
    staticInit: {
        prop: 'staticInitDef',
        getter: 'getStaticInitDef'
    }
};

@prototype({
    isConfig: true,

    initialValue: null,

    def: null,
    initDef: null,
    staticDef: null,
    staticInitDef: null,
    
    owner: null,
    
    //----------------------------------------------------------------

    /**
     * @cfg {Boolean} cached
     * Set this option to cache the result of initializing this config so that this value
     * is available to all instances without repeating this initialization. Initialization
     * takes place when the first instance of the class is instantiated.
     */
    cached: false,
    
    /**
     * @cfg {Boolean} defer
     * Set this option to cause the property to be evaluated at initialization time instead
     * of declaration time.
     * 
     *      class Foo extends Base {
     *          @config('defer')
     *          dateFormat = Locale.current.defaultDateFormat
     *      }
     * 
     * In the above, the `dateFormat` config value is evaluated when a `Foo` instance is
     * created, i.e., not when the class is declared. This is consistent with normal class
     * fields. The example above uses this to delay the use of `Locale.current` and allow
     * the application to change it before creating instances of `Foo`.
     * 
     * This can be combined with `cached` to avoid evaluating the expression beyond the
     * first instance.
     * 
     * Unlike other options, `defer`only applies to the value being defined in the statement
     * it decorates.
     */
    
    /**
     * @cfg {Boolean} destroy
     * Set this option for the object referenced by this config to have its `destroy` method
     * called when the owning object is destroyed.
     */
    destroy: false,
    
    /**
     * @cfg {Boolean} initial
     * Defines the initial value of a config. This value will be applied without running
     * through the normal apply/update process when set during construction.
     *
     * For example
     *
     *      @define
     *      class Foo extends Widget {
     *          @config({ initial: true })
     *          disabled = false;
     *      }
     *
     * The above indicates that the `disabled` config has an initial state that is
     * described by `false`. When an instance is created using this value for `disabled`
     * the `applyDisabled` and `updateDisabled` sequence is bypassed.
     */
    initial: false,

    /**
     * @cfg {Boolean} lazy
     * Set this option to delay initialization of the config until its value is requested.
     * Normally a config will behave like this when the instance is being configured, but
     * this option leaves the config in this state and does proactively initialize it.
     */
    lazy: false,

    /**
     * @cfg {String/Boolean/Function} merge
     * Set this option to control how to combine multiple config values. This occurs when
     * a derived class provides a new value for a config. This also occurs when a mixin
     * has a config value as well as, in the end, the instance itself.
     * 
     * The following standard merge algorithms can be used by setting `merge` as a string:
     * 
     *  - `true` (default): Recursively merge object properties giving priority to those
     *   in the new `value`. If either the `existingValue` or new `value` is not a simple
     *   object, the new `value` replaces the `existingValue`.
     *  - `false`: Always replaces an `existingValue` with the new `value`.
     *  - `'new'`: Similar to the default merge, but object properties are not merged
     *    recursively.
     *  - `'set'`: This algorithm interprets values as sets of properties. When a String
     *   or String[] is given, these are converted into object properties with a value of
     *   `true`. The properties of the two objects are then merged.
     *  - `'shard'`: This algorithm preserves each presented value as elements of an array
     *   owned by the target class or instance. This form allows overrides to augment the
     *   values provided by base classes even if derived classes have already been processed.
     *   The resulting value array must be flattened when the time comes to inspect each
     *   individual value. All arrays produced by this merge will have a `Config.symbol.shard`
     *   property to allow array values to be distinguished from those produced for each
     *   class. This symbol property will hold a reference to the owning class or `true`
     *   if owned by an instance.
     * 
     * @cfg {*} merge.existingValue The existing value of the config, initially this will
     * be the value from the base class which defined the config.
     * @cfg {*} merge.value The new value to combine with `existingValue`. This can be the
     * value from a derived class or value presented to the instance in the config object.
     * @cfg {Class} merge.cls The class providing the new `value`. This is `null` if the
     * value is coming from the instance config object.
     * @cfg {MetaClass} merge.mixinMeta The `MetaClass` of the mixin providing the new
     * `value` or `null` if the value is not coming from a mixin.
     */

    /**
     * @cfg {Boolean} nullify
     * Set this option for the config to be set to `null` when the owning instance is
     * destroyed. This will cause the normal apply/update sequence to run and cleanly
     * disconnect the object.
     */
    nullify: false,
    
    /**
     * @cfg {Boolean} pre
     * Set this option to cause the config to be process prior to normal first instance
     * and cached config processing. This is rarely appropriate, but is used, for example,
     * by `Identifiable` to establish the `id` config at the object's moment of birth.
     * 
     * NOTE: Logic invoked at this time will not have access to normal config values as
     * they have not yet been applied to the instance.
     * @private
     */
    pre: false,

    /**
     * @cfg {Number} priority
     * The higher this value, the earlier it will sort in the initialization loop.
     */
    priority: 0,
    
    static: false
})
class Config {
    static all = new Empty();
    
    static mergers = {
        false (newValue, oldValue, target, mixinMeta) {
            return mixinMeta ? oldValue : newValue;
        },

        blend (newValue, oldValue, target, mixinMeta) {
            let key, ret;

            if (oldValue && newValue && newValue.constructor === Object &&
                oldValue.constructor === Object) {
                ret = clone(oldValue);

                if (mixinMeta) {
                    // Mixins can only add missing keys
                    for (key in newValue) {
                        if (!(key in ret)) {
                            ret[key] = clone(newValue[key]);
                        }
                    }
                }
                else {
                    // use the normal deep merge process for non-mixins
                    merge(ret, newValue);
                }
            }
            else {
                // This is a bit different when combining oldValue == null for a mixin.
                // The idea being the current base has null but the mixin has something,
                // so we take what the mixin has since it would be allowed to add its
                // keys if the base were an empty object. Essentially we treat null like
                // {}.
                ret = (mixinMeta && oldValue != null) ? oldValue : newValue;
            }

            return ret;
        },

        new (newValue, oldValue, target, mixinMeta) {
            let ret = newValue || oldValue;
            let key;

            if (oldValue && newValue) {
                ret = chain(oldValue);

                for (key in newValue) {
                    if (!mixinMeta || !(key in ret)) {
                        ret[key] = newValue[key];
                    }
                }
            }

            return ret;
        },

        set (newValue, oldValue) {
            let ret = oldValue ? chain(oldValue) : {};
            let i;
    
            if (is.array(newValue)) {
                for (i = newValue.length; i--;) {
                    ret[newValue[i]] = true;
                }
            }
            else if (typeof newValue === 'string') {
                ret[newValue] = true;
            }
            else if (newValue) {
                for (i in newValue) {
                    ret[i] = newValue[i];
                }
            }
    
            return ret;
        },
        
        shard (newValue, oldValue, cls) {
            let ret = oldValue;

            if (cls) {
                // When a class is merging a new value, there are a few possibilities:
                //  1. This is the first value ever given.
                //  2. This is the first value for cls but super class had a value.
                //  3. An override is applying a new value to the class.
                //  4. An override is adding a mixin which has listeners.
                if (!oldValue || oldValue[shardSym] !== cls) {  // if (#1 or #2)
                    ret = oldValue ? [oldValue] : [];
                    ret[shardSym] = cls;
                }
                // else in case #3 and #4 we just add the new value to the array we have
                // created for cls. Since that array is included as an element in the
                // array of derived classes, this push() maintains inheritance for
                // derived classes.
                
                if (newValue) {
                    ret.push(newValue);
                }
            }
            // As an instance level value, but we cannot just push() onto the array
            // owned by the class, so we make a 2-tuple array...
            else {
                if (ret) {
                    ret = [ ret, newValue ];
                }
                else {
                    ret = [ newValue ];
                }

                ret[shardSym] = true;
            }
            
            return ret;
        }
    };
    
    static symbols = {
        defer: deferSym,
        meta: metaSym,
        init: initSym,
        initial: initialSym,
        open: openSym,
        owner: ownerSym,
        shard: shardSym,
        watch: watchSym
    };
    
    static compare (lhs, rhs) {
        // We want pre-cached items first, then cached, then regular items.
        // Fortunately true - false = 1, false - true = -1 etc...
        // Also, higher priority comes before lower priority (so desc sort).
        let d = (rhs.pre - lhs.pre) || (rhs.cached - lhs.cached) || (rhs.priority - lhs.priority);
        let ln, rn;
        
        if (!d) {
            ln = lhs.name;
            rn = rhs.name;
            
            d = (ln < rn) ? -1 : ((rn < ln) ? 1 : 0);
        }
        
        return d;
    }

    constructor (name) {
        let me = this;
        let nameCap = name[0].toUpperCase() + name.substr(1);
        
        me.$ = me;

        me.name = name;
        me.nameCap = nameCap;
        me.applier = 'apply' + nameCap;
        me.updater = 'update' + nameCap;
    }

    static get (name) {
        let all = Config.all;

        return all[name] || (all[name] = new Config(name));
    }

    define (target, which) {
        let me = this;
        let access = accessors[which || ''];
        let def = me[access.prop] || me[access.getter]();

        defineProp(target, me.name, def);
    }

    extend (options, owner) {
        let cfg = this;

        //<debug>
        assert(owner, 'Cannot extend a config w/o providing an owner');
        //</debug>
        
        if (owner !== cfg.owner) {
            cfg = chain(cfg);
            cfg.owner = owner;
        }

        copy(cfg, options);
        
        if (cfg.hasOwnProperty('merge') && cfg.merge in Config.mergers) {
            // ex:
            //  @config({ merge: 'sets })
            //  derp = null;
            
            cfg.merge = Config.mergers[cfg.merge];
        }
        //<debug>
        else {
            assert(typeof cfg.merge === 'function',
                   'Invalid config merge type for "{0}": "{1}"', cfg.name, cfg.merge);
        }
        //</debug>

        return cfg;
    }

    merge (newValue, oldValue, target, mixinMeta) {
        if (mixinMeta) {
            return oldValue;  // UNC
        }

        if (newValue && newValue.constructor === Object) {
            if (oldValue && oldValue.constructor === Object) {
                newValue = merge(clone(oldValue), newValue);
            }
        }

        return newValue;
    }
    
    peek (inst, mode) {
        let name = this.name;
        let ret;

        //<debug>
        assert(!mode || mode === true || mode === 'peek' || mode === 'ready',
               'Invalid mode in getConfig("{0}", mode="{1}")', name, mode);
        //</debug>

        if (!inst.hasOwnProperty(name)) {
            // Since the instance does not have a property defined there, the initDef
            // has run and we can get the value from our normal storage. We bypass the
            // getter (inst[name]) to allow that to be overridden and back-end into
            // here.
            ret = inst.$configs[name];
        }
        else if (mode === 'ready') {
            // If the instance hasOwnProperty, the initDef is in place which means that
            // the config value is not ready. In this mode, we have been asked to return
            // only ready values.
            ret = null;
        }
        else if (mode) {
            // In this mode, we are being asked to return unready values, so we grab the
            // value from the initialization bucket.
            ret = inst.$configs[initSym][name];
        }
        else {
            // Lastly, we have to go through the main getter to trigger the init to get
            // the value:
            ret = inst[name];
        }

        return ret;
    }

    getDef () {
        return this.def || this.$.createDef();
    }

    getInitDef () {
        return this.initDef || this.$.createInitDef();
    }

    getStaticDef () {
        return this.staticDef || this.$.createStaticDef();
    }

    getStaticInitDef () {
        return this.staticInitDef || this.$.createStaticInitDef();
    }

    //--------------------------------------------------------
    // Private

    createDef () {
        let cfg = this;
        let name = cfg.name;
        let applier = cfg.applier;
        let updater = cfg.updater;

        return cfg.def = {
            get () {
                return this.$configs[name];
            },

            set (val) {
                let me = this;
                let values = me.$configs;
                let watch;

                if (!me[applier] || (val = me[applier](val, values[name])) !== undefined) {
                    let old = values[name];

                    if (old !== val) {
                        values[name] = val;

                        if (me[updater]) {
                            me[updater](val, old);
                        }

                        watch = me[watchSym];

                        if (watch && !me.constructing) {
                            // Since the updater could have modified things (tho unlikely),
                            // re-read the stored value:
                            watch.fireEventArgs(name, [ me, name, values[name], old ]);
                        }
                    }
                }
            }
        };
    }

    createInitDef () {
        const name = this.name;

        return this.initDef = {
            configurable: true,

            get () {
                delete this[name];  // remove the initDef property definition

                // Now that our init def is removed, the following assignment will run
                // the normal def's set() method.

                this[name] = this.$configs[initSym][name];  // call std setter

                return this[name];  // std getter
            },

            set (v) {
                delete this[name];  // remove the initDef property definition

                this[name] = v;  // std setter
            }
        };
    }

    createStaticDef () {
        let cfg = this;
        let name = cfg.name;
        let applier = cfg.applier;
        let updater = cfg.updater;

        return cfg.staticDef = {
            get () {
                // Quick breakdown here:
                //   $meta: a dynamic getter on the class (and must always remain so)
                //   configs: a one-time dynamic getter on the MetaClass replaced on first
                //        use with the Configs instance.
                //   statics: a one-time dynamic getter on Configs, replaced on first use.
                // The most important part is statics. This one "completes" the class since
                // we know that class configs are now being used, not just added. The act
                // of completing the class initializes the (non-lazy) static config values.
                return this.$meta.configs.statics[name];
            },

            set (val) {
                let me = this;
                let values = me.$meta.configs.statics;
                
                if (!values.hasOwnProperty(name)) {
                    // Since we are setting this config, we don't want the init getter to
                    // first set it to the default value. This is why we put the init
                    // getters in a prototype object of the values object.
                    defProp(values, name, undefined, 'cw');
                }

                if (!me[applier] || (val = me[applier](val, values[name])) !== undefined) {
                    let old = values[name];

                    if (old !== val) {
                        values[name] = val;

                        if (me[updater]) {
                            me[updater](val, old);
                        }
                    }
                }
            }
        };
    }

    createStaticInitDef () {
        const name = this.name;

        // The staticInitDef is placed on the prototype of the values object for the class.
        // This is because, unlike instances, the class cannot be used to hold such things
        // (especially for the class where a static config is defined which is where the
        // std getter/setter are placed).
        return this.staticInitDef = {
            configurable: true,

            get () {
                let owner = this[ownerSym];
                let configs = owner.configs;
                
                // hide the staticInitDef property from the values prototype:
                defProp(configs.statics, name, undefined, 'cw');

                // Now that our init def is blocked, the following assignment will run
                // the std setter:

                owner.class[name] = clone(configs.values[name]);

                return this[name];  // now we get the final value from the std getter
            }

            // So... interesting. The staticInitDef cannot be set because we always enter
            // from the staticDef which triggers the get above and removes staticIntDef
            // before we get a chance to run...
            // set (v) {
            //     delete this[name];  // remove the staticInitDef property from the values
            //
            //     this[name] = v;  // save the value
            // }
        };
    }
}

const cm = Config.mergers;

cm.true = Config.prototype.merge;

cm.set.$init = cm.shard.$init = true;

export { Config };
