import Ext_calendar_view_Week from './Ext/calendar/view/Week.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCalendar_weekview extends Ext_calendar_view_Week {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-weekview';
  }
}
try {
  if (window.customElements.get('ext-calendar-weekview') == undefined) {
    window.customElements.define('ext-calendar-weekview', ElementParser.withParsedCallback(EWCCalendar_weekview));
  }
}
catch(e) {
  if (window.customElements.get('ext-calendar-weekview') == undefined) {
    window.customElements.define('ext-calendar-weekview', EWCCalendar_weekview);
  }
}
