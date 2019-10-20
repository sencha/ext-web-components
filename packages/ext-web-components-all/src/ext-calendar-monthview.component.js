import Ext_calendar_view_Month from './Ext/calendar/view/Month.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCalendar_monthview extends Ext_calendar_view_Month {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-monthview'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-monthview', ExtCalendar_monthview);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-monthview', HTMLParsedElement.withParsedCallback(ExtCalendar_monthview))
//export default reactify(ExtCalendar_monthview);