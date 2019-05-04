import { config, define } from '../../../extjs-core/src';

import { Validator } from './Validator';

/**
 * Validates that the passed value matches a specific format specified by a regex.
 * The format is provided by the {@link #matcher} config.
 */
@define({
    type: 'format'
})
class FormatValidator extends Validator {
    /**
     * @cfg {String} message
     * The error message to return when the value does not match the format.
     * @locale
     */
    @config
    message = 'Is in the wrong format';

    /**
     * @cfg {RegExp} matcher (required) The matcher regex to test against the value.
     */
    @config
    matcher = null;

    validate (value) {
        var matcher = this.matcher,
            result = matcher && matcher.test(value);

        return result ? result : this.message;
    }
}

export { FormatValidator };
