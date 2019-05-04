import { config, define } from '../../../extjs-core/src';

import { PresenceValidator } from './Presence';

/**
 * Validates that the passed value is not `null` or `undefined`.
 */
@define({
    type: 'notnull'
})
class NotNullValidator extends PresenceValidator {
    @config
    allowEmpty = true;
}

export { NotNullValidator };
