import {
    Ext, assert, capitalize, clone, copy, copyIf, Empty, is, merge, prototype
} from './Misc';

import { Base } from './Base';
import { define } from './MetaClass';

const fixNameRe = /\.[a-z]/ig;

function fixName (match) {
    return match.substring(1).toUpperCase();
}

/**
 * This class provides a factory for a family of classes (classes with a common `alias`
 * prefix).
 * 
 * 
 * The factory for a class family is a function stored as a `static` on `Ext.Factory`. These
 * are created either by directly calling `Ext.Factory.define` or by using the
 * `Ext.mixin.Factoryable` interface.
 *
 * To illustrate, consider the layout system's use of aliases. The `hbox` layout maps to
 * the `"layout.hbox"` alias that one typically provides via the `layout` config on a
 * Container.
 *
 * Under the covers this maps to a call like this:
 *
 *      Ext.Factory.layout('hbox');
 *
 * Or possibly:
 *
 *      Ext.Factory.layout({
 *          type: 'hbox'
 *      });
 *
 * The value of the `layout` config is passed to the `Ext.Factory.layout` function. The
 * exact signature of a factory method matches `{@link Ext.Factory#method!create}`.
 *
 * To define this factory directly, one could call `Ext.Factory.define` like so:
 *
 *      Ext.Factory.define('layout', 'auto');  // "layout.auto" is the default type
 */
@prototype({
    /**
     * @cfg {Boolean} cacheable
     * When `true`, the `create` method will cache instances created from a string config.
     * The instance will not be cached if its own `cacheable` property is `false`.
     */
    cacheable: false,

    /**
     * @cfg {String} creator
     * The name of the method used to prepare config objects for creation. This defaults
     * to `'create'` plus the capitalized name (e.g., `'createLayout'` for the 'layout'
     * alias family).
     */
    creator: null,

    /**
     * @cfg {Class} defaultClass
     * The Class reference of the type of instance to create when none is provided to the
     * factory. This property is set from `xclass` when the factory instance is created.
     * @private
     * @readonly
     */
    defaultClass: null,

    /**
     * @cfg {String} defaultProperty
     * The config property to set when the factory is given a config that is a string.
     */
    defaultProperty: 'type',

    /**
     * @cfg {String} defaultType
     * An optional type to use if none is given to the factory at invocation. This is a
     * suffix added to the `aliasPrefix`. For example, if `aliasPrefix="layout."` and
     * `defaultType="hbox"` the default alias is `"layout.hbox"`. This is an alternative
     * to `xclass` so only one should be provided.
     */
    defaultType: null,

    /**
     * @cfg {String} functionProperty
     * The config property to set when the factory is given a config that is a function
     * that is not a constructor (i.e., it has no `prototype`).
     */
    functionProperty: null,

    /**
     * @cfg {String} instanceProperty
     * The property that identifies an object as instance vs a config.
     */
    instanceProperty: 'isInstance',

    /**
     * @cfg {String} typeProperty
     * The property from which to read the type alias suffix.
     */
    typeProperty: 'type',

    /**
     * @cfg {String} xclass
     * The full classname of the type of instance to create when none is provided to the
     * factory. This is an alternative to `defaultType` so only one should be specified.
     */
    xclass: null,

    //----------------------------

    instanceCache: null,

    registry: null

    /**
     * @property {String} aliasPrefix
     * The prefix to apply to `type` values to form a complete alias. This defaults to the
     * proper value in most all cases and should not need to be specified.
     */
})
class Factory {
    constructor (config) {
        let me = copy(this, config);
        let type = me.type;
        let cls, xclass;
        
        me.aliasPrefix = type + '.';
        me.cache = {};
        me.name = me.name || type.replace(fixNameRe, fixName);
        me.creator = me.creator || `create${capitalize(me.name)}`;
        me.defaultsConfig = me.defaultsConfig || `${me.name}Defaults`;

        if (typeof(xclass = me.xclass) === 'string') {
            me.defaultClass = cls = me.registry._namespace.get(xclass);

            //<debug>
            assert(cls && cls.isClass, 'Invalid class name "{0}"', xclass);
            //</debug>
        }

        if (me.cacheable) {
            me._initCache();
        }
    }

