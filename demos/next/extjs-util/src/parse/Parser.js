import { define, config, arrayify, chain } from '../../../extjs-core/src';

import { Fly } from '../mixins/Fly';

import { Tokenizer } from './Tokenizer';

import { ParserSymbol } from './symbol/Symbol';
import { ConstantSymbol } from './symbol/Constant';
import { InfixSymbol } from './symbol/Infix';
import { InfixRightSymbol } from './symbol/InfixRight';
import { ParenSymbol } from './symbol/Paren';
import { PrefixSymbol } from './symbol/Prefix';

const ITSELF = function () {
    return this;
};

/**
 * This class parses simple expressions. The parser can be enhanced by providing any of
 * the following configs:
 *
 *  * `constants`
 *  * `infix`
 *  * `infixRight`
 *  * `postfix`
 *  * `symbols`
 *
 * The parser requires a `{@link Tokenizer}` which can be configured using the `tokenizer`
 * config. The parser keeps the tokenizer instance and recycles it as it is itself reused.
 *
 * See http://javascript.crockford.com/tdop/tdop.html for background on the techniques
 * used in this parser.
 * @private
 */
@define({
    prototype: {
        /**
         * @property {Object} error
         * This property is set to an `Error` instance if the parser encounters a syntax
         * error.
         * @readonly
         */
        error: null
    }
})
class Parser extends Fly {
    /**
     * @cfg {Object} constants
     * A map of identifiers that should be converted to literal value tokens. The
     * key in this object is the name of the constant and the value is the constant
     * value.
     *
     * If the value of a key is an object, it is a config object for the
     * `{@link ConstantSymbol}`.
     */
    @config
    constants = {
        'null': null,
        'false': false,
        'true': true
    };

    /**
     * @cfg {Object} infix
     * A map of binary operators and their associated precedence (or binding priority).
     * These binary operators are left-associative.
     *
     * If the value of a key is an object, it is a config object for the
     * `{@link InfixSymbol}`.
     */
    @config
    infix = {
        '===': 40,
        '!==': 40,
        '==': 40,
        '!=': 40,
        '<': 40,
        '<=': 40,
        '>': 40,
        '>=': 40,

        '+': 50,
        '-': 50,

        '*': 60,
        '/': 60
    };

    /**
     * @cfg {Object} infixRight
     * A map of binary operators and their associated precedence (or binding priority).
     * These binary operators are right-associative.
     *
     * If the value of a key is an object, it is a config object for the
     * `{@link InfixRightSymbol}`.
     */
    @config
    infixRight = {
        '&&': 30,
        '||': 30
    };

    /**
     * @cfg {Object} prefix
     * A map of unary operators. Typically no value is needed, so `0` is used.
     *
     * If the value of a key is an object, it is a config object for the
     * `{@link PrefixSymbol}`.
     */
    @config
    prefix = {
        '!': 0,
        '-': 0,
        '+': 0
    };

    /**
     * @cfg {Object} symbols
     * General language symbols. The values in this object are used as config objects
     * to configure the associated `{@link ParserSymbol symbol}`. If there is no
     * configuration, use `0` for the value.
     */
    @config
    symbols = {
        ':': 0,
        ',': 0,
        ')': 0,
        '[': 0,
        ']': 0,
        '{': 0,
        '}': 0,

        '(end)': 0,

        '(ident)': {
            arity: 'ident',
            isIdent: true,
            nud: ITSELF
        },

        '(literal)': {
            arity: 'literal',
            isLiteral: true,
            nud: ITSELF
        },

        '(': {
            xclass: ParenSymbol
        }
    };

    /**
     * @cfg {Object/Tokenizer} tokenizer
     * The tokenizer or a config object used to create one.
     */
    @config
    tokenizer = {};

    /**
     * @cfg {ParserSymbol} token
     * The current token. These tokens extend this base class and contain additional
     * properties such as:
     *
     *   * `at` - The index of the token in the text.
     *   * `value` - The value of the token (e.g., the name of an identifier).
     *
     * @readonly
     */
    @config
    token = null;

    ctor () {
        this.symbolTable = {};
    }

