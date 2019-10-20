import Ext_calendar_panel_Weeks from './Ext/calendar/panel/Weeks.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCalendar_weeks extends Ext_calendar_panel_Weeks {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-weeks'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-weeks', ExtCalendar_weeks);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-weeks', HTMLParsedElement.withParsedCallback(ExtCalendar_weeks))
//export default reactify(ExtCalendar_weeks);