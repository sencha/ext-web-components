import Ext_form_Checkbox from './Ext/form/Checkbox.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCheckboxfield extends Ext_form_Checkbox {
  constructor() {
    super ([], []);
    this.xtype = 'checkboxfield';
  }
}
try {
  if (window.customElements.get('ext-checkboxfield') == undefined) {
    window.customElements.define('ext-checkboxfield', ElementParser.withParsedCallback(EWCCheckboxfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-checkboxfield') == undefined) {
    window.customElements.define('ext-checkboxfield', EWCCheckboxfield);
  }
}
