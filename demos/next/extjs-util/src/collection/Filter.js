import {
    config, copy, define, is
} from '../../../extjs-core/src';

import { BasicFilter } from './BasicFilter';
import { arrayEquals } from '../Array';
import { coerceValue, returnTrue } from '../Util';
import { escapeRegex } from '../string';

/**
 * A filter that can be applied to an `Ext.util.Collection` or other data container such
 * an `Store`. A `Filter` can be simply a filter on a `property` and `value` pair
 * or a filter function with custom logic.
 *
 * Normally filters are added to stores or collections but they can be created directly:
 *
 *     let ageFilter = new Filter({
 *         property: 'age',
 *         value: 42,
 *         operator: '<'
 *     });
 *
 *     let longNameFilter = new Filter({
 *         filterFn: function (item) {
 *             return item.name.length > 4;
 *         }
 *     });
 */
@define({
    config: {
        /**
         * @cfg {String} root
         * This property is used to descend items to check for meaningful properties on
         * which to filter. For a `Model` for example this would be `'data'`.
         */
        root: null,

        /**
         * @cfg {RegExp/*} value
         * The value you want to match against. Required unless a {@link #filterFn} is passed.
         * 
         * Can be a regular expression which will be used as a matcher or any other value
         * such as an object or an array of objects. This value is compared using the configured
         * {@link #operator}.
         */
        value: null,

        /**
         * @cfg {Function} filterFn
         * A custom filter function which is passed each item. This function must return
         * `true` to accept an item or `false` to reject it.
         */
        filterFn: null,

        /**
         * @cfg {Boolean} anyMatch
         * True to allow any match - no regex start/end line anchors will be added.
         */
        anyMatch: false,

        /**
         * @cfg {Boolean} exactMatch
         * True to force exact match (^ and $ characters added to the regex). Ignored if
         * `anyMatch` is `true`.
         */
        exactMatch: false,

        /**
         * @cfg {Boolean} caseSensitive
         * True to make the regex case sensitive (adds 'i' switch to regex).
         */
        caseSensitive: false,

        /**
         * @cfg {Boolean} disableOnEmpty
         * `true` to not have this filter participate in the filtering process when the
         * {@link #value} of this the filter is empty according to `isEmpty`.
         */
        disableOnEmpty: false,

        /**
         * @cfg {String} operator
         * The operator to use to compare the {@link #cfg!property} to this Filter's
         * {@link #cfg!value}.
         *
         * Possible values are:
         *
         *    * `<`
         *    * `<=`
         *    * `=`
         *    * `>=`
         *    * `>`
         *    * `!=`
         *    * `in`
         *    * `notin`
         *    * `like`
         *    * `/=`
         *
         * The `in` and `notin` operator expects this filter's {@link #cfg!value} to be
         * an array and matches values that are present in that array.
         * 
         * The `like` operator matches values that contain this filter's {@link #cfg!value}
         * as a substring.
         *
         * The `/=` operator uses the {@link #cfg!value} as the source for a `RegExp` and
         * tests whether the candidate value matches the regular expression.
         */
        operator: null,

        /**
         * @cfg {Function} [convert]
         * A function to do any conversion on the value before comparison. For example,
         * something that returns the date only part of a date.
         * @cfg {Object} convert.value The value to convert.
         * @cfg {Object} convert.return The converted value.
         * @private
         */
        convert: null
    },
    
    prototype: {
        _filterFn: null,

        generation: 0,
        identifiablePrefix: 'ext-filter-',  // for compat
        primitiveRe: /string|number|boolean/,

        preventConvert: {
            'in': 1,
            notin: 1
        },

        operatorFns: {
            "<" (candidate) {
                let v = this._filterValue;

                return this._getCandidateValue(candidate, v) < v;
            },

            "<=" (candidate) {
                let v = this._filterValue;

                return this._getCandidateValue(candidate, v) <= v;
            },

            "=" (candidate) {
                let me = this;
                let v = me._filterValue;

                candidate = me._getCandidateValue(candidate, v);

                if (me.isDateValue && candidate instanceof Date) {
                    candidate = candidate.getTime();
                    v = me.dateValue;
                }

                // noinspection EqualityComparisonWithCoercionJS
                return candidate == v; // eslint-disable-line eqeqeq
            },

            "===" (candidate) {
                let me = this;
                let v = me._filterValue;

                candidate = me._getCandidateValue(candidate, v, true);

                if (me.isDateValue && candidate instanceof Date) {
                    candidate = candidate.getTime();
                    v = me.dateValue;
                }

                return candidate === v;
            },

            ">=" (candidate) {
                let v = this._filterValue;

                return this._getCandidateValue(candidate, v) >= v;
            },

            ">" (candidate) {
                let v = this._filterValue;

                return this._getCandidateValue(candidate, v) > v;
            },

            "!=" (candidate) {
                let me = this;
                let v = me._filterValue;

                candidate = me._getCandidateValue(candidate, v);

                if (me.isDateValue && candidate instanceof Date) {
                    candidate = candidate.getTime();
                    v = me.dateValue;
                }

                // noinspection EqualityComparisonWithCoercionJS
                return candidate != v; // eslint-disable-line eqeqeq
            },

            "!==" (candidate) {
                let me = this;
                let v = me._filterValue;

                candidate = me._getCandidateValue(candidate, v, true);

                if (me.isDateValue && candidate instanceof Date) {
                    candidate = candidate.getTime();
                    v = me.dateValue;
                }

                return candidate !== v;
            },

            "in" (candidate) {
                let v = this._filterValue;

                return v.includes(this._getCandidateValue(candidate, v));
            },

            notin (candidate) {
                let v = this._filterValue;

                return !v.includes(this._getCandidateValue(candidate, v));
            },

            like (candidate) {
                let v = this._filterValue;
                let c = v && this._getCandidateValue(candidate, v).toLowerCase();

                return c ? c.indexOf(v.toLowerCase()) > -1 : false;
            },

            "/=" (candidate) {
                let me = this;
                let v = me._filterValue;

                candidate = me._getCandidateValue(candidate, v);

                // Only compile a RegExp when the source string changes
                if (v !== me.lastRegExpSource) {
                    me.lastRegExpSource = v;

                    try {
                        me.regex = new RegExp(v, 'i');
                    }
                    catch (e) {
                        me.regex = null;
                    }
                }

                return me.regex ? me.regex.test(candidate) : false;
            }
        }
    }
})
class Filter extends BasicFilter {
    /**
     * @cfg {String} property
     * The property to filter on. Required unless a {@link #filterFn} is passed.
     */
    @config('pre')
    property = null;

