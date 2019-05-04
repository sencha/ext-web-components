import { assert, prototype } from '../../extjs-core/src';
import { Locale } from './Locale';
import { escapeRegex } from './string';

const math = Math;

const ClipDefault = {
    count: false,
    inclusive: false,
    wrap: true
};

export const Clip = {
    DEFAULT: ClipDefault,

    COUNT: {
        ...ClipDefault,
        count: true
    },

    INCLUSIVE: {
        ...ClipDefault,
        inclusive: true
    },

    NOWRAP: {
        ...ClipDefault,
        wrap: false
    }
};

/**
 * A function used to sort an array by numeric value. By default, array values are coerced
 * to String when sorting, which can be problematic when using numeric values. To ensure
 * that the values are sorted numerically, this method can be passed to the sort method:
 *
 *     myArray.sort(numericSortFn);
 */
export function numericSortFn (a, b) {
    return a - b;
}

export function toFixed_ (value, precision) {
    return value.toFixed(precision);
}

export function toFixedPoly (value, precision) {
    let pow;

    precision = precision || 0;
    pow = math.pow(10, precision);

    return (math.round(value * pow) / pow).toFixed(precision);
}

/**
 * @method toFixed
 * Formats a number using fixed-point notation
 * @param {Number} value The number to format
 * @param {Number} precision The number of digits to show after the decimal point
 */
export const toFixed = (0.9).toFixed() !== '1'
    ? /* istanbul ignore next */ toFixedPoly
    : /* istanbul ignore next */ toFixed_;

/**
 * Strictly parses the given value and returns the value as a number or `null` if
 * the value is not a number or contains non-numeric pieces.
 * @param {*} value
 * @return {Number}
 */
export function toFloat (value) {
    if (value === undefined) {
        value = null;
    }

    if (value !== null && typeof value !== 'number') {
        value = String(value);
        value = toFloat.regex.test(value) ? +value : null;
        
        if (isNaN(value)) {
            value = null;
        }
    }

    return value;
}

toFloat.regexStr = `[-+]?(?:(?:\\d+\\.?\\d*)|(?:\\d*\\.?\\d+))(?:[Ee][+-]?\\d+)?`;
toFloat.regex = new RegExp('^' + toFloat.regexStr + '$');

/**
 * Strictly parses the given value and returns the value as a number or `null` if
 * the value is not an integer number or contains non-integer pieces.
 * @param {*} value
 * @return {Number}
 */
export function toInt (value) {
    if (value === undefined) {
        value = null;
    }
    else if (typeof value === 'number') {
        value = Math.floor(value);
    }
    else if (value !== null) {
        value = String(value);
        value = toInt.regex.test(value) ? +value : null;
    }

    return value;
}

toInt.regexStr = `[-+]?\\d+(?:[Ee]\\+?\\d+)?`;
toInt.regex = new RegExp('^' + toInt.regexStr + '$');

/**
 * Validate that a value is numeric and convert it to a number if necessary.
 * Returns the specified default value if it is not.
 *
 *      toNumber('1.23', 1); // returns 1.23
 *      toNumber('abc', 1); // returns 1
 *
 * @param {Object} value
 * @param {Number} defaultValue The value to return if the original value is non-numeric
 * @return {Number} value, if numeric, defaultValue otherwise
 */
export function toNumber (value, defaultValue) {  // was Ext.Number.from()
    if (isFinite(value)) {
        value = parseFloat(value);
    }

    return !isNaN(value) ? value : defaultValue;
}

// export function bisectTuples (array, value, index, begin, end) {
//     let middle, midVal;
//
//     if (begin === undefined) {
//         begin = 0;
//     }
//    
//     if (end === undefined) {
//         end = array.length;
//     }
//
//     --end;
//
//     while (begin <= end) {
//         middle = (begin + end) >>> 1; // unsigned right shift = Math.floor(x/2)
//         midVal = array[middle][index];
//
//         if (value === midVal) {
//             return middle;
//         }
//        
//         if (midVal < value) {
//             begin = middle + 1;
//         }
//         else {
//             end = middle - 1;
//         }
//     }
//
//     return begin;
// }

