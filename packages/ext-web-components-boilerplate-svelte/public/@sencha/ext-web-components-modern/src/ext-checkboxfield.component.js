import Ext_form_Checkbox from './Ext/form/Checkbox.js';
import ElementParser from './ElementParser.js';

export default class EWCCheckboxfield extends Ext_form_Checkbox {
  constructor() {
    super ([], []);
    this.xtype = 'checkboxfield';
  }
}
try {
  window.customElements.define('ext-checkboxfield', ElementParser.withParsedCallback(EWCCheckboxfield));
}
catch(e) {
  window.customElements.define('ext-checkboxfield', EWCCheckboxfield);
}
