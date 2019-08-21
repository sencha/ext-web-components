import Ext_pivot_plugin_configurator_Form_Component from './Ext/pivot/plugin/configurator/Form'

export class ExtPivotconfigformComponent extends Ext_pivot_plugin_configurator_Form_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-pivotconfigform', ExtPivotconfigformComponent);
    });
})();
