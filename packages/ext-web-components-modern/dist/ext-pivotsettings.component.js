import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_pivot_plugin_configurator_Settings from '@sencha/ext-runtime-base/dist/./Ext/pivot/plugin/configurator/Settings.js';
import Ext_pivot_plugin_configurator_Settings from './Ext/pivot/plugin/configurator/Settings.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-pivotsettings', HTMLParsedElement.withParsedCallback(EWCPivotsettings));