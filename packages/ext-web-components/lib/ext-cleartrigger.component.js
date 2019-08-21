import Ext_field_trigger_Clear_Component from './Ext/field/trigger/Clear'

export class ExtCleartriggerComponent extends Ext_field_trigger_Clear_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-cleartrigger', ExtCleartriggerComponent);
    });
})();
