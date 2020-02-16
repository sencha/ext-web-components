import Ext_form_ComboBox from './Ext/form/ComboBox.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCCombobox extends Ext_form_ComboBox {
  constructor() {
    super ([], []);
    this.xtype = 'combobox';
  }
}
try {
  window.customElements.define('ext-combobox', ElementParser.withParsedCallback(EWCCombobox));
}
catch(e) {
  window.customElements.define('ext-combobox', EWCCombobox);
}
