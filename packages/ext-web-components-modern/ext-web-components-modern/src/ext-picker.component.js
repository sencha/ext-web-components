import Ext_Picker from './Ext/Picker.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPicker extends Ext_Picker {
  constructor() {
    super ([], []);
    this.xtype = 'picker';
  }
}
try {
  if (window.customElements.get('ext-picker') == undefined) {
    window.customElements.define('ext-picker', ElementParser.withParsedCallback(EWCPicker));
  }
}
catch(e) {
  if (window.customElements.get('ext-picker') == undefined) {
    window.customElements.define('ext-picker', EWCPicker);
  }
}
