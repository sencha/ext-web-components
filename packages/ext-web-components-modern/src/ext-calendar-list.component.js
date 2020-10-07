import Ext_calendar_List from './Ext/calendar/List.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCalendar_list extends Ext_calendar_List {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-list';
  }
}
try {
  if (window.customElements.get('ext-calendar-list') == undefined) {
    window.customElements.define('ext-calendar-list', ElementParser.withParsedCallback(EWCCalendar_list));
  }
}
catch(e) {
  if (window.customElements.get('ext-calendar-list') == undefined) {
    window.customElements.define('ext-calendar-list', EWCCalendar_list);
  }
}
