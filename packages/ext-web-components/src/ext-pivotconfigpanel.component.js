//import Ext_pivot_plugin_configurator_Panel from '@sencha/ext-runtime-base/dist/./Ext/pivot/plugin/configurator/Panel.js';
import Ext_pivot_plugin_configurator_Panel from './Ext/pivot/plugin/configurator/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCPivotconfigpanel extends Ext_pivot_plugin_configurator_Panel {
    constructor() {
        super ([], []);
        this.xtype = 'pivotconfigpanel';
    }

}
window.customElements.define('ext-pivotconfigpanel', HTMLParsedElement.withParsedCallback(EWCPivotconfigpanel));

