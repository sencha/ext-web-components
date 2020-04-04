import Ext_picker_Slot from './Ext/picker/Slot.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPickerslot extends Ext_picker_Slot {
  constructor() {
    super ([], []);
    this.xtype = 'pickerslot';
  }
}
try {
  if (window.customElements.get('ext-pickerslot') == undefined) {
    window.customElements.define('ext-pickerslot', ElementParser.withParsedCallback(EWCPickerslot));
  }
}
catch(e) {
  if (window.customElements.get('ext-pickerslot') == undefined) {
    window.customElements.define('ext-pickerslot', EWCPickerslot);
  }
}