/**
 * Coerces a given index into a valid index given a `length`.
 *
 * Negative indexes are interpreted starting at the end of the collection. That is,
 * a value of -1 indicates the last item, or equivalent to `length - 1`.
 *
 * When handling methods that take "begin" and "end" arguments like most array or
 * string methods, this method can be used like so:
 *
 *      function foo (array, begin, end) {
 *          let range = Ext.Number.clipIndices(array.length, [begin, end]);
 *
 *          begin = range[0];
 *          end   = range[1];
 *
 *          // 0 <= begin <= end <= array.length
 *
 *          let length = end - begin;
 *      }
 *
 * For example:
 *
 *      +---+---+---+---+---+---+---+---+
 *      |   |   |   |   |   |   |   |   |  length = 8
 *      +---+---+---+---+---+---+---+---+
 *        0   1   2   3   4   5   6   7
 *       -8  -7  -6  -5  -4  -3  -2  -1
 *
 *      console.log(Ext.Number.clipIndices(8, [3, 10]); // logs "[3, 8]"
 *      console.log(Ext.Number.clipIndices(8, [-5]);    // logs "[3, 8]"
 *      console.log(Ext.Number.clipIndices(8, []);
 *      console.log(Ext.Number.clipIndices(8, []);
 *
 * @param {Number} length
 * @param {Number[]} indices
 * @param {Object} [options] An object with different option flags.
 * @param {Boolean} [options.count=false] The second number in `indices` is the
 * count not and an index.
 * @param {Boolean} [options.inclusive=false] The second number in `indices` is
 * "inclusive" meaning that the item should be considered in the range. Normally,
 * the second number is considered the first item outside the range or as an
 * "exclusive" bound.
 * @param {Boolean} [options.wrap=true] Wraps negative numbers backwards from the
 * end of the array. Passing `false` simply clips negative index values at 0.
 * @return {Number[]} The normalized `[begin, end]` array where `end` is now
 * exclusive such that `length = end - begin`. Both values are between 0 and the
 * given `length` and `end` will not be less-than `begin`.
 */
export function clipIndices (length, indices, options) {
    let defaultValue = 0;   // default value for "begin"
    let wrap, begin, end, i;

    options = options || ClipDefault;
    wrap = options.wrap;

    indices = indices || [];
    
    for (i = 0; i < 2; ++i) {
        // names are off on first pass but used this way so things make sense
        // following the loop..
        begin = end; // pick up and keep the result from the first loop
        end = indices[i];
        
        if (end == null) {
            end = defaultValue;
        }
        else if (i && options.count) {
            end += begin; // this is the length not "end" so convert to "end"
            end = (end > length) ? length : end;
        }
        else {
            if (wrap) {
                end = (end < 0) ? (length + end) : end;
            }
            
            if (i && options.inclusive) {
                ++end;
            }
            
            end = (end < 0) ? 0 : ((end > length) ? length : end);
        }
        
        defaultValue = length; // default value for "end"
    }

    // after loop:
    // 0 <= begin <= length  (calculated from indices[0])
    // 0 <= end <= length    (calculated from indices[1])

    indices[0] = begin;
    indices[1] = (end < begin) ? begin : end;
    
    return indices;
}

/**
 * Checks whether or not the passed number is within a desired range. If the number is
 * already within the range it is returned, otherwise the min or max value is returned
 * depending on which side of the range is exceeded. Note that this method returns the
 * constrained value but does not change the current number.
 * @param {Number} number The number to check
 * @param {Number} min The minimum number in the range
 * @param {Number} max The maximum number in the range
 * @return {Number} The constrained value if outside the range, otherwise the current value
 */
