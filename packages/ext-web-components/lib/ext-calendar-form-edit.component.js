import Ext_calendar_form_Edit_Component from './Ext/calendar/form/Edit'

export class ExtCalendar_form_editComponent extends Ext_calendar_form_Edit_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-calendar-form-edit', ExtCalendar_form_editComponent);
    });
})();
