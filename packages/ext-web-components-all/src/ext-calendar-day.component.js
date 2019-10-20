import Ext_calendar_panel_Day from './Ext/calendar/panel/Day.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCalendar_day extends Ext_calendar_panel_Day {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-day'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-day', ExtCalendar_day);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-day', HTMLParsedElement.withParsedCallback(ExtCalendar_day))
//export default reactify(ExtCalendar_day);