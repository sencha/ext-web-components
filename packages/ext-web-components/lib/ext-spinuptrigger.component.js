import Ext_field_trigger_SpinUp_Component from './Ext/field/trigger/SpinUp'

export class ExtSpinuptriggerComponent extends Ext_field_trigger_SpinUp_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-spinuptrigger', ExtSpinuptriggerComponent);
    });
})();
