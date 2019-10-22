import Ext_pivot_plugin_configurator_Panel from './Ext/pivot/plugin/configurator/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtPivotconfigpanel extends Ext_pivot_plugin_configurator_Panel {
    constructor() {
        super ([],[])
        this.xtype = 'pivotconfigpanel';
    }
}
window.customElements.define('ext-pivotconfigpanel', HTMLParsedElement.withParsedCallback(ExtPivotconfigpanel))
