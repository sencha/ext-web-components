import Ext_calendar_Event from './Ext/calendar/Event.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtCalendar_eventComponent extends Ext_calendar_Event {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-event'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-event', ExtCalendar_eventComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-event', HTMLParsedElement.withParsedCallback(ExtCalendar_eventComponent))
