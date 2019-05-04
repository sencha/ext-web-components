import {
    assert,
    Empty, ExSet,
    boolProps, comparator, copy, copyIf, defineProp, defineProps, destroy,
    getOwnDescriptors, getOwnObject, is, merge, prototype, raise, defProp, setProto,
    str, toSet
} from './Misc';

import { Config } from './Config';
import { Configs } from './Configs';
import { Directive } from './Directive';
import { Namespace } from './Namespace';
import { Timer } from './Timer';

const configSyms = Config.symbols;
const configDeferSym = configSyms.defer;
const configInitSym = configSyms.init;
const configInitialSym = configSyms.initial;
const configMetaSym = configSyms.meta;

const junctionSym = Symbol('junction');
const metaClassSym = Symbol('metaClass');

const transformSortFn = comparator(1);

const prototypeSkip = new Empty({
    constructor: 1,

    $meta: 1,
    super: 1
});

const staticSkip = new Empty({
    $configs: 1,
    prototype: 1,
    length: 1,
    name: 1,

    meta: 1,
    super: 1
});

// The Empty ctor copy loop does not pick up Symbols:
staticSkip[metaClassSym] = 1;

//------------------------------------------------------------------------------------

@prototype({
    alias: null,
    chains: null,
    classes: null,
    completed: false,

    factory: null,   // set by Factoryable (having it preserves our shape)
    instances: 0,
    listeners: null,
    registry: null,   // set by Factoryable (having it preserves our shape)
    transformers: null,
    transforms: null,

    _configs: null,
    members: null,
    namespace: null,
    overlay: null,
    overrides: null
})
class MetaClass {
    static count = 0;
    static symbols = {
        junction: junctionSym,
        meta: metaClassSym
    };

    constructor (cls, superCls = null) {
        let me = this;
        let proto = cls.prototype;
        let className = str(cls.name);  // promote null to ''
        let superMeta = superCls && superCls.$meta;

        defProp(proto, '$meta', me, 'c');

        me.id = `${className}$${++MetaClass.count}`;  // "MyClass$42"
        me.class = cls;
        me.super = superMeta;
        me.superNotified = !superMeta;
        me.root = superMeta ? superMeta.root : me;
        me.liveChains = new Empty();

        cls.super = superCls;
        // proto.superclass is Ext JS legacy property
        proto.super = proto.superclass = superCls && superCls.prototype;

        if (superCls) {
            me.bases = superMeta.bases.clone();
            me.bases.add(superCls);
            me.namespace = superMeta.namespace;

            me.rootClass = superMeta.rootClass;

            // This test is paranoia and seems to always be truthy in our tests...
            /* istanbul ignore next */ if (className) {
                me.addTags({
                    ['is' + className]: true
                });
            }
        }
        else {
            me.bases = new ExSet();
            me.namespace = new Namespace();

            // Defining new chains is rare so we only create this map for Base. The
            // getChains() method will walk up the supers and return the first class
            // to have defined method chains (which is Base typically).
            me.chains = new Empty();

            me.rootClass = cls;
        }
    }

    complete () {
        let me = this;
        let bases, classes, configs, overrides, sup;
        
        if (!me.completed) {
            me.completed = true;

            sup = me.super;
            configs = me.configs;

            if (sup) {
                if (!sup.completed) {
                    sup.complete();
                }

                if (!me.superNotified) {
                    me.superNotified = true;
                    sup.notify('extending', me.class);
                    sup.notify('extended', me.class);
                }
            }

            bases = me.bases;
            overrides = me.overrides;

            me.classes = classes = sup ? sup.classes.clone().addAll(bases) : bases.clone();
            classes.add(me.class);

            if (overrides) {
                classes.addAll(overrides);
            }

            configs.complete();
        }
        
        return me;
    }

    completeTransforms () {
        let me = this;
        let transforms = me.transforms;
        let array, len, name;

        if (transforms) {
            // We have a keyed object with values (poked in along the prototype chain),
            // with priority values by which the keys should be sorted:
            //
            //      me.transforms = {
            //          foo: 1,
            //          bar: 0
            //      };
            //
            array = [];
            
            // We first convert to an array to sort by priority:
            //
            //      [
            //          [ 'foo', 1 ],
            //          [ 'bar', 0 ]
            //      ]
            //
            // Sorted we have:
            //
            //      [
            //          [ 'bar', 0 ],
            //          [ 'foo', 1 ]
            //      ]
            //
            for (name in transforms) {
                array.push([ name, transforms[name] ]);
            }
            
            // We then strip off the priority to get just the names:
            //
            //      [ 'bar', 'foo' ]
            //
            len = array.length;
            
            if (len) {
                if (len < 2) {
                    array[0] = array[0][0];  // just the name of the tuple
                }
                else {
                    array.sort(transformSortFn);

                    while (len-- > 0) {
                        array[len] = array[len][0];
                    }
                }
        
                me.transformers = array;
            }
        }
    }

