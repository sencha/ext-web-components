import Ext_calendar_form_TimeField from './Ext/calendar/form/TimeField'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCalendar_timefieldComponent extends Ext_calendar_form_TimeField {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-timefield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-timefield', ExtCalendar_timefieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-timefield', HTMLParsedElement.withParsedCallback(ExtCalendar_timefieldComponent))
