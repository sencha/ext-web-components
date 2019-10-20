import Ext_calendar_view_Days from './Ext/calendar/view/Days.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCalendar_daysview extends Ext_calendar_view_Days {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-daysview'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-daysview', ExtCalendar_daysview);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-daysview', HTMLParsedElement.withParsedCallback(ExtCalendar_daysview))
//export default reactify(ExtCalendar_daysview);