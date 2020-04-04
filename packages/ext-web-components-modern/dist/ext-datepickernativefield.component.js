import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_DatePickerNative from './Ext/form/DatePickerNative.js';
import ElementParser from './common/ElementParser.js';

var EWCDatepickernativefield = /*#__PURE__*/function (_Ext_form_DatePickerN) {
  _inheritsLoose(EWCDatepickernativefield, _Ext_form_DatePickerN);

  var _super = _createSuper(EWCDatepickernativefield);

  function EWCDatepickernativefield() {
    var _this;

    _this = _Ext_form_DatePickerN.call(this, [], []) || this;
    _this.xtype = 'datepickernativefield';
    return _this;
  }

  return EWCDatepickernativefield;
}(Ext_form_DatePickerNative);

export { EWCDatepickernativefield as default };

try {
  if (window.customElements.get('ext-datepickernativefield') == undefined) {
    window.customElements.define('ext-datepickernativefield', ElementParser.withParsedCallback(EWCDatepickernativefield));
  }
} catch (e) {
  if (window.customElements.get('ext-datepickernativefield') == undefined) {
    window.customElements.define('ext-datepickernativefield', EWCDatepickernativefield);
  }
}