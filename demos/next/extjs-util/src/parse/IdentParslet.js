import { define, config } from '../../../extjs-core/src';

import { identifierReStr } from '../string';

import { RegExpParslet } from './RegExpParslet';

@define({
    type: 'ident'
})
class IdentParslet extends RegExpParslet {
    @config
    pattern = identifierReStr;
    
    applyPattern (pattern) {
        if (!this.tokenizer.operators['.']) {
            pattern += `(?:\\.${pattern})*`;
        }

        return super.applyPattern(pattern);
    }
}

export { IdentParslet };