    /**
     * @cfg {Object} [scope]
     * The context (`this` property) in which the filtering function is called. Defaults
     * to this Filter object.
     */
    @config('!merge')
    scope = null;

    /**
     * Creates a single filter function which encapsulates the passed Filter array or
     * Collection.
     * @param {Ext.util.Filter[]/Ext.util.Collection} filters The filters from which to
     * create a filter function.
     * @return {Function} A function, which when passed a candidate object returns `true`
     * if the candidate passes all the specified Filters.
     */
    static createFilterFn (filters) {
        if (!filters) {
            return returnTrue;
        }

        return candidate => {
            let items = filters.isCollection ? filters.items : filters;
            let length = items.length;
            let match = true;
            let i, filter;

            for (i = 0; match && i < length; i++) {
                filter = items[i];

                if (!filter.disabled) {
                    match = filter.filter(candidate);
                }
            }

            return match;
        };
    }

    /**
     * Creates a `RegExp` given a string `value` and optional flags. For example, the
     * following two regular expressions are equivalent.
     *
     *      var regex1 = Filter.createRegex('hello');
     *
     *      var regex2 = /^hello$/i;
     *
     * The following two regular expressions are also equivalent:
     *
     *      var regex1 = Filter.createRegex('world', false, false, false);
     *
     *      var regex2 = /world/;
     *
     * @param {String/RegExp} value The String to convert to a `RegExp`.
     * @param {Boolean} [startsWith=true] Pass `false` to allow a match to start 
     * anywhere in the string. By default the `value` will match only at the start 
     * of the string.
     * @param {Boolean} [endsWith=true] Pass `false` to allow the match to end before
     * the end of the string. By default the `value` will match only at the end of the
     * string.
     * @param {Boolean} [ignoreCase=true] Pass `false` to make the `RegExp` case
     * sensitive (removes the 'i' flag).
     * @return {RegExp}
     */
    static createRegex (value, startsWith, endsWith, ignoreCase) {
        let ret = value;

        if (value != null && !value.exec) { // not a regex
            ret = escapeRegex(String(value));

            if (startsWith !== false) {
                ret = '^' + ret;
            }
            
            if (endsWith !== false) {
                ret += '$';
            }

            ret = new RegExp(ret, (ignoreCase !== false) ? 'i' : '');
        }

        return ret;
    }

    /**
     * Checks if two filters have the same properties (Property, Operator and Value).
     *
     * @param {Filter} filter1 The first filter to be compared
     * @param {Filter} filter2 The second filter to be compared
     * @return {Boolean} `true` if they have the same properties.
     */
    static isEqual (filter1, filter2) {
        if (filter1 === filter2) {
            return true;
        }
        
        if (filter1.getFilterFn && filter2.getFilterFn) {
            let fn1 = filter1.getFilterFn();
            let fn2 = filter2.getFilterFn();
            
            if (!fn1.generated || !fn2.generated) {
                return fn1 === fn2;
            }
        }
        
        if (filter1.property === filter2.property && filter1.operator === filter2.operator) {
            if (filter1.value === filter2.value) {
                return true;
            }
    
            return is.array(filter1) && is.array(filter2) && arrayEquals(filter1, filter2);
        }

        return false;
    }

