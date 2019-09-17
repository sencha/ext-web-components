import Ext_calendar_view_Day_Component from './Ext/calendar/view/Day'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCalendar_dayviewComponent extends Ext_calendar_view_Day_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'calendar-dayview'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-dayview', ExtCalendar_dayviewComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-dayview', HTMLParsedElement.withParsedCallback(ExtCalendar_dayviewComponent))
