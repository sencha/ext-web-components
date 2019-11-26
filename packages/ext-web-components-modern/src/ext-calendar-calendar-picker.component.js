//import Ext_calendar_form_CalendarPicker from '@sencha/ext-runtime-base/dist/./Ext/calendar/form/CalendarPicker.js';
import Ext_calendar_form_CalendarPicker from './Ext/calendar/form/CalendarPicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCCalendar_calendar_picker extends Ext_calendar_form_CalendarPicker {
    constructor() {
        super ([], []);
        this.xtype = 'calendar-calendar-picker';
    }

}
window.customElements.define('ext-calendar-calendar-picker', HTMLParsedElement.withParsedCallback(EWCCalendar_calendar_picker));

