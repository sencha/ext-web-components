import Ext_field_DatePicker from './Ext/field/DatePicker.js';
import ElementParser from './common/ElementParser.js';

export default class EWCDatepickerfield extends Ext_field_DatePicker {
  constructor() {
    super ([], []);
    this.xtype = 'datepickerfield';
  }
}
try {
  if (window.customElements.get('ext-datepickerfield') == undefined) {
    window.customElements.define('ext-datepickerfield', ElementParser.withParsedCallback(EWCDatepickerfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-datepickerfield') == undefined) {
    window.customElements.define('ext-datepickerfield', EWCDatepickerfield);
  }
}