    /**
     * Creates an instance of this class family given configuration options.
     *
     * @param {Object/String} [config] The configuration or instance (if an Object) or
     * just the type (if a String) describing the instance to create.
     * @param {String} [config.xclass] The full class name of the class to create.
     * @param {String} [config.type] The type string to add to the alias prefix for this
     * factory.
     * @param {String/Object} [defaultType] The type to create if no type is contained in the
     * `config`, or an object containing a default set of configs.
     * @return {Object} The newly created instance.
     */
    create (config, defaultType) {
        let me = this;
        let namespace = me.registry._namespace;
        let cache = me.cache;
        let functionProperty = me.functionProperty;
        let typeProperty = me.typeProperty;
        let alias, className, cls, defaultClass, suffix, type;

        if (config) {
            if (config[me.instanceProperty]) {
                return config;
            }

            type = typeof config;

            if (type === 'string') {
                config = {
                    [me.defaultProperty]: config
                };
            }
            else if (is.class(config)) {
                config = {
                    [typeProperty]: config
                };
            }
            else if (functionProperty && type === 'function') {
                config = {
                    [functionProperty]: config
                };
            }

            className = config.xclass;
            suffix = config[typeProperty];
            
            if (suffix) {
                if (!className && is.class(suffix)) {
                    className = suffix;
                }

                config = copy({}, config);
                delete config[typeProperty];
            }
        }

        if (defaultType) {
            if (defaultType.constructor === Object) {
                config = copy({}, defaultType, config);
                defaultType = defaultType[typeProperty];
            }

            if (is.class(defaultType)) {
                defaultClass = defaultType;
                defaultType = null;
            }
        }

        if (className) {
            cls = (typeof className === 'string') ? namespace.classes[className] : className;

            //<debug>
            assert(cls, `No class named "{0}"`, className);
            //</debug>
        }
        else {
            if (!(suffix = suffix || defaultType) && !(cls = defaultClass)) {
                if (!(suffix = me.defaultType)) {
                    cls = me.defaultClass;
                }
            }

            //<debug>
            assert(suffix || cls, 'No type specified for {0}.create', me.type);
            //</debug>

            if (!cls && !(cls = cache[suffix])) {
                alias = me.aliasPrefix + suffix;
                cls = namespace.aliases[alias];
    
                //<debug>
                assert(cls, `No class found for alias "{0}"`, alias);
                //</debug>

                cache[suffix] = cls;
            }
        }

        // TODO is this still required?
        // return cls.isInstance ? cls : new cls(config);
        return new cls(config);
    }

    clearCache () {
        this.cache = {};
        
        if (this.cacheable) {
            this.instanceCache = {};
        }
    }

    /**
     * Sets a hook on the creation process. If the hook `fn` returns `undefined` then
     * the original `create` method is called.
     *
     * @param {Function} fn The hook function to call when `create` is invoked.
     * @param {Function} fn.original The original `create` method.
     * @param {String/Object} fn.config See {@link #method!create create}.
     * @param {String/Object} fn.defaultType See {@link #method!create create}.
     * @private
     */
    hook (fn) {
        let me = this;
        let original = me.hasOwnProperty('create') ? me.create : me.create.bind(me);

        me.create = (config, defaultType) => {
            let ret = fn.call(me, original, config, defaultType);

            if (ret === undefined) {
                ret = original.call(me, config, defaultType);
            }

            return ret;
        };
    }

