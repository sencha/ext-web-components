import Ext_calendar_view_Multi_Component from './Ext/calendar/view/Multi'

export class ExtCalendar_multiviewComponent extends Ext_calendar_view_Multi_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-calendar-multiview', ExtCalendar_multiviewComponent);
    });
})();
