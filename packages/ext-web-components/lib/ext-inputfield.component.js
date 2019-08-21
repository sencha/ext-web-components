import Ext_field_Input_Component from './Ext/field/Input'

export class ExtInputfieldComponent extends Ext_field_Input_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-inputfield', ExtInputfieldComponent);
    });
})();
