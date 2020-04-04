import Ext_calendar_panel_Weeks from './Ext/calendar/panel/Weeks.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCalendar_weeks extends Ext_calendar_panel_Weeks {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-weeks';
  }
}
try {
  if (window.customElements.get('ext-calendar-weeks') == undefined) {
    window.customElements.define('ext-calendar-weeks', ElementParser.withParsedCallback(EWCCalendar_weeks));
  }
}
catch(e) {
  if (window.customElements.get('ext-calendar-weeks') == undefined) {
    window.customElements.define('ext-calendar-weeks', EWCCalendar_weeks);
  }
}
