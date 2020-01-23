import Ext_form_Date from './Ext/form/Date.js';
import ElementParser from './ElementParser.js';

export default class EWCDatefield extends Ext_form_Date {
  constructor() {
    super ([], []);
    this.xtype = 'datefield';
  }
}
try {
  window.customElements.define('ext-datefield', ElementParser.withParsedCallback(EWCDatefield));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-datefield', EWCDatefield);
}
