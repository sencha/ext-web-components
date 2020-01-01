import Ext_pivot_plugin_configurator_Panel from './Ext/pivot/plugin/configurator/Panel.js';
import ElementParser from './ElementParser.js';

export default class EWCPivotconfigpanel extends Ext_pivot_plugin_configurator_Panel {
  constructor() {
    super ([], []);
    this.xtype = 'pivotconfigpanel';
  }
}
window.customElements.define('ext-pivotconfigpanel', ElementParser.withParsedCallback(EWCPivotconfigpanel));
