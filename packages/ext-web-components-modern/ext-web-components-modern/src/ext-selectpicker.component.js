import Ext_picker_SelectPicker from './Ext/picker/SelectPicker.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSelectpicker extends Ext_picker_SelectPicker {
  constructor() {
    super ([], []);
    this.xtype = 'selectpicker';
  }
}
try {
  if (window.customElements.get('ext-selectpicker') == undefined) {
    window.customElements.define('ext-selectpicker', ElementParser.withParsedCallback(EWCSelectpicker));
  }
}
catch(e) {
  if (window.customElements.get('ext-selectpicker') == undefined) {
    window.customElements.define('ext-selectpicker', EWCSelectpicker);
  }
}
