import Ext_calendar_panel_Month from './Ext/calendar/panel/Month.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCalendar_month extends Ext_calendar_panel_Month {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-month';
  }
}
try {
  if (window.customElements.get('ext-calendar-month') == undefined) {
    window.customElements.define('ext-calendar-month', ElementParser.withParsedCallback(EWCCalendar_month));
  }
}
catch(e) {
  if (window.customElements.get('ext-calendar-month') == undefined) {
    window.customElements.define('ext-calendar-month', EWCCalendar_month);
  }
}
