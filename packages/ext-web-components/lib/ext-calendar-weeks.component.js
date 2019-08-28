import Ext_calendar_panel_Weeks_Component from './Ext/calendar/panel/Weeks'

export class ExtCalendar_weeksComponent extends Ext_calendar_panel_Weeks_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-calendar-weeks', ExtCalendar_weeksComponent);
    });
})();
