import Ext_calendar_panel_Panel_Component from './Ext/calendar/panel/Panel'

export class ExtCalendarComponent extends Ext_calendar_panel_Panel_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-calendar', ExtCalendarComponent);
    });
})();
