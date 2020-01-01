import Ext_form_Password from './Ext/form/Password.js';
import ElementParser from './ElementParser.js';

export default class EWCPasswordfield extends Ext_form_Password {
  constructor() {
    super ([], []);
    this.xtype = 'passwordfield';
  }
}
window.customElements.define('ext-passwordfield', ElementParser.withParsedCallback(EWCPasswordfield));
