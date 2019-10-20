import Ext_calendar_panel_Week from './Ext/calendar/panel/Week.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCalendar_week extends Ext_calendar_panel_Week {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-week'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-week', ExtCalendar_week);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-week', HTMLParsedElement.withParsedCallback(ExtCalendar_week))
//export default reactify(ExtCalendar_week);