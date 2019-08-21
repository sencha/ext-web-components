import Ext_form_Checkbox_Component from './Ext/form/Checkbox'

export class ExtCheckboxfieldComponent extends Ext_form_Checkbox_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-checkboxfield', ExtCheckboxfieldComponent);
    });
})();
