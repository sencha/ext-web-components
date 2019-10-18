import Ext_calendar_panel_Week from './Ext/calendar/panel/Week.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtCalendar_weekComponent extends Ext_calendar_panel_Week {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-week'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-week', ExtCalendar_weekComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-week', HTMLParsedElement.withParsedCallback(ExtCalendar_weekComponent))
