import Ext_calendar_view_Week from './Ext/calendar/view/Week.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCalendar_weekview extends Ext_calendar_view_Week {
    constructor() {
        super ([],[])
        this.xtype = 'calendar-weekview';
    }
}
window.customElements.define('ext-calendar-weekview', HTMLParsedElement.withParsedCallback(ExtCalendar_weekview))
