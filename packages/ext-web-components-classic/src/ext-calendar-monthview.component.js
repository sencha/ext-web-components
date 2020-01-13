import Ext_calendar_view_Month from './Ext/calendar/view/Month.js';
import ElementParser from './ElementParser.js';

export default class EWCCalendar_monthview extends Ext_calendar_view_Month {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-monthview';
  }
}
window.customElements.define('ext-calendar-monthview', ElementParser.withParsedCallback(EWCCalendar_monthview));
