import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_configurator_Settings from './Ext/pivot/plugin/configurator/Settings.js';
import ElementParser from './runtime/ElementParser.js';

var EWCPivotsettings =
/*#__PURE__*/
function (_Ext_pivot_plugin_con) {
  _inheritsLoose(EWCPivotsettings, _Ext_pivot_plugin_con);

  function EWCPivotsettings() {
    var _this;

    _this = _Ext_pivot_plugin_con.call(this, [], []) || this;
    _this.xtype = 'pivotsettings';
    return _this;
  }

  return EWCPivotsettings;
}(Ext_pivot_plugin_configurator_Settings);

export { EWCPivotsettings as default };

try {
  window.customElements.define('ext-pivotsettings', ElementParser.withParsedCallback(EWCPivotsettings));
} catch (e) {
  window.customElements.define('ext-pivotsettings', EWCPivotsettings);
}