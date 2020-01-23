import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_field_ComboBox from './Ext/form/field/ComboBox.js';
import ElementParser from './ElementParser.js';

var EWCComboboxfield =
/*#__PURE__*/
function (_Ext_form_field_Combo) {
  _inheritsLoose(EWCComboboxfield, _Ext_form_field_Combo);

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