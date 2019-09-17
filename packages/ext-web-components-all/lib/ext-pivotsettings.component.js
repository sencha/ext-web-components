import Ext_pivot_plugin_configurator_Settings_Component from './Ext/pivot/plugin/configurator/Settings'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPivotsettingsComponent extends Ext_pivot_plugin_configurator_Settings_Component {
    constructor() {
        super ()
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
