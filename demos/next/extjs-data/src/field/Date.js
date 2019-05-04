import { Ext, define, config, is } from '../../../extjs-core/src';
import { ExtDate } from '../../../extjs-util/src';

import { Field } from './Field';

/**
 * A data field that automatically {@link #convert converts} its value to a date.
 *
 *     @example
 *     Ext.define('User', {
 *         extend: 'Model',
 *         fields: [
 *             { name: 'birthDate', type: 'date' }
 *         ]
 *     });
 *
 *     var record = Ext.create('User', { birthDate: 'Tuesday, June 27, 2017' }),
 *         value = record.get('birthDate');
 *
 *     Ext.toast("birthDate is " + value);
 */
@define({
    type: 'date',
    
    prototype: {
        /**
         * @cfg {String} format
         * Serves as a default for the {@link #readFormat} and {@link #writeFormat} config
         * options. This will be used in place of those other configurations if not specified.
         * 
         * A format string for the {@link ExtDate#parse ExtDate.parse} function, or "timestamp"
         * if the value provided by the Reader is a UNIX timestamp, or "time" if the value provided
         * by the Reader is a javascript millisecond timestamp. See {@link ExtDate}.
         * 
         * It is quite important to note that while this config is optional, it will default to
         * using the base JavaScript Date object's `parse` function if not specified, rather than
         * {@link ExtDate#parse ExtDate.parse}. This can cause unexpected issues, especially when
         * converting between timezones, or when converting dates that do not have a timezone
         * specified.
         * 
         * The behavior of the native `Date.parse` is implementation-specific, and depending on the
         * value of the date string, it might return the UTC date or the local date. For this reason
         * it is strongly recommended that you always specify an explicit date format when parsing
         * dates.
         */
        format: null,
    
        /**
         * @cfg {String} readFormat
         * Used when converting received data into a Date when the {@link #type} is specified as
         * `"date"`. This configuration takes precedence over {@link #format}.
         * See {@link #format} for more information.
         */
        readFormat: null,
    
        /** 
         * @cfg {String} writeFormat
         * Provides a custom format when serializing dates with a {@link Ext.data.writer.Writer}.
         * If this is not specified, the {@link #format} will be used. If no `format`
         * is specified, 'timestamp' format is used.
         *
         * See the {@link Ext.data.writer.Writer} docs for more information on writing dates.
         *
         * **Note** It is not possible to use the standard date serialization pathway or
         * {@link Ext#USE_NATIVE_JSON native browser JSON production} to use a
         * {@link Ext.data.JsonWriter JsonWriter} to send Microsoft formatted "JSON" dates.
         *
         * To use a {@link Ext.data.JsonWriter JsonWriter} to write dates in a JSON packet in
         * the form `"\/Date(1357372800000)\/"` configure the field like this:
         *
         *     {
         *         type: 'date',
         *         format: 'MS',     // To parse incoming dates from server correctly
         *         serialize: null       // Avoid formatting or conversion by the Writer
         *     }
         *
         * Then override the `Ext.JSON` date serialize function:
         *
         *     Ext.JSON.encodeDate = function (d) {
         *         return '"' + ExtDate.format(d, 'MS') + '"';
         *     };
         */
        writeFormat: null,

        /**
         * @cfg {Boolean} strict
         * Controls strict date parsing on for this field. If not specified, then the value
         * of {@link ExtDate#useStrict} determines how dates are parsed.
         */
        strict: null,
        
        defaultWriteFormat: 'timestamp',

        // legacy configs:
        dateFormat: null,
        dateReadFormat: null,
        dateWriteFormat: null,
        useStrict: null
    }
})
class DateField extends Field {
    @config
    sortType = 'date';
    
    construct (config) {
        super.construct(config);
        
        let me = this;
        let v;
        
        if ((v = me.dateWriteFormat) !== null) {
            //<debug>
            Ext.log.warn('[DateField] Use of deprecated dateWriteFormat; use writeFormat');
            //</debug>
            me.writeFormat = v;
        }

        if ((v = me.dateReadFormat) !== null) {
            //<debug>
            Ext.log.warn('[DateField] Use of deprecated dateReadFormat; use readFormat');
            //</debug>
            me.readFormat = v;
        }

        if ((v = me.dateFormat) !== null) {
            //<debug>
            Ext.log.warn('[DateField] Use of deprecated dateFormat; use format');
            //</debug>
            me.format = v;
        }

        if ((v = me.useStrict) !== null) {
            //<debug>
            Ext.log.warn('[DateField] Use of deprecated useStrict; use strict');
            //</debug>
            me.strict = v;
        }
    }

    compare (lhs, rhs) {
        // we use is.date vs direct isDate import to allow replacing isDate on the Ext
        // object (perhaps for perf reasons to use instanceof instead of typeOf)
        let lhsIsDate = is.date(lhs);
        let rhsIsDate = is.date(rhs);
        let result;
            
        if (rhsIsDate && lhsIsDate) {
            result = +lhs - +rhs;
            
            if (result === 0) {
                result = 0;
            }
            else {
                result = result < 0 ? -1 : 1;
            }
        }
        else if (lhsIsDate === rhsIsDate) {
            result = 0;
        }
        else {
            result = lhsIsDate ? 1 : -1;
        }
        
        return result;
    }

    deserialize (v) {
        if (!v) {
            return null;
        }

        if (is.date(v)) {
            return v;
        }

        /* eslint-disable-next-line vars-on-top */
        let me = this;
        let format = me.readFormat || me.format;
        let parsed;

        if (format) {
            return ExtDate.parse(v, format, me.strict);
        }

        parsed = Date.parse(v);
        
        return parsed ? new Date(parsed) : null;
    }

    serialize (value) {
        let me = this;
        let result = null;
        let format;

        if (is.date(value)) {
            format = me.writeFormat || me.format || me.defaultWriteFormat;
            result = ExtDate.format(value, format);
        }

        return result;
    }
}

export { DateField };
