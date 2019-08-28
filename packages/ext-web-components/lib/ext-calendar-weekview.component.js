import Ext_calendar_view_Week_Component from './Ext/calendar/view/Week'

export class ExtCalendar_weekviewComponent extends Ext_calendar_view_Week_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-calendar-weekview', ExtCalendar_weekviewComponent);
    });
})();
