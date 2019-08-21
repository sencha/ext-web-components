import Ext_calendar_panel_Month_Component from './Ext/calendar/panel/Month'

export class ExtCalendar_monthComponent extends Ext_calendar_panel_Month_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-calendar-month', ExtCalendar_monthComponent);
    });
})();
