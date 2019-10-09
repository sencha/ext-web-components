import Ext_calendar_List from './Ext/calendar/List'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCalendar_listComponent extends Ext_calendar_List {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-list'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-list', ExtCalendar_listComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-list', HTMLParsedElement.withParsedCallback(ExtCalendar_listComponent))
