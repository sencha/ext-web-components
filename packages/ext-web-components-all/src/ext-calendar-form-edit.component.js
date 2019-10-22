import Ext_calendar_form_Edit from './Ext/calendar/form/Edit.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCalendar_form_edit extends Ext_calendar_form_Edit {
    constructor() {
        super ([],[])
        this.xtype = 'calendar-form-edit';
    }
}
window.customElements.define('ext-calendar-form-edit', HTMLParsedElement.withParsedCallback(ExtCalendar_form_edit))
