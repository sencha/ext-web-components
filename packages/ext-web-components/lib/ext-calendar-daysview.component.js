import Ext_calendar_view_Days_Component from './Ext/calendar/view/Days'

export class ExtCalendar_daysviewComponent extends Ext_calendar_view_Days_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-calendar-daysview', ExtCalendar_daysviewComponent);
    });
})();
