import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_configurator_Column from './Ext/pivot/plugin/configurator/Column.js';
import ElementParser from './common/ElementParser.js';

var EWCPivotconfigfield = /*#__PURE__*/function (_Ext_pivot_plugin_con) {
  _inheritsLoose(EWCPivotconfigfield, _Ext_pivot_plugin_con);

  function EWCPivotconfigfield() {
    var _this;

    _this = _Ext_pivot_plugin_con.call(this, [], []) || this;
    _this.xtype = 'pivotconfigfield';
    return _this;
  }

  return EWCPivotconfigfield;
}(Ext_pivot_plugin_configurator_Column);

export { EWCPivotconfigfield as default };

try {
  if (window.customElements.get('ext-pivotconfigfield') == undefined) {
    window.customElements.define('ext-pivotconfigfield', ElementParser.withParsedCallback(EWCPivotconfigfield));
  }
} catch (e) {
  if (window.customElements.get('ext-pivotconfigfield') == undefined) {
    window.customElements.define('ext-pivotconfigfield', EWCPivotconfigfield);
  }
}