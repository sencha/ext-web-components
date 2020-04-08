import Ext_calendar_Event from './Ext/calendar/Event.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCalendar_event extends Ext_calendar_Event {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-event';
  }
}
try {
  if (window.customElements.get('ext-calendar-event') == undefined) {
    window.customElements.define('ext-calendar-event', ElementParser.withParsedCallback(EWCCalendar_event));
  }
}
catch(e) {
  if (window.customElements.get('ext-calendar-event') == undefined) {
    window.customElements.define('ext-calendar-event', EWCCalendar_event);
  }
}
