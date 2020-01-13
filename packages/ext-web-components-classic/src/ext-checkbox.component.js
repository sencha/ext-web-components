import Ext_form_Checkbox from './Ext/form/Checkbox.js';
import ElementParser from './ElementParser.js';

export default class EWCCheckbox extends Ext_form_Checkbox {
  constructor() {
    super ([], []);
    this.xtype = 'checkbox';
  }
}
window.customElements.define('ext-checkbox', ElementParser.withParsedCallback(EWCCheckbox));
