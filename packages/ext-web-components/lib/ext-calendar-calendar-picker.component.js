import Ext_calendar_form_CalendarPicker_Component from './Ext/calendar/form/CalendarPicker'

export class ExtCalendar_calendar_pickerComponent extends Ext_calendar_form_CalendarPicker_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-calendar-calendar-picker', ExtCalendar_calendar_pickerComponent);
    });
})();
