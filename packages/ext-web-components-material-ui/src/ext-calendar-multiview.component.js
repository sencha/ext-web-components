import Ext_calendar_view_Multi from './Ext/calendar/view/Multi.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCalendar_multiview extends Ext_calendar_view_Multi {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-multiview';
  }
}
try {
  if (window.customElements.get('ext-calendar-multiview') == undefined) {
    window.customElements.define('ext-calendar-multiview', ElementParser.withParsedCallback(EWCCalendar_multiview));
  }
}
catch(e) {
  if (window.customElements.get('ext-calendar-multiview') == undefined) {
    window.customElements.define('ext-calendar-multiview', EWCCalendar_multiview);
  }
}
