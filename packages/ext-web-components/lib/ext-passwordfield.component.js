import Ext_form_Password_Component from './Ext/form/Password'

export class ExtPasswordfieldComponent extends Ext_form_Password_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-passwordfield', ExtPasswordfieldComponent);
    });
})();
