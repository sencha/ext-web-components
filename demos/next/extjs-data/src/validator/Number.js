import { config, define } from '../../../extjs-core/src';
import { Locale } from '../../../extjs-util/src';
import { escapeRegex } from '../../../extjs-util/src/string';
import { toFloat, toInt } from '../../../extjs-util/src/number';

import { Validator } from './Validator';

/**
 * Validates that the value is a valid number.
 *
 * A valid number may include a leading + or -, comma separators, and a single decimal point.
 */
@define({
    type: 'number',

    prototype: {
        _matcher: null,

        _thousandMatcher: null
    }
})
class NumberValidator extends Validator {
    /**
     * @cfg {String} decimalSeparator
     * The decimal separator.
     */
    @config('defer', 'cached')
    decimalSeparator = Locale.current.decimalSeparator;

    /**
     * @cfg {String} message
     * The error message to return when the value is not a valid number.
     * @locale
     */
    @config
    message = 'Is not a valid number';

    /**
     * @cfg {String} thousandSeparator
     * The thousand separator.
     */
    @config('defer', 'cached')
    thousandSeparator = Locale.current.thousandSeparator;

    get matcher () {
        let me = this;
        let ret = me._matcher;
        
        if (!ret) {
            me._matcher = ret = me.rebuildMatcher();
        }
        
        return ret;
    }
    
    get thousandMatcher () {
        if (!this._matcher) {
            this.rebuildMatcher();
        }
        
        return this._thousandMatcher;
    }

    updateDecimalSeparator () {
        this.invalidate();
    }

    updateThousandSeparator () {
        this.invalidate();
    }

    parse (v) {
        let sep = this.decimalSeparator;

        if (typeof v === 'string') {
            if (!this.matcher.test(v)) {
                return null;
            }
            
            v = this.parseValue(v);
        }

        return sep ? toFloat(v) : toInt(v);
    }

    validate (value) {
        return this.parse(value) === null ? this.message : true;
    }

    getMatcherText (betweenPart) {
        let t = this.thousandSeparator;
        let d = this.decimalSeparator;
        let s = '(?:';

        if (t) {
            t = escapeRegex(t);
            s += '(?:\\d{1,3}(' + t + '\\d{3})*)|';
        }
        
        s += '\\d*)';

        if (d) {
            d = escapeRegex(d);
            s += '(?:' + d + '\\d*)?';
        }
        
        // Currency matchers need to inject the currency symbol between the sign and
        // the number ("-$4"):
        if (betweenPart) {
            s = betweenPart + s;
        }

        s = '(\\+|\\-)?' + s;

        return s;
    }
    
    invalidate () {
        this._matcher = this._thousandMatcher = null;
    }

    parseValue (v) {
        let thousandMatcher = this.thousandMatcher;
        let decimal;

        if (thousandMatcher) {
            v = v.replace(thousandMatcher, '');
        }
        
        decimal = this.decimalSeparator;
        
        if (decimal && decimal !== '.') {
            v = v.replace(decimal, '.');
        }
        
        return v;
    }

    rebuildMatcher () {
        let me = this;
        let sep = me.thousandSeparator;
        
        me._thousandMatcher = sep ? new RegExp(escapeRegex(sep), 'g') : null;
        
        return new RegExp('^' + me.getMatcherText() + '$');
    }
}

export { NumberValidator };
