import Ext_calendar_panel_Days from './Ext/calendar/panel/Days.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCalendar_days extends Ext_calendar_panel_Days {
    constructor() {
        super ([],[])
        this.xtype = 'calendar-days';
    }
}
window.customElements.define('ext-calendar-days', HTMLParsedElement.withParsedCallback(ExtCalendar_days))
