import { config, define } from '../../../extjs-core/src';

import { ListValidator } from './List';

/**
 * Validates that the value does not exist in a {@link #list} of values.
 */
@define({
    type: 'exclusion'
})
class ExclusionValidator extends ListValidator {
    /**
     * @cfg {String} message
     * The error message to return when the passed value exists in the
     * specified {@link #list}.
     * @locale
     */
    @config
    message = 'Is a value that has been excluded';

    @config
    inclusion = false;
}

export { ExclusionValidator };