    /**
     * This method accepts a `config` object and an existing `instance` if one exists
     * (can be `null`).
     *
     * The details are best explained by example:
     *
     *      config: {
     *          header: {
     *              xtype: 'itemheader'
     *          }
     *      },
     *
     *      applyHeader (header, oldHeader) {
     *          return Ext.Factory.widget.update(oldHeader, header,
     *              this, 'createHeader');
     *      },
     *
     *      createHeader (header) {
     *          return Ext.apply({
     *              xtype: 'itemheader',
     *              ownerCmp: this
     *          }, header);
     *      }
     *
     * Normally the `applyHeader` method would have to coordinate potential reuse of
     * the `oldHeader` and perhaps call `setConfig` on it with the new `header` config
     * options. If there was no `oldHeader`, of course, a new instance must be created
     * instead. These details are handled by this method. If the `oldHeader` is not
     * reused, it will be {@link Ext.Base#method!destroy destroyed}.
     *
     * For derived class flexibility, the pattern of calling out to a "creator" method
     * that only returns the config object has become widely used in many components.
     * This pattern is also covered in this method. The goal is to allow the derived
     * class to `callParent` and yet not end up with an instantiated component (since
     * the type may not yet be known).
     *
     * This mechanism should be used in favor of `Ext.factory()`.
     *
     * @param {Ext.Base} instance
     * @param {Object/String} config The configuration (see {@link #method!create}).
     * @param {Object} [creator] If passed, this object must provide the `creator`
     * method or the `creatorMethod` parameter.
     * @param {String} [creatorMethod] The name of a creation wrapper method on the
     * given `creator` instance that "upgrades" the raw `config` object into a final
     * form for creation.
     * @param {String} [defaultsConfig] The name of a config property (on the provided
     * `creator` instance) that contains defaults to be used to create instances. These
     * defaults are present in the config object passed to the `creatorMethod`.
     * @return {Object} The reconfigured `instance` or a newly created one.
     */
    update (instance, config, creator, creatorMethod, defaultsConfig) {
        let me = this;
        let namespace = me.registry._namespace;
        let alias, aliasPrefix, cls, defaults, type;

        // If config is falsy or a valid instance, destroy the current instance
        // (if it exists) and replace with the new one
        if (!config || config[me.instanceProperty]) {
            if (instance && instance !== config) {
                instance.destroy();
            }

            return config;
        }

        if (typeof config === 'string') {
            config = {
                [me.defaultProperty]: config
            };
        }

        // See if the existing instance can just be reconfigured:
        if (instance) {
            if (config === true) {
                return instance;
            }

            // Determine cls required for the instance (if one was specified):
            if (!(type = config.xclass)) {
                type = config[me.typeProperty];

                if (type) {
                    // config = { type: ... }
                    aliasPrefix = me.aliasPrefix;
                }
                
                if (typeof type === 'function') {
                    // config = { type: Constructor }
                    // config = { xtype: Constructor }
                    cls = type;
                }
                else if (aliasPrefix) {
                    // config = { type: '...' }
                    // config = { xtype: '...' }
                    alias = aliasPrefix + type;
                    cls = namespace.aliases[alias];

                    //<debug>
                    assert(cls, `No class defined for alias "{0}"`, alias);
                    //</debug>
                }
            }
            else if (typeof type === 'function') {
                // config = { xclass: Constructor }
                cls = type;
            }
            else {
                // config = { xclass: '...' }
                cls = namespace.classes[type];
            }

            if (!cls || cls === instance.constructor) {
                instance.configure(config);
                
                return instance;
            }

            instance.destroy();
        }

        if (config === true) {
            config = {};
        }

        if (creator) {
            if (defaultsConfig === undefined || defaultsConfig === true) {
                defaultsConfig = me.defaultsConfig;
            }

            if (defaultsConfig) {
                defaults = creator[defaultsConfig];

                if (defaults) {
                    config = merge(clone(defaults), config);
                }
            }

            if (creatorMethod === undefined || creatorMethod === true) {
                creatorMethod = me.creator;
            }
            
            if (creator[creatorMethod]) {
                config = creator[creatorMethod](config);

                //<debug>
                assert(config, `Missing return value from {0} on class {1}`,
                       creatorMethod, creator.$className);
                //</debug>
            }
        }

        return me.create(config);
    }
    
    _initCache () {
        let me = this;
        
        me.instanceCache = {};

        me.hook(function (original, config, defaultType) {
            let cache = me.instanceCache;
            let v;

            if (typeof config === 'string' && !(v = cache[config])) {
                v = original.call(this, config, defaultType);

                if (v.cacheable !== false) {
                    cache[config] = v;
                }
            }

            return v;
        });
    }
}

//--------------------------------------------------------------------------------

const shims = ['clearCache', 'hook', 'update'];

/**
 * @private
 */
class Registry {
    // Since factories are stored by name on this object, we should be careful what
    // we name our members:
    _all = new Empty();

    constructor (namespace) {
        this._namespace = namespace;
    }