    get configs () {
        let me = this;
        let sup = me.super;
        let configs = sup ? sup.configs.extend(me) : new Configs(me);

        // This allow us to peek at our Configs object w/o creating it...
        me._configs = configs;

        // Now don't come back here again for "this.configs" either:
        defProp(me, 'configs', configs);

        return configs;
    }
    
    addAlias (alias) {
        let me = this;
        
        // Returns the first alias added:
        alias = me.namespace.alias(me.class, alias);

        // Track the first (primary) alias here:
        me.alias = me.alias || alias;
    }

    addChains (methods) {
        let chains = this.getChains(true);

        if (typeof methods === 'string') {
            chains[methods] = true;
        }
        else {
            for (let m of methods) {
                chains[m] = true;
            }
        }
    }

    addConfigs (newConfigs, directives, mixinMeta) {
        let cls = this.class;
        let configs = this.configs;
        let existingConfigs = configs.defs;
        let existingValues = configs.values;
        let mixinConfigs = mixinMeta && mixinMeta.configs.defs;
        let config, configMeta, existingConfig, existingValue, name, value;

        configs.inherited.hasConfigs = true;

        for (name in newConfigs) {
            value = newConfigs[name];
            configMeta = value && value[configMetaSym];
            config = existingConfig = existingConfigs[name];
            existingValue = existingValues[name];

            //<debug>
            let isStatic = false;
            let wasStatic = false;
            //</debug>
    
            if (mixinMeta) {
                if (config) {
                    value = config.merge(value, existingValue, cls, mixinMeta);
    
                    //<debug>
                    isStatic = mixinConfigs[name].static;
                    wasStatic = config.static;
                    //</debug>
                }
                else {
                    config = mixinConfigs[name]; // this will always exists
                }
            }
            else {
                if (!config) {
                    config = Config.all[name] || Config.get(name);
                }
    
                if (configMeta) {
                    value = value.value;
                    config = config.extend(configMeta, cls);
    
                    if (configMeta.initial) {
                        config.initialValue = value;
                    }
                }
    
                // Some merge processors transform data and are helpful to run even
                // on the initial value.
                if (existingConfig || config.merge.$init) {
                    value = config.merge(value, existingValue, cls);
                }

                //<debug>
                isStatic = configMeta && configMeta.static;
                wasStatic = (existingConfig || config).static;
                //</debug>
            }
    
            if (config !== existingConfig) {
                existingConfigs[name] = config;
    
                if (!existingConfig) {
                    if (config.static) {
                        config.define(cls, 'static');
                    }
                    else {
                        config.define(cls.prototype);
                    }
                }
            }

            //<debug>
            assert(!isStatic === !wasStatic,
                   'Config "{0}" cannot be redefined as {1}static on {2}{3}', name,
                   wasStatic ? 'non-' : '', cls.name,
                   mixinMeta ? ' mixing ' + mixinMeta.class.name : '');
            //</debug>
    
            existingValues[name] = value;
        }
    }
    
    addConfigTransform (name, priority) {
        //<debug>
        assert(!this.completed,
               'Config transforms must be added before instances are created');
        //</debug>

        let transforms = getOwnObject(this, 'transforms');

        transforms[name] = priority;
    }

    addDirectives (directives) {
        this.directives = Directive.decode(directives, this.getDirectives());
    }

