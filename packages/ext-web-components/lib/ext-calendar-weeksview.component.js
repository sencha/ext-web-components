import Ext_calendar_view_Weeks_Component from './Ext/calendar/view/Weeks'

export class ExtCalendar_weeksviewComponent extends Ext_calendar_view_Weeks_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-calendar-weeksview', ExtCalendar_weeksviewComponent);
    });
})();
