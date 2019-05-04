import { Base, define, config, Factoryable } from '../../../extjs-core/src';

@define({
    mixins: [
        Factoryable
    ],
    
    alias: 'parslet.base',

    configurable: 'open',
    
    factory: {
        defaultType: 'regexp'
    },
    
    prototype: {
        priority: 0,

        /**
         * @cfg {Boolean} skip
         */
        skip: false,
        
        tokenizer: null
    }
})
class Parslet extends Base {
    /**
     * @cfg {Function} convert
     * A function that accepts the text of a token and returns its value.
     */
    @config
    convert = null;
    
    /**
     * @cfg {Function} fn
     * A replacement for the `match` method.
     */
    @config
    fn = null;

    @config
    is = {};
    
    @config
    name = null;
    
    static compare (lhs, rhs) {
        return rhs.priority - lhs.priority;
    }
    
    _convert (value) {
        return value;
    }

    /**
     * @method match
     * @param {String} text
     * @param {Number} index
     * @return {Object}
     */
    match (text, index) {
        // abstract
    }
    
    parse (text, index) {
        let me = this;
        let token = me.match(text, index);
        
        if (token) {
            token.is = me.is;
            token.value = me._convert(token.text);
            
            if (me.skip) {
                token.skip = true;
            }
        }
        
        return token;
    }
    
    updateConvert (fn) {
        this._convert = fn;
    }
    
    updateFn (fn) {
        this.match = fn;
    }
    
    applyIs (value, oldValue) {
        if (!oldValue) {
            oldValue = {
                [this.name]: true
            };
        }

        let ret = {
            ...oldValue,
            ...value
        };
        
        //<debug>
        Object.freeze(ret);
        //</debug>
        
        return ret;
    }
}

export { Parslet };
