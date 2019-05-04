import { config, define } from '../../../extjs-core/src';

import { FormatValidator } from './Format';

/**
 * Validates that the value is a proper URL.
 */
@define({
    type: 'url'
})
class UrlValidator extends FormatValidator {
    /**
     * @cfg {String} message
     * The error message to return when the value is not a valid URL.
     * @locale
     */
    @config
    message = 'Is not a valid URL';

    // URL validator that works is non-trivial
    // There are numerous examples online but not all pass rigoruous test:
    //      https://mathiasbynens.be/demo/url-regex
    // The only one that looks to be comprehensive and bulletproof is this one:
    //      https://gist.github.com/dperini/729294
    //      which requires inclusion of a copyright header

    /* eslint-disable no-useless-escape */
    /**
     * @cfg {RegExp} matcher
     * A matcher to check for simple Urls. This may be overridden.
     */
    @config
    matcher = /^(http:\/\/|https:\/\/|ftp:\/\/|\/\/)([-a-zA-Z0-9@:%_\+.~#?&//=])+$/;
}

export { UrlValidator };
