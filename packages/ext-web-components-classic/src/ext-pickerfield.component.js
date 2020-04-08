import Ext_form_Picker from './Ext/form/Picker.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPickerfield extends Ext_form_Picker {
  constructor() {
    super ([], []);
    this.xtype = 'pickerfield';
  }
}
try {
  if (window.customElements.get('ext-pickerfield') == undefined) {
    window.customElements.define('ext-pickerfield', ElementParser.withParsedCallback(EWCPickerfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-pickerfield') == undefined) {
    window.customElements.define('ext-pickerfield', EWCPickerfield);
  }
}
