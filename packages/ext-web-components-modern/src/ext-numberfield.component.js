import Ext_form_Number from './Ext/form/Number.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCNumberfield extends Ext_form_Number {
  constructor() {
    super ([], []);
    this.xtype = 'numberfield';
  }
}
try {
  window.customElements.define('ext-numberfield', ElementParser.withParsedCallback(EWCNumberfield));
}
catch(e) {
  window.customElements.define('ext-numberfield', EWCNumberfield);
}
