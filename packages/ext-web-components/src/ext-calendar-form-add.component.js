//import Ext_calendar_form_Add from '@sencha/ext-runtime-base/dist/./Ext/calendar/form/Add.js';
import Ext_calendar_form_Add from './Ext/calendar/form/Add.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCCalendar_form_add extends Ext_calendar_form_Add {
    constructor() {
        super ([], []);
        this.xtype = 'calendar-form-add';
    }

}
window.customElements.define('ext-calendar-form-add', HTMLParsedElement.withParsedCallback(EWCCalendar_form_add));

