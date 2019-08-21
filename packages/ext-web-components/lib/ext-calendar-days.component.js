import Ext_calendar_panel_Days_Component from './Ext/calendar/panel/Days'

export class ExtCalendar_daysComponent extends Ext_calendar_panel_Days_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-calendar-days', ExtCalendar_daysComponent);
    });
})();
