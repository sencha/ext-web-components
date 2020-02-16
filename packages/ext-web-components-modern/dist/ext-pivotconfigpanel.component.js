import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_configurator_Panel from './Ext/pivot/plugin/configurator/Panel.js';
import ElementParser from './runtime/ElementParser.js';

var EWCPivotconfigpanel =
/*#__PURE__*/
function (_Ext_pivot_plugin_con) {
  _inheritsLoose(EWCPivotconfigpanel, _Ext_pivot_plugin_con);

  function EWCPivotconfigpanel() {
    var _this;

    _this = _Ext_pivot_plugin_con.call(this, [], []) || this;
    _this.xtype = 'pivotconfigpanel';
    return _this;
  }

  return EWCPivotconfigpanel;
}(Ext_pivot_plugin_configurator_Panel);

export { EWCPivotconfigpanel as default };

try {
  window.customElements.define('ext-pivotconfigpanel', ElementParser.withParsedCallback(EWCPivotconfigpanel));
} catch (e) {
  window.customElements.define('ext-pivotconfigpanel', EWCPivotconfigpanel);
}