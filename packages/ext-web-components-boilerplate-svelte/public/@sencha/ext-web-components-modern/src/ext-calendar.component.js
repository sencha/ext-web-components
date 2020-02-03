import Ext_calendar_panel_Panel from './Ext/calendar/panel/Panel.js';
import ElementParser from './ElementParser.js';

export default class EWCCalendar extends Ext_calendar_panel_Panel {
  constructor() {
    super ([], []);
    this.xtype = 'calendar';
  }
}
try {
  window.customElements.define('ext-calendar', ElementParser.withParsedCallback(EWCCalendar));
}
catch(e) {
  window.customElements.define('ext-calendar', EWCCalendar);
}
