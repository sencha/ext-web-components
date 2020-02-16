import Ext_calendar_header_Weeks from './Ext/calendar/header/Weeks.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCCalendar_weeksheader extends Ext_calendar_header_Weeks {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-weeksheader';
  }
}
try {
  window.customElements.define('ext-calendar-weeksheader', ElementParser.withParsedCallback(EWCCalendar_weeksheader));
}
catch(e) {
  window.customElements.define('ext-calendar-weeksheader', EWCCalendar_weeksheader);
}
