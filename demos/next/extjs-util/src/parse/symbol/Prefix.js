import { prototype } from '../../../../extjs-core/src';

import { ParserSymbol } from './Symbol';

/**
 * This class represents a prefix (unary) operator.
 * @private
 */
@prototype({
    arity: 'unary',
    isUnary: true,

    priority: 70
})
class PrefixSymbol extends ParserSymbol {
    nud () {
        let me = this;

        me.operand = me.parser.parseExpression(me.priority);
        // the next line is here in case this symbol already exists in the symbols table
        // and this function overrides that symbol
        me.arity = 'unary';
        me.isUnary = true;

        return me;
    }
}

export { PrefixSymbol };
