import Ext_calendar_view_Days from './Ext/calendar/view/Days.js';
import ElementParser from './ElementParser.js';

export default class EWCCalendar_daysview extends Ext_calendar_view_Days {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-daysview';
  }
}
window.customElements.define('ext-calendar-daysview', ElementParser.withParsedCallback(EWCCalendar_daysview));
