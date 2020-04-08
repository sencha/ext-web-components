import Ext_form_Email from './Ext/form/Email.js';
import ElementParser from './common/ElementParser.js';

export default class EWCEmailfield extends Ext_form_Email {
  constructor() {
    super ([], []);
    this.xtype = 'emailfield';
  }
}
try {
  if (window.customElements.get('ext-emailfield') == undefined) {
    window.customElements.define('ext-emailfield', ElementParser.withParsedCallback(EWCEmailfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-emailfield') == undefined) {
    window.customElements.define('ext-emailfield', EWCEmailfield);
  }
}
