import Ext_picker_Time from './Ext/picker/Time.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCTimepicker extends Ext_picker_Time {
  constructor() {
    super ([], []);
    this.xtype = 'timepicker';
  }
}
try {
  window.customElements.define('ext-timepicker', ElementParser.withParsedCallback(EWCTimepicker));
}
catch(e) {
  window.customElements.define('ext-timepicker', EWCTimepicker);
}
