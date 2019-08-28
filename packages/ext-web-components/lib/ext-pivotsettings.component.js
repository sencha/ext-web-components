import Ext_pivot_plugin_configurator_Settings_Component from './Ext/pivot/plugin/configurator/Settings'

export class ExtPivotsettingsComponent extends Ext_pivot_plugin_configurator_Settings_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-pivotsettings', ExtPivotsettingsComponent);
    });
})();
