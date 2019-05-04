import { Ext, defineProp, Destroyable } from './Misc';
import { define } from './MetaClass';
import { buffered } from './Timer';

const propDef = {
    value: 0
};

const propDefCW = {
    configurable: true,
    writable: true,
    value: 0
};

let iid = 0;

@define({
    chains: [ 'ctor', 'setup', 'dtor' ],

    properties: {
        isInstance: {
            value: true
        }
    },

    prototype: {
        afterConfigure: null,
        beforeConfigure: null,
        reapable: true
    }
})
class Base extends Destroyable {
    constructor (...args) {
        super();

        let me = this;
        let C = me.constructor;
        let meta = me.$meta;

        if (meta.class !== C) {
            // This is a one-time call per class on its first instantiation. This calls
            // to the getter created by MetaClass.adopt:
            meta = C.$meta;
        }

        // After the above code has executed "this.$meta" will always be valid for an
        // instance. This is a helpful performance gain since it allows us to avoid a
        // method call every time we want the meta class.

        if (!meta.instances++ && !meta.completed) {
            meta.complete();
        }

        // We define these on the instance so that they aren't enumerable:
        propDef.value = ++iid;
        defineProp(me, '$iid', propDef);  // readonly

        propDefCW.value = false;
        defineProp(me, 'configuring', propDefCW);
        propDefCW.value = true;
        defineProp(me, 'constructing', propDefCW);

        me.construct(...args);

        me.constructing = false;
    }

    construct (config) {
        let me = this;
        let meta = me.$meta;

        meta.callChain(me, 'ctor');

        me.configure(config);

        meta.callChain(me, 'setup');
    }

    configure (config) {
        this.$meta.configure(this, config);

        return this;
    }

    /**
     * Destroys member properties by name.
     *
     * If a property name is the name of a *config*, the getter is *not* invoked, so
     * if the config has not been initialized, nothing will be done.
     *
     * The property will be destroyed, and the corrected name (if the property is a *config*
     * and config names are prefixed) will set to `null` in this object's dictionary.
     *
     * @param {String...} args One or more names of the properties to destroy and remove
     * from the object.
     */
    destroyMembers (...args) {
        this.$meta.destroyMembers(this, args);
    }

    destruct () {
        let me = this;
        let meta = me.$meta;

        meta.callChain(me, 'dtor', null, true);

        if (me.reapable === 'delay') {
            Base.reap(me);
        }

        super.destruct();
    }

    callChain (method, ...args) {
        this.$meta.callChain(this, method, args);
    }

    callChainRev (method, ...args) {
        this.$meta.callChainRev(this, method, args);
    }

    /**
     * Returns the value of the property or config of the given `name`. Typically a config
     * is read just like a normal property, however, doing so will trigger that config's
     * initialization. If this is not desired, this method can be used to `peek` at such
     * config properties without initializing them.
     * 
     * @param {String} name The name of the config or property to get.
     * @param {"peek"/"ready"} [peek] Applies only to config properties. Pass `'peek'`
     * (or `true`) to return the config value even if it has not been initialized and, if
     * it has not been initialized, it will not be initialized by this call. Pass `'ready'`
     * to retrieve the config property value only if it has been initialized. If the config
     * has not been initialized, this method will return `null`.
     */
    getConfig (name, peek) {
        let me = this;
        let cfg = me.$meta.configs.defs[name];

        return cfg ? cfg.peek(me, peek) : me[name];
    }
    
    getCurrentConfig (filter, inclusion) {
        return this.$meta.getConfigValues(this, false, filter, inclusion);
    }
    
    getInitialConfig (filter, inclusion) {
        return this.$meta.getConfigValues(this, true, filter, inclusion);
    }

    initConfig (config) {
        this.$meta.initConfig(this, config);
    }
    
    @buffered(50, { deliver: 'all' })
    static reap (...queue) {
        for (let calls of queue) {
            calls[0].reap();
        }
    }
    
    reap () {
        this.$meta.reapInstance(this);

        super.reap();
    }

    setConfig (config) {
        this.configure(config);
    }

    //-----------------------------------------------------------------------------
    // These are replaced by MetaClass but help give clues to IDE's or other tools:

    get $meta () {}         // eslint-disable-line getter-return
    static get $meta () {}  // eslint-disable-line getter-return
}

Base.$meta.namespace.set('Ext', Ext);

Ext.Base = Base;

export { Base };
