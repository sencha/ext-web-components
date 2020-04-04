import Ext_calendar_panel_Week from './Ext/calendar/panel/Week.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCalendar_week extends Ext_calendar_panel_Week {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-week';
  }
}
try {
  if (window.customElements.get('ext-calendar-week') == undefined) {
    window.customElements.define('ext-calendar-week', ElementParser.withParsedCallback(EWCCalendar_week));
  }
}
catch(e) {
  if (window.customElements.get('ext-calendar-week') == undefined) {
    window.customElements.define('ext-calendar-week', EWCCalendar_week);
  }
}
