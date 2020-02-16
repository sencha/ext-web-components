import Ext_form_Checkbox from './Ext/form/Checkbox.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCCheckbox extends Ext_form_Checkbox {
  constructor() {
    super ([], []);
    this.xtype = 'checkbox';
  }
}
try {
  window.customElements.define('ext-checkbox', ElementParser.withParsedCallback(EWCCheckbox));
}
catch(e) {
  window.customElements.define('ext-checkbox', EWCCheckbox);
}
