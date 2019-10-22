import Ext_calendar_panel_Weeks from './Ext/calendar/panel/Weeks.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCalendar_weeks extends Ext_calendar_panel_Weeks {
    constructor() {
        super ([],[])
        this.xtype = 'calendar-weeks';
    }
}
window.customElements.define('ext-calendar-weeks', HTMLParsedElement.withParsedCallback(ExtCalendar_weeks))
