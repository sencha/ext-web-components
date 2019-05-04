import { define, config, is } from '../../../extjs-core/src';

import { stickyRegExp } from '../string';
import { Parslet } from './Parslet';

@define({
    type: 'regexp',
    
    prototype: {
        keep: false
    }
})
class RegExpParslet extends Parslet {
    @config
    pattern = null;
    
    applyPattern (pattern) {
        let re;
        
        if (typeof pattern === 'string') {
            re = stickyRegExp(pattern);
        }
        else if (is.array(re)) {
            re = stickyRegExp(re[0], re[1]);
        }
        
        this.re = re;

        return pattern;
    }

    match (text, index) {
        let keep = this.keep;
        let re = this.re;
        let ret = null;
        let match;
        
        re.lastIndex = index;

        match = re.exec(text);

        if (match && match.index === index) {
            ret = {
                type: this.name,
                at: index,
                end: re.lastIndex,
                text: match[(typeof keep === 'number') ? keep : 0]
            };
            
            if (keep === true) {
                ret.match = match;
            }
        }
        
        return ret;
    }
}

export { RegExpParslet };
