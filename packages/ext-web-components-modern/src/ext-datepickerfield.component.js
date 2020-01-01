import Ext_field_DatePicker from './Ext/field/DatePicker.js';
import ElementParser from './ElementParser.js';

export default class EWCDatepickerfield extends Ext_field_DatePicker {
  constructor() {
    super ([], []);
    this.xtype = 'datepickerfield';
  }
}
window.customElements.define('ext-datepickerfield', ElementParser.withParsedCallback(EWCDatepickerfield));
