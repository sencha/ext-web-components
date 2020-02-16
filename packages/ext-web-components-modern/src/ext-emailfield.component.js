import Ext_form_Email from './Ext/form/Email.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCEmailfield extends Ext_form_Email {
  constructor() {
    super ([], []);
    this.xtype = 'emailfield';
  }
}
try {
  window.customElements.define('ext-emailfield', ElementParser.withParsedCallback(EWCEmailfield));
}
catch(e) {
  window.customElements.define('ext-emailfield', EWCEmailfield);
}
