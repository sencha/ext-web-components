import Ext_calendar_header_Days from './Ext/calendar/header/Days.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCalendar_daysheader extends Ext_calendar_header_Days {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-daysheader';
  }
}
try {
  if (window.customElements.get('ext-calendar-daysheader') == undefined) {
    window.customElements.define('ext-calendar-daysheader', ElementParser.withParsedCallback(EWCCalendar_daysheader));
  }
}
catch(e) {
  if (window.customElements.get('ext-calendar-daysheader') == undefined) {
    window.customElements.define('ext-calendar-daysheader', EWCCalendar_daysheader);
  }
}
