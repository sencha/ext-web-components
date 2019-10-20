import Ext_calendar_view_Day from './Ext/calendar/view/Day.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCalendar_dayview extends Ext_calendar_view_Day {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-dayview'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-dayview', ExtCalendar_dayview);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-dayview', HTMLParsedElement.withParsedCallback(ExtCalendar_dayview))
//export default reactify(ExtCalendar_dayview);