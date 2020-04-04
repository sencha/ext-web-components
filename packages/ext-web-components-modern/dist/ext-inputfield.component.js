import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_field_Input from './Ext/field/Input.js';
import ElementParser from './common/ElementParser.js';

var EWCInputfield = /*#__PURE__*/function (_Ext_field_Input) {
  _inheritsLoose(EWCInputfield, _Ext_field_Input);

  var _super = _createSuper(EWCInputfield);

  function EWCInputfield() {
    var _this;

    _this = _Ext_field_Input.call(this, [], []) || this;
    _this.xtype = 'inputfield';
    return _this;
  }

  return EWCInputfield;
}(Ext_field_Input);

export { EWCInputfield as default };

try {
  if (window.customElements.get('ext-inputfield') == undefined) {
    window.customElements.define('ext-inputfield', ElementParser.withParsedCallback(EWCInputfield));
  }
} catch (e) {
  if (window.customElements.get('ext-inputfield') == undefined) {
    window.customElements.define('ext-inputfield', EWCInputfield);
  }
}