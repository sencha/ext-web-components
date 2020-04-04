import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_Spinner from './Ext/form/Spinner.js';
import ElementParser from './common/ElementParser.js';

var EWCSpinnerfield = /*#__PURE__*/function (_Ext_form_Spinner) {
  _inheritsLoose(EWCSpinnerfield, _Ext_form_Spinner);

  var _super = _createSuper(EWCSpinnerfield);

  function EWCSpinnerfield() {
    var _this;

    _this = _Ext_form_Spinner.call(this, [], []) || this;
    _this.xtype = 'spinnerfield';
    return _this;
  }

  return EWCSpinnerfield;
}(Ext_form_Spinner);

export { EWCSpinnerfield as default };

try {
  if (window.customElements.get('ext-spinnerfield') == undefined) {
    window.customElements.define('ext-spinnerfield', ElementParser.withParsedCallback(EWCSpinnerfield));
  }
} catch (e) {
  if (window.customElements.get('ext-spinnerfield') == undefined) {
    window.customElements.define('ext-spinnerfield', EWCSpinnerfield);
  }
}