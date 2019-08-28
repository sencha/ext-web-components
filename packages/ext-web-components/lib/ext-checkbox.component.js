import Ext_form_Checkbox_Component from './Ext/form/Checkbox'

export class ExtCheckboxComponent extends Ext_form_Checkbox_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-checkbox', ExtCheckboxComponent);
    });
})();
