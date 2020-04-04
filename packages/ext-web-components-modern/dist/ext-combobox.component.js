import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_field_ComboBox from './Ext/form/field/ComboBox.js';
import ElementParser from './common/ElementParser.js';

var EWCCombobox = /*#__PURE__*/function (_Ext_form_field_Combo) {
  _inheritsLoose(EWCCombobox, _Ext_form_field_Combo);

  var _super = _createSuper(EWCCombobox);

  function EWCCombobox() {
    var _this;

    _this = _Ext_form_field_Combo.call(this, [], []) || this;
    _this.xtype = 'combobox';
    return _this;
  }

  return EWCCombobox;
}(Ext_form_field_ComboBox);

export { EWCCombobox as default };

try {
  if (window.customElements.get('ext-combobox') == undefined) {
    window.customElements.define('ext-combobox', ElementParser.withParsedCallback(EWCCombobox));
  }
} catch (e) {
  if (window.customElements.get('ext-combobox') == undefined) {
    window.customElements.define('ext-combobox', EWCCombobox);
  }
}