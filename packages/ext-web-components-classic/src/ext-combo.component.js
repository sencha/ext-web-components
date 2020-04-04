import Ext_form_ComboBox from './Ext/form/ComboBox.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCombo extends Ext_form_ComboBox {
  constructor() {
    super ([], []);
    this.xtype = 'combo';
  }
}
try {
  if (window.customElements.get('ext-combo') == undefined) {
    window.customElements.define('ext-combo', ElementParser.withParsedCallback(EWCCombo));
  }
}
catch(e) {
  if (window.customElements.get('ext-combo') == undefined) {
    window.customElements.define('ext-combo', EWCCombo);
  }
}
