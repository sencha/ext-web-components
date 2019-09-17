import Ext_calendar_view_Weeks_Component from './Ext/calendar/view/Weeks'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCalendar_weeksviewComponent extends Ext_calendar_view_Weeks_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'calendar-weeksview'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-weeksview', ExtCalendar_weeksviewComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-weeksview', HTMLParsedElement.withParsedCallback(ExtCalendar_weeksviewComponent))
