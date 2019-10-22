import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_configurator_Column from './Ext/pivot/plugin/configurator/Column.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtPivotconfigfield =
/*#__PURE__*/
function (_Ext_pivot_plugin_con) {
  _inheritsLoose(ExtPivotconfigfield, _Ext_pivot_plugin_con);

  function ExtPivotconfigfield() {
    var _this;

    _this = _Ext_pivot_plugin_con.call(this, [], []) || this;
    _this.xtype = 'pivotconfigfield';
    return _this;
  }

  return ExtPivotconfigfield;
}(Ext_pivot_plugin_configurator_Column);

export { ExtPivotconfigfield as default };
window.customElements.define('ext-pivotconfigfield', HTMLParsedElement.withParsedCallback(ExtPivotconfigfield));