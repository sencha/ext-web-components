import Ext_calendar_panel_Day from './Ext/calendar/panel/Day.js';
import ElementParser from './ElementParser.js';

export default class EWCCalendar_day extends Ext_calendar_panel_Day {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-day';
  }
}
window.customElements.define('ext-calendar-day', ElementParser.withParsedCallback(EWCCalendar_day));