    addMixins (mixinCls, directives) {
        let me = this;
        let bases = me.bases;

        if (!mixinCls || bases.has(mixinCls)) {
            return;
        }

        if (is.array(mixinCls)) {
            for (let mx of mixinCls) {
                me.addMixins(mx, directives);
            }

            return;
        }

        let cls = me.class;
        let prototype = cls.prototype;
        let chains = me.getChains();
        let mixinMeta = mixinCls.$meta;  // ensure all Meta's exist
        let mixinConfigs = mixinMeta.configs;
        let transforms = mixinMeta.transforms;
        let rootClass = me.rootClass;
        let instanceMap = new Empty();
        let staticsMap = new Empty();
        let existing, fn, i, isStatic, k, key, keys, map, members, mixCls,
            mixMeta, prop, skip, target;

        //<debug>
        assert(!cls.constructor.isPrototypeOf(mixinCls),
               'Cannot mix a derived class into a super class');

        assert(!me.completed, `Too late to apply a mixin to class ${me.class.name}`);
        //</debug>

        if (!rootClass.isPrototypeOf(mixinCls)) {
            // When a mixin (say Factoryable) is mixed into a class hierarchy that does
            // not have a common super class, just add the mixin and none of its bases.
            // Otherwise we will loop up to the common super class and pick up any bases
            // that are lacking in the target.
            rootClass = mixinCls.super;
        }

        mixinMeta.complete();

        mixinMeta.notify('mixing', cls, directives);

        if (mixinConfigs.inherited.hasConfigs) {
            me.addConfigs(mixinConfigs.values, directives, mixinMeta);
        }

        if (transforms) {
            copy(getOwnObject(me, 'transforms'), transforms);
        }

        for (mixCls = mixinCls; mixCls !== rootClass; mixCls = mixCls.super) {
            if (bases.has(mixCls)) {
                break;
            }

            mixMeta = mixCls[metaClassSym]; // earlier call to .$meta ensures this is OK

            // Start with instance side members:
            isStatic = false;
            map = instanceMap;
            skip = prototypeSkip;
            target = prototype;

            for (members = mixMeta.getMembers(); members; members = members.statics) {
                keys = members.keys;
                k = keys.length;

                for (i = 0; i < k; ++i) {
                    if (skip[key = keys[i]]) {
                        continue;
                    }

                    prop = members.props[key];

                    fn = prop.value;
                    fn = (typeof fn === 'function') && fn;

                    if (fn && !fn.$owner) {
                        fn.$owner = mixCls;
                    }

                    if (map[key]) {
                        continue;
                    }

                    map[key] = true;

                    if (!isStatic && chains[key]) {
                        continue;
                    }

                    if (!(key in target)) {
                        defineProp(target, key, prop);
                    }
                    else if (fn && target.hasOwnProperty(key)) {
                        existing = target[key];

                        if (!existing.$owner) {
                            existing.$owner = cls;
                        }

                        if (existing[junctionSym] || fn[junctionSym]) {
                            if (existing.$owner === cls) {
                                // We could have previously mixed in a method from a class
                                // that was also a Junction, so we need to check that the
                                // method belongs to the target class.
                                if (!existing.fns) {
                                    me.createJunction(isStatic, key, existing);
                                }
    
                                existing.fns.push(fn);
                            }
                        }
                    }
                }

                // Switch over to statics for next loop
                isStatic = true;
                map = staticsMap;
                skip = staticSkip;
                target = cls;
            }
        }

        bases.addAll(mixinMeta.classes);
        mixinMeta.notify('mixed', cls, directives);
    }
    
    addName (name) {
        let me = this;
        let namespace = me.namespace;
        let proto, s;

        if (typeof name === 'string') {
            namespace.set(name, me.class);
            namespace.classes[name] = me.class;
            
            // Store primary class name on class prototype:
            if (!(proto = me.class.prototype).hasOwnProperty('$className')) {
                defProp(proto, '$className', name);
            }
        }
        else {
            for (s of name) {
                me.addName(s);
            }
        }
    }

    addOverride (override, patch) {
        // Start with instance side members:
        let me = this;
        let cls = me.class;
        let chains = !patch && me.getChains();
        let skip = prototypeSkip;
        let target = cls.prototype;
        let source = override.prototype;
        let overlay = patch ? null : (me.overlay || (me.overlay = me.createOverlay()));
        let members = getOwnDescriptors(source);
        let staticMembers = getOwnDescriptors(override);
        let bottom, existing, fn, i, k, key, keys, n, prop;

        //<debug>
        assert(!me.completed, `Too late to apply an override to class ${me.class.name}`);
        //</debug>

        if (!patch) {
            (me.overrides || (me.overrides = [])).push(override);
        }

        for (n = 0; n < 2; ++n) {
            bottom = overlay && overlay.bottom;
            keys = members.keys;
            k = keys.length;

            for (i = 0; i < k; ++i) {
                if (skip[key = keys[i]]) {
                    continue;
                }

                prop = members.props[key];

                fn = prop.value;
                fn = (typeof fn === 'function') && fn;

                if (fn && !fn.$owner) {
                    fn.$owner = override;
                }

                if (chains && chains[key]) {
                    continue;
                }

                if (fn && !patch && target.hasOwnProperty(key) && !bottom.hasOwnProperty(key)) {
                    existing = target[key];

                    if (!existing.$owner) {
                        existing.$owner = cls;
                    }

                    bottom[key] = existing;
                }

                defineProp(target, key, prop);
            }

            setProto(source, patch ? Object.getPrototypeOf(target) : overlay.top);

            if (overlay) {
                overlay.top = source;
                overlay = overlay.static;
            }

            // Switch over to statics for next loop
            chains = null;
            members = staticMembers;
            skip = staticSkip;
            source = override;
            target = cls;
        }
    }

    addProperties (properties) {
        defineProps(this.class.prototype, properties);
    }
    
    addTags (tags) {
        let props = {};
        let name;

        tags = toSet(tags);

        for (name in tags) {
            props[name] = {
                value: tags[name]
            };
        }

        defineProps(this.class.prototype, props);
    }
    
    adjustConfigs (options) {
        let configs = this.configs;

        if (options === 'open') {
            options = {
                open: true
            };
        }
        //<debug>
        else {
            assert(options && typeof options !== 'string',
                   'Invalid value for "configurable": "{0}"', options);
        }
        //</debug>

        copy(configs, options);
    }

