import Ext_form_Number_Component from './Ext/form/Number'

export class ExtNumberfieldComponent extends Ext_form_Number_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-numberfield', ExtNumberfieldComponent);
    });
})();
