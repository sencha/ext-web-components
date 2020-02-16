import Ext_Picker from './Ext/Picker.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCPicker extends Ext_Picker {
  constructor() {
    super ([], []);
    this.xtype = 'picker';
  }
}
try {
  window.customElements.define('ext-picker', ElementParser.withParsedCallback(EWCPicker));
}
catch(e) {
  window.customElements.define('ext-picker', EWCPicker);
}