    /**
     * Advances the token stream and returns the next `token`.
     * @param {String} [expected] The type of symbol that is expected to follow.
     * @return {ParserSymbol}
     */
    advance (expected) {
        let me = this;
        let tokenizer = me.tokenizer;
        let token = tokenizer.peek();
        let symbols = me.symbolTable;
        let is, name, symbol, value;

        if (me.error) {
            throw me.error;
        }
        
        if (expected) {
            me.expect(expected);
        }

        if (!token) {
            return me.token = symbols['(end)'];
        }

        tokenizer.next();

        is = token.is;
        value = token.value;

        if (is.ident) {
            symbol = symbols[value] || symbols['(ident)'];
        }
        else if (is.operator) {
            if (!(symbol = symbols[value])) {
                me.syntaxError(token.at, 'Unknown operator "' + value + '"');
            }

            name = token.name;
        }
        else if (is.literal) {
            symbol = symbols['(literal)'];
        }
        else {
            me.syntaxError(token.at, 'Unexpected token');
        }

        me.token = symbol = chain(symbol);
        symbol.at = token.at;
        symbol.is = is;
        symbol.token = token;
        symbol.value = value;

        if (!symbol.arity) {
            symbol.arity = token.type;
        }

        if (name) {
            symbol.name = name;
        }

        return symbol;
    }

    expect (expected) {
        let token = this.token;

        if (expected !== token.id) {
            this.syntaxError(token.at, 'Expected "' + expected + '"');
        }
        
        return token;
    }

    /**
     *
     * @param {Number} [rightPriority=0] The precedence of the current operator.
     * @return {ParserSymbol} The parsed expression tree.
     */
    parseExpression (rightPriority) {
        let me = this;
        let token = me.token;
        let left;

        rightPriority = rightPriority || 0;

        me.advance();

        left = token.nud();

        while (rightPriority < (token = me.token).priority) {
            me.advance();
            left = token.led(left);
        }

        return left;
    }

    // noinspection JSCheckFunctionSignatures
    /**
     * Resets this parser given the text to parse or a `Tokenizer`.
     * @param {String} text
     * @param {Number} [pos=0] The character position at which to start.
     * @param {Number} [end] The index of the first character beyond the token range.
     * @return {Parser}
     */
    reset (text, pos, end) {
        let me = this;

        me.error = me.token = null;
        me.tokenizer.reset(text, pos, end);

        me.advance(); // kick start this.token

        return me;
    }

    /**
     * This method is called when a syntax error is encountered. It updates `error`
     * and returns the error token.
     * @param {Number} at The index of the syntax error (optional).
     * @param {String} message The error message.
     * @return {Object} The error token.
     */
    syntaxError (at, message) {
        if (typeof at === 'string') {
            message = at;
            at = this.pos;
        }

        // eslint-disable-next-line vars-on-top
        let suffix = (at == null) ? '' : (' (at index ' + at + ')');
        let error = new Error(message + suffix);

        error.type = 'error';

        if (suffix) {
            error.at = at;
        }

        throw this.error = error;
    }

    addSymbol (id, config, type, update) {
        let symbols = this.symbolTable;
        let symbol = symbols[id];
        let cfg, length, i;

        if (symbol) {
            // If the symbol was already defined then we need to update it
            // we either use the config provided in the symbol definition
            // or we use the `update` param to build a config object.
            // We usually need to update either `led` or `nud` function
            if (typeof config === 'object') {
                cfg = config;
            }
            else if (update && type) {
                update = arrayify(update);
                length = update.length;
                cfg = {};
                
                for (i = 0; i < length; i++) {
                    cfg[update[i]] = type.prototype[update[i]];
                }
            }
            else {
                return symbol;
            }
            
            symbol.update(cfg);
        }
        else {
            if (config && config.xclass) {
                type = config.xclass;
            }
            else {
                type = type || ParserSymbol;
            }

            symbols[id] = symbol = new type(id, config);
            symbol.parser = this;
        }

        return symbol;
    }

    addSymbols (symbols, type, update) {
        for (let id in symbols) {
            this.addSymbol(id, symbols[id], type, update);
        }
    }

    applyConstants (constants) {
        this.addSymbols(constants, ConstantSymbol, 'nud');
    }

    applyInfix (operators) {
        this.addSymbols(operators, InfixSymbol, 'led');
    }

    applyInfixRight (operators) {
        this.addSymbols(operators, InfixRightSymbol, 'led');
    }

    applyPrefix (operators) {
        this.addSymbols(operators, PrefixSymbol, 'nud');
    }

    applySymbols (symbols) {
        this.addSymbols(symbols);
    }

    applyTokenizer (config) {
        let ret = config;

        if (config && !config.isTokenizer) {
            ret = new Tokenizer(config);
        }

        return ret;
    }
}

export { Parser };
