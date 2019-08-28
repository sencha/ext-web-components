import Ext_pivot_plugin_configurator_Panel_Component from './Ext/pivot/plugin/configurator/Panel'

export class ExtPivotconfigpanelComponent extends Ext_pivot_plugin_configurator_Panel_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-pivotconfigpanel', ExtPivotconfigpanelComponent);
    });
})();