export function constrain (number, min, max) {
    let x = parseFloat(number);

    // (x < Nan) || (x < undefined) == false
    // same for (x > NaN) || (x > undefined)
    // sadly this is not true of null - (1 > null)
    if (min === null) {
        min = number;
    }

    if (max === null) {
        max = number;
    }

    // Watch out for NaN in Chrome 18
    // V8bug: http://code.google.com/p/v8/issues/detail?id=2056

    // Operators are faster than Math.min/max. See http://jsperf.com/number-constrain
    return (x < min) ? min : ((x > max) ? max : x);
}

/**
 * Snaps the passed number between stopping points based upon a passed increment value.
 *
 * The difference between this and {@link #snapInRange} is that {@link #snapInRange} uses
 * the minValue when calculating snap points:
 *
 *     // Returns 56 - snap points are zero based
 *     r = Ext.Number.snap(56, 2, 55, 65);
 *
 *     // Returns 57 - snap points are based from minValue
 *     r = Ext.Number.snapInRange(56, 2, 55, 65);
 *
 * @param {Number} value The unsnapped value.
 * @param {Number} increment The increment by which the value must move.
 * @param {Number} minValue The minimum value to which the returned value must be
 * constrained. Overrides the increment.
 * @param {Number} maxValue The maximum value to which the returned value must be
 * constrained. Overrides the increment.
 * @return {Number} The value of the nearest snap target.
 */
export function snap (value, increment, minValue, maxValue) {
    let m;

    // If no value passed, or minValue was passed and value is less than minValue
    // (anything < undefined is false)
    // Then use the minValue (or zero if the value was undefined)
    if (value === undefined || value < minValue) {
        return minValue || 0;
    }

    if (increment) {
        m = value % increment;
        
        if (m !== 0) {
            value -= m;
            
            if (m * 2 >= increment) {
                value += increment;
            }
            else if (m * 2 < -increment) {
                value -= increment;
            }
        }
    }
    
    return constrain(value, minValue, maxValue);
}

/**
 * Snaps the passed number between stopping points based upon a passed increment value.
 *
 * The difference between this and {@link #snap} is that {@link #snap} does not use
 * the minValue when calculating snap points:
 *
 *     // Returns 56 - snap points are zero based
 *     r = Ext.Number.snap(56, 2, 55, 65);
 *
 *     // Returns 57 - snap points are based from minValue
 *     r = Ext.Number.snapInRange(56, 2, 55, 65);
 *
 * @param {Number} value The unsnapped value.
 * @param {Number} increment The increment by which the value must move.
 * @param {Number} [minValue=0] The minimum value to which the returned value must be
 * constrained.
 * @param {Number} [maxValue=Infinity] The maximum value to which the returned value
 * must be constrained.
 * @return {Number} The value of the nearest snap target.
 */
export function snapInRange (value, increment, minValue, maxValue) {
    let tween;

    // default minValue to zero
    minValue = (minValue || 0);

    // If value is undefined, or less than minValue, use minValue
    if (value === undefined || value < minValue) {
        return minValue;
    }

    // Calculate how many snap points from the minValue the passed value is.
    if (increment && (tween = ((value - minValue) % increment))) {
        value -= tween;
        tween *= 2;
        
        if (tween >= increment) {
            value += increment;
        }
    }

    // If constraining within a maximum, ensure the maximum is on a snap point
    if (maxValue !== undefined) {
        if (value > (maxValue = snapInRange(maxValue, increment, minValue))) {
            value = maxValue;
        }
    }

    return value;
}

/**
 * Round a number to the nearest interval.
 * @param {Number} value The value to round.
 * @param {Number} interval The interval to round to.
 * @return {Number} The rounded value.
 */
export function roundToNearest (value, interval) {
    interval = interval || 1;
    
    return interval * math.round(value / interval);
}

/**
 * Rounds a number to the specified precision.
 * @param value
 * @param precision
 * @return {number}
 */
export function roundToPrecision (value, precision) {
    let factor = (precision === 0) ? 1 : math.pow(10, precision || 1);

    return math.round(value * factor) / factor;
}

/**
 * Truncates a number to the specified precision,
 * without rounding.
 * @param value
 * @param precision
 * @return {Number}
 */
