import Ext_form_field_ComboBox from './Ext/form/field/ComboBox.js';
import ElementParser from './common/ElementParser.js';

export default class EWCComboboxfield extends Ext_form_field_ComboBox {
  constructor() {
    super ([], []);
    this.xtype = 'comboboxfield';
  }
}
try {
  if (window.customElements.get('ext-comboboxfield') == undefined) {
    window.customElements.define('ext-comboboxfield', ElementParser.withParsedCallback(EWCComboboxfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-comboboxfield') == undefined) {
    window.customElements.define('ext-comboboxfield', EWCComboboxfield);
  }
}
