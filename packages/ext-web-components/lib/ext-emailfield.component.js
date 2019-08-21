import Ext_form_Email_Component from './Ext/form/Email'

export class ExtEmailfieldComponent extends Ext_form_Email_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-emailfield', ExtEmailfieldComponent);
    });
})();
