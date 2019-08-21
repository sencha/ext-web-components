import Ext_pivot_plugin_configurator_Column_Component from './Ext/pivot/plugin/configurator/Column'

export class ExtPivotconfigfieldComponent extends Ext_pivot_plugin_configurator_Column_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-pivotconfigfield', ExtPivotconfigfieldComponent);
    });
})();
