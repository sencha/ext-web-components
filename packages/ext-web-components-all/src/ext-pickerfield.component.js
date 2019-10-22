import Ext_field_Picker from './Ext/field/Picker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtPickerfield extends Ext_field_Picker {
    constructor() {
        super ([],[])
        this.xtype = 'pickerfield';
    }
}
window.customElements.define('ext-pickerfield', HTMLParsedElement.withParsedCallback(ExtPickerfield))
