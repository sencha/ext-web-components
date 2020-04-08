import Ext_picker_Time from './Ext/picker/Time.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTimepicker extends Ext_picker_Time {
  constructor() {
    super ([], []);
    this.xtype = 'timepicker';
  }
}
try {
  if (window.customElements.get('ext-timepicker') == undefined) {
    window.customElements.define('ext-timepicker', ElementParser.withParsedCallback(EWCTimepicker));
  }
}
catch(e) {
  if (window.customElements.get('ext-timepicker') == undefined) {
    window.customElements.define('ext-timepicker', EWCTimepicker);
  }
}
