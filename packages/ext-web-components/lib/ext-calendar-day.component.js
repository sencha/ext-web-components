import Ext_calendar_panel_Day_Component from './Ext/calendar/panel/Day'

export class ExtCalendar_dayComponent extends Ext_calendar_panel_Day_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-calendar-day', ExtCalendar_dayComponent);
    });
})();
