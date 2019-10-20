import Ext_calendar_Event from './Ext/calendar/Event.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCalendar_event extends Ext_calendar_Event {
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
//        window.customElements.define('ext-calendar-event', ExtCalendar_event);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-event', HTMLParsedElement.withParsedCallback(ExtCalendar_event))
//export default reactify(ExtCalendar_event);