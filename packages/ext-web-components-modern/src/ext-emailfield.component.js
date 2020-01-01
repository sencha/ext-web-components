import Ext_form_Email from './Ext/form/Email.js';
import ElementParser from './ElementParser.js';

export default class EWCEmailfield extends Ext_form_Email {
  constructor() {
    super ([], []);
    this.xtype = 'emailfield';
  }
}
window.customElements.define('ext-emailfield', ElementParser.withParsedCallback(EWCEmailfield));
