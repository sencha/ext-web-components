import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_Date from './Ext/form/Date.js';
import ElementParser from './runtime/ElementParser.js';

var EWCDatefield = /*#__PURE__*/function (_Ext_form_Date) {
  _inheritsLoose(EWCDatefield, _Ext_form_Date);

  var _super = _createSuper(EWCDatefield);

  function EWCDatefield() {
    var _this;

    _this = _Ext_form_Date.call(this, [], []) || this;
    _this.xtype = 'datefield';
    return _this;
  }

  return EWCDatefield;
}(Ext_form_Date);

export { EWCDatefield as default };

try {
  window.customElements.define('ext-datefield', ElementParser.withParsedCallback(EWCDatefield));
} catch (e) {
  window.customElements.define('ext-datefield', EWCDatefield);
}