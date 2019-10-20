import Ext_calendar_view_Week from './Ext/calendar/view/Week.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCalendar_weekview extends Ext_calendar_view_Week {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-weekview'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-weekview', ExtCalendar_weekview);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-weekview', HTMLParsedElement.withParsedCallback(ExtCalendar_weekview))
//export default reactify(ExtCalendar_weekview);