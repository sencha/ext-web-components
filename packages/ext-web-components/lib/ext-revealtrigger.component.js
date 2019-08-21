import Ext_field_trigger_Reveal_Component from './Ext/field/trigger/Reveal'

export class ExtRevealtriggerComponent extends Ext_field_trigger_Reveal_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-revealtrigger', ExtRevealtriggerComponent);
    });
})();