    callChain (instance, method, args, reverse) {
        let liveChains = this.liveChains;
        let live = liveChains[method];
        let cls, fn, proto;

        if (live === null) {
            return;
        }

        if (!live) {
            // On the first call we need to build the method chain for the class. If we
            // find no impls we put null back in the liveChains so we bail early on all
            // subsequent calls.
            for (cls of this.classes) {
                proto = cls.prototype;
                fn = proto[method];
    
                if (fn && proto.hasOwnProperty(method)) {
                    (live || (live = [])).push(fn);
                }
            }

            // If we found an impl on some class, we've wrapped an array around it (along
            // with all other impls)...
            if (!(liveChains[method] = live || null)) {
                return;
            }
        }
        
        if (reverse) {
            // Only some chains run in reverse, so lazily calculate that flavor only when
            // we need it (remember reverse() is in-place):
            live = live.$rev || (live.$rev = live.slice().reverse());
        }

        for (fn of live) {
            if (args) {
                fn.apply(instance, args);
            }
            else {
                fn.call(instance);
            }
        }
    }

    callChainRev (instance, method, args) {
        this.callChain(instance, method, args, /* reverse = */ true);
    }

    configure (instance, config) {
        let me = this;

        instance.configuring = true;

        if (instance.$configs) {
            me.reconfigure(instance, config);
        }
        else {
            let configs = me.configs;

            if (configs && configs.inherited.hasConfigs) {
                if (me.instances < 2) {
                    // This allows appliers/updaters to know they are configuring the
                    // cache phase of the first instance:
                    instance.configuring = 'cache';
                }

                if (instance.beforeConfigure) {
                    config = instance.beforeConfigure(config) || config;
                }

                // All the instance to get in front of the initial configuration:
                if (instance.initConfig) {
                    instance.initConfig(config);
                }
                else {
                    me.initConfig(instance, config);
                }

                if (instance.afterConfigure) {
                    instance.afterConfigure(config);
                }
            }
            else if (config && config.constructor === Object) {
                copy(instance, config);
            }
        }

        instance.configuring = false;
    }

    destroyMembers (instance, args) {
        let configs = this._configs;
        let configValues = instance.$configs;
        let defs = configs && configs.defs;
        let from, name, value;

        for (name of args) {
            from = (defs && defs[name]) ? configValues : instance;
            value = from.hasOwnProperty(name) && from[name];

            if (value) {
                from[name] = null;
                destroy(value);
            }
        }
    }

    getChains (own) {
        let chains = this.chains;

        if (!chains) {
            let sup = this.super;

            if (own) {
                this.chains = chains = Object.create(sup.getChains(true));
            }
            else {
                for (/* empty */; !chains && sup; sup = sup.super) {
                    chains = sup.chains;
                }
            }
        }

        return chains;
    }

    getConfigValues (instance, initialValues, filter, inclusion) {
        let configs = this.configs;
        let classValues = configs.values;
        let instanceValues = instance.$configs;
        let configuredValues = instanceValues[configInitialSym];
        let source = initialValues ? configuredValues : instanceValues;
        let ret = {};
        let name;
        
        for (name of configs.names) {
            if (!filter || (inclusion ? filter[name] : !filter[name])) {
                if (source.hasOwnProperty(name) && source[name] !== classValues[name]) {
                    ret[name] = source[name];
                }
            }
        }
        
        return ret;
    }

    getDirectives () {
        let ret = null;

        for (let c = this; c && !ret; c = c.super) {
            ret = c.directives;
        }

        return ret;
    }

    getMembers () {
        //<debug>
        assert(this.completed, 'Class is incomplete');
        //</debug>

        let cls = this.class;
        let members = this.members;

        if (!members) {
            this.members = members = getOwnDescriptors(cls.prototype);
            members.statics = getOwnDescriptors(cls);
        }

        return members;
    }

    getShim (proto) {
        let shim = this.shim;

        if (!shim) {
            this.shim = shim = this.createShim();
        }

        return proto ? shim.prototype : shim;
    }
    
    initClassConfig () {
        let me = this;
        let cls = me.class;
        let cfg;
        
        me.complete();
        
        for (cfg of me.configs.staticCfgs) {
            if (!cfg.lazy) {
                // noinspection BadExpressionStatementJS
                cls[cfg.name];  // trigger the getter/staticInitDef
            }
        }
    }

