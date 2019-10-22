import Ext_calendar_form_Add from './Ext/calendar/form/Add.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCalendar_form_add extends Ext_calendar_form_Add {
    constructor() {
        super ([],[])
        this.xtype = 'calendar-form-add';
    }
}
window.customElements.define('ext-calendar-form-add', HTMLParsedElement.withParsedCallback(ExtCalendar_form_add))
