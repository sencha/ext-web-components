import Ext_MonthPicker from './Ext/MonthPicker.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCMonthpicker extends Ext_MonthPicker {
  constructor() {
    super ([], []);
    this.xtype = 'monthpicker';
  }
}
try {
  window.customElements.define('ext-monthpicker', ElementParser.withParsedCallback(EWCMonthpicker));
}
catch(e) {
  window.customElements.define('ext-monthpicker', EWCMonthpicker);
}
