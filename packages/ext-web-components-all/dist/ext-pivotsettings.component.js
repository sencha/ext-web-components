import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_configurator_Settings from './Ext/pivot/plugin/configurator/Settings.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtPivotsettings =
/*#__PURE__*/
function (_Ext_pivot_plugin_con) {
  _inheritsLoose(ExtPivotsettings, _Ext_pivot_plugin_con);

  function ExtPivotsettings() {
    var _this;

    _this = _Ext_pivot_plugin_con.call(this, [], []) || this;
    _this.xtype = 'pivotsettings';
    return _this;
  }

  return ExtPivotsettings;
}(Ext_pivot_plugin_configurator_Settings);

export { ExtPivotsettings as default };
window.customElements.define('ext-pivotsettings', HTMLParsedElement.withParsedCallback(ExtPivotsettings));