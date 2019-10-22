import Ext_calendar_Event from './Ext/calendar/Event.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCalendar_event extends Ext_calendar_Event {
    constructor() {
        super ([],[])
        this.xtype = 'calendar-event';
    }
}
window.customElements.define('ext-calendar-event', HTMLParsedElement.withParsedCallback(ExtCalendar_event))
