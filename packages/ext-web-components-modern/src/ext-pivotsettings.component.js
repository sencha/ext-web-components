import Ext_pivot_plugin_configurator_Settings from './Ext/pivot/plugin/configurator/Settings.js';
import ElementParser from './ElementParser.js';

export default class EWCPivotsettings extends Ext_pivot_plugin_configurator_Settings {
  constructor() {
    super ([], []);
    this.xtype = 'pivotsettings';
  }
}
try {
  window.customElements.define('ext-pivotsettings', ElementParser.withParsedCallback(EWCPivotsettings));
}
catch(e) {
  window.customElements.define('ext-pivotsettings', EWCPivotsettings);
}
