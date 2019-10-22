import Ext_calendar_view_Days from './Ext/calendar/view/Days.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCalendar_daysview extends Ext_calendar_view_Days {
    constructor() {
        super ([],[])
        this.xtype = 'calendar-daysview';
    }
}
window.customElements.define('ext-calendar-daysview', HTMLParsedElement.withParsedCallback(ExtCalendar_daysview))
