import { Base, define, config, is } from '../../../extjs-core/src';

import { Fly } from '../mixins/Fly';

import { quotedStringReStr, unquote } from '../string';

import { Parslet } from './Parslet';
import { toFloat } from '../Number';

import './IdentParslet';  // includes regexp parslet as well

const ERROR = { error: true };
const UNKNOWN = undefined;

/**
 * @class Token
 */

/**
 * @property {String} type
 */

/**
 * @property {Number} at
 */

/**
 * @property {Number} end
 */

/**
 * @property {Object} is
 */

/**
 * @property {String} match
 */

/**
 * @property {String} text
 */

//====================================================================================

/**
 * This class converts a string into a sequence of Token objects.
 */
@define({
    prototype: {
        /**
         * @property {Boolean} error
         */
        error: false,

        /**
         * @property {Number} end
         */
        end: 0,
        
        /**
         * @property {Number} index
         */
        index: 0,

        /**
         * @property {String} text
         */
        text: null,

        /**
         * @property {Token} token
         */
        token: UNKNOWN
    }
})
class Tokenizer extends Fly {
    @config({
        cached: true,
        merge: 'set'
    })
    operators = [
        '+', '-', '*', '/', '!', ',', ':', '[', ']', '{', '}', '(', ')'
    ];
    
    @config('cached')
    parslets = [];

    /* eslint-disable */
    @config('cached')
    tokens = {
        space: { pattern: '\\s+', skip: true },
        ident: { type: 'ident' },

        number: {
            pattern: toFloat.regexStr,
            convert: toFloat,
            is: { literal: true }
        },
        
        string: {
            convert: unquote,
            is: { literal: true },

            pattern: quotedStringReStr
        }
    };
    /* eslint-enable */

    peek () {
        if (this.token === UNKNOWN) {
            this._advance();
        }

        return this.token || null;
    }

    next () {
        let ret = this.peek();

        this.token = UNKNOWN;

        return ret;
    }
    
    // noinspection JSCheckFunctionSignatures
    reset (text, index, end) {
        let me = this;
        
        me.end = (end == null) ? (text ? text.length : 0) : end;
        me.error = false;
        me.index = index || 0;
        me.text = text;
        me.token = UNKNOWN;
        
        return me;
    }
    
    //------------------------------------------------------------------------------
    // Internals

    _advance () {
        let me = this;
        let index = me.index;
        let text = me.text;
        let parslet, token;

        outer: while (index < me.end) {
            token = me._parseOperator();
            
            if (token) {
                return token;
            }

            for (parslet of me.parslets) {
                token = parslet.parse(text, index);
                
                if (token) {
                    me.index = index = token.end;
    
                    if (!token.skip) {
                        return me.token = token;
                    }

                    // We need to restart the parslet loop... if there's more text
                    continue outer;
                }
            }
            
            // No match
            me.error = me.token = token = new Error();
            token.at = index;
            token.type = 'error';
            token.is = ERROR;
            break;
        }
        
        return null;
    }

    _parseOperator () {
        let me = this;
        let entry = me.operators;
        let text = me.text;
        let length = me.end;
        let end = me.index;
        let ret = null;
        let match, matchEnd;

        while (end < length && (entry = entry[text.charAt(end)])) {
            ++end;

            if (entry.is) {
                match = entry.is;
                matchEnd = end;
            }
        }

        if (match) {
            me.token = ret = {
                type: 'operator',
                at: me.index,
                end: matchEnd,
                is: match
            };
            
            ret.value = ret.text = match.operator;

            me.index = matchEnd;
        }

        return ret;
    }

    applyOperators (ops, operators) {
        let entry, c, op;

        operators = operators || {};
        
        /*
            The operators is merged as a "set", so we get an object like this:
                
                ops = {
                    '+': true,
                    '-': true,
                    '=': true,
                    '==': true
                    ...
                }
                
            We build a trie from the above that looks like this:

                operators = {
                    '=': {
                        '=': {
                            is: { '==': true, operator: '==' }
                        },
    
                        is: { '=': true, operator: '=' }
                    }
                }
        */
        for (op in ops) {
            if (ops[op]) {
                entry = operators;

                for (c of op) {
                    entry = entry[c] || (entry[c] = {});
                }

                entry.is = {operator: op, [op]: true};
            }
        }
        
        return operators;
    }

    applyParslets () {
        let tokens = this.tokens;
        let parslets = [];
        let name, t, value;

        for (name in tokens) {
            value = tokens[name];
            t = typeof value;

            if (t === 'function') {
                value = { name, type: 'base', fn: t };
            }
            else if (t === 'string' || is.array(value)) {
                value = { name, type: 'regexp', pattern: value };
            }
            else {
                value = { name, ...value };  // allow name to be set by the object
            }

            value.tokenizer = this;

            parslets.push(Base.Factory.parslet(value));
        }

        parslets.sort(Parslet.compare);
        
        return parslets;
    }
}

export { Tokenizer };
