import Ext_form_Text_Component from './Ext/form/Text'

export class ExtTextfieldComponent extends Ext_form_Text_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-textfield', ExtTextfieldComponent);
    });
})();
