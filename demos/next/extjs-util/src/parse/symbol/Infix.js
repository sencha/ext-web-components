import { prototype } from '../../../../extjs-core/src';

import { ParserSymbol } from './Symbol';

/**
 * This class represents an infix (binary) operator.
 * @private
 */
@prototype({
    arity: 'binary',
    isBinary: true,

    defaultProperty: 'priority'
})
class InfixSymbol extends ParserSymbol {
    led (left) {
        let me = this;

        me.lhs = left;
        me.rhs = me.parser.parseExpression(me.priority);
        // the next line is here in case this symbol already exists in the symbols table
        // and this function overrides that symbol
        me.arity = 'binary';
        me.isBinary = true;

        return me;
    }
}

export { InfixSymbol };
