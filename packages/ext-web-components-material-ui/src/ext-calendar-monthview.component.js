import Ext_calendar_view_Month from './Ext/calendar/view/Month.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCalendar_monthview extends Ext_calendar_view_Month {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-monthview';
  }
}
try {
  if (window.customElements.get('ext-calendar-monthview') == undefined) {
    window.customElements.define('ext-calendar-monthview', ElementParser.withParsedCallback(EWCCalendar_monthview));
  }
}
catch(e) {
  if (window.customElements.get('ext-calendar-monthview') == undefined) {
    window.customElements.define('ext-calendar-monthview', EWCCalendar_monthview);
  }
}
