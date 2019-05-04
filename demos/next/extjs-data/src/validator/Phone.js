import { config, define } from '../../../extjs-core/src';

import { FormatValidator } from './Format';

/**
 * Validates that the value is a valid phone.
 */
@define({
    type: 'phone'
})
class PhoneValidator extends FormatValidator {
    /**
     * @cfg {String} message
     * The error message to return when the value is not a valid phone.
     * @locale
     */
    @config
    message = 'Is not a valid phone number';

    /**
     * @cfg {RegExp} matcher
     * A matcher to check for simple phones. This may be overridden.
     */
    @config
    matcher = new RegExp(
        '^ *' +

        // optional country code
        '(?:' +
            '\\+?' + // maybe + prefix
            '(\\d{1,3})' +
            // optional separator
            '[- .]?' +
        ')?' +

        // optional area code
        '(?:' +
            '(?:' +
                '(\\d{3})' + // without ()
                '|' +
                '\\((\\d{3})\\)' + // with ()
            ')?' +
            // optional separator
            '[- .]?' +
        ')' +

        // CO code (3 digit prefix)
        '(?:' +
            '([2-9]\\d{2})' +
            // optional separator
            '[- .]?' +
        ')' +

        // line number (4 digits)
        '(\\d{4})' +

        // optional extension
        '(?: *(?:e?xt?) *(\\d*))?' +

        ' *$'
    );
}

export { PhoneValidator };
