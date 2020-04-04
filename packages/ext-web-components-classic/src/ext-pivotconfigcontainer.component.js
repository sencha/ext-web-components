import Ext_pivot_plugin_configurator_Container from './Ext/pivot/plugin/configurator/Container.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPivotconfigcontainer extends Ext_pivot_plugin_configurator_Container {
  constructor() {
    super ([], []);
    this.xtype = 'pivotconfigcontainer';
  }
}
try {
  if (window.customElements.get('ext-pivotconfigcontainer') == undefined) {
    window.customElements.define('ext-pivotconfigcontainer', ElementParser.withParsedCallback(EWCPivotconfigcontainer));
  }
}
catch(e) {
  if (window.customElements.get('ext-pivotconfigcontainer') == undefined) {
    window.customElements.define('ext-pivotconfigcontainer', EWCPivotconfigcontainer);
  }
}
