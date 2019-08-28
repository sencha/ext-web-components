import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_field_ComboBox_Component from './Ext/form/field/ComboBox';
export var ExtComboboxfieldComponent =
/*#__PURE__*/
function (_Ext_form_field_Combo) {
  _inheritsLoose(ExtComboboxfieldComponent, _Ext_form_field_Combo);

  function ExtComboboxfieldComponent() {
    return _Ext_form_field_Combo.call(this, '', '', {}, '') || this;
  }

  return ExtComboboxfieldComponent;
}(Ext_form_field_ComboBox_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-comboboxfield', ExtComboboxfieldComponent);
  });
})();