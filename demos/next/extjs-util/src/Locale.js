import { copy, is, prototype } from '../../extjs-core/src';

const hyphenRe = /-/g;
const uscoreRe = /_/g;

/**
 * A Locale is primarily just an object containing useful properties for localization.
 * These are not exhaustive, and many classes have config properties whose values are locale
 * sensitive. In many of those cases, however, those properties will initialize to one of
 * the values stored on the locale instance `Locale.current`.
 * 
 * To register a new locale:
 * 
 *      import { Locale } from '../../../extjs-util';
 *      
 *      Locale.register({
 *          name: 'en-GB',
 *          
 *          currencySign: '£',
 *          defaultDateFormat: 'd/m/Y'
 *      }, true);  // pass true to also make it the current locale
 */
@prototype({
    _thousandsRe: {}
})
class Locale {
    /**
     * @property {Map} all
     * A container of all registered `Locale` instances indexed by their `name`. By default,
     * this container will hold an entry for `'en-US'` which is aliased as `'en'`.
     */
    static all = new Map();

    /**
     * @property {Locale} current
     * The current `Locale`.
     */
    static current = null;
    
    static add (name, locale) {
        let all = Locale.all;
        let a;
        
        if (is.array(name)) {
            for (a of name) {
                Locale.add(a, locale);
            }
        }
        else {
            for (a of [ name, name.replace(hyphenRe, '_'), name.replace(uscoreRe, '-') ]) {
                all.set(a, locale);
                all.set(a.toLowerCase(), locale);
                all.set(a.toUpperCase(), locale);
            }
        }
    }
    
    static get (name) {
        return this.all.get(name.toLowerCase());
    }

    static register (locale, current) {
        if (!(locale instanceof Locale)) {
            locale = new Locale(locale);
        }

        let alias = locale.alias;
        let add = Locale.add;
        
        if (alias) {
            add(alias, locale);
        }

        add(locale.name, locale);
        
        if (current) {
            Locale.current = locale;
        }
    }
    
    /**
     * @cfg {String/String[]} alias
     * One or more optional, alternative names of this locale.
     */
    alias = null;

    /**
     * @cfg {String} name
     * The canonical name of this locale.
     */
    
    /**
     * @cfg {String} thousandGrouping
     * The number of digits to group together between adjacent `thousandSeparator`.
     */
    thousandGrouping = 3;
    
    /**
     * @cfg {String} thousandSeparator
     * The character that the {@link #number} function uses as a thousand separator.
     */
    thousandSeparator = ',';

    /**
     * @cfg {String} decimalSeparator
     * The character that the {@link #number} function uses as a decimal point.
     */
    decimalSeparator = '.';

    /**
     * @cfg {String} percentSign
     * The percent sign that the {@link #percent} function displays.
     */
    percentSign = '%';

    /**
     * @cfg {Number} currencyPrecision
     * The number of decimal places that the {@link #currency} function displays.
     */
    currentPrecision = 2;

    /**
     * @cfg {String} currencySign
     * The currency sign that the {@link #currency} function displays.
     */
    currentSign = '$';

    /**
     * @cfg {String} currencySpacer
     * True to add a space between the currency and the value
     */
    currentSpacer = '';

    /**
     * @cfg {Boolean} currencyAtEnd
     * This may be set to `true` to make the `currency` function append the currency
     * sign to the formatted value.
     */
    currentAtEnd = false;
    
    /**
     * @cfg {String[]} dayNames
     * An array of textual day names.
     * Override these values for international dates.
     *
     * Example:
     *
     *     ExtDate.dayNames = [
     *         'SundayInYourLang',
     *         'MondayInYourLang'
     *         // ...
     *     ];
     */
    dayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    /**
     * @cfg {String[]} monthNames
     * An array of textual month names.
     * Override these values for international dates.
     *
     * Example:
     *
     *     ExtDate.monthNames = [
     *         'JanInYourLang',
     *         'FebInYourLang'
     *         // ...
     *     ];
     */
    monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    /**
     * @cfg {Object} monthNumbers
     * An object hash of zero-based JavaScript month numbers (with short month names as keys).
     *
     * __Note:__ keys are case-sensitive.
     *
     * Override these values for international dates.
     *
     * Example:
     *
     *     ExtDate.monthNumbers = {
     *         'LongJanNameInYourLang': 0,
     *         'ShortJanNameInYourLang':0,
     *         'LongFebNameInYourLang':1,
     *         'ShortFebNameInYourLang':1
     *         // ...
     *     };
     */
    monthNumbers = {
        January: 0,
        Jan: 0,
        February: 1,
        Feb: 1,
        March: 2,
        Mar: 2,
        April: 3,
        Apr: 3,
        May: 4,
        June: 5,
        Jun: 5,
        July: 6,
        Jul: 6,
        August: 7,
        Aug: 7,
        September: 8,
        Sep: 8,
        October: 9,
        Oct: 9,
        November: 10,
        Nov: 10,
        December: 11,
        Dec: 11
    };

    /**
     * @cfg {String} defaultDateFormat
     * The global default date format.
     * @locale
     */
    defaultDateFormat = 'm/d/Y';

    /**
     * @cfg {String} defaultTimeFormat
     * The default time format.
     * @locale
     */
    defaultTimeFormat = 'h:i A';

    /**
     * @cfg {Number} firstDayOfWeek
     * The day on which the week starts. `0` being Sunday, through `6` being Saturday.
     * @locale
     */
    firstDayOfWeek = 0;

    /**
     * @cfg {Number[]} weekendDays
     * The days on which weekend falls. `0` being Sunday, through `6` being Saturday.
     * @locale
     */
    weekendDays = [0, 6];
    
    constructor (config) {
        copy(this, config);
    }

    /**
     * Removes any `thousandSeparator` characters in the given string. If `undefined` or
     * `null` are passed, they are returned (i.e., they are not converted to a string).
     * @param {String} s
     * @returns {String}
     */
    stripThousands (s) {
        let c = this.thousandSeparator;
        let cache = this._thousandsRe;
        let re = cache[c] || (cache[c] = new RegExp('\\' + c, 'g'));
        
        return (s == null) ? s : String(s).replace(re, '');
    }
}

Locale.register(new Locale({ name: 'en-US', alias: 'en' }), /* current = */true);

export { Locale };
