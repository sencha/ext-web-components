import { config, define } from '../../../extjs-core/src';

import { CurrencyValidator } from './Currency';

/**
 * Validates that the value is a valid U.S. currency value.
 *
 */
@define({
    type: 'currency-us'
})
class CurrencyUSValidator extends CurrencyValidator {
    @config
    spacer = '';

    @config
    symbol = '$';

    @config
    symbolAtEnd = false;
}

export { CurrencyUSValidator };
