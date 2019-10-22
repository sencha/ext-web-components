import Ext_pivot_plugin_configurator_Container from './Ext/pivot/plugin/configurator/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtPivotconfigcontainer extends Ext_pivot_plugin_configurator_Container {
    constructor() {
        super ([],[])
        this.xtype = 'pivotconfigcontainer';
    }
}
window.customElements.define('ext-pivotconfigcontainer', HTMLParsedElement.withParsedCallback(ExtPivotconfigcontainer))
