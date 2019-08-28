import Ext_field_trigger_Trigger_Component from './Ext/field/trigger/Trigger'

export class ExtTriggerComponent extends Ext_field_trigger_Trigger_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-trigger', ExtTriggerComponent);
    });
})();
