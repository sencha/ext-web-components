import Ext_calendar_view_Days_Component from './Ext/calendar/view/Days'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCalendar_daysviewComponent extends Ext_calendar_view_Days_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'calendar-daysview'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-daysview', ExtCalendar_daysviewComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-daysview', HTMLParsedElement.withParsedCallback(ExtCalendar_daysviewComponent))
