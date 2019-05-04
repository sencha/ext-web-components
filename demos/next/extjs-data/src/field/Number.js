import { define } from '../../../extjs-core/src';
import { IntegerField } from './Integer';

/**
 * A data field that automatically {@link #convert converts} its value to a floating-point
 * number.
 *
 *     @example
 *     Ext.define('Product', {
 *         extend: 'Model',
 *         fields: [
 *             { name: 'price', type: 'number' }
 *         ]
 *     });
 *
 *     var record = Ext.create('Product', { price: "5.1" }),
 *         value = record.get('price');
 *
 *     Ext.toast("price is " + value);
 */
@define({
    tags: {
        isIntegerField: false
    },

    type: 'number',
    
    alias: 'data.field.float',

    prototype: {
        numericType: 'float'
    }
})
class NumberField extends IntegerField {
    getNumber (x) {
        return x;
    }

    parse (v) {
        return parseFloat(String(v).replace(this.stripRe, ''));
    }
}

export { NumberField };
