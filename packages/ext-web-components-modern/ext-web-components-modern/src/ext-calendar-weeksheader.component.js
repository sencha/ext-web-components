import Ext_calendar_header_Weeks from './Ext/calendar/header/Weeks.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCalendar_weeksheader extends Ext_calendar_header_Weeks {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-weeksheader';
  }
}
try {
  if (window.customElements.get('ext-calendar-weeksheader') == undefined) {
    window.customElements.define('ext-calendar-weeksheader', ElementParser.withParsedCallback(EWCCalendar_weeksheader));
  }
}
catch(e) {
  if (window.customElements.get('ext-calendar-weeksheader') == undefined) {
    window.customElements.define('ext-calendar-weeksheader', EWCCalendar_weeksheader);
  }
}
