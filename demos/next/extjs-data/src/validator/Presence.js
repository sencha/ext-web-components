import { config, define } from '../../../extjs-core/src';

import { Validator } from './Validator';

/**
 * Validates that the passed value is not `null` or `undefined` or `''`.
 * An empty string may be allowed with {@link #allowEmpty}.
 */
@define({
    type: 'presence'
})
class PresenceValidator extends Validator {
    /**
     * @cfg {String} message
     * The error message to return when the value is not specified.
     * @locale
     */
    @config
    message = 'Must be present';

    /**
     * @cfg {Boolean} allowEmpty
     * `true` to allow `''` as a valid value.
     */
    @config
    allowEmpty = false;

    validate (value) {
        var valid = value != null;
        
        if (valid && !this.allowEmpty) {
            valid = value !== '';
        }
        
        return valid ? true : this.message;
    }
}

export { PresenceValidator };
