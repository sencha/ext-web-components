import Ext_pivot_plugin_configurator_Panel from './Ext/pivot/plugin/configurator/Panel'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPivotconfigpanelComponent extends Ext_pivot_plugin_configurator_Panel {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pivotconfigpanel'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotconfigpanel', ExtPivotconfigpanelComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotconfigpanel', HTMLParsedElement.withParsedCallback(ExtPivotconfigpanelComponent))
