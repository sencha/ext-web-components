import Ext_field_DatePicker from './Ext/field/DatePicker.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCDatepickerfield extends Ext_field_DatePicker {
  constructor() {
    super ([], []);
    this.xtype = 'datepickerfield';
  }
}
try {
  window.customElements.define('ext-datepickerfield', ElementParser.withParsedCallback(EWCDatepickerfield));
}
catch(e) {
  window.customElements.define('ext-datepickerfield', EWCDatepickerfield);
}
