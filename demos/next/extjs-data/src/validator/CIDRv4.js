import { config, define } from '../../../extjs-core/src';

import { FormatValidator } from './Format';

/**
 * Validates that the value is a valid CIDR block.
 *
 * Works for both IPV4 only.
 */
@define({
    type: 'cidrv4'
})
class CIDRv4Validator extends FormatValidator {
    /**
     * @cfg {String} message
     * The error message to return when the value is not a valid CIDR block.
     * @locale
     */
    @config
    message = 'Is not a valid CIDR block';

    // http://www.regexpal.com/93987

    /* eslint-disable max-len */
    /**
     * @cfg {RegExp} matcher
     * A matcher to check for valid CIDR block. This may be overridden.
     */
    @config
    matcher = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$/;
}

export { CIDRv4Validator };
