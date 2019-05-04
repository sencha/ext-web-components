import { Empty, chain, defProp, prototype } from './Misc';
import { Config } from './Config';

@prototype({
    cachedMap: null,
    
    defaults: null,
    
    destroy: null,

    // The array of Config instances that need to be initialized per-instance
    inits: null,

    initsMap: null,

    /**
     * @property {String[]} names
     * The sorted array of config names. This is populated by initFirstInstance.
     */
    names: null,

    nullify: null,

    /**
     * @cfg {Boolean} open
     * Declares that a classes configs are open. This means that the config object given
     * to the constructor can contain non-config properties. These will be copied to the
     * instance as simple properties.
     *
     *      @define({
     *          configurable: 'open'
     *      })
     *      class Foo extends Widget {
     *          @config
     *          foo = 42;
     *      }
     *      
     *      let f = new Foo({
     *          foo: 123,
     *          bar: 321
     *      });
     *      
     *      console.log(f.bar);                     // output: 321
     *      console.log(f.hasOwnProperty('bar'));   // output: true
     * 
     * NOTE: This flag is inherited by derived classes.
     */

    /**
     * @property {String/Object} transform
     * The name of an instance method to be called to transform instance config object or
     * an object containing this name as the `method` property.
     * @property {String} transform.method The name of an instance method to be called to
     * transform instance config object.
     * @property {Number} [transform.priority=0] An priority value used to control the
     * order of processing when there are multiple transform methods. Transform methods
     * are called in order of increasing priority.
     */

    /**
     * @property {Object} _statics
     * The class static config property values.
     * @private
     */
    _statics: null
})
class Configs {
    constructor (owner, superConfigs = null) {
        let me = this;

        /**
         * @property {MetaClass} owner
         * The class that owns this object.
         * @readonly
         */
        me.owner = owner;
        me.super = superConfigs;

        if (superConfigs) {
            me.defs = chain(superConfigs.defs);
            me.inherited = chain(superConfigs.inherited);
            me.values = chain(superConfigs.values);
        }
        else {
            me.defs = new Empty(
                // title: Config.get('title')
            );

            me.inherited = new Empty({
                hasConfigs: false,
                open: false
            });

            me.values = new Empty(
                // title: 'hello'
            );
        }
        
        /**
         * @property {Config[]} instCfgs
         * The array of Config definitions. This array only contains the `Config` objects
         * for the associated `owner` once the class is marked `complete`. At that time,
         * the `Config` objects for it and its base classes are added to this array.
         * 
         * Finally, this array is sorted by initFirstInstance.
         */
        me.instCfgs = [];

        /**
         * @property {Config[]} staticCfgs
         * The array of Config definitions for `static` configs.
         */
        me.staticCfgs = [];
    }
    
    get open () {
        return this.inherited.open;
    }
    
    set open (value) {
        this.inherited.open = value;
    }
    
    get statics () {
        this.owner.complete();

        return this._statics;
    }
    
    complete () {
        let me = this;
        let owner = me.owner;  // the MetaClass
        let cls = owner.class;
        let defs = me.defs;
        let instCfgs = me.instCfgs;
        let staticCfgs = me.staticCfgs;
        let configSyms = Config.symbols;
        let statics = {
            [configSyms.owner]: owner
        };
        let staticValues = me._statics = chain(statics);
        let values = me.values;
        let cfg, name, simple, value;
        
        for (name in defs) {
            cfg = defs[name];
            
            // We don't worry about order on these since that is handled when the
            // first instance is created.
            (cfg.static ? staticCfgs : instCfgs).push(cfg);
        }
        
        if (staticCfgs.length) {
            staticCfgs.sort(Config.compare);

            for (cfg of staticCfgs) {
                // Simplicity is:
                //  - value === null or value is marked as "initial"
                //  - even w/a value, the class has neither applyFoo not updateFoo 
                if (!(simple = (value = values[name = cfg.name]) === null ||
                                (cfg.initial && value === cfg.initialValue))) {
                    simple = !cls[cfg.applier] && !cls[cfg.updater];
                }

                if (simple) {
                    staticValues[name] = value;
                }
                else {
                    cfg.define(statics, 'staticInit');
                }
            }
        }

        // Replace our "get statics ()" above since all it does it trigger this on first
        // call:
        defProp(me, 'statics', staticValues);

        // This makes static configs inspectable in the same way as instance configs:
        defProp(cls, '$configs', staticValues);
    }

    extend (owner) {
        return new Configs(owner, this);
    }
    
    set transform (value) {
        let name = value;
        let priority = 0;

        if (typeof value !== 'string') {
            name = value.method;
            priority = value.priority || 0;
        }

        this.owner.addConfigTransform(name, priority);
    }
}

export { Configs };
