import Ext_calendar_panel_Panel from './Ext/calendar/panel/Panel.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtCalendarComponent extends Ext_calendar_panel_Panel {
    constructor() {
        super (
            [],
            []
        )
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
