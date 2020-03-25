import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_MonthPicker from './Ext/MonthPicker.js';
import ElementParser from './runtime/ElementParser.js';

var EWCMonthpicker = /*#__PURE__*/function (_Ext_MonthPicker) {
  _inheritsLoose(EWCMonthpicker, _Ext_MonthPicker);

  var _super = _createSuper(EWCMonthpicker);

  function EWCMonthpicker() {
    var _this;

    _this = _Ext_MonthPicker.call(this, [], []) || this;
    _this.xtype = 'monthpicker';
    return _this;
  }

  return EWCMonthpicker;
}(Ext_MonthPicker);

export { EWCMonthpicker as default };

try {
  window.customElements.define('ext-monthpicker', ElementParser.withParsedCallback(EWCMonthpicker));
} catch (e) {
  window.customElements.define('ext-monthpicker', EWCMonthpicker);
}