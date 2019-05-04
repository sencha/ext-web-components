import { prototype } from '../../../../extjs-core/src';

import { ParserSymbol } from './Symbol';

/**
 * This class implements the parenthesis operator.
 * @private
 */
@prototype({
    arity: 'binary',
    isBinary: true,

    priority: 80
})
class ParenSymbol extends ParserSymbol {
    led (left) {
        // Handles function call operator
        let me = this;
        let args = [];
        let parser = me.parser;
        let id = left.id;
        let type = left.arity;

        if (id !== '.' && id !== '[') {
            if ((type !== "unary" || id !== "function") &&
                 type !== "ident" && id !== "(" &&
                 id !== "&&" && id !== "||" && id !== "?") {
                parser.syntaxError(left.at, "Expected a variable name.");
            }
        }

        me.arity = 'invoke';
        me.isInvoke = true;
        me.operand = left;
        me.args = args;

        while (parser.token.id !== ')') {
            if (args.length) {
                parser.advance(',');
            }

            args.push(parser.parseExpression());
        }

        parser.advance(')');
        
        return me;
    }

    nud () {
        // Handles parenthesized expressions
        var parser = this.parser,
            ret = parser.parseExpression();

        parser.advance(")");
        
        return ret;
    }
}

export { ParenSymbol };
