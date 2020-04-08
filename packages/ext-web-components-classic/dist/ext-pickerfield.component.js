import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Picker from './Ext/form/Picker.js';
import ElementParser from './common/ElementParser.js';

var EWCPickerfield = /*#__PURE__*/function (_Ext_form_Picker) {
  _inheritsLoose(EWCPickerfield, _Ext_form_Picker);

  function EWCPickerfield() {
    var _this;

    _this = _Ext_form_Picker.call(this, [], []) || this;
    _this.xtype = 'pickerfield';
    return _this;
  }

  return EWCPickerfield;
}(Ext_form_Picker);

export { EWCPickerfield as default };

try {
  if (window.customElements.get('ext-pickerfield') == undefined) {
    window.customElements.define('ext-pickerfield', ElementParser.withParsedCallback(EWCPickerfield));
  }
} catch (e) {
  if (window.customElements.get('ext-pickerfield') == undefined) {
    window.customElements.define('ext-pickerfield', EWCPickerfield);
  }
}