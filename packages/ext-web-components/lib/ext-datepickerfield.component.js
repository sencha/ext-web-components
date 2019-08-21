import Ext_field_DatePicker_Component from './Ext/field/DatePicker'

export class ExtDatepickerfieldComponent extends Ext_field_DatePicker_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-datepickerfield', ExtDatepickerfieldComponent);
    });
})();
