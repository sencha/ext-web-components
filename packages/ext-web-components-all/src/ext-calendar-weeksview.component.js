import Ext_calendar_view_Weeks from './Ext/calendar/view/Weeks.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCalendar_weeksview extends Ext_calendar_view_Weeks {
    constructor() {
        super ([],[])
        this.xtype = 'calendar-weeksview';
    }
}
window.customElements.define('ext-calendar-weeksview', HTMLParsedElement.withParsedCallback(ExtCalendar_weeksview))
