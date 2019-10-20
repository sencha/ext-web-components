import Ext_calendar_panel_Month from './Ext/calendar/panel/Month.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCalendar_month extends Ext_calendar_panel_Month {
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
//        window.customElements.define('ext-calendar-month', ExtCalendar_month);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-month', HTMLParsedElement.withParsedCallback(ExtCalendar_month))
//export default reactify(ExtCalendar_month);