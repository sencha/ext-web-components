import Ext_calendar_header_Weeks from './Ext/calendar/header/Weeks'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCalendar_weeksheaderComponent extends Ext_calendar_header_Weeks {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-weeksheader'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-weeksheader', ExtCalendar_weeksheaderComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-weeksheader', HTMLParsedElement.withParsedCallback(ExtCalendar_weeksheaderComponent))
