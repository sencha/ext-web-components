import Ext_calendar_view_Multi_Component from './Ext/calendar/view/Multi'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCalendar_multiviewComponent extends Ext_calendar_view_Multi_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'calendar-multiview'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-multiview', ExtCalendar_multiviewComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-multiview', HTMLParsedElement.withParsedCallback(ExtCalendar_multiviewComponent))
