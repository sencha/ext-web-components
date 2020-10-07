import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_configurator_Panel from './Ext/pivot/plugin/configurator/Panel.js';
import ElementParser from './common/ElementParser.js';

var EWCPivotconfigpanel = /*#__PURE__*/function (_Ext_pivot_plugin_con) {
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
  if (window.customElements.get('ext-pivotconfigpanel') == undefined) {
    window.customElements.define('ext-pivotconfigpanel', ElementParser.withParsedCallback(EWCPivotconfigpanel));
  }
} catch (e) {
  if (window.customElements.get('ext-pivotconfigpanel') == undefined) {
    window.customElements.define('ext-pivotconfigpanel', EWCPivotconfigpanel);
  }
}