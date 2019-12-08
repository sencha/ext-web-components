//import Ext_calendar_form_Edit from '@sencha/ext-runtime-base/dist/./Ext/calendar/form/Edit.js';
import Ext_calendar_form_Edit from './Ext/calendar/form/Edit.js';
import ElementParser from './ElementParser.js';

export default class EWCCalendar_form_edit extends Ext_calendar_form_Edit {
    constructor() {
        super ([], []);
        this.xtype = 'calendar-form-edit';
    }

}
window.customElements.define('ext-calendar-form-edit', ElementParser.withParsedCallback(EWCCalendar_form_edit));

