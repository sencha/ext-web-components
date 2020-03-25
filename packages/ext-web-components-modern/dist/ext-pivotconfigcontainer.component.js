import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_pivot_plugin_configurator_Container from './Ext/pivot/plugin/configurator/Container.js';
import ElementParser from './runtime/ElementParser.js';

var EWCPivotconfigcontainer = /*#__PURE__*/function (_Ext_pivot_plugin_con) {
  _inheritsLoose(EWCPivotconfigcontainer, _Ext_pivot_plugin_con);

  var _super = _createSuper(EWCPivotconfigcontainer);

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
  window.customElements.define('ext-pivotconfigcontainer', ElementParser.withParsedCallback(EWCPivotconfigcontainer));
} catch (e) {
  window.customElements.define('ext-pivotconfigcontainer', EWCPivotconfigcontainer);
}