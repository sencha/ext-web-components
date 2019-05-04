import { config, define } from '../../../extjs-core/src';

import { AbstractDateValidator } from './AbstractDate';

/**
 * Validates that the value is a valid date.
 */
@define({
    type: 'date'
})
class DateValidator extends AbstractDateValidator {
    /**
     * @cfg {String/String[]} format
     * The format(s) to allow. Defaults to `null` to validate by calling
     * {@link ExtDate#flexParse}.
     * 
     * For details on date format options, see {@link ExtDate}.
     * @locale
     */

    /**
     * @cfg {String} message
     * The error message to return when the value is not a valid date.
     * @locale
     */
    @config
    message = 'Is not a valid date';

    getDefaultFormat () {
        return null;  // use ExtDate.flexParse
    }
}

export { DateValidator };
