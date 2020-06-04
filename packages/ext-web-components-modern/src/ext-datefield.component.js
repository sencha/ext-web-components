import Ext_field_DatePicker from './Ext/field/DatePicker.js';
import ElementParser from './common/ElementParser.js';

export default class EWCDatefield extends Ext_field_DatePicker {
  constructor() {
    super ([], []);
    this.xtype = 'datefield';
  }
}
try {
  if (window.customElements.get('ext-datefield') == undefined) {
    window.customElements.define('ext-datefield', ElementParser.withParsedCallback(EWCDatefield));
  }
}
catch(e) {
  if (window.customElements.get('ext-datefield') == undefined) {
    window.customElements.define('ext-datefield', EWCDatefield);
  }
}
