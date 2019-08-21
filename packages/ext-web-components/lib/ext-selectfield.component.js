import Ext_form_Select_Component from './Ext/form/Select'

export class ExtSelectfieldComponent extends Ext_form_Select_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-selectfield', ExtSelectfieldComponent);
    });
})();
