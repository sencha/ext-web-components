import Ext_form_Picker from './Ext/form/Picker.js';
import ElementParser from './ElementParser.js';

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
  console.log(e)
  window.customElements.define('ext-pickerfield', EWCPickerfield);
}
