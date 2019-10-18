import Ext_calendar_panel_Days from './Ext/calendar/panel/Days.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtCalendar_daysComponent extends Ext_calendar_panel_Days {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-days'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-days', ExtCalendar_daysComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-days', HTMLParsedElement.withParsedCallback(ExtCalendar_daysComponent))
