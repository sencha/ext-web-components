import Ext_calendar_form_CalendarPicker from './Ext/calendar/form/CalendarPicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCalendar_calendar_picker extends Ext_calendar_form_CalendarPicker {
    constructor() {
        super ([],[])
        this.xtype = 'calendar-calendar-picker';
    }
}
window.customElements.define('ext-calendar-calendar-picker', HTMLParsedElement.withParsedCallback(ExtCalendar_calendar_picker))
