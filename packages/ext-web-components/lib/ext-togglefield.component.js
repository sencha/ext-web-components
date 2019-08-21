import Ext_form_Toggle_Component from './Ext/form/Toggle'

export class ExtTogglefieldComponent extends Ext_form_Toggle_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-togglefield', ExtTogglefieldComponent);
    });
})();
