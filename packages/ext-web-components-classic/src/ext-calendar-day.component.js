import Ext_calendar_panel_Day from './Ext/calendar/panel/Day.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCalendar_day extends Ext_calendar_panel_Day {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-day';
  }
}
try {
  if (window.customElements.get('ext-calendar-day') == undefined) {
    window.customElements.define('ext-calendar-day', ElementParser.withParsedCallback(EWCCalendar_day));
  }
}
catch(e) {
  if (window.customElements.get('ext-calendar-day') == undefined) {
    window.customElements.define('ext-calendar-day', EWCCalendar_day);
  }
}
