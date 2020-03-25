import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_TreePicker from './Ext/ux/TreePicker.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTreepicker = /*#__PURE__*/function (_Ext_ux_TreePicker) {
  _inheritsLoose(EWCTreepicker, _Ext_ux_TreePicker);

  var _super = _createSuper(EWCTreepicker);

  function EWCTreepicker() {
    var _this;

    _this = _Ext_ux_TreePicker.call(this, [], []) || this;
    _this.xtype = 'treepicker';
    return _this;
  }

  return EWCTreepicker;
}(Ext_ux_TreePicker);

export { EWCTreepicker as default };

try {
  window.customElements.define('ext-treepicker', ElementParser.withParsedCallback(EWCTreepicker));
} catch (e) {
  window.customElements.define('ext-treepicker', EWCTreepicker);
}