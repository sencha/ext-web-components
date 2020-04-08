import Ext_calendar_form_CalendarPicker from './Ext/calendar/form/CalendarPicker.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCalendar_calendar_picker extends Ext_calendar_form_CalendarPicker {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-calendar-picker';
  }
}
try {
  if (window.customElements.get('ext-calendar-calendar-picker') == undefined) {
    window.customElements.define('ext-calendar-calendar-picker', ElementParser.withParsedCallback(EWCCalendar_calendar_picker));
  }
}
catch(e) {
  if (window.customElements.get('ext-calendar-calendar-picker') == undefined) {
    window.customElements.define('ext-calendar-calendar-picker', EWCCalendar_calendar_picker);
  }
}
