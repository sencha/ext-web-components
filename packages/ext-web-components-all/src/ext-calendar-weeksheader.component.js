import Ext_calendar_header_Weeks from './Ext/calendar/header/Weeks.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCalendar_weeksheader extends Ext_calendar_header_Weeks {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-weeksheader'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-weeksheader', ExtCalendar_weeksheader);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-weeksheader', HTMLParsedElement.withParsedCallback(ExtCalendar_weeksheader))
//export default reactify(ExtCalendar_weeksheader);