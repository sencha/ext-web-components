import Ext_calendar_panel_Day from './Ext/calendar/panel/Day.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtCalendar_dayComponent extends Ext_calendar_panel_Day {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-day'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-day', ExtCalendar_dayComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-day', HTMLParsedElement.withParsedCallback(ExtCalendar_dayComponent))
