import Ext_calendar_Event_Component from './Ext/calendar/Event'

export class ExtCalendar_eventComponent extends Ext_calendar_Event_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-calendar-event', ExtCalendar_eventComponent);
    });
})();
