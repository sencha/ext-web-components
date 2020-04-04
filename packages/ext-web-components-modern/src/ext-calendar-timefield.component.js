import Ext_calendar_form_TimeField from './Ext/calendar/form/TimeField.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCalendar_timefield extends Ext_calendar_form_TimeField {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-timefield';
  }
}
try {
  if (window.customElements.get('ext-calendar-timefield') == undefined) {
    window.customElements.define('ext-calendar-timefield', ElementParser.withParsedCallback(EWCCalendar_timefield));
  }
}
catch(e) {
  if (window.customElements.get('ext-calendar-timefield') == undefined) {
    window.customElements.define('ext-calendar-timefield', EWCCalendar_timefield);
  }
}
