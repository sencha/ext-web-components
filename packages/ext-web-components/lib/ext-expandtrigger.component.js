import Ext_field_trigger_Expand_Component from './Ext/field/trigger/Expand'

export class ExtExpandtriggerComponent extends Ext_field_trigger_Expand_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-expandtrigger', ExtExpandtriggerComponent);
    });
})();
