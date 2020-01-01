import Ext_pivot_plugin_configurator_Container from './Ext/pivot/plugin/configurator/Container.js';
import ElementParser from './ElementParser.js';

export default class EWCPivotconfigcontainer extends Ext_pivot_plugin_configurator_Container {
  constructor() {
    super ([], []);
    this.xtype = 'pivotconfigcontainer';
  }
}
window.customElements.define('ext-pivotconfigcontainer', ElementParser.withParsedCallback(EWCPivotconfigcontainer));
