import Ext_calendar_panel_Panel from './Ext/calendar/panel/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCalendar extends Ext_calendar_panel_Panel {
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
//        window.customElements.define('ext-calendar', ExtCalendar);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar', HTMLParsedElement.withParsedCallback(ExtCalendar))
//export default reactify(ExtCalendar);