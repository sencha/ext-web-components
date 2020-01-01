import Ext_calendar_view_Day from './Ext/calendar/view/Day.js';
import ElementParser from './ElementParser.js';

export default class EWCCalendar_dayview extends Ext_calendar_view_Day {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-dayview';
  }
}
window.customElements.define('ext-calendar-dayview', ElementParser.withParsedCallback(EWCCalendar_dayview));
