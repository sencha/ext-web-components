import Ext_picker_SelectPicker from './Ext/picker/SelectPicker.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCSelectpicker extends Ext_picker_SelectPicker {
  constructor() {
    super ([], []);
    this.xtype = 'selectpicker';
  }
}
try {
  window.customElements.define('ext-selectpicker', ElementParser.withParsedCallback(EWCSelectpicker));
}
catch(e) {
  window.customElements.define('ext-selectpicker', EWCSelectpicker);
}
