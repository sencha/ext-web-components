import Ext_calendar_panel_Days from './Ext/calendar/panel/Days.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCalendar_days extends Ext_calendar_panel_Days {
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
//        window.customElements.define('ext-calendar-days', ExtCalendar_days);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-days', HTMLParsedElement.withParsedCallback(ExtCalendar_days))
//export default reactify(ExtCalendar_days);