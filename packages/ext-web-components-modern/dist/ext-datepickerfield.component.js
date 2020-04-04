import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_field_DatePicker from './Ext/field/DatePicker.js';
import ElementParser from './common/ElementParser.js';

var EWCDatepickerfield = /*#__PURE__*/function (_Ext_field_DatePicker) {
  _inheritsLoose(EWCDatepickerfield, _Ext_field_DatePicker);

  var _super = _createSuper(EWCDatepickerfield);

  function EWCDatepickerfield() {
    var _this;

    _this = _Ext_field_DatePicker.call(this, [], []) || this;
    _this.xtype = 'datepickerfield';
    return _this;
  }

  return EWCDatepickerfield;
}(Ext_field_DatePicker);

export { EWCDatepickerfield as default };

try {
  if (window.customElements.get('ext-datepickerfield') == undefined) {
    window.customElements.define('ext-datepickerfield', ElementParser.withParsedCallback(EWCDatepickerfield));
  }
} catch (e) {
  if (window.customElements.get('ext-datepickerfield') == undefined) {
    window.customElements.define('ext-datepickerfield', EWCDatepickerfield);
  }
}