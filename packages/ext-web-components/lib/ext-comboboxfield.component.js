import Ext_form_field_ComboBox_Component from './Ext/form/field/ComboBox'

export class ExtComboboxfieldComponent extends Ext_form_field_ComboBox_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-comboboxfield', ExtComboboxfieldComponent);
    });
})();
