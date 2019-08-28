import Ext_form_Search_Component from './Ext/form/Search'

export class ExtSearchfieldComponent extends Ext_form_Search_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-searchfield', ExtSearchfieldComponent);
    });
})();
