import Ext_calendar_header_Weeks_Component from './Ext/calendar/header/Weeks'

export class ExtCalendar_weeksheaderComponent extends Ext_calendar_header_Weeks_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-calendar-weeksheader', ExtCalendar_weeksheaderComponent);
    });
})();
