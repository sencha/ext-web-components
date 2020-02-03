import Ext_calendar_form_TimeField from './Ext/calendar/form/TimeField.js';
import ElementParser from './ElementParser.js';

export default class EWCCalendar_timefield extends Ext_calendar_form_TimeField {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-timefield';
  }
}
try {
  window.customElements.define('ext-calendar-timefield', ElementParser.withParsedCallback(EWCCalendar_timefield));
}
catch(e) {
  window.customElements.define('ext-calendar-timefield', EWCCalendar_timefield);
}
