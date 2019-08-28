import Ext_pivot_plugin_configurator_Container_Component from './Ext/pivot/plugin/configurator/Container'

export class ExtPivotconfigcontainerComponent extends Ext_pivot_plugin_configurator_Container_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-pivotconfigcontainer', ExtPivotconfigcontainerComponent);
    });
})();
