import Ext_calendar_panel_Day from './Ext/calendar/panel/Day.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCCalendar_day extends Ext_calendar_panel_Day {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-day';
  }
}
try {
  window.customElements.define('ext-calendar-day', ElementParser.withParsedCallback(EWCCalendar_day));
}
catch(e) {
  window.customElements.define('ext-calendar-day', EWCCalendar_day);
}
