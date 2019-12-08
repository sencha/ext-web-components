//import Ext_form_Picker from '@sencha/ext-runtime-base/dist/./Ext/form/Picker.js';
import Ext_form_Picker from './Ext/form/Picker.js';
import ElementParser from './ElementParser.js';

export default class EWCPickerfield extends Ext_form_Picker {
    constructor() {
        super ([], []);
        this.xtype = 'pickerfield';
    }

}
window.customElements.define('ext-pickerfield', ElementParser.withParsedCallback(EWCPickerfield));

