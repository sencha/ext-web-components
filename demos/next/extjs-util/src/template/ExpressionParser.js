import { define, config, chain } from '../../../extjs-core/src';

import { Parser } from '../parse';

/**
 * This class parses template expressions.
 * @private
 */
@define({
    prototype: {
        debug: false,
        escapeRe: /(["'\\])/g
    }
})
class ExpressionParser extends Parser {
    @config
    infix = {
        ':': {
            priority: 70, // bind tighter than multiplication

            led (left) {
                // We parse a sequence of ":" separated formatter expressions (like a
                // traditional "," operator) and gather the sequence in our "fmt" array
                let me = this;

                me.arity = 'formatter';
                me.operand = left;
                me.fmt = me.parser.parseFmt();

                return me;
            }
        },

        '?': {
            priority: 20,

            led (left) {
                let me = this;
                let parser = me.parser;
                let symbol = parser.symbolTable[':'];
                let temp;

                me.condition = left;

                // temporarily set priority of `:` symbol to 0
                temp = symbol.priority;
                symbol.priority = 0;

                me.tv = parser.parseExpression(0);
                me.parser.advance(':');

                // restore priority of `:`
                symbol.priority = temp;

                me.fv = parser.parseExpression(0);
                me.arity = 'ternary';

                return me;
            }
        }
    };

    @config
    symbols = {
        '(': {
            nud () {
                // Handles parenthesized expressions
                let parser = this.parser;
                let symbol = parser.symbolTable[':'];
                let ret, temp;

                // temporarily set priority of `:` symbol to 70 to correctly extract
                // formatters inside parens
                temp = symbol.priority;
                symbol.priority = 70;
                ret = parser.parseExpression();

                parser.advance(")");
                // restore priority of `:`
                symbol.priority = temp;
                
                return ret;
            }
        }
    };

    @config
    prefix = {
        '@': 0   // used by "@debugger" but was also the global scope unary operator
    };

    @config
    tokenizer = {
        operators: [
            '@', '?', '===', '!==', '==', '!=', '<', '<=', '>', '>=', '&&', '||'
        ]
    };

    reset (text, pos, end) {
        this.debug = false;

        return super.reset(text, pos, end);
    }

    /**
     * 
     * @return {ParserSymbol}
     */
    parse () {
        //<debug>
        let debug = this.token.value === '@' && this.tokenizer.peek() || false;
        
        if (debug) {
            debug = debug.value === 'debugger';
            
            if (debug) {
                this.advance();
                this.advance();
            }
        }

        this.debug = debug && 'debugger';
        //</debug>

        return this.parseExpression();
    }

    /**
     * Parse a format specifier such as a grid column `formatter` config.
     * @return {Symbol}
     */
    parseFormat () {
        let symbol = chain(this.symbolTable[':']);

        // Pretend there was something on the left of the colon binary operator and
        // proceed with its parse:
        return symbol.led({
            arity: 'ident',
            value: 'bogus'
        });
    }
    
    //---------------------------------------------------------------------------
    // Internals

    /**
     * Parses a series of ":" delimited format expressions.
     * @return {Symbol[]}
     * @private
     */
    parseFmt () {
        // We parse a sequence of ":" separated formatter expressions (like a
        // traditional "," operator)
        let me = this;
        let fmt = [];
        let priority = me.symbolTable[':'].priority;
        let expr;

        do {
            if (fmt.length) {
                me.advance();
            }

            expr = me.parseExpression(priority);

            if (expr.isIdent || expr.isInvoke) {
                fmt.push(expr);
            }
            else {
                me.syntaxError(expr.at, 'Expected formatter name');
            }
        } while (me.token.id === ':');

        return fmt;
    }
}

export { ExpressionParser };
