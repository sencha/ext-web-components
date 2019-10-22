import Ext_calendar_panel_Week from './Ext/calendar/panel/Week.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCalendar_week extends Ext_calendar_panel_Week {
    constructor() {
        super ([],[])
        this.xtype = 'calendar-week';
    }
}
window.customElements.define('ext-calendar-week', HTMLParsedElement.withParsedCallback(ExtCalendar_week))
