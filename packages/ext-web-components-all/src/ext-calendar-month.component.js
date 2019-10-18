import Ext_calendar_panel_Month from './Ext/calendar/panel/Month.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtCalendar_monthComponent extends Ext_calendar_panel_Month {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-month'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-month', ExtCalendar_monthComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-month', HTMLParsedElement.withParsedCallback(ExtCalendar_monthComponent))
