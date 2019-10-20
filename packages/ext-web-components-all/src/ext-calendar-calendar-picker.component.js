import Ext_calendar_form_CalendarPicker from './Ext/calendar/form/CalendarPicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCalendar_calendar_picker extends Ext_calendar_form_CalendarPicker {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-calendar-picker'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-calendar-picker', ExtCalendar_calendar_picker);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-calendar-picker', HTMLParsedElement.withParsedCallback(ExtCalendar_calendar_picker))
//export default reactify(ExtCalendar_calendar_picker);