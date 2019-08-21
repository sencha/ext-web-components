import Ext_form_FormPanel_Component from './Ext/form/FormPanel'

export class ExtFormpanelComponent extends Ext_form_FormPanel_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-formpanel', ExtFormpanelComponent);
    });
})();
