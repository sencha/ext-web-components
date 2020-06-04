import Ext_pivot_plugin_configurator_Settings from './Ext/pivot/plugin/configurator/Settings.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPivotsettings extends Ext_pivot_plugin_configurator_Settings {
  constructor() {
    super ([], []);
    this.xtype = 'pivotsettings';
  }
}
try {
  if (window.customElements.get('ext-pivotsettings') == undefined) {
    window.customElements.define('ext-pivotsettings', ElementParser.withParsedCallback(EWCPivotsettings));
  }
}
catch(e) {
  if (window.customElements.get('ext-pivotsettings') == undefined) {
    window.customElements.define('ext-pivotsettings', EWCPivotsettings);
  }
}
