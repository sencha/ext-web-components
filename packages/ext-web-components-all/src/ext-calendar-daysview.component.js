import Ext_calendar_view_Days from './Ext/calendar/view/Days.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtCalendar_daysviewComponent extends Ext_calendar_view_Days {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-daysview'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-daysview', ExtCalendar_daysviewComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-daysview', HTMLParsedElement.withParsedCallback(ExtCalendar_daysviewComponent))
