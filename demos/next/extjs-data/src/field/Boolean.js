import { define } from '../../../extjs-core/src';
import { Field } from './Field';

/**
 * A data field that automatically {@link #convert converts} its value to a boolean.
 *
 *     @example
 *     Ext.define('Task', {
 *         extend: 'Model',
 *         fields: [
 *             { name: 'completed', type: 'boolean' }
 *         ]
 *     });
 *
 *     var record = Ext.create('Task', { completed: true }),
 *         value = record.get('completed');
 *
 *     Ext.toast("completed is " + value);
 */
@define({
    type: 'boolean',
    
    alias: 'data.field.bool',
    
    prototype: {
        /**
         * @property {RegExp} trueRe
         * Values matching this regular expression are considered `true`.
         * @readonly
         */
        trueRe: /^\s*(?:true|yes|on|1)\s*$/i
    }
})
class BooleanField extends Field {
    deserialize (v) {
        if (typeof v === 'boolean') {
            return v;
        }
        
        if (this.allowNull && (v == null || v === '')) {
            return null;
        }
        
        return this.trueRe.test(String(v));
    }
}

export { BooleanField };
