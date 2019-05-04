import { InfixSymbol } from './Infix';

/**
 * This class represents an right-associative, infix (binary) operator.
 * @private
 */
class InfixRightSymbol extends InfixSymbol {
    led (left) {
        let me = this;

        me.lhs = left;
        me.rhs = me.parser.parseExpression(me.priority - 1);
        // the next line is here in case this symbol already exists in the symbols table
        // and this function overrides that symbol
        me.arity = 'binary';
        me.isBinary = true;

        return me;
    }
}

export { InfixRightSymbol };
