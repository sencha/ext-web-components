import Ext_calendar_view_Month_Component from './Ext/calendar/view/Month'

export class ExtCalendar_monthviewComponent extends Ext_calendar_view_Month_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-calendar-monthview', ExtCalendar_monthviewComponent);
    });
})();
