import Ext_form_Checkbox from './Ext/form/Checkbox.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCheckbox extends Ext_form_Checkbox {
  constructor() {
    super ([], []);
    this.xtype = 'checkbox';
  }
}
try {
  if (window.customElements.get('ext-checkbox') == undefined) {
    window.customElements.define('ext-checkbox', ElementParser.withParsedCallback(EWCCheckbox));
  }
}
catch(e) {
  if (window.customElements.get('ext-checkbox') == undefined) {
    window.customElements.define('ext-checkbox', EWCCheckbox);
  }
}
