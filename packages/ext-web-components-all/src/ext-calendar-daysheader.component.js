import Ext_calendar_header_Days from './Ext/calendar/header/Days.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCalendar_daysheader extends Ext_calendar_header_Days {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-daysheader'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-daysheader', ExtCalendar_daysheader);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-daysheader', HTMLParsedElement.withParsedCallback(ExtCalendar_daysheader))
//export default reactify(ExtCalendar_daysheader);