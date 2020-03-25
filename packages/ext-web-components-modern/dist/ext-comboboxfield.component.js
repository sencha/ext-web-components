import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_field_ComboBox from './Ext/form/field/ComboBox.js';
import ElementParser from './runtime/ElementParser.js';

var EWCComboboxfield = /*#__PURE__*/function (_Ext_form_field_Combo) {
  _inheritsLoose(EWCComboboxfield, _Ext_form_field_Combo);

  var _super = _createSuper(EWCComboboxfield);

  function EWCComboboxfield() {
    var _this;

    _this = _Ext_form_field_Combo.call(this, [], []) || this;
    _this.xtype = 'comboboxfield';
    return _this;
  }

  return EWCComboboxfield;
}(Ext_form_field_ComboBox);

export { EWCComboboxfield as default };

try {
  window.customElements.define('ext-comboboxfield', ElementParser.withParsedCallback(EWCComboboxfield));
} catch (e) {
  window.customElements.define('ext-comboboxfield', EWCComboboxfield);
}