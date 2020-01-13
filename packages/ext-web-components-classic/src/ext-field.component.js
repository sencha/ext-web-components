import Ext_form_BaseField from './Ext/form/BaseField.js';
import ElementParser from './ElementParser.js';

export default class EWCField extends Ext_form_BaseField {
  constructor() {
    super ([], []);
    this.xtype = 'field';
  }
}
window.customElements.define('ext-field', ElementParser.withParsedCallback(EWCField));
