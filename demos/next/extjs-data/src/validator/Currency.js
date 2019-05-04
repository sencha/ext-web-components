import { config, define } from '../../../extjs-core/src';
import { Locale } from '../../../extjs-util/src';
import { escapeRegex } from '../../../extjs-util/src/string';

import { NumberValidator } from './Number';

/**
 * Validates that the value is a valid U.S. currency value.
 */
@define({
    type: 'currency'
})
class CurrencyValidator extends NumberValidator {
    /**
     * @cfg {String} message
     * The error message to return when the value is not a valid currency amount.
     * @locale
     */
    @config
    message = 'Is not a valid currency amount';

    /**
     * @cfg {String} spacer
     * The spacer to show between the number and the currency symbol.
     * Defaults to {Locale.current#currencySpacer}.
     */
    @config('defer', 'cached')
    spacer = Locale.current.currencySpacer;

    /**
     * @cfg {String} symbol
     * The symbol used to denote currency.
     * Defaults to {Locale.current#currencySign}.
     */
    @config('defer', 'cached')
    symbol = Locale.current.currencySign;

    /**
     * @cfg {Boolean} symbolAtEnd
     * `true` to show the currency symbol after the number.
     * Defaults to `Locale.current#currencyAtEnd`.
     */
    @config('defer', 'cached')
    symbolAtEnd = Locale.current.currencyAtEnd;

    updateSymbolAtEnd () {
        this.invalidate();
    }

    updateSpacer () {
        this.invalidate();
    }

    updateSymbol () {
        this.invalidate();
    }

    getMatcherText () {
        let me = this;
        let symbolPart = me.getSymbolMatcher();
        let atEnd = me.symbolAtEnd;

        return super.getMatcherText(atEnd ? '' : symbolPart) + (atEnd ? symbolPart : '');
    }

    getSymbolMatcher () {
        let sym = escapeRegex(this.symbol);
        let spc = escapeRegex(this.spacer || '');

        return '(?:' + (this.symbolAtEnd ? spc + sym : sym + spc) + ')?';
    }

    parseValue (v) {
        // If we're at the front, replace -/+$1 with -/+1
        v = v.replace(this.currencyMatcher, this.symbolAtEnd ? '' : '$1');
        
        return super.parseValue(v);
    }

    rebuildMatcher () {
        let me = this;
        let atEnd = me.symbolAtEnd;
        let sym = me.getSymbolMatcher();

        let ret = super.rebuildMatcher();

        me.currencyMatcher = new RegExp(atEnd ? sym + '$' : '^(\\+|\\-)?' + sym);
        
        return ret;
    }
}

export { CurrencyValidator };
