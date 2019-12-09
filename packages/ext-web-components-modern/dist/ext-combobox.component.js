import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_form_field_ComboBox from '@sencha/ext-runtime-base/dist/./Ext/form/field/ComboBox.js';
import Ext_form_field_ComboBox from './Ext/form/field/ComboBox.js';
import ElementParser from './ElementParser.js';

var EWCCombobox =
/*#__PURE__*/
function (_Ext_form_field_Combo) {
  _inheritsLoose(EWCCombobox, _Ext_form_field_Combo);

  function EWCCombobox() {
    var _this;

    _this = _Ext_form_field_Combo.call(this, [], []) || this;
    _this.xtype = 'combobox';
    return _this;
  }

  return EWCCombobox;
}(Ext_form_field_ComboBox);

export { EWCCombobox as default };
window.customElements.define('ext-combobox', ElementParser.withParsedCallback(EWCCombobox));