import { config, define, is } from '../../../extjs-core/src';

import { ExtDate } from '../../../extjs-util/src';

import { Validator } from './Validator';

/**
 * Base class for date type validators.
 *
 * @abstract
 */
@define
class AbstractDateValidator extends Validator {
    /**
     * @cfg {String/String[]} format
     * The format(s) to allow. If this value is `null`, the `getDefaultFormat` method is
     * called to allow the derived class to determine the format to apply.
     * 
     * For details on date format options, see {@link ExtDate}.
     */
    @config
    format = null;

    /**
     * @cfg {String} message
     * The error message to return when not valid.
     * @locale
     */
    @config
    message = null;

    /**
     * @property {Boolean} flexible
     * When `false` matches are limited those exactly matching the `format`, i.e. the
     * `ExtDate.parse` method is used. When `true` the `ExtDate.flexParse` method is used.
     */
    @config
    flexible = true;
    
    /**
     * @property {Boolean} strict
     * This value is the `strict` parameter to `ExtDate.parse` (only applicable when
     * `flexible:false`). When `true`, the date component values must be in proper range
     * (i.e., this disables JavaScript's Date "rollover" behavior).
     */
    @config
    strict = true;
    
    applyFormat (format) {
        if (format && !is.array(format)) {
            format = [format];
        }

        return format;
    }

    parse (value) {
        if (is.date(value)) {
            return value;
        }

        /* eslint-disable-next-line vars-on-top */
        let me = this;
        let format = me.format || me.getDefaultFormat();
        let flexParse = ExtDate.flexParse;
        let ret = null;
        let fmt;

        if (!format || !format.length) {  // if ('' or []) {
            ret = flexParse(value);
        }
        else if (typeof format === 'string') {
            ret = me.tryParse(value, format);
        }
        else {
            for (fmt of format) {
                if (!(ret = me.tryParse(value, fmt))) {
                    break;
                }
            }
        }

        return ret;
    }
    
    tryParse (value, format) {
        return this.flexible
            ? ExtDate.flexParse(value, format)
            : ExtDate.parse(value, format, this.strict);
    }

    validate (value) {
        return this.parse(value) ? true : this.message;
    }
}

export { AbstractDateValidator };
