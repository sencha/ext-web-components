import Ext_field_DatePicker from './Ext/field/DatePicker.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCDatefield extends Ext_field_DatePicker {
  constructor() {
    super ([], []);
    this.xtype = 'datefield';
  }
}
try {
  window.customElements.define('ext-datefield', ElementParser.withParsedCallback(EWCDatefield));
}
catch(e) {
  window.customElements.define('ext-datefield', EWCDatefield);
}
