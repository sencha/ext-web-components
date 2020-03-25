import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_Checkbox from './Ext/form/Checkbox.js';
import ElementParser from './runtime/ElementParser.js';

var EWCCheckboxfield = /*#__PURE__*/function (_Ext_form_Checkbox) {
  _inheritsLoose(EWCCheckboxfield, _Ext_form_Checkbox);

  var _super = _createSuper(EWCCheckboxfield);

  function EWCCheckboxfield() {
    var _this;

    _this = _Ext_form_Checkbox.call(this, [], []) || this;
    _this.xtype = 'checkboxfield';
    return _this;
  }

  return EWCCheckboxfield;
}(Ext_form_Checkbox);

export { EWCCheckboxfield as default };

try {
  window.customElements.define('ext-checkboxfield', ElementParser.withParsedCallback(EWCCheckboxfield));
} catch (e) {
  window.customElements.define('ext-checkboxfield', EWCCheckboxfield);
}