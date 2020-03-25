import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_pivot_plugin_rangeeditor_Panel from './Ext/pivot/plugin/rangeeditor/Panel.js';
import ElementParser from './runtime/ElementParser.js';

var EWCPivotrangeeditor = /*#__PURE__*/function (_Ext_pivot_plugin_ran) {
  _inheritsLoose(EWCPivotrangeeditor, _Ext_pivot_plugin_ran);

  var _super = _createSuper(EWCPivotrangeeditor);

  function EWCPivotrangeeditor() {
    var _this;

    _this = _Ext_pivot_plugin_ran.call(this, [], []) || this;
    _this.xtype = 'pivotrangeeditor';
    return _this;
  }

  return EWCPivotrangeeditor;
}(Ext_pivot_plugin_rangeeditor_Panel);

export { EWCPivotrangeeditor as default };

try {
  window.customElements.define('ext-pivotrangeeditor', ElementParser.withParsedCallback(EWCPivotrangeeditor));
} catch (e) {
  window.customElements.define('ext-pivotrangeeditor', EWCPivotrangeeditor);
}