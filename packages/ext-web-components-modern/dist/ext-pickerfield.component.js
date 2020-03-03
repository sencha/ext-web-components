import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Picker from './Ext/field/Picker.js';
import ElementParser from './runtime/ElementParser.js';

var EWCPickerfield = /*#__PURE__*/function (_Ext_field_Picker) {
  _inheritsLoose(EWCPickerfield, _Ext_field_Picker);

  function EWCPickerfield() {
    var _this;

    _this = _Ext_field_Picker.call(this, [], []) || this;
    _this.xtype = 'pickerfield';
    return _this;
  }

  return EWCPickerfield;
}(Ext_field_Picker);

export { EWCPickerfield as default };

try {
  window.customElements.define('ext-pickerfield', ElementParser.withParsedCallback(EWCPickerfield));
} catch (e) {
  window.customElements.define('ext-pickerfield', EWCPickerfield);
}