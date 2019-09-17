import Ext_calendar_view_Month_Component from './Ext/calendar/view/Month'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCalendar_monthviewComponent extends Ext_calendar_view_Month_Component {
    constructor() {
        super ()
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
