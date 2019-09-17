import Ext_calendar_form_CalendarPicker_Component from './Ext/calendar/form/CalendarPicker'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCalendar_calendar_pickerComponent extends Ext_calendar_form_CalendarPicker_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'calendar-calendar-picker'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-calendar-picker', ExtCalendar_calendar_pickerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-calendar-picker', HTMLParsedElement.withParsedCallback(ExtCalendar_calendar_pickerComponent))
