import Ext_form_Date from './Ext/form/Date.js';
import ElementParser from './common/ElementParser.js';

export default class EWCDatefield extends Ext_form_Date {
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
