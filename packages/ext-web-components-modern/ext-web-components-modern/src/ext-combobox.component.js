import Ext_form_field_ComboBox from './Ext/form/field/ComboBox.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCombobox extends Ext_form_field_ComboBox {
  constructor() {
    super ([], []);
    this.xtype = 'combobox';
  }
}
try {
  if (window.customElements.get('ext-combobox') == undefined) {
    window.customElements.define('ext-combobox', ElementParser.withParsedCallback(EWCCombobox));
  }
}
catch(e) {
  if (window.customElements.get('ext-combobox') == undefined) {
    window.customElements.define('ext-combobox', EWCCombobox);
  }
}
