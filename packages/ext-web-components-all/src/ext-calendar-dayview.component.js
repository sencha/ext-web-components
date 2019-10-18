import Ext_calendar_view_Day from './Ext/calendar/view/Day.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtCalendar_dayviewComponent extends Ext_calendar_view_Day {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-dayview'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-dayview', ExtCalendar_dayviewComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-dayview', HTMLParsedElement.withParsedCallback(ExtCalendar_dayviewComponent))
