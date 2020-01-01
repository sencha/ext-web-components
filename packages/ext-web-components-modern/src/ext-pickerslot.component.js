import Ext_picker_Slot from './Ext/picker/Slot.js';
import ElementParser from './ElementParser.js';

export default class EWCPickerslot extends Ext_picker_Slot {
  constructor() {
    super ([], []);
    this.xtype = 'pickerslot';
  }
}
window.customElements.define('ext-pickerslot', ElementParser.withParsedCallback(EWCPickerslot));
