import Ext_calendar_panel_Days from './Ext/calendar/panel/Days.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCalendar_days extends Ext_calendar_panel_Days {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-days';
  }
}
try {
  if (window.customElements.get('ext-calendar-days') == undefined) {
    window.customElements.define('ext-calendar-days', ElementParser.withParsedCallback(EWCCalendar_days));
  }
}
catch(e) {
  if (window.customElements.get('ext-calendar-days') == undefined) {
    window.customElements.define('ext-calendar-days', EWCCalendar_days);
  }
}