    initConfig (instance, instanceConfig) {
        let me = this;
        let configs = me.configs;
        let defaults = configs.defaults;
        let first = me.instances < 2;
        let mergedConfig = new Empty();
        let cfg, configValue, instanceValues, name, value;

        if (first) {
            configs.defaults = defaults = new Empty();
        }

        // This object is the backing store for config properties.
        defProp(instance, '$configs', instanceValues = Object.create(defaults));
        
        if (first) {
            me.initClassConfig();

            me.completeTransforms();
            me.initFirstInstance(instance, instanceValues, defaults, instanceConfig);

            if (instance.afterCachedConfig) {
                instance.afterCachedConfig();
            }

            // Change from "cache" to "first" so that appliers/updaters can tell that we
            // are configuring the first instance post-cache:
            instance.configuring = 'first';
        }

        // The mergedConfig is stored on the instance for use by the initializer. It is
        // used here for immediately initialized properties, but also later for any lazy
        // configs.
        instanceValues[configInitSym] = instanceValues[configInitialSym] = mergedConfig;

        let configValues = configs.values;
        let defs = configs.defs;
        let initsMap = configs.initsMap; // this is setup by initFirstInstance()
        let transformers = me.transformers;

        for (cfg of configs.inits) {
            cfg.define(instance, 'init');

            configValue = configValues[cfg.name];
            
            if (configValue && configValue[configDeferSym]) {
                configValue = configValue(); // call initializer()
            }

            mergedConfig[cfg.name] = configValue;
        }

        if (transformers) {
            for (name of transformers) {
                instanceConfig = instance[name](instanceConfig, me);
            }
        }

        if (instanceConfig) {
            for (name in instanceConfig) {
                cfg = defs[name];
                value = instanceConfig[name];

                if (cfg) {
                    //<debug>
                    assert(!cfg.static, 'Static configs cannot be passed to constructor');
                    //</debug>

                    if (!initsMap[name]) {
                        cfg.define(instance, 'init');
                    }
                    
                    configValue = configValues[name];

                    if (configValue && configValue[configDeferSym]) {
                        if (initsMap[name]) {
                            // Normally, defer configs are present in the initsMap and as
                            // such they have been evaluated into mergedConfig already:
                            configValue = mergedConfig[name];
                        }
                        else {
                            // These configs can be cached, in which case they are not in
                            // the initsMap and are instead already set on instanceValues
                            // (actually on its prototype thanks to initFirstInstance).
                            configValue = instanceValues[name];
                        }
                    }
                    
                    mergedConfig[name] = cfg.merge(value, configValue);
                }
                else if (configs.open) {
                    // TODO @open({ functions: true })

                    instance[name] = value;
                }
            }
        }

        if (instance.beforeInitConfig) {
            instance.beforeInitConfig();
        }

        for (cfg of configs.instCfgs) {
            name = cfg.name;
            
            if (initsMap[name] || (mergedConfig && (name in mergedConfig))) {
                if (!cfg.lazy && instance.hasOwnProperty(name)) {
                    if (first && cfg.pre) {
                        // We've handled "pre" configs in initFirstInstance if this is the
                        // first, so if this one of those we need to remove the initter:
                        delete instance[name];
                    }
                    else {
                        instance[name] = mergedConfig[name];
                    }
                }
            }
        }
    }

    initFirstInstance (instance, instanceValues, defaults, instanceConfig) {
        let me = this;
        let cachedInits = null;
        let configs = me.configs;
        let cachedMap = configs.cachedMap = new Empty();
        let instCfgs = configs.instCfgs;
        let configNames = configs.names = [];
        let configValues = configs.values;
        let inits = configs.inits = [];
        let initsMap = configs.initsMap = new Empty();
        let prototype = me.class.prototype;
        let cfg, defer, initValues, mergedConfig, name, simple, value;

        instCfgs.sort(Config.compare);

        for (cfg of instCfgs) {
            name = cfg.name;
            configNames.push(name);
            value = configValues[name];
            defer = value && value[configDeferSym];

            simple = !cfg.pre && !defer && (
                value === null || (cfg.initial && value === cfg.initialValue)
            );

            if (!simple && !defer) {
                simple = !prototype[cfg.applier] && !prototype[cfg.updater] &&
                         typeof value !== 'object';
            }

            if (simple) {
                defaults[name] = value;
            }
            else {
                defaults[name] = undefined;  // for consistent object shape

                if (cfg.cached || cfg.pre) {
                    if (defer) {
                        // If we haven't spun up mergedConfig do so now by copying all the
                        // configValues we may have already visited into it:
                        mergedConfig = mergedConfig || new Empty(configValues);

                        mergedConfig[name] = mergedConfig[name](); // call initializer
                    }
                    
                    if (cfg.pre && instanceConfig && name in instanceConfig) {
                        mergedConfig = mergedConfig || new Empty(configValues);
                        
                        mergedConfig[name] = cfg.merge(instanceConfig[name], mergedConfig[name]);
                    }

                    (cachedInits || (cachedInits = [])).push(cachedMap[name] = cfg);
                    cfg.define(instance, 'init');
                    
                    if (cfg.cached) {
                        continue;
                    }
                }

                inits.push(initsMap[name] = cfg);
            }
        }

        instanceValues[configInitSym] = instanceValues[configInitialSym] =
            initValues = mergedConfig || configValues;

        if (cachedInits) {
            for (cfg of cachedInits) {
                if (instance.hasOwnProperty(name = cfg.name)) {
                    instance[name] = initValues[name];
                }
            }

            for (cfg of cachedInits) {
                if (cfg.cached) {
                    // Ignore "pre" configs here
                    name = cfg.name;
                    defaults[name] = instanceValues[name];
                    delete instanceValues[name];
                }
            }
        }
    }

    mergeConfigs (target, source) {
        let configs = this.configs;
        let defs = configs.defs;
        let cfg, name, value;

        for (name in source) {
            value = source[name];

            if (!(cfg = defs[name])) {
                if (configs.open) {
                    target[name] = value;
                }
            }
            else {
                target[name] = cfg.merge(value, target[name]);
            }
        }

        return target;
    }
    
