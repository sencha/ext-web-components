//import Ext_field_Picker from '@sencha/ext-runtime-base/dist/./Ext/field/Picker.js';
import Ext_field_Picker from './Ext/field/Picker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCPickerfield extends Ext_field_Picker {
    constructor() {
        super ([], []);
        this.xtype = 'pickerfield';
    }

}
window.customElements.define('ext-pickerfield', HTMLParsedElement.withParsedCallback(EWCPickerfield));

