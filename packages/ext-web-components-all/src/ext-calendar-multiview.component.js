import Ext_calendar_view_Multi from './Ext/calendar/view/Multi.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCalendar_multiview extends Ext_calendar_view_Multi {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-multiview'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-multiview', ExtCalendar_multiview);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-multiview', HTMLParsedElement.withParsedCallback(ExtCalendar_multiview))
//export default reactify(ExtCalendar_multiview);