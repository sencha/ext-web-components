import Ext_calendar_view_Days from './Ext/calendar/view/Days.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCalendar_daysview extends Ext_calendar_view_Days {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-daysview';
  }
}
try {
  if (window.customElements.get('ext-calendar-daysview') == undefined) {
    window.customElements.define('ext-calendar-daysview', ElementParser.withParsedCallback(EWCCalendar_daysview));
  }
}
catch(e) {
  if (window.customElements.get('ext-calendar-daysview') == undefined) {
    window.customElements.define('ext-calendar-daysview', EWCCalendar_daysview);
  }
}
