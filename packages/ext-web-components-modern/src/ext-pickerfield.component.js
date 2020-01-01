import Ext_field_Picker from './Ext/field/Picker.js';
import ElementParser from './ElementParser.js';

export default class EWCPickerfield extends Ext_field_Picker {
  constructor() {
    super ([], []);
    this.xtype = 'pickerfield';
  }
}
window.customElements.define('ext-pickerfield', ElementParser.withParsedCallback(EWCPickerfield));
