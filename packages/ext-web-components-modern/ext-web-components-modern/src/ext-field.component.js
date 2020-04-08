import Ext_form_Field from './Ext/form/Field.js';
import ElementParser from './common/ElementParser.js';

export default class EWCField extends Ext_form_Field {
  constructor() {
    super ([], []);
    this.xtype = 'field';
  }
}
try {
  if (window.customElements.get('ext-field') == undefined) {
    window.customElements.define('ext-field', ElementParser.withParsedCallback(EWCField));
  }
}
catch(e) {
  if (window.customElements.get('ext-field') == undefined) {
    window.customElements.define('ext-field', EWCField);
  }
}
