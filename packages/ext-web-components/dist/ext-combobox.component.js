import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_field_ComboBox_Component from './Ext/form/field/ComboBox';
export var ExtComboboxComponent =
/*#__PURE__*/
function (_Ext_form_field_Combo) {
  _inheritsLoose(ExtComboboxComponent, _Ext_form_field_Combo);

  function ExtComboboxComponent() {
    return _Ext_form_field_Combo.call(this, '', '', {}, '') || this;
  }

  return ExtComboboxComponent;
}(Ext_form_field_ComboBox_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-combobox', ExtComboboxComponent);
  });
})();