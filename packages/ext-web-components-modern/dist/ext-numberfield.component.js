import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_Number from './Ext/form/Number.js';
import ElementParser from './runtime/ElementParser.js';

var EWCNumberfield = /*#__PURE__*/function (_Ext_form_Number) {
  _inheritsLoose(EWCNumberfield, _Ext_form_Number);

  var _super = _createSuper(EWCNumberfield);

  function EWCNumberfield() {
    var _this;

    _this = _Ext_form_Number.call(this, [], []) || this;
    _this.xtype = 'numberfield';
    return _this;
  }

  return EWCNumberfield;
}(Ext_form_Number);

export { EWCNumberfield as default };

try {
  window.customElements.define('ext-numberfield', ElementParser.withParsedCallback(EWCNumberfield));
} catch (e) {
  window.customElements.define('ext-numberfield', EWCNumberfield);
}