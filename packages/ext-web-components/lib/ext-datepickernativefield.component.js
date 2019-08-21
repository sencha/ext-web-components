import Ext_form_DatePickerNative_Component from './Ext/form/DatePickerNative'

export class ExtDatepickernativefieldComponent extends Ext_form_DatePickerNative_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-datepickernativefield', ExtDatepickernativefieldComponent);
    });
})();
