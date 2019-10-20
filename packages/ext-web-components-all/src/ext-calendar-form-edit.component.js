import Ext_calendar_form_Edit from './Ext/calendar/form/Edit.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCalendar_form_edit extends Ext_calendar_form_Edit {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'calendar-form-edit'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-form-edit', ExtCalendar_form_edit);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-calendar-form-edit', HTMLParsedElement.withParsedCallback(ExtCalendar_form_edit))
//export default reactify(ExtCalendar_form_edit);