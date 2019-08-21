import Ext_form_Field_Component from './Ext/form/Field'

export class ExtFieldComponent extends Ext_form_Field_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-field', ExtFieldComponent);
    });
})();
