import { config, define } from '../../../extjs-core/src';
import { Locale } from '../../../extjs-util/src';

import { AbstractDateValidator } from './AbstractDate';

/**
 * Validates that the value is a valid time.
 */
@define({
    type: 'time'
})
class TimeValidator extends AbstractDateValidator {
    /**
     * @cfg {String/String[]} format
     * The format(s) to allow. See {@link ExtDate}. Defaults to the `Locale.current`
     * {@link ExtDate#defaultTimeFormat}.
     * @locale
     */

    /**
     * @cfg {String} message
     * The error message to return when the value is not a valid time.
     * @locale
     */
    @config
    message = 'Is not a valid time';

    getDefaultFormat () {
        return Locale.current.defaultTimeFormat;
    }
}

export { TimeValidator };