    filter (item) {
        let me = this;
        let filterFn = me.getFilterFn();
        let convert = me.convert;
        let value = me.value;

        me._filterValue = value;
        me.isDateValue = is.date(value);

        if (me.isDateValue) {
            me.dateValue = +value;
        }

        if (convert && !me.preventConvert[me.operator]) {
            me._filterValue = convert.call(me.scope || me, value);
        }

        return filterFn.call(me.scope || me, item);
    }

    getFilterFn () {
        let me = this;
        let filterFn = me._filterFn;
        let operator;

        if (!filterFn) {
            operator = me.operator;

            if (operator) {
                filterFn = me.operatorFns[operator];
            }
            else {
                // This part is broken our into its own method so the function expression
                // contained there does not get hoisted and created on each call this
                // method.
                filterFn = me.createRegexFilter();
            }

            // Mark as generated. This is important when serializing filters.
            filterFn.generated = true;

            me._filterFn = filterFn;
        }

        return filterFn;
    }

    /**
     * Creates a filter function for the configured value/anyMatch/caseSensitive options
     * for this Filter.
     * @private
     */
    createRegexFilter () {
        let me = this;
        let startsWith = !me.anyMatch;
        let endsWith = startsWith && !!me.exactMatch;
        let re = Filter.createRegex(me.value, startsWith, endsWith, !me.caseSensitive);

        return item => {
            let val = me.getPropertyValue(item);

            return re ? re.test(val) : (val == null);
        };
    }

    /**
     * Returns the property of interest from the given item, based on the configured `root`
     * and `property` configs.
     * @param {Object} item The item.
     * @return {Object} The property of the object.
     * @private
     */
    getPropertyValue (item) {
        let root = this.root;
        let value = (root == null) ? item : item[root];

        return value[this.property];
    }

    /**
     * Returns this filter's state.
     * @return {Object}
     */
    getState () {
        let state = this.getCurrentConfig();
        
        if (state.id === state.property) {
            delete state.id;
        }
        
        delete state.root;
        delete state.serializer;
        
        return state;
    }

    /**
     * Returns this filter's serialized state. This is used when transmitting this filter
     * to a server.
     * @return {Object}
     */
    serialize () {
        let result = this.getState();
        let serializer = this.serializer;
        let serialized;

        delete result.id;

        if (serializer) {
            serialized = serializer.call(this, result);

            if (serialized) {
                result = serialized;
            }
        }

        return result;
    }

    serializeTo (out) {
        let me = this;
        let filterFn = me.getFilterFn();
        let primitive, serialized;

        // Filters with a custom filterFn cannot be serialized...
        if (filterFn.generated) {
            out.push(serialized = me.serialize());
            primitive = me.primitiveRe.test(typeof serialized);
        }

        return !primitive;
    }

    updateOperator () {
        this.onModified();
    }

    updateConvert () {
        this.onModified();
    }

    updateProperty (property) {
        let me = this;
        
        me.onModified();

        if (property && me.autoGenId) {
            me.autoGenId = false;
            me.id = property;
        }
    }

    updateAnyMatch () {
        this.onModified();
    }

    updateExactMatch () {
        this.onModified();
    }

    updateCaseSensitive () {
        this.onModified();
    }

    updateValue (value) {
        this.onModified();
        
        if (this.disableOnEmpty) {
            this.disabled = is.empty(value);
        }
    }

    updateFilterFn (filterFn) {
        this._filterFn = filterFn;
    }

    onModified () {
        let me = this;
        let filterFn = me._filterFn;

        // Developers may use "generation" to see if a filter has changed:
        ++me.generation;
        
        if (filterFn && filterFn.generated) {
            me._filterFn = null;
        }
    }

    updateDisableOnEmpty (disableOnEmpty) {
        // Only poke disabled if true because otherwise we'll smash the disabled
        // config that may also be getting set.
        if (disableOnEmpty) {
            this.disabled = is.empty(this.value);
        }
    }

    _getCandidateValue (candidate, v, preventCoerce) {
        let me = this;
        let convert = me.convert;
        let result = me.getPropertyValue(candidate);

        if (convert) {
            result = convert.call(me.scope || me, result);
        }
        else if (!preventCoerce) {
            result = coerceValue(result, v);
        }

        return result;
    }
}

const operatorFns = Filter.prototype.operatorFns;

copy(operatorFns, {
    '==': operatorFns['='],  // '==' is the same as operator type '='
    
    gt: operatorFns['>'],
    ge: operatorFns['>='],
    
    lt: operatorFns['<'],
    le: operatorFns['<='],
    
    eq: operatorFns['='],
    ne: operatorFns['!=']
});

export { Filter };