export function truncateToPrecision (value, precision) {
    let factor = (precision === 0) ? 1 : math.pow(10, precision || 1);

    return parseInt(value * factor, 10) / factor;
}

/**
 * Determines if two numbers `n1` and `n2` are equal within a given
 * margin of precision `epsilon`.
 * @param {Number} n1 First number.
 * @param {Number} n2 Second number.
 * @param {Number} epsilon Margin of precision.
 * @return {Boolean} `true`, if numbers are equal. `false` otherwise.
 */
export function numEqual (n1, n2, epsilon) {
    return math.abs(n1 - n2) < epsilon;
}

/**
 * Returns a random integer between the specified range (inclusive)
 * @param {Number} from Lowest value to return.
 * @param {Number} to Highest value to return.
 * @return {Number} A random integer within the specified range.
 */
export function randomInt (from, to) {
    return math.floor(math.random() * (to - from + 1) + from);
}

/**
 * Corrects floating point numbers that overflow to a non-precise
 * value because of their floating nature, for example `0.1 + 0.2`
 * @param {Number} n The number
 * @return {Number} The correctly rounded number
 */
export function correctFloat (n) {
    // This is to correct the type of errors where 2 floats end with
    // a long string of decimals, eg 0.1 + 0.2. When they overflow in this
    // manner, they usually go to 15-16 decimals, so we cut it off at 14.
    return parseFloat(n.toPrecision(14));
}

/**
 * Formats numbers according to a format specifier.
 *
 * Examples of the number 123456.789 using different format specifiers:
 * 
 * - `0` - (123457) show only digits, no precision
 * - `0.00` - (123456.79) show only digits, 2 precision
 * - `0.0000` - (123456.7890) show only digits, 4 precision
 * - `0,000` - (123,457) show comma and digits, no precision
 * - `0,000.00` - (123,456.79) show comma and digits, 2 precision
 * - `0,0.00` - (123,456.79) shortcut method, show comma and digits, 2 precision
 * - `0.####` - (123,456.789) Allow maximum 4 decimal places, but do not right pad
 * with zeroes
 * - `0.00##` - (123456.789) Show at least 2 decimal places, maximum 4, but do not
 * right pad with zeroes
 *
 * The number of digits after the decimal separator character specifies the number of
 * decimal places in the resulting string. The local-specific decimal character is used
 * in the result.
 *
 * The presence of a thousand separator character in the format string specifies that
 * the locale-specific thousand separator is inserted separating thousand groups if needed.
 *
 * By default, "," is expected as the thousand separator, and "." is expected as the decimal
 * separator.
 *
 * Locale-specific characters are always used in the formatted output when inserting
 * thousand and decimal separators. These can be configured in the `Locale.current` by
 * setting `thousandSeparator` and `decimalSeparator` options.
 *
 * The format specifier uses the separator characters according to US/UK conventions
 * ("," as the thousand separator, and "." as the decimal separator).
 *
 * To allow specification of format strings according to local conventions for separator
 * characters, add the string `/i` to the end of the format string. Using `/i`, the format
 * specifier itself now uses the `thousandSeparator` and `decimalSeparator` from
 * `Locale.current`. For example, if using European style separators, then the format
 * specifier can be given as `'0.000,00'`. This would be equivalent to using `'0,000.00'`
 * when using US-style formatting.
 */
@prototype({
    fullText: null,
    patternRe: null,
    
    /**
     * @cfg {Object} patterns
     * A regex cache to match combinations digits and separators.
     */
    patterns: {},
    
    /**
     * @cfg {Number} precision
     * The minimum number of digits after the decimal separator.
     */
    precision: 0,
    
    /**
     * @cfg {Number} precisionMax
     * The maximum number of digits after the decimal separator.
     */
    precisionMax: 0,

    /**
     * @cfg {Boolean} thousands
     * When `true`, the `Locale.current.thousandSeparator is used to group digits.
     */
    thousands: false
})
class NumberFormat {
    static cache = {};
    static precisionRe = /^\d*#*$/;
    static trailingHashRe = /#*$/;
    static trailingZerosRe = /0*$/;
    static zeroRe = /^0\.0*$/;

