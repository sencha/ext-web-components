import { Base, Config, define, merge } from '../../../extjs-core/src';

const chain = Object.create;

/**
 * 
 */
@define({
    mixed (into) {
        into.$cloneable = chain(Cloneable.$cloneable);
    }
})
class Cloneable extends Base {
    static $cloneable = {
        source: 'current',
        includes: null,
        excludes: null
    };

    static includeCloneable (cloneable) {
        let me = this;
        let options = me.$cloneable;
        let excludes = cloneable.excludes;
        let includes = cloneable.includes;
        
        if (!me.hasOwnProperty('$cloneable')) {
            me.$cloneable = options = chain(options);
        }
        
        if (excludes) {
            options.excludes = Config.mergers.set(excludes, options.excludes);
        }

        if (includes) {
            options.includes = Config.mergers.set(includes, options.includes);
        }
        
        if (cloneable.source) {
            options.source = cloneable.source;
        }
    }
    
    clone (config) {
        let cfg = this.getCloneConfig(config);

        return this.createClone(cfg);
    }
    
    createClone (config) {
        return new this.constructor(config);
    }
    
    getCloneConfig (config) {
        let me = this;
        let options = me.constructor.$cloneable;
        let initial = options.source === 'initial';
        let excludes = options.excludes;
        let cfg = me.$meta.getConfigValues(me, initial, excludes || options.includes, !excludes);
        
        return merge(cfg, config);
    }
}

export { Cloneable };
