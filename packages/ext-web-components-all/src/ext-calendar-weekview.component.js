import Ext_calendar_view_Week from './Ext/calendar/view/Week.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtCalendar_weekviewComponent extends Ext_calendar_view_Week {
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
//        window.customElements.define('ext-calendar-weekview', ExtCalendar_weekviewComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-weekview', HTMLParsedElement.withParsedCallback(ExtCalendar_weekviewComponent))
