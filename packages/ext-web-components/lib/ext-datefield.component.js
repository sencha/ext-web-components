import Ext_field_DatePicker_Component from './Ext/field/DatePicker'

export class ExtDatefieldComponent extends Ext_field_DatePicker_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-datefield', ExtDatefieldComponent);
    });
})();
