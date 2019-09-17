import Ext_calendar_Event_Component from './Ext/calendar/Event'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCalendar_eventComponent extends Ext_calendar_Event_Component {
    constructor() {
        super (
            {},
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
