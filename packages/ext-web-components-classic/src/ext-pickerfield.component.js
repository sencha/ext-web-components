import Ext_form_Picker from './Ext/form/Picker.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCPickerfield extends Ext_form_Picker {
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
