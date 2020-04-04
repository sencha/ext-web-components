import Ext_form_Text from './Ext/form/Text.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTextfield extends Ext_form_Text {
  constructor() {
    super ([], []);
    this.xtype = 'textfield';
  }
}
try {
  if (window.customElements.get('ext-textfield') == undefined) {
    window.customElements.define('ext-textfield', ElementParser.withParsedCallback(EWCTextfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-textfield') == undefined) {
    window.customElements.define('ext-textfield', EWCTextfield);
  }
}
