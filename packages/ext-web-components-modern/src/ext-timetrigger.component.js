import Ext_field_trigger_Time from './Ext/field/trigger/Time.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTimetrigger extends Ext_field_trigger_Time {
  constructor() {
    super ([], []);
    this.xtype = 'timetrigger';
  }
}
try {
  if (window.customElements.get('ext-timetrigger') == undefined) {
    window.customElements.define('ext-timetrigger', ElementParser.withParsedCallback(EWCTimetrigger));
  }
}
catch(e) {
  if (window.customElements.get('ext-timetrigger') == undefined) {
    window.customElements.define('ext-timetrigger', EWCTimetrigger);
  }
}
