import Ext_pivot_plugin_configurator_Settings from './Ext/pivot/plugin/configurator/Settings.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtPivotsettingsComponent extends Ext_pivot_plugin_configurator_Settings {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pivotsettings'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotsettings', ExtPivotsettingsComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotsettings', HTMLParsedElement.withParsedCallback(ExtPivotsettingsComponent))
