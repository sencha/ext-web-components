import Ext_calendar_panel_Week_Component from './Ext/calendar/panel/Week'

export class ExtCalendar_weekComponent extends Ext_calendar_panel_Week_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-calendar-week', ExtCalendar_weekComponent);
    });
})();
