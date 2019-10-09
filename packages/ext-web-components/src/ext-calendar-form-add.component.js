import Ext_calendar_form_Add from './Ext/calendar/form/Add'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCalendar_form_addComponent extends Ext_calendar_form_Add {
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
//        window.customElements.define('ext-calendar-form-add', ExtCalendar_form_addComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-form-add', HTMLParsedElement.withParsedCallback(ExtCalendar_form_addComponent))
