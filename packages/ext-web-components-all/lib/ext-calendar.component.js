import Ext_calendar_panel_Panel_Component from './Ext/calendar/panel/Panel'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCalendarComponent extends Ext_calendar_panel_Panel_Component {
    constructor() {
        super ()
        this.xtype = 'calendar'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar', ExtCalendarComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar', HTMLParsedElement.withParsedCallback(ExtCalendarComponent))
