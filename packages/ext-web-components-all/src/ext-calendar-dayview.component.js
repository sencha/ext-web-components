import Ext_calendar_view_Day from './Ext/calendar/view/Day.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCalendar_dayview extends Ext_calendar_view_Day {
    constructor() {
        super ([],[])
        this.xtype = 'calendar-dayview';
    }
}
window.customElements.define('ext-calendar-dayview', HTMLParsedElement.withParsedCallback(ExtCalendar_dayview))
