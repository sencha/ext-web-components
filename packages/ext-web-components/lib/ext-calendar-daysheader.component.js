import Ext_calendar_header_Days_Component from './Ext/calendar/header/Days'

export class ExtCalendar_daysheaderComponent extends Ext_calendar_header_Days_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-calendar-daysheader', ExtCalendar_daysheaderComponent);
    });
})();
