import Ext_form_TextArea_Component from './Ext/form/TextArea'

export class ExtTextareafieldComponent extends Ext_form_TextArea_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-textareafield', ExtTextareafieldComponent);
    });
})();
