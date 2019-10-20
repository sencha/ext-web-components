import Ext_calendar_List from './Ext/calendar/List.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCalendar_list extends Ext_calendar_List {
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
//        window.customElements.define('ext-calendar-list', ExtCalendar_list);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-list', HTMLParsedElement.withParsedCallback(ExtCalendar_list))
//export default reactify(ExtCalendar_list);