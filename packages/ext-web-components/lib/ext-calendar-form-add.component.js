import Ext_calendar_form_Add_Component from './Ext/calendar/form/Add'

export class ExtCalendar_form_addComponent extends Ext_calendar_form_Add_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-calendar-form-add', ExtCalendar_form_addComponent);
    });
})();
