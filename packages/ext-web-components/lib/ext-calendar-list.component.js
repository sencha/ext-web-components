import Ext_calendar_List_Component from './Ext/calendar/List'

export class ExtCalendar_listComponent extends Ext_calendar_List_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-calendar-list', ExtCalendar_listComponent);
    });
})();
