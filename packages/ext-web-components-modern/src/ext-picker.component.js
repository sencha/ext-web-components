import Ext_Picker from './Ext/Picker.js';
import ElementParser from './ElementParser.js';

export default class EWCPicker extends Ext_Picker {
  constructor() {
    super ([], []);
    this.xtype = 'picker';
  }
}
window.customElements.define('ext-picker', ElementParser.withParsedCallback(EWCPicker));