    notify (event, ...args) {
        let me = this;
        let listeners = me.listeners;
        let fn, scope;

        if (event.startsWith('extend') && me.super) {
            // We do this before calling our listeners so that we get a top-down call
            // sequence:
            me.super.notify(event, ...args);
        }

        listeners = listeners && listeners[event];
        
        if (listeners) {
            for (fn of listeners) {
                if (typeof fn === 'function') {
                    fn(...args);
                }
                else {
                    [fn, scope] = fn;
                    
                    if (typeof fn === 'string') {
                        scope[fn](...args);
                    }
                    else {
                        fn.apply(scope, args);
                    }
                }
            }
        }
    }
    
    on (event, fn, scope) {
        let me = this;
        let listeners = me.listeners || (me.listeners = {
            extended: null,
            extending: null,
            mixed: null,
            mixing: null
        });
        let key;
        
        if (typeof event === 'string') {
            //<debug>
            assert(event in listeners, 'Invalid class event "{0}"', event);
            //</debug>

            (listeners[event] || (listeners[event] = [])).push(scope ? [fn, scope] : fn);
        }
        else {
            scope = event.scope;
            
            for (key in event) {
                if (key !== 'scope') {
                    me.on(key, event[key], scope);
                }
            }
        }
    }

    processDirectives (directives) {
        let me = this;
        let cls = me.class;
        let notifySuper = !me.superNotified;

        if (notifySuper) {
            me.superNotified = true;
            me.super.notify('extending', cls, directives);
        }
        
        let newDirectives = directives.directives;

        if (newDirectives) {
            delete directives.directives;
            cls.includeDirectives(newDirectives);
        }

        newDirectives = cls.$meta.getDirectives();

        // Process declared directives first (since they care about order):
        for (let proc of newDirectives) {
            let name = proc.name;

            if (name in directives) {
                cls[proc.applier](directives[name], directives);
            }
        }

        // Process non-declared directives after those that have order requirements:
        for (let key in directives) {
            let applier = Directive.getApplierName(key);

            if (!newDirectives.byName[key]) {
                if (cls[applier]) {
                    cls[applier](directives[key], directives);
                }
                else if (cls.onDirective) {
                    cls.onDirective(key, directives[key], directives);
                }
            }
        }

        if (notifySuper) {
            me.super.notify('extended', cls, directives);
        }
    }

    reapInstance (instance) {
        let configs = this.configs;
        let names = configs.names;
        let nullify = configs.nullify;
        let cfg, destruct, name;
        
        if (!(destruct = configs.destroy)) {
            configs.destroy = destruct = [];
            configs.nullify = nullify = [];
                
            if (names) {
                for (name of names) {
                    cfg = configs.defs[name];
                    
                    if (cfg.nullify) {
                        nullify.push(name);

                        //<debug>
                        assert(!cfg.destroy,
                               '"{0}" cannot have both "destroy" and "nullify"', name);
                        //</debug>
                    }
                    else if (cfg.destroy) {
                        destruct.push(name);
                    }
                }
            }
        }
        
        if (destruct.length) {
            this.destroyMembers(instance, destruct);
        }

        for (name of nullify) {
            instance[name] = null;
        }
    }

    reconfigure (instance, configValues) {
        let me = this;
        let configs = me.configs;
        let cachedMap = configs.cachedMap;
        let defs = configs.defs;
        let initsMap = configs.initsMap;
        let keys = Object.keys(configValues);
        let cfg, key;

        instance.$configs[configInitSym] = configValues;

        keys.sort();

        for (key of keys) {
            cfg = initsMap[key] || cachedMap[key];

            if (cfg) {
                cfg.define(instance, 'init');
            }
            else if (defs[key] || configs.open) {
                // TODO @open({ functions: true })

                instance[key] = configValues[key];
            }
        }

        for (key of keys) {
            cfg = initsMap[key] || cachedMap[key];

            if (cfg && instance.hasOwnProperty(key)) {
                instance[key] = configValues[key];
            }
        }
    }
    
    //-----------------------------------------------------------------------------
    // Private

