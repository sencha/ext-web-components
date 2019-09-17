import Ext_calendar_panel_Weeks_Component from './Ext/calendar/panel/Weeks'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCalendar_weeksComponent extends Ext_calendar_panel_Weeks_Component {
    constructor() {
        super ()
        this.xtype = 'calendar-weeks'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-weeks', ExtCalendar_weeksComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-weeks', HTMLParsedElement.withParsedCallback(ExtCalendar_weeksComponent))
