import { config, define } from '../../../extjs-core/src';
import { Locale } from '../../../extjs-util/src';

import { AbstractDateValidator } from './AbstractDate';

/**
 * Validates that the value is a valid date with time.
 */
@define({
    type: 'datetime'
})
class DateTimeValidator extends AbstractDateValidator {
    /**
     * @cfg {String/String[]} format
     * The format(s) to allow. Defaults to the concatenation of the `Locale.current`
     * {@link Locale#defaultDateFormat} and {@link Locale#defaultTimeFormat}.
     * 
     * For details on date format options, see {@link ExtDate}.
     * @locale
     */

    /**
     * @cfg {String} message
     * The error message to return when the value is not a valid date and time.
     * @locale
     */
    @config
    message = 'Is not a valid date and time';

    getDefaultFormat () {
        let locale = Locale.current;
        
        return locale.defaultDateFormat + ' ' + locale.defaultTimeFormat;
    }
}

export { DateTimeValidator };
