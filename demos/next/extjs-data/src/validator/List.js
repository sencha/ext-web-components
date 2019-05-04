import { config, define } from '../../../extjs-core/src';

import { Validator } from './Validator';

/**
 * A superclass for inclusion/exclusion validators.
 */
@define({
    type: 'list',  // we get alias 'validator.list' for free here...

    alias: 'validator.inclusion'
})
class ListValidator extends Validator {
    /**
     * @cfg {Array} list (required)
     * The list to check the passed value against.
     */
    @config
    list = null;

    @config
    message = 'Is a value that has been excluded';
    
    @config
    inclusion = true;
    
    validate (value) {
        let me = this;
        let result = me.list.indexOf(value) > -1;
            
        if (!me.inclusion) {
            result = !result;
        }
        
        return result || me.message;
    }
}

export { ListValidator, ListValidator as InclusionValidator };
