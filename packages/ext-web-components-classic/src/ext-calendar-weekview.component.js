import Ext_calendar_view_Week from './Ext/calendar/view/Week.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCCalendar_weekview extends Ext_calendar_view_Week {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-weekview';
  }
}
try {
  window.customElements.define('ext-calendar-weekview', ElementParser.withParsedCallback(EWCCalendar_weekview));
}
catch(e) {
  window.customElements.define('ext-calendar-weekview', EWCCalendar_weekview);
}
