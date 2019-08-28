import Ext_calendar_view_Day_Component from './Ext/calendar/view/Day'

export class ExtCalendar_dayviewComponent extends Ext_calendar_view_Day_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-calendar-dayview', ExtCalendar_dayviewComponent);
    });
})();
