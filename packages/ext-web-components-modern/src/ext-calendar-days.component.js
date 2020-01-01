import Ext_calendar_panel_Days from './Ext/calendar/panel/Days.js';
import ElementParser from './ElementParser.js';

export default class EWCCalendar_days extends Ext_calendar_panel_Days {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-days';
  }
}
window.customElements.define('ext-calendar-days', ElementParser.withParsedCallback(EWCCalendar_days));
