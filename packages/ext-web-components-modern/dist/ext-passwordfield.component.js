import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_Password from './Ext/form/Password.js';
import ElementParser from './common/ElementParser.js';

var EWCPasswordfield = /*#__PURE__*/function (_Ext_form_Password) {
  _inheritsLoose(EWCPasswordfield, _Ext_form_Password);

  var _super = _createSuper(EWCPasswordfield);

  function EWCPasswordfield() {
    var _this;

    _this = _Ext_form_Password.call(this, [], []) || this;
    _this.xtype = 'passwordfield';
    return _this;
  }

  return EWCPasswordfield;
}(Ext_form_Password);

export { EWCPasswordfield as default };

try {
  if (window.customElements.get('ext-passwordfield') == undefined) {
    window.customElements.define('ext-passwordfield', ElementParser.withParsedCallback(EWCPasswordfield));
  }
} catch (e) {
  if (window.customElements.get('ext-passwordfield') == undefined) {
    window.customElements.define('ext-passwordfield', EWCPasswordfield);
  }
}