import { prototype } from '../../../../extjs-core/src';

import { ParserSymbol } from './Symbol';

/**
 * This class represents a constant in the parser.
 * @private
 */
@prototype({
    arity: 'literal',
    isLiteral: true,
    
    defaultProperty: 'value'
})
class ConstantSymbol extends ParserSymbol {
    constructor (id, config) {
        super(id, config);

        this._value = this.value;
    }

    nud () {
        let me = this;

        // The value property gets smashed by the parser so restore it.
        me.value = me._value;

        // the next line is here in case this symbol already exists in the symbols table
        // and this function overrides that symbol
        me.arity = 'literal';
        me.isLiteral = true;

        return me;
    }
}

export { ConstantSymbol };
