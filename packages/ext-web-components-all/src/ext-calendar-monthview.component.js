import Ext_calendar_view_Month from './Ext/calendar/view/Month.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtCalendar_monthviewComponent extends Ext_calendar_view_Month {
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
//        window.customElements.define('ext-calendar-monthview', ExtCalendar_monthviewComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-monthview', HTMLParsedElement.withParsedCallback(ExtCalendar_monthviewComponent))
