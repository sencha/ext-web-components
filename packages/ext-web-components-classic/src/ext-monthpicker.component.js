import Ext_MonthPicker from './Ext/MonthPicker.js';
import ElementParser from './common/ElementParser.js';

export default class EWCMonthpicker extends Ext_MonthPicker {
  constructor() {
    super ([], []);
    this.xtype = 'monthpicker';
  }
}
try {
  if (window.customElements.get('ext-monthpicker') == undefined) {
    window.customElements.define('ext-monthpicker', ElementParser.withParsedCallback(EWCMonthpicker));
  }
}
catch(e) {
  if (window.customElements.get('ext-monthpicker') == undefined) {
    window.customElements.define('ext-monthpicker', EWCMonthpicker);
  }
}
