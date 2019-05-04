import { define, config } from '../../../extjs-core/src';

import { Identifier } from './Identifier';

/**
 * This class is a sequential id generator. A simple use of this class would be like so:
 *
 *     Ext.define('MyApp.data.MyModel', {
 *         extend: 'Model',
 *         identifier: 'sequential'
 *     });
 *     // assign id's of 1, 2, 3, etc.
 *
 * An example of a configured generator would be:
 *
 *     Ext.define('MyApp.data.MyModel', {
 *         extend: 'Model',
 *         identifier: {
 *             type: 'sequential',
 *             prefix: 'ID_',
 *             seed: 1000,
 *             increment: 10
 *         }
 *     });
 *     // assign id's of ID_1000, ID_1010, ID_1020, etc.
 *
 */
@define({
    type: 'sequential',
    
    prototype: {
        initialSeed: null
    }
})
class SequentialIdentifier extends Identifier {
    /**
     * @cfg {Number} increment
     * The number by which to adjust the `seed` after for the next sequential id.
     */
    @config
    increment = 1;

    /**
     * @cfg {String} prefix
     * The string to place in front of the sequential number for each generated id.
     */
    @config
    prefix = null;

    /**
     * @cfg {Number} seed
     * The number at which to start generating sequential id's.
     */
    @config
    seed = 1;

    /**
     * Generates and returns the next id.
     * @return {String/Number} The next id. If a {@link #prefix} was specified, returns
     * a String, otherwise returns a Number.
     */
    generate () {
        let me = this;
        let seed = me.seed;
        let prefix = me.prefix;

        if (me.initialSeed === null) {
            me.initialSeed = seed;
        }

        me.seed = seed + me.increment;

        return (prefix !== null) ? prefix + seed : seed;
    }
    
    clone (config) {
        let ret = super.clone(config);
        
        ret.initialSeed = this.initialSeed;

        return ret;
    }

    reset () {
        let me = this;
        let initialSeed = me.initialSeed;
        
        if (initialSeed !== null) {
            me.seed = initialSeed;
        }
        
        return me;
    }
}

export { SequentialIdentifier };
