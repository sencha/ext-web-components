import { define, config } from '../../../extjs-core/src';
import { Field } from './Field';

/**
 * A data field that automatically {@link #convert converts} its value to an integer.
 *
 * **Note:** As you can see in the example below, casting data as an integer
 * can result in a loss of precision. (5.1 is converted to 5).
 *
 *     @example
 *     Ext.define('User', {
 *         extend: 'Model',
 *         fields: [
 *             { name: 'age', type: 'integer' }
 *         ]
 *     });
 *
 *     var record = Ext.create('User', { age: "5.1" }),
 *         value = record.get('age');
 *
 *     Ext.toast("age is " + value);
 */
@define({
    tags: 'isNumeric',

    type: 'integer',
    
    alias: 'data.field.int',
    
    prototype: {
        numericType: 'int'
    }
})
class IntegerField extends Field {
    @config
    sortType = 'nullLast';

    deserialize (v) {
        // Handle values which are already numbers.
        // Value truncation behaviour of parseInt is historic and must be maintained.
        // parseInt(35.9)  and parseInt("35.9") returns 35
        if (typeof v === 'number') {
            return this.getNumber(v);
        }

        /* eslint-disable-next-line vars-on-top */
        let empty = v == null || v === '';
        let allowNull = this.allowNull;
        let out;

        if (empty) {
            out = allowNull ? null : 0;
        }
        else {
            out = this.parse(v);
            
            if (allowNull && isNaN(out)) {
                out = null;
            }
        }
        
        return out;
    }

    getNumber (v) {
        return parseInt(v, 10);
    }

    parse (v) {
        return parseInt(String(v).replace(this.stripRe, ''), 10);
    }
}

export { IntegerField };
