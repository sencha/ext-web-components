import Ext_calendar_header_Weeks from './Ext/calendar/header/Weeks.js';
import ElementParser from './ElementParser.js';

export default class EWCCalendar_weeksheader extends Ext_calendar_header_Weeks {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-weeksheader';
  }
}
window.customElements.define('ext-calendar-weeksheader', ElementParser.withParsedCallback(EWCCalendar_weeksheader));
