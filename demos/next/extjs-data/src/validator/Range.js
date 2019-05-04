import { config, define } from '../../../extjs-core/src';

import { BoundValidator } from './Bound';

/**
 * Validates that the the value is between a {@link #min} and {@link #max}.
 */
@define({
    type: 'range'
})
class RangeValidator extends BoundValidator {
    @config
    minOnlyMessage = 'Must be at least {0}';

    @config
    maxOnlyMessage = 'Must be no more than than {0}';

    @config
    bothMessage = 'Must be between {0} and {1}';

    /**
     * @cfg {String} nanMessage
     * The error message to return when the value is not numeric.
     * @locale
     */
    @config
    nanMessage = 'Must be numeric';

    validateValue (value) {
        let msg = super.validateValue(value);
        
        if (msg === true && isNaN(value)) {
            msg = this.nanMessage;
        }
        
        return msg;
    }
}

export { RangeValidator };
