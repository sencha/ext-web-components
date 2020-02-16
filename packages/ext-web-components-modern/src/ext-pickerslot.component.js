import Ext_picker_Slot from './Ext/picker/Slot.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCPickerslot extends Ext_picker_Slot {
  constructor() {
    super ([], []);
    this.xtype = 'pickerslot';
  }
}
try {
  window.customElements.define('ext-pickerslot', ElementParser.withParsedCallback(EWCPickerslot));
}
catch(e) {
  window.customElements.define('ext-pickerslot', EWCPickerslot);
}
