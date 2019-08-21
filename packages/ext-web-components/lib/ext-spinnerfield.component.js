import Ext_form_Spinner_Component from './Ext/form/Spinner'

export class ExtSpinnerfieldComponent extends Ext_form_Spinner_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-spinnerfield', ExtSpinnerfieldComponent);
    });
})();
