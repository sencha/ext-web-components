import { copy, prototype } from '../../../../extjs-core/src';

/**
 * This class represents a symbol in the parser.
 * @private
 */
@prototype({
    args: null,
    at: null,
    arity: null,
    operand: null,
    parser: null,
    priority: 0,
    
    /**
     * @property {String} defaultProperty
     * This property holds the name of the property to update when a config provided is
     * not an object (just a value).
     */
    defaultProperty: null
})
class ParserSymbol {
    constructor (id, config) {
        let me = this;
        let defaultProperty = me.defaultProperty;

        if (config && typeof config === 'object') {
            copy(me, config);
        }
        else if (config !== undefined && defaultProperty) {
            me[defaultProperty] = config;
        }

        me.id = id;
    }

    /**
     * This abstract method is implemented by operators that follow their operand (like
     * a binary operator). When the symbol is encountered in an expression this method
     * is called.
     * 
     * The name "led" stands for "left denotation".
     *
     * @param {Symbol} left
     */
    led () {
        this.parser.syntaxError(this.at, 'Missing operator');
    }

    /**
     * This abstract method is implemented by operators that precede their operand (like
     * a unary operator). When the symbol is encountered in an expression this method
     * is called.
     * 
     * The name "nud" stands for "null denotation".
     */
    nud () {
        this.parser.syntaxError(this.at, 'Undefined');
    }

    /**
     * This method updates this symbol given an additional config object. This is used
     * when a symbol is placed in multiple categories (such `infix` and `prefix`). The
     * `priority` is the most likely value to update, but also a `led` or `nud` method
     * may be provided to complete the symbol.
     *
     * @param {Object} config
     */
    update (config) {
        if (config && typeof config === 'object') {
            // eslint-disable-next-line vars-on-top
            let me = this;
            let priority = config.priority;
            let led = config.led;
            let nud = config.nud;

            if (me.priority <= priority) {
                me.priority = priority;
            }
            
            if (led) {
                me.led = led;
            }
            
            if (nud) {
                me.nud = nud;
            }
        }
    }
}

export { ParserSymbol };
