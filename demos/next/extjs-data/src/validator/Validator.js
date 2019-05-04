import { Base, Factoryable, define, is } from '../../../extjs-core/src';

/**
 * The base class for validators.
 *
 * The {@link #validate} method does the validation appropriate to its type.
 */
@define({
    mixins: [
        Factoryable
    ],
    
    // This sets Factoryable aliasPrefix ('validator.') and defaultType ('base'):
    alias: 'validator.base',

    factory: {
        cacheable: true
    },
    
    prototype: {
        cacheable: true,

        fnOnly: false,
        functionProperty: 'fn'
    }
})
class Validator extends Base {
    static isFn (config) {
        let key, ret;
        
        if (typeof config === 'function') {
            ret = config;
        }
        else {
            // A config object like { fn: foo } is just a function, so extract it and
            // return it. Otherwise, return null.
            ret = config && config.fn;
            
            if (ret) {
                for (key in config) {
                    if (key !== 'fn') {
                        ret = null;
                        break;
                    }
                }
            }
        }
        
        return ret;
    }

    /**
     * Creates new Validator.
     * @param {Object/Function} config A config object. A function may also be passed,
     * which will be used as the {@link #validate} method for this validator.
     */
    construct (config) {
        let fn = Validator.isFn(config);

        if (fn) {
            this.fnOnly = true;
            this.validate = fn;

            config = null;
        }

        super.construct(config);
    }

    /**
     * Validates the passed value.
     * Returns `true` if the value is valid. A string may be returned if the value is not
     * valid, to indicate an error message. Any other non `true` value indicates the value
     * is not valid.
     * 
     * @param {Object} value The value
     * @param {Model} record The record
     * @return {Boolean/String}
     */
    validate (value, record) {
        return true;
    }

    /**
     * Creates a copy of this validator
     * @private
     * @return {Validator}
     */
    clone () {
        let me = this;

        return new me.constructor(me.fnOnly ? me.validate : me.getCurrentConfig());
    }
}
//
// Base.Factory.on('validator', (factory, config) => {
//     if (typeof config === 'function' && !is.class(config)) {
//         return new Validator(config);
//     }
//
//     // by not returning anything, the normal factory logic is applied
// });

export { Validator };
