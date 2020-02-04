import Ext_calendar_view_Weeks from './Ext/calendar/view/Weeks.js';
import ElementParser from './ElementParser.js';

export default class EWCCalendar_weeksview extends Ext_calendar_view_Weeks {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-weeksview';
  }
}
try {
  window.customElements.define('ext-calendar-weeksview', ElementParser.withParsedCallback(EWCCalendar_weeksview));
}
catch(e) {
  window.customElements.define('ext-calendar-weeksview', EWCCalendar_weeksview);
}
