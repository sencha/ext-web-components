import Ext_form_Number from './Ext/form/Number.js';
import ElementParser from './common/ElementParser.js';

export default class EWCNumberfield extends Ext_form_Number {
  constructor() {
    super ([], []);
    this.xtype = 'numberfield';
  }
}
try {
  if (window.customElements.get('ext-numberfield') == undefined) {
    window.customElements.define('ext-numberfield', ElementParser.withParsedCallback(EWCNumberfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-numberfield') == undefined) {
    window.customElements.define('ext-numberfield', EWCNumberfield);
  }
}
