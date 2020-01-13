import Ext_form_Checkbox from './Ext/form/Checkbox.js';
import ElementParser from './ElementParser.js';

export default class EWCCheckboxfield extends Ext_form_Checkbox {
  constructor() {
    super ([], []);
    this.xtype = 'checkboxfield';
  }
}
window.customElements.define('ext-checkboxfield', ElementParser.withParsedCallback(EWCCheckboxfield));
