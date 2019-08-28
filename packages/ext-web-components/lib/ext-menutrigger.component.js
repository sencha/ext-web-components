import Ext_field_trigger_Menu_Component from './Ext/field/trigger/Menu'

export class ExtMenutriggerComponent extends Ext_field_trigger_Menu_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-menutrigger', ExtMenutriggerComponent);
    });
})();
