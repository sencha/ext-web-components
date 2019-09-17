import Ext_pivot_plugin_configurator_Container_Component from './Ext/pivot/plugin/configurator/Container'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPivotconfigcontainerComponent extends Ext_pivot_plugin_configurator_Container_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'pivotconfigcontainer'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotconfigcontainer', ExtPivotconfigcontainerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotconfigcontainer', HTMLParsedElement.withParsedCallback(ExtPivotconfigcontainerComponent))
