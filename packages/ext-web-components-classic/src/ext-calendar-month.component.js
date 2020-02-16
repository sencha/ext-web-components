import Ext_calendar_panel_Month from './Ext/calendar/panel/Month.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCCalendar_month extends Ext_calendar_panel_Month {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-month';
  }
}
try {
  window.customElements.define('ext-calendar-month', ElementParser.withParsedCallback(EWCCalendar_month));
}
catch(e) {
  window.customElements.define('ext-calendar-month', EWCCalendar_month);
}
