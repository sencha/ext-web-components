import Ext_form_FieldSet_Component from './Ext/form/FieldSet'

export class ExtFieldsetComponent extends Ext_form_FieldSet_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-fieldset', ExtFieldsetComponent);
    });
})();
