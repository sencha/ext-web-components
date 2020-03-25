import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_pivot_plugin_configurator_Form from './Ext/pivot/plugin/configurator/Form.js';
import ElementParser from './runtime/ElementParser.js';

var EWCPivotconfigform = /*#__PURE__*/function (_Ext_pivot_plugin_con) {
  _inheritsLoose(EWCPivotconfigform, _Ext_pivot_plugin_con);

  var _super = _createSuper(EWCPivotconfigform);

  function EWCPivotconfigform() {
    var _this;

    _this = _Ext_pivot_plugin_con.call(this, [], []) || this;
    _this.xtype = 'pivotconfigform';
    return _this;
  }

  return EWCPivotconfigform;
}(Ext_pivot_plugin_configurator_Form);

export { EWCPivotconfigform as default };

try {
  window.customElements.define('ext-pivotconfigform', ElementParser.withParsedCallback(EWCPivotconfigform));
} catch (e) {
  window.customElements.define('ext-pivotconfigform', EWCPivotconfigform);
}