import Ext_pivot_plugin_configurator_Panel from './Ext/pivot/plugin/configurator/Panel.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPivotconfigpanel extends Ext_pivot_plugin_configurator_Panel {
  constructor() {
    super ([], []);
    this.xtype = 'pivotconfigpanel';
  }
}
try {
  if (window.customElements.get('ext-pivotconfigpanel') == undefined) {
    window.customElements.define('ext-pivotconfigpanel', ElementParser.withParsedCallback(EWCPivotconfigpanel));
  }
}
catch(e) {
  if (window.customElements.get('ext-pivotconfigpanel') == undefined) {
    window.customElements.define('ext-pivotconfigpanel', EWCPivotconfigpanel);
  }
}
