import { define, config } from '../../../extjs-core/src';
import { Field } from './Field';

/**
 * A data field that automatically {@link #convert converts} its value to a string.
 *
 *     @example
 *     Ext.define('User', {
 *         extend: 'Model',
 *         fields: [
 *             { name: 'firstName', type: 'string' }
 *         ]
 *     });
 *
 *     var record = Ext.create('User', { firstName: "Phil" }),
 *         value = record.get('firstName');
 *
 *     Ext.toast("firstName is " + value);
 */
@define({
    type: 'string'
})
class StringField extends Field {
    @config
    sortType = 'caseless'; // legacy name was 'asUCString'

    deserialize (v) {
        let defaultValue = this.allowNull ? null : '';
        
        return (v == null) ? defaultValue : String(v);
    }
}

export { StringField };