    static adopt (cls, primeDirectives = true) {
        cls.isClass = true;

        defineProp(cls, '$meta', {
            get () {
                let me = this;
                let cls = me[metaClassSym];

                if (!cls || me !== cls.class) {
                    me[metaClassSym] = cls = new MetaClass(me, Object.getPrototypeOf(me));
                }

                return cls;
            }
        });

        let meta = cls[metaClassSym] = new MetaClass(cls);

        copyIf(cls, {
            define (directives) {
                this.$meta.processDirectives(directives || {});

                return this;
            },

            includeDirectives (directives) {
                this.$meta.addDirectives(directives);
            }
        });

        if (primeDirectives) {
            copyIf(cls, {
                includeAlias (alias, directives) {
                    this.$meta.addAlias(alias, directives);
                },

                includeChains (chains, directives) {
                    this.$meta.addChains(chains, directives);
                },

                includeConfig (configs, directives) {
                    this.$meta.addConfigs(configs, directives);
                },

                includeConfigurable (configs) {
                    this.$meta.adjustConfigs(configs);
                },

                includeExtended (fn) {
                    this.$meta.on('extended', fn);
                },

                includeExtending (fn) {
                    this.$meta.on('extending', fn);
                },

                includeMixed (fn) {
                    this.$meta.on('mixed', fn);
                },

                includeMixing (fn) {
                    this.$meta.on('mixing', fn);
                },

                includeMixins (mixinCls, directives) {
                    this.$meta.addMixins(mixinCls, directives);
                },

                includeName (name, directives) {
                    this.$meta.addName(name, directives);
                },

                includeProperties (properties, directives) {
                    this.$meta.addProperties(properties, directives);
                },

                includePrototype (members) {
                    copy(this.prototype, members);
                },

                includeStatic (members, directives) {
                    let configs = members.config;
                    let def, name, opt, out;

                    delete members.config;

                    if (configs) {
                        out = directives.config || (directives.config = {});

                        for (name in configs) {
                            //<debug>
                            assert(!(name in out), 'Config "{0}" has multiple definitions',
                                   name);
                            //</debug>

                            def = configs[name];

                            if (!(opt = def && def[configMetaSym])) {
                                //
                                def = {
                                    value: def,
                                    [configMetaSym]: opt = {}
                                };
                            }

                            opt.static = true;
                            out[name] = def;
                        }
                    }

                    copy(this, members);
                },

                includeTags (tags, directives) {
                    this.$meta.addTags(tags, directives);
                }
            });

            meta.addDirectives({
                properties: null,
                prototype: 'properties',
                static: 'prototype',
                name: 'static',
                alias: 'name',
                chains: 'alias',
                mixins: 'chains',
                configurable: 'mixins',
                config: 'configurable'

                // The "directives" directive is deliberately not defined because
                // it defines other directives and is hoisted to the first in every
                // case. The "extending/ed" and "mixing/ed" directives are also not
                // listed since their order is not important.
            });
        }

        return meta;
    }

    createJunction (isStatic, key, method) {
        let shim = this.getShim(!isStatic);
        let sup = this.class.super;

        if (!isStatic) {
            sup = sup.prototype;
        }

        method.fns = [];

        // A junction calls the true super method and all applyMixins methods and
        // returns the return value of the first method called.
        shim[key] = method[junctionSym] = function (...args) {
            let called = sup[key];
            let result = called && called.apply(this, args);
            let res;

            for (let fn of method.fns) {
                res = fn.apply(this, args);

                if (!called) {
                    called = true;
                    result = res;
                }
            }

            return result;
        };
    }

    createOverlay () {
        let cls = this.class;
        let overlay = {
            bottom: Object.create(cls.prototype),
            static: {
                bottom: Object.create(cls)
            }
        };

        overlay.static.top = overlay.static.bottom;
        overlay.top = overlay.bottom;

        return overlay;
    }

    createShim () {
        let cls = this.class;
        let base = cls.super;

        class Shim extends base {}

        setProto(cls, Shim);
        setProto(cls.prototype, Shim.prototype);

        return Shim;
    }

    static define (C, directives) {
        if (!C[metaClassSym]) {
            MetaClass.adopt(C, /* primeDirectives= */!directives || !directives.directives);
        }
        
        C.define(directives);
        
        return C;
    }

    static get (C) {
        return C[metaClassSym] ? C.$meta : MetaClass.adopt(C);
    }
}

//-----------------------------------------------------------------------
// Class building decorators:

const trackClass = {
    //<debug>
    own: true
    //</debug>
};

const trackOverride = {
    own: true,
    static: true
};

function includeConfigs (elements, directives, track) {
    let cfg, classFields, configs, el, initializer, keepers;
    let i = -1;
    
    for (el of elements) {
        ++i;  // 0, 1, ...

        if (el.kind === 'field') {
            initializer = el.initializer;
    
            if (initializer.hasOwnProperty(configMetaSym)) {
                cfg = initializer[configMetaSym];
            
                if (!configs) {
                    keepers = elements.slice(0, i);
                    configs = {};
                }
    
                configs[el.key] = cfg;
                continue;
            }
            
            if (track && track[el.placement]) {
                (classFields || (classFields = new Empty()))[el.key] = el;
            }
        }

        if (keepers) {
            keepers.push(el);
        }
    }
    
    if (configs) {
        directives = merge({ config: configs }, directives);
    }
    
    return [ keepers || elements, directives, classFields ];
}

