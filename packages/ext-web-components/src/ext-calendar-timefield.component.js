//import Ext_calendar_form_TimeField from '@sencha/ext-runtime-base/dist/./Ext/calendar/form/TimeField.js';
import Ext_calendar_form_TimeField from './Ext/calendar/form/TimeField.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCCalendar_timefield extends Ext_calendar_form_TimeField {
    constructor() {
        super ([], []);
        this.xtype = 'calendar-timefield';
    }

}
window.customElements.define('ext-calendar-timefield', HTMLParsedElement.withParsedCallback(EWCCalendar_timefield));

