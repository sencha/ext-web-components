import Ext_MonthPicker from './Ext/MonthPicker.js';
import ElementParser from './ElementParser.js';

export default class EWCMonthpicker extends Ext_MonthPicker {
  constructor() {
    super ([], []);
    this.xtype = 'monthpicker';
  }
}
window.customElements.define('ext-monthpicker', ElementParser.withParsedCallback(EWCMonthpicker));
