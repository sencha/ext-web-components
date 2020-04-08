import Ext_DatePicker from './Ext/DatePicker.js';
import ElementParser from './common/ElementParser.js';

export default class EWCDatepicker extends Ext_DatePicker {
  constructor() {
    super ([], []);
    this.xtype = 'datepicker';
  }
}
try {
  if (window.customElements.get('ext-datepicker') == undefined) {
    window.customElements.define('ext-datepicker', ElementParser.withParsedCallback(EWCDatepicker));
  }
}
catch(e) {
  if (window.customElements.get('ext-datepicker') == undefined) {
    window.customElements.define('ext-datepicker', EWCDatepicker);
  }
}
