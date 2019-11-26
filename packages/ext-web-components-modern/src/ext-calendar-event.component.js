//import Ext_calendar_Event from '@sencha/ext-runtime-base/dist/./Ext/calendar/Event.js';
import Ext_calendar_Event from './Ext/calendar/Event.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCCalendar_event extends Ext_calendar_Event {
    constructor() {
        super ([], []);
        this.xtype = 'calendar-event';
    }

}
window.customElements.define('ext-calendar-event', HTMLParsedElement.withParsedCallback(EWCCalendar_event));

