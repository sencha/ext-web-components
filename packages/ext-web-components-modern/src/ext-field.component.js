import Ext_form_Field from './Ext/form/Field.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCField extends Ext_form_Field {
  constructor() {
    super ([], []);
    this.xtype = 'field';
  }
}
try {
  window.customElements.define('ext-field', ElementParser.withParsedCallback(EWCField));
}
catch(e) {
  window.customElements.define('ext-field', EWCField);
}
