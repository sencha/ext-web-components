import { is } from '../../../extjs-core/src';

import { ExtDate } from '../Date';
import { Locale } from '../Locale';
import { NumberFormat, toNumber } from '../Number';

const formatRegexs = {
    nl2br: /\r?\n/g,
    stripTags: /<\/?[^>]+>/gi,
    stripScripts: /(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/ig,
    wordBreak: /[\W\s]+/
};

/**
 * Simple format for a file size (xxx bytes, xxx KB, xxx MB).
 * @param {Number/String} size The numeric value to format
 * @return {String}
 */
export function bytes (size) {
    // KB(kilo), MB(mega), GB(giga), TB(tera), PB(peta), EB(exa), ZB(zetta), YB(yotta)
    let units = 'KMGTPEZY';
    let i, out;

    if (size === 1) {
        out = '1 byte';
    }
    else if (size < 1024) {
        out = size + ' bytes';  // includes '0 bytes'
    }
    else {
        for (i = 0; i < units.length && size >= 1024; ++i) {
            size /= 1024; // this loop will run at least once...
        }
        
        out = round(size, 1) + ' ';
        out += units[i - 1];
        out += 'B';
    }

    return out;
}

const currenyBuf = [];

/**
 * Format a number as a currency.
 * @param {Number/String} value The numeric value to format
 * @param {String} [currencySign] The currency sign to use (defaults to
 * {@link #currencySign})
 * @param {Number} [decimals] The number of decimals to use for the currency
 * (defaults to {@link #currencyPrecision})
 * @param {Boolean} [end] True if the currency sign should be at the end of the string
 * (defaults to {@link #currencyAtEnd})
 * @param {String} [currencySpacer] True to add a space between the currency and value
 * @return {String} The formatted currency string
 */
export function currency (value, currencySign, decimals, end, currencySpacer) {
    let locale = Locale.current;
    let negativeSign = '';
    let format = ",0";
    let i = 0;

    value = value - 0;

    if (value < 0) {
        value = -value;
        negativeSign = '-';
    }

    decimals = (decimals !== undefined) ? decimals : locale.currencyPrecision;
    format += (decimals > 0 ? '.' : '');

    for (; i < decimals; i++) {
        format += '0';
    }

    value = number(value, format);
    
    if (currencySpacer == null) {
        currencySpacer = locale.currencySpacer;
    }

    currenyBuf[0] = negativeSign;
    currenyBuf[1] = currenyBuf[3] = currencySign || locale.currencySign;

    // if ((end || locale.currencyAtEnd) === true) {
    //     return format('{0}{1}{2}{3}', negativeSign, value, currencySpacer,
    //                   currencySign || locale.currencySign);
    // }
    // else {
    //     return format('{0}{1}{2}{3}', negativeSign,
    //                   currencySign || locale.currencySign, currencySpacer, value);
    // }
    if ((end || locale.currencyAtEnd) === true) {
        currenyBuf[1] = value;
        currenyBuf[2] = currencySpacer;
    }
    else {
        currenyBuf[2] = currencySpacer;
        currenyBuf[3] = value;
    }
    
    return currenyBuf.join('');
}

/**
 * Formats the passed date using the specified format pattern.
 * Note that this uses the native Javascript Date.parse() method and is therefore subject
 * to its idiosyncrasies. Most formats assume the local timezone unless specified.
 * One notable exception is 'YYYY-MM-DD' (note the dashes) which is typically interpreted
 * in UTC and can cause date shifting.
 * 
 * @param {String/Date} value The value to format. Strings must conform to the format
 * expected by the JavaScript Date object's
 * [parse() method](http://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/parse).
 * @param {String} [format] Any valid date format string. Defaults to
 * {@link Locale#defaultDateFormat}.
 * @return {String} The formatted date string.
 */
export function date (value, format) {
    if (!value) {
        return '';
    }

    if (!is.date(value)) {
        value = new Date(Date.parse(value));
    }

    return ExtDate.format(value, format || Locale.current.defaultDateFormat);
}

/**
 * Checks a reference and converts it to the default value if it's empty.
 * @param {Object} value Reference to check
 * @param {String} [defaultValue=""] The value to insert of it's undefined.
 * @return {String}
 */
export function defaultValue (value, defaultValue) {
    return value !== undefined && value !== '' ? value : defaultValue;
}

/**
 * Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified
 * length.
 * 
 * @param {String} value The string to truncate.
 * @param {Number} length The maximum length to allow before truncating.
 * @param {Boolean} [word=false] `true` to try to find a common word break.
 * @return {String}
 */
export function ellipsis (value, length, word) {
    let vs, index;
    
    if (value && value.length > length) {
        if (word) {
            vs = value.substr(0, length - 2);
            index = Math.max(vs.lastIndexOf(' '), vs.lastIndexOf('.'),
                             vs.lastIndexOf('!'), vs.lastIndexOf('?'));
            
            if (index !== -1 && index >= (length - 15)) {
                return vs.substr(0, index) + "...";
            }
        }
        
        return value.substr(0, length - 3) + "...";
    }
    
    return value;
}

/**
 * Returns the given number as a base 16 string at least `digits` in length. If
 * the number is fewer digits, 0's are prepended as necessary. If `digits` is
 * negative, the absolute value is the *exact* number of digits to return. In this
 * case, if then number has more digits, only the least significant digits are
 * returned.
 *
 *      expect(Ext.util.Format.hex(0x12e4, 2)).to.be('12e4');
 *      expect(Ext.util.Format.hex(0x12e4, -2)).to.be('e4');
 *      expect(Ext.util.Format.hex(0x0e, 2)).to.be('0e');
 *
 * @param {String/Number} value The number to format in hex.
 * @param {Number} digits
 * @return {string}
 */
export function hex (value, digits) {
    var s = parseInt(value || 0, 10).toString(16);

    if (digits) {
        if (digits < 0) {
            digits = -digits;

            if (s.length > digits) {
                s = s.substring(s.length - digits);
            }
        }

        while (s.length < digits) {
            s = '0' + s;
        }
    }

    return s;
}

/**
 * Compares `value` against `threshold` and returns:
 *
 * - if `value` < `threshold` then it returns `below`
 * - if `value` > `threshold` then it returns `above`
 * - if `value` = `threshold` then it returns `equal` or `above` when `equal` is missing
 *
 * The usefulness of this formatter method is in templates. For example:
 *
 *      {foo:lessThanElse(0, 'negative', 'positive')}
 *
 *      {bar:lessThanElse(200, 'lessThan200', 'greaterThan200', 'equalTo200')}
 *
 * @param {Number} value Value that will be checked
 * @param {Number} threshold Value to compare against
 * @param {String} below Value to return when `value` < `threshold`
 * @param {String} above Value to return when `value` > `threshold`.
 * If `value` = `threshold` and `equal` is missing then `above` is returned.
 * @param {String} equal Value to return when `value` = `threshold`
 * @return {String}
 */
export function lessThanElse (value, threshold, below, above, equal) {
    let v = toNumber(value, 0);
    let t = toNumber(threshold, 0);
    let missing = equal === undefined;

    return v < t ? below : (v > t ? above : (missing ? above : equal));
}

/**
 * Converts a string to all lower case letters.
 * @param {String} value The text to convert
 * @return {String} The converted text
 */
export function lower (value) {
    return String(value).toLowerCase();
}

/**
 * Converts a string to all lower case letters.
 * @param {String} value The text to convert
 * @return {String} The converted text
 */
export function lowercase (value) {
    return String(value).toLowerCase();
}

/**
 * Returns a non-breaking space ("NBSP") for any "blank" value.
 * @param value
 * @param {Boolean} [strict=true] Pass `false` to convert all falsy values to an
 * NBSP. By default, only '', `null` and `undefined` will be converted.
 */
export function nbsp (value, strict) {
    strict = strict !== false;

    if (strict ? value === '' || value == null : !value) {
        value = '\xA0';
    }

    return value;
}

/**
 * Converts newline characters to the HTML tag `<br/>`
 *
 * @param {String} v The string value to format.
 * @return {String} The string with embedded `<br/>` tags in place of newlines.
 */
export function nl2br (v) {
    return is.empty(v) ? '' : v.replace(formatRegexs.nl2br, '<br/>');
}

export function number (v, formatSpec) {
    return NumberFormat.format(formatSpec, v);
}

/**
 * Returns this result:
 *
 *      value || orValue
 *
 * The usefulness of this formatter method is in templates. For example:
 *
 *      {foo:or("bar")}
 *
 * @param {Boolean} value The "if" value.
 * @param {String} orValue
 */
export function or (value, orValue) {
    return value || orValue;
}

/**
 * Formats the passed number as a percentage according to the passed format string.
 * The number should be between 0 and 1 to represent 0% to 100%.
 *
 * @param {Number} value The percentage to format.
 * @param {String} [formatString="0"] See {@link #number} for details.
 * @return {String} The formatted percentage.
 */
export function percent (value, formatString) {
    return number(value * 100, formatString || '0') + Locale.current.percentSign;
}

/**
 * If `value` is a number, returns the argument from that index. For example
 *
 *      var s = Ext.util.Format.pick(2, 'zero', 'one', 'two');
 *      // s === 'two'
 *
 * Otherwise, `value` is treated in a truthy/falsey manner like so:
 *
 *      var s = Ext.util.Format.pick(null, 'first', 'second');
 *      // s === 'first'
 *
 *      s = Ext.util.Format.pick({}, 'first', 'second');
 *      // s === 'second'
 *
 * The usefulness of this formatter method is in templates. For example:
 *
 *      {foo:pick("F","T")}
 *
 *      {bar:pick("first","second","third")}
 *
 * @param {Boolean} value The "if" value.
 * @param {String...} args
 */
export function pick (value, ...args) {
    let ret;
    
    if (is.number(value) && value < args.length) {
        ret = args[value];
    }
    else {
        ret = args[value ? 1 : 0];
    }

    return ret;
}

/**
 * Selectively return the plural form of a word based on a numeric value.
 * 
 * For example, the following template would result in "1 Comment".  If the 
 * value of `count` was 0 or greater than 1, the result would be "x Comments".
 * 
 *     var tpl = new Ext.XTemplate('{count:plural("Comment")}');
 *     
 *     tpl.apply({
 *         count: 1
 *     }); // returns "1 Comment"
 * 
 * Examples using the static `plural` method call:
 * 
 *     Ext.util.Format.plural(2, 'Comment');
 *     // returns "2 Comments"
 * 
 *     Ext.util.Format.plural(4, 'person', 'people');
 *     // returns "4 people"
 *
 * @param {Number} value The value to compare against
 * @param {String} singular The singular form of the word
 * @param {String} [plural] The plural form of the word (defaults to the 
 * singular form with an "s" appended)
 * @return {String} output The pluralized output of the passed singular form
 */
export function plural (value, singular, plural) {
    return value + ' ' + (value === 1 ? singular : (plural ? plural : singular + 's'));
}

/**
 * Returns a string with a specified number of repetitions a given string pattern.
 * The pattern be separated by a different string.
 *
 *      var s = repeat('---', 4); // = '------------'
 *      var t = repeat('--', 3, '/'); // = '--/--/--'
 *
 * @param {String} value The string to repeat.
 * @param {Number} count The number of times to repeat the pattern (may be 0).
 * @param {String} sep An option string to separate each pattern.
 */
export function repeat (value, count, sep) {
    let buf = [];
    let i;
    
    for (i = count; i-- > 0; /* empty */) {
        buf.push(value);
    }
    
    return buf.join(sep || '');
}

/**
 * Rounds the passed number to the required decimal precision.
 * @param {Number/String} value The numeric value to round.
 * @param {Number} [precision] The number of decimal places to which to round the
 * first parameter's value. If `undefined` the `value` is passed to `Math.round`
 * otherwise the value is returned unmodified.
 * @return {Number}
 */
export function round (value, precision) {
    let result = Number(value);

    if (typeof precision === 'number') {
        precision = Math.pow(10, precision);
        result = Math.round(value * precision) / precision;
    }
    else if (precision === undefined) {
        result = Math.round(result);
    }

    return result;
}

/**
 * Checks if `value` is a positive or negative number and returns the proper param.
 *
 * The usefulness of this formatter method is in templates. For example:
 *
 *      {foo:sign("clsNegative","clsPositive")}
 *
 * @param {Number} value
 * @param {*} negative
 * @param {*} positive
 * @param {*} zero
 */
export function sign (value, negative, positive, zero) {
    if (zero === undefined) {
        zero = positive;
    }

    return lessThanElse(value, 0, negative, positive, zero);
}

/**
 * Performs a `String.slice` call on the provided `value`.
 * 
 * @param {String} str The value to slice.
 * @param {Number} begin Zero-based index at which the desired substring starts. If this
 * value is negative, it is added to `str.length`. If `begin > str.length`, the result
 * is an empty string. If `begin < -str.length`, it is treated as 0. 
 * @param {Number} [end] The zero-based index beyond the desired substring. The characters
 * at or beyond this index are not included. If not given, `end` defaults to `str.length`.
 * As with `begin`, a negative value is added to `str.length`.
 * @return {String}
 */
export function slice (str, begin, end) {
    return String(str).slice(begin, end);
}

/**
 * Strips all script tags.
 * @param {Object} value The text from which to strip script tags
 * @return {String}
 */
export function stripScripts (value) {
    return !value ? value : String(value).replace(formatRegexs.stripScripts, "");
}

/**
 * Strips all HTML tags.
 * @param {Object} value The text from which to strip tags
 * @return {String}
 */
export function stripTags (value) {
    return value ? String(value).replace(formatRegexs.stripTags, "") : value;
}

/**
 * Returns a substring from within an original string.
 * @param {String} value The original text
 * @param {Number} start The start index of the substring
 * @param {Number} length The length of the substring
 * @return {String}
 */
// substr: 'ab'.substr(-1) !== 'b'
//     ? function (value, start, length) {
//         var str = String(value);
//
//         return (start < 0)
//             ? str.substr(Math.max(str.length + start, 0), length)
//             : str.substr(start, length);
//     }
//     : function (value, start, length) {
//         return String(value).substr(start, length);
//     },

/**
 * Utility function that allows you to easily switch a string between two alternating
 * values. The passed value is compared to the current string, and if they are equal,
 * the other value that was passed in is returned. If they are already different,
 * the first value passed in is returned.  Note that this method returns the new value
 * but does not change the current string.
 *
 *     // alternate sort directions
 *     sort = Ext.String.toggle(sort, 'ASC', 'DESC');
 *
 *     // instead of conditional logic:
 *     sort = (sort === 'ASC' ? 'DESC' : 'ASC');
 *
 * @param {String} string The current string.
 * @param {String} value The value to compare to the current string.
 * @param {String} other The new value to use if the string already equals the first value
 * passed in.
 * @return {String}
 */
export function toggle (string, value, other) {
    return string === value ? other : value;
}

/**
 * Checks a reference and converts it to empty string if it is undefined.
 * @param {Object} value Reference to check
 * @return {Object}
 */
export function undef (value) {
    return value !== undefined ? value : '';
}

/**
 * Converts a string to all upper case letters.
 * @param {String} value The text to convert
 * @return {String}
 */
export function upper (value) {
    return String(value).toUpperCase();
}

/**
 * Converts a string to all upper case letters.
 * @param {String} value The text to convert
 * @return {String}
 */
export function uppercase (value) {
    return String(value).toUpperCase();
}

/**
 * Formats the given value using `encodeURI`.
 * @param {String} value The value to encode.
 * @returns {string}
 */
export function uri (value) {
    return encodeURI(value);
}

/**
 * Formats the given value using `encodeURIComponent`.
 * @param {String} value The value to encode.
 * @returns {string}
 */
export function uriCmp (value) {
    return encodeURIComponent(value);
}

/**
 * Format a number as US currency.
 * @param {Number/String} value The numeric value to format
 * @return {String}
 */
export function usMoney (value) {
    return currency(value, '$', 2);
}

/**
 * Returns the word at the given `index`. Spaces and punctuation are considered
 * as word separators by default. For example:
 *
 *      console.log(Ext.util.Format.word('Hello, my name is Bob.', 2);
 *      // == 'name'
 *
 * @param {String} value The sentence to break into words.
 * @param {Number} index The 0-based word index.
 * @param {String/RegExp} [sep="[\W\s]+"] The pattern by which to separate words.
 * @return {String}
 */
export function word (value, index, sep) {
    let re = sep ? (typeof sep === 'string' ? new RegExp(sep) : sep) : formatRegexs.wordBreak;
    let parts = (value || '').split(re);
    
    return parts[index || 0] || '';
}
