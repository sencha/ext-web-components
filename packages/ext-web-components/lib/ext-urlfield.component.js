import Ext_form_Url_Component from './Ext/form/Url'

export class ExtUrlfieldComponent extends Ext_form_Url_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-urlfield', ExtUrlfieldComponent);
    });
})();
