import Ext_calendar_List from './Ext/calendar/List.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCCalendar_list extends Ext_calendar_List {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-list';
  }
}
try {
  window.customElements.define('ext-calendar-list', ElementParser.withParsedCallback(EWCCalendar_list));
}
catch(e) {
  window.customElements.define('ext-calendar-list', EWCCalendar_list);
}
