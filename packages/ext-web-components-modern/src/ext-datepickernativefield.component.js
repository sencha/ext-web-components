import Ext_form_DatePickerNative from './Ext/form/DatePickerNative.js';
import ElementParser from './common/ElementParser.js';

export default class EWCDatepickernativefield extends Ext_form_DatePickerNative {
  constructor() {
    super ([], []);
    this.xtype = 'datepickernativefield';
  }
}
try {
  if (window.customElements.get('ext-datepickernativefield') == undefined) {
    window.customElements.define('ext-datepickernativefield', ElementParser.withParsedCallback(EWCDatepickernativefield));
  }
}
catch(e) {
  if (window.customElements.get('ext-datepickernativefield') == undefined) {
    window.customElements.define('ext-datepickernativefield', EWCDatepickernativefield);
  }
}
