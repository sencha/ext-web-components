import Ext_calendar_form_Add from './Ext/calendar/form/Add.js';
import ElementParser from './common/ElementParser.js';

export default class EWCCalendar_form_add extends Ext_calendar_form_Add {
  constructor() {
    super ([], []);
    this.xtype = 'calendar-form-add';
  }
}
try {
  if (window.customElements.get('ext-calendar-form-add') == undefined) {
    window.customElements.define('ext-calendar-form-add', ElementParser.withParsedCallback(EWCCalendar_form_add));
  }
}
catch(e) {
  if (window.customElements.get('ext-calendar-form-add') == undefined) {
    window.customElements.define('ext-calendar-form-add', EWCCalendar_form_add);
  }
}
