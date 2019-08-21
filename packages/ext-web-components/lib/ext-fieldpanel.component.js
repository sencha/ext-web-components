import Ext_field_Panel_Component from './Ext/field/Panel'

export class ExtFieldpanelComponent extends Ext_field_Panel_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-fieldpanel', ExtFieldpanelComponent);
    });
})();
