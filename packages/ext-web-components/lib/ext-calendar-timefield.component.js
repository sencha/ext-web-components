import Ext_calendar_form_TimeField_Component from './Ext/calendar/form/TimeField'

export class ExtCalendar_timefieldComponent extends Ext_calendar_form_TimeField_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-calendar-timefield', ExtCalendar_timefieldComponent);
    });
})();
