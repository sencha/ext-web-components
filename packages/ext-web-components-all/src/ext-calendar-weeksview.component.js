import Ext_calendar_view_Weeks from './Ext/calendar/view/Weeks.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtCalendar_weeksviewComponent extends Ext_calendar_view_Weeks {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-weeksview'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-weeksview', ExtCalendar_weeksviewComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-weeksview', HTMLParsedElement.withParsedCallback(ExtCalendar_weeksviewComponent))
