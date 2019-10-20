import Ext_calendar_form_Add from './Ext/calendar/form/Add.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCalendar_form_add extends Ext_calendar_form_Add {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-form-add'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-form-add', ExtCalendar_form_add);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-form-add', HTMLParsedElement.withParsedCallback(ExtCalendar_form_add))
//export default reactify(ExtCalendar_form_add);