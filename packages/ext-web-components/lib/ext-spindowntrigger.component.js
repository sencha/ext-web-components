import Ext_field_trigger_SpinDown_Component from './Ext/field/trigger/SpinDown'

export class ExtSpindowntriggerComponent extends Ext_field_trigger_SpinDown_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-spindowntrigger', ExtSpindowntriggerComponent);
    });
})();