    /**
     * For example, the layout alias family could be defined like this:
     *
     *      registry.define({
     *          type: 'layout',
     *          defaultType: 'auto'
     *      });
     *
     * @param {Object} config An object specifying the config for the `Ext.Factory` to be
     * created.
     */
    define (config) {
        let me = this;
        let factory = new Factory(copyIf({ registry: me }, config));
        let name = factory.name;
        let fn;

        /*
         *  layout = registry.layout('hbox');
         */
        me._all[name] = me[name] = fn = (...args) => {
            // maintain indirection through "create" name on instance to allow
            // the hook() mechanism to replace it.
            return factory.create(...args);
        };

        fn.instance = factory;

        shims.forEach(key => {
            fn[key] = (...args) => factory[key](...args);
        });

        return factory;
    }
    
    clearCaches () {
        let all = this._all;
        let key;
    
        for (key in all) {
            all[key].instance.clearCache();
        }
    }
    
    on (name, fn) {
        this._all[name].instance.hook(fn);
    }
}

//--------------------------------------------------------------------------------

/**
 * This mixin automates use of `Ext.Factory`. When mixed in to a class, the `alias` of the
 * class is retrieved and combined with an optional `factoryConfig` property on that class
 * to produce the configuration to pass to `Ext.Factory`.
 *
 * The factory method created by `Ext.Factory` is also added as a static method to the
 * target class.
 *
 * Given a class declared like so:
 *
 *      @define({
 *          alias: 'bar.thing',
 *          
 *          mixins: [
 *              Factoryable
 *          ],
 *          
 *          factory: {
 *              defaultType: 'thing',  // this is the default deduced from the alias
 *              // other configs
 *          }
 *      })
 *      class Thing extends Base {
 *          ...
 *      });
 *
 * The produced factory function can be used to create instances using the following
 * forms:
 *
 *      let obj;
 *
 *      obj = Thing.create('thing');
 *
 *      obj = Thing.create({
 *          type: 'thing'
 *      });
 *
 *      obj = Factory.thing('thing');
 *
 *      obj = Factory.thing({
 *          type: 'thing'
 *      });
 *
 *      let obj2 = Thing.create(obj);
 *      // obj === obj2  (passing an instance returns the instance)
 *
 * Alternatively the produced factory is available as a static method of `Ext.Factory`.
 */
@define({
    mixed (into, directives) {
        let alias = directives && directives.alias;
        let factory = directives && directives.factory;
        let meta = into.$meta;
        let root = meta.root;
        let registry = root.registry || (
            root.class.Factory = root.registry = new Registry(root.namespace)
        );
        let config = {};
        let createFn, dot;
        
        if (alias) {
            alias = (typeof alias === 'string') ? alias : alias[0];
    
            if ((dot = alias.lastIndexOf('.')) > 0) {
                config.type = alias.substring(0, dot);
                config.defaultType = alias.substring(dot + 1);
    
                // We use the piece of the alias as the "type" tag, but defaultType can be
                // changed by the `factory` config object but that may not refer to this class
                // anymore since it serves a different purpose.
                meta.addTags({
                    type: config.defaultType
                });
            }
        }
        else {
            config.defaultClass = true;
        }

        if (factory) {
            if (typeof factory === 'string') {
                factory = {
                    type: factory
                };
            }

            copy(config, factory);
        }
        
        if (config.defaultClass === true) {
            config.defaultClass = into;
        }
        
        into.factory = meta.factory = factory = registry.define(config);
        createFn = registry._all[factory.name];

        if (!into.hasOwnProperty('create')) {
            // allow "into" to override the create method
            into.create = createFn;
        }
    }
})
class /* istanbul ignore next */ Factoryable extends Base {
    // For some reason, nyc reports the above line is not executed... but it is and must
    // be for the "mixed" handler to have the 100% coverage that it has...

    static includeType (type) {
        let meta = this.$meta;
        let factory, superMeta;
        
        for (superMeta = meta; superMeta; superMeta = superMeta.super) {
            factory = superMeta.factory;

            if (factory) {
                meta.addAlias(factory.aliasPrefix + type);
                meta.addTags({
                    type: type
                });
                break;
            }
        }
    }
}

//--------------------------------------------------------------------------------

const widgetFactory = new Factory({
    type: 'widget',
    typeProperty: 'xtype'
});

Ext.Factory = Base.Factory = Base.$meta.registry = widgetFactory.registry =
    new Registry(Base.$meta.namespace);

Ext.create = (...args) => {
    return widgetFactory.create(...args);
};

//--------------------------------------------------------------------------------

export { Factory, Factoryable, Registry, widgetFactory };