function define (directives) {
    let deco = descr => {
        let [ elements, combined, classFields ] =
            includeConfigs(descr.elements, directives, trackClass);

        return {
            elements,
            kind: descr.kind,

            finisher (C) {
                MetaClass.define(C, combined);
                
                //<debug>
                if (classFields) {
                    let configDefs = C.$meta.configs.defs;

                    for (let name in classFields) {
                        assert(!configDefs[name],
                               `Class field ${C.name}.${name} collides with superclass config`);
                    }
                }
                //</debug>
            }
        };
    };

    if (is(directives, 'descriptor')) {
        // @define
        // class Foo {
        // }
        let descr = directives;

        directives = null;

        return deco(descr);
    }
    // else:
    // @define({
    //     directives...
    // })
    // class Foo {
    // }

    return deco;
}

/**
 * The `config` decorator is used declare as well as customize config properties.
 * 
 * It is used in several different ways, but the most common is to declare a new config:
 * 
 *      @define
 *      class Foo extends Base {
 *          @config
 *          text = null;
 *      }
 * 
 * Using `@config` in this way defines the `text` property as a config property. The config
 * property can be customized by passing arguments to `config`. Since most customizations
 * are simply boolean options, these can be enabled by passing their names:
 * 
 *      @define
 *      class Foo extends Base {
 *          @config('lazy')
 *          text = null;
 *      }
 *      
 * The above is equivalent to this:
 * 
 *      @define
 *      class Foo extends Base {
 *          @config({ lazy: true })
 *          text = null;
 *      }
 * 
 * Some classes have numerous configs. These can be declared in bulk using `@define`:
 * 
 *      @define({
 *          config: {
 *              text: null
 *          }
 *      })
 *      class Foo extends Base {
 *          // ...
 *      }
 * 
 * To customize such configs, their value can be wrapped using `config` as a function (not
 * a decorator):
 * 
 *      @define({
 *          config: {
 *              text: config(null, { lazy: true })  // 2nd arg must be an Object
 *          }
 *      })
 *      class Foo extends Base {
 *          // ...
 *      }
 */
function config (...args) {
    let deco = descr => {
        let { kind, key, descriptor, placement } = descr;

        assert(kind === 'field', `@config cannot be applied to {0} elements`, kind);

        let value = descr.initializer;
        let empty;
        
        if (descr.placement === 'static') {
            options = options || {};
            options.static = true;
        }

        if (options && options.defer) {
            // We keep the initializer fn when defer is specified, but that is not a
            // true Config option, so poke on configDeferSym and remove the flag:
            value[configDeferSym] = 1;
            delete options.defer;

            // noinspection LoopStatementThatDoesntLoopJS
            for (empty in options) {
                empty = options;
                break;
            }
            
            options = empty;  // undefined if loop didn't run, otherwise a nop
        }
        else {
            value = value();  // call the initializer now (to allow merging etc)
        }
        
        let info = options ? { value: value, [configMetaSym]: options } : value;

        let ret = {
            kind, key, descriptor, placement,
            initializer () {
                raise(`@config property "${key}" missing @define on class ${
                    this.constructor.name}`);
            }
        };

        // This allows a class decorator to find all the config properties and prune
        // them from the elements[] while extracting their values:
        ret.initializer[configMetaSym] = info;

        return ret;
    };
    let n = args.length;
    let options, p;

    if (n === 1) {
        p = args[0];
        
        if (is(p, 'descriptor')) {
            return deco(p);
        }
    }
    else if (n === 2 && (p = args[1]) && p.constructor === Object) {
        return {
            value: args[0],
            [configMetaSym]: p
        };
    }

    options = boolProps(args);

    return deco;
}

const fieldPlacements = {
    own: 'prototype',
    static: 'static'
};

function override (directives) {
    let deco = descriptor => {
        let {elements, kind} = descriptor;
        let classFields, combined, el, key, name, patch;

        if (directives && ('patch' in directives)) {
            patch = directives.patch;
            delete directives.patch;
        }

        [elements, combined, classFields] =
            includeConfigs(elements, directives, trackOverride);

        return {
            kind, elements,

            finisher (O) {
                let T = Object.getPrototypeOf(O);
                let meta = MetaClass.get(T);

                if (classFields) {
                    let configDefs = meta.configs.defs;

                    combined = combined || {};

                    for (name in classFields) {
                        el = classFields[name];
                        key = configDefs[name] ? 'config' : fieldPlacements[el.placement];

                        (combined[key] || (combined[key] = {}))[name] = el.initializer();
                    }
                }

                T.define(combined);

                meta.addOverride(O, patch);
            }
        };
    };

    if (is(directives, 'descriptor')) {
        let d = directives;

        directives = null;

        return deco(d);
    }

    return deco;
}

//-----------------------------------------------------------------------
// Methods

/**
 * This decorator is applied to class methods that have multiple base class and/or
 * applyMixins "super" methods.
 *
 * For example:
 *
 *      class Foo extends Base {
 *          @junction
 *          bar (x, y) {
 *              super.bar(x, y);
 *          }
 *      }
 */
function junction (descr) {
    let d = descr.descriptor;
    let fn = d.value;

    //<debug>
    assert(!d.initializer);
    //</debug>

    fn[junctionSym] = true;

    return descr;
}

export { config, define, junction, override, MetaClass };
