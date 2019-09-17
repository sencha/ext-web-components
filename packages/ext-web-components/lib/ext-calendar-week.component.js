import Ext_calendar_panel_Week_Component from './Ext/calendar/panel/Week'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCalendar_weekComponent extends Ext_calendar_panel_Week_Component {
    constructor() {
        super (
            {},
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
