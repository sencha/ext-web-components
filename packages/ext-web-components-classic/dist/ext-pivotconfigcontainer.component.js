import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_configurator_Container from './Ext/pivot/plugin/configurator/Container.js';
import ElementParser from './common/ElementParser.js';

var EWCPivotconfigcontainer = /*#__PURE__*/function (_Ext_pivot_plugin_con) {
  _inheritsLoose(EWCPivotconfigcontainer, _Ext_pivot_plugin_con);

  function EWCPivotconfigcontainer() {
    var _this;

    _this = _Ext_pivot_plugin_con.call(this, [], []) || this;
    _this.xtype = 'pivotconfigcontainer';
    return _this;
  }

  return EWCPivotconfigcontainer;
}(Ext_pivot_plugin_configurator_Container);

export { EWCPivotconfigcontainer as default };

try {
  if (window.customElements.get('ext-pivotconfigcontainer') == undefined) {
    window.customElements.define('ext-pivotconfigcontainer', ElementParser.withParsedCallback(EWCPivotconfigcontainer));
  }
} catch (e) {
  if (window.customElements.get('ext-pivotconfigcontainer') == undefined) {
    window.customElements.define('ext-pivotconfigcontainer', EWCPivotconfigcontainer);
  }
}