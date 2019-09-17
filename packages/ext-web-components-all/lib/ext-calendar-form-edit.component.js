import Ext_calendar_form_Edit_Component from './Ext/calendar/form/Edit'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCalendar_form_editComponent extends Ext_calendar_form_Edit_Component {
    constructor() {
        super ()
        this.xtype = 'calendar-form-edit'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-form-edit', ExtCalendar_form_editComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-form-edit', HTMLParsedElement.withParsedCallback(ExtCalendar_form_editComponent))
