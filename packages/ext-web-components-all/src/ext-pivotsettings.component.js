import Ext_pivot_plugin_configurator_Settings from './Ext/pivot/plugin/configurator/Settings.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtPivotsettings extends Ext_pivot_plugin_configurator_Settings {
    constructor() {
        super ([],[])
        this.xtype = 'pivotsettings';
    }
}
window.customElements.define('ext-pivotsettings', HTMLParsedElement.withParsedCallback(ExtPivotsettings))
