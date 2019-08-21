import Ext_field_trigger_Date_Component from './Ext/field/trigger/Date'

export class ExtDatetriggerComponent extends Ext_field_trigger_Date_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-datetrigger', ExtDatetriggerComponent);
    });
})();
