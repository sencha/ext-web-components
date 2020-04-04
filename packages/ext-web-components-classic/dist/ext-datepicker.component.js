import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_DatePicker from './Ext/DatePicker.js';
import ElementParser from './common/ElementParser.js';

var EWCDatepicker = /*#__PURE__*/function (_Ext_DatePicker) {
  _inheritsLoose(EWCDatepicker, _Ext_DatePicker);

  var _super = _createSuper(EWCDatepicker);

  function EWCDatepicker() {
    var _this;

    _this = _Ext_DatePicker.call(this, [], []) || this;
    _this.xtype = 'datepicker';
    return _this;
  }

  return EWCDatepicker;
}(Ext_DatePicker);

export { EWCDatepicker as default };

try {
  if (window.customElements.get('ext-datepicker') == undefined) {
    window.customElements.define('ext-datepicker', ElementParser.withParsedCallback(EWCDatepicker));
  }
} catch (e) {
  if (window.customElements.get('ext-datepicker') == undefined) {
    window.customElements.define('ext-datepicker', EWCDatepicker);
  }
}