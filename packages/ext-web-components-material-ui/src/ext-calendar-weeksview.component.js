import Ext_calendar_view_Weeks from './Ext/calendar/view/Weeks.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCalendar_weeksview extends Ext_calendar_view_Weeks {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-weeksview';
  }
}
try {
  if (window.customElements.get('ext-calendar-weeksview') == undefined) {
    window.customElements.define('ext-calendar-weeksview', ElementParser.withParsedCallback(EWCCalendar_weeksview));
  }
}
catch(e) {
  if (window.customElements.get('ext-calendar-weeksview') == undefined) {
    window.customElements.define('ext-calendar-weeksview', EWCCalendar_weeksview);
  }
}
