import Ext_picker_SelectPicker from './Ext/picker/SelectPicker.js';
import ElementParser from './ElementParser.js';

export default class EWCSelectpicker extends Ext_picker_SelectPicker {
  constructor() {
    super ([], []);
    this.xtype = 'selectpicker';
  }
}
window.customElements.define('ext-selectpicker', ElementParser.withParsedCallback(EWCSelectpicker));
