import Ext_calendar_view_Week from './Ext/calendar/view/Week.js';
import ElementParser from './ElementParser.js';

export default class EWCCalendar_weekview extends Ext_calendar_view_Week {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-weekview';
  }
}
window.customElements.define('ext-calendar-weekview', ElementParser.withParsedCallback(EWCCalendar_weekview));
