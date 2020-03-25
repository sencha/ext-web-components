import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_pivot_plugin_configurator_Column from './Ext/pivot/plugin/configurator/Column.js';
import ElementParser from './runtime/ElementParser.js';

var EWCPivotconfigfield = /*#__PURE__*/function (_Ext_pivot_plugin_con) {
  _inheritsLoose(EWCPivotconfigfield, _Ext_pivot_plugin_con);

  var _super = _createSuper(EWCPivotconfigfield);

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
  window.customElements.define('ext-pivotconfigfield', ElementParser.withParsedCallback(EWCPivotconfigfield));
} catch (e) {
  window.customElements.define('ext-pivotconfigfield', EWCPivotconfigfield);
}