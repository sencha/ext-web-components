import Ext_form_Number from './Ext/form/Number.js';
import ElementParser from './ElementParser.js';

export default class EWCNumberfield extends Ext_form_Number {
  constructor() {
    super ([], []);
    this.xtype = 'numberfield';
  }
}
window.customElements.define('ext-numberfield', ElementParser.withParsedCallback(EWCNumberfield));
