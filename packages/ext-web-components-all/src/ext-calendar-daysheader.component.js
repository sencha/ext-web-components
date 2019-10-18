import Ext_calendar_header_Days from './Ext/calendar/header/Days.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtCalendar_daysheaderComponent extends Ext_calendar_header_Days {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-daysheader'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-daysheader', ExtCalendar_daysheaderComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-daysheader', HTMLParsedElement.withParsedCallback(ExtCalendar_daysheaderComponent))
