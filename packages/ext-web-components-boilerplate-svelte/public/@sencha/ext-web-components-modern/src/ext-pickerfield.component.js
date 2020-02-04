import Ext_field_Picker from './Ext/field/Picker.js';
import ElementParser from './ElementParser.js';

export default class EWCPickerfield extends Ext_field_Picker {
  constructor() {
    super ([], []);
    this.xtype = 'pickerfield';
  }
}
try {
  window.customElements.define('ext-pickerfield', ElementParser.withParsedCallback(EWCPickerfield));
}
catch(e) {
  window.customElements.define('ext-pickerfield', EWCPickerfield);
}
