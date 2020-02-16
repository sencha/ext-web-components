import Ext_form_ComboBox from './Ext/form/ComboBox.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCCombo extends Ext_form_ComboBox {
  constructor() {
    super ([], []);
    this.xtype = 'combo';
  }
}
try {
  window.customElements.define('ext-combo', ElementParser.withParsedCallback(EWCCombo));
}
catch(e) {
  window.customElements.define('ext-combo', EWCCombo);
}
