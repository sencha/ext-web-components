import Ext_calendar_view_Month from './Ext/calendar/view/Month.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCalendar_monthview extends Ext_calendar_view_Month {
    constructor() {
        super ([],[])
        this.xtype = 'calendar-monthview';
    }
}
window.customElements.define('ext-calendar-monthview', HTMLParsedElement.withParsedCallback(ExtCalendar_monthview))
