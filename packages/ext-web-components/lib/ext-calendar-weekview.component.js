import Ext_calendar_view_Week_Component from './Ext/calendar/view/Week'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCalendar_weekviewComponent extends Ext_calendar_view_Week_Component {
    constructor() {
        super (
            {},
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