    static format (formatSpec, value) {
        if (formatSpec == null) {
            return value;
        }

        let cache = NumberFormat.cache;
        let inst = cache[formatSpec] || (cache[formatSpec] = new NumberFormat(formatSpec));
        
        return inst.format(value);
    }
    
    constructor (formatSpec) {
        let me = this;
        let locale = Locale.current;
        let comma = ',';
        let decimal = '.';
        let m, patternRe, prec, splitFormat;
        
        // The "/i" suffix allows caller to use a locale-specific formatting string.
        if (formatSpec.endsWith('/i')) {
            formatSpec = formatSpec.substring(0, formatSpec.length - 2);
            comma = locale.thousandSeparator;
            decimal = locale.decimalSeparator;
        }
        
        patternRe = me.getPattern(decimal + comma);
        m = patternRe.exec(formatSpec);
        
        //<debug>
        assert(m, 'NumberFormat "{0}" does not contain a format specifier', formatSpec);
        //</debug>
        
        if (m[0] !== formatSpec) {
            // There is more in the format string than just a number format, so keep
            // the whole thing and replace just the pattern portion:
            me.fullText = formatSpec;
            me.patternRe = patternRe;

            formatSpec = m[0];
        }

        splitFormat = formatSpec.split(decimal);
        
        me.thousands = formatSpec.indexOf(comma) > -1;
        
        //<debug>
        assert(splitFormat.length < 3, 'Invalid NumberFormat (more than one "{0}")', decimal);
        //</debug>
        
        if (splitFormat.length > 1) {
            prec = splitFormat[1];

            //<debug>
            assert(NumberFormat.precisionRe.test(prec),
                   'Invalid NumberFormat precision "{0}"', prec);
            //</debug>

            me.precision = (me.precisionMax = prec.length) -
                NumberFormat.trailingHashRe.exec(prec)[0].length;
        }
    }
    
    format (v) {
        if (typeof v !== 'number') {
            v = toNumber(v, NaN);
        }
        
        if (isNaN(v)) {
            return '';
        }

        let me = this;
        let absVal = Math.abs(v);
        let fullText = me.fullText;
        let locale = Locale.current;
        let thousandGrouping = locale.thousandGrouping;
        let prec = me.precision;
        let precMax = me.precisionMax || prec;
        let ret = toFixed(absVal, precMax);
        let neg = v < 0 && !NumberFormat.zeroRe.test(ret);
        let parts = ret.split('.');
        let decimals = parts[1] || '';
        let i, trailingZeros;
        
        ret = parts[0];
        
        for (i = me.thousands ? ret.length : 0; i > thousandGrouping; /* empty */) {
            //  012345678 (len = 9)
            // '987654321'
            i -= thousandGrouping;

            // '987654,321'   substr(0,6) + ',' + substr(6)
            // '987,654,321'  substr(0,3) + ',' + substr(3)
            ret = ret.substring(0, i) + locale.thousandSeparator + ret.substring(i);
        }
        
        if (precMax) {
            // Because we use /0*$/ there is always a match, even if 0-length (which is
            // what we want in that case anyway):
            trailingZeros = NumberFormat.trailingZerosRe.exec(decimals)[0].length;
            trailingZeros = Math.min(trailingZeros, precMax - prec);
            
            if (trailingZeros) {
                decimals = decimals.substring(0, decimals.length - trailingZeros);
            }
            
            if (decimals) {
                ret += locale.decimalSeparator + decimals;
            }
        }
        
        if (neg) {
            ret = '-' + ret;
        }
        
        if (fullText) {
            ret = fullText.replace(me.patternRe, ret);
        }

        return ret;
    }
    
    getPattern (sep) {
        let cache = this.patterns;
        
        return cache[sep] || (cache[sep] = new RegExp(`[\\d` + escapeRegex(sep) + `]+#*`));
    }
}

export { NumberFormat };
