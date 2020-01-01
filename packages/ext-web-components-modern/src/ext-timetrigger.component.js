import Ext_field_trigger_Time from './Ext/field/trigger/Time.js';
import ElementParser from './ElementParser.js';

export default class EWCTimetrigger extends Ext_field_trigger_Time {
  constructor() {
    super ([], []);
    this.xtype = 'timetrigger';
  }
}
window.customElements.define('ext-timetrigger', ElementParser.withParsedCallback(EWCTimetrigger));
