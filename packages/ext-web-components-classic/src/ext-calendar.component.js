import Ext_calendar_panel_Panel from './Ext/calendar/panel/Panel.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCalendar extends Ext_calendar_panel_Panel {
  constructor() {
    super ([], []);
    this.xtype = 'calendar';
  }
}
try {
  if (window.customElements.get('ext-calendar') == undefined) {
    window.customElements.define('ext-calendar', ElementParser.withParsedCallback(EWCCalendar));
  }
}
catch(e) {
  if (window.customElements.get('ext-calendar') == undefined) {
    window.customElements.define('ext-calendar', EWCCalendar);
  }
}
