import Ext_calendar_header_Weeks from './Ext/calendar/header/Weeks.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCalendar_weeksheader extends Ext_calendar_header_Weeks {
    constructor() {
        super ([],[])
        this.xtype = 'calendar-weeksheader';
    }
}
window.customElements.define('ext-calendar-weeksheader', HTMLParsedElement.withParsedCallback(ExtCalendar_weeksheader))
