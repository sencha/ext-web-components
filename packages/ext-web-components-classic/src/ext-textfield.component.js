import Ext_form_Text from './Ext/form/Text.js';
import ElementParser from './ElementParser.js';

export default class EWCTextfield extends Ext_form_Text {
  constructor() {
    super ([], []);
    this.xtype = 'textfield';
  }
}
window.customElements.define('ext-textfield', ElementParser.withParsedCallback(EWCTextfield));
