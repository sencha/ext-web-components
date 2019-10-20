import Ext_calendar_view_Weeks from './Ext/calendar/view/Weeks.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCalendar_weeksview extends Ext_calendar_view_Weeks {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-weeksview'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-weeksview', ExtCalendar_weeksview);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-weeksview', HTMLParsedElement.withParsedCallback(ExtCalendar_weeksview))
//export default reactify(ExtCalendar_weeksview);