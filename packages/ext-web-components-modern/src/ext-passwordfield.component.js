import Ext_form_Password from './Ext/form/Password.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCPasswordfield extends Ext_form_Password {
  constructor() {
    super ([], []);
    this.xtype = 'passwordfield';
  }
}
try {
  window.customElements.define('ext-passwordfield', ElementParser.withParsedCallback(EWCPasswordfield));
}
catch(e) {
  window.customElements.define('ext-passwordfield', EWCPasswordfield);
}
