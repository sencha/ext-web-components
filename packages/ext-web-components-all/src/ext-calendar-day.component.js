import Ext_calendar_panel_Day from './Ext/calendar/panel/Day.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCalendar_day extends Ext_calendar_panel_Day {
    constructor() {
        super ([],[])
        this.xtype = 'calendar-day';
    }
}
window.customElements.define('ext-calendar-day', HTMLParsedElement.withParsedCallback(ExtCalendar_day))
