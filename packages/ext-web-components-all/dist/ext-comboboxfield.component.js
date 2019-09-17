import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_field_ComboBox_Component from './Ext/form/field/ComboBox';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtComboboxfieldComponent =
/*#__PURE__*/
function (_Ext_form_field_Combo) {
  _inheritsLoose(ExtComboboxfieldComponent, _Ext_form_field_Combo);

  function ExtComboboxfieldComponent() {
    var _this;

    _this = _Ext_form_field_Combo.call(this) || this;
    _this.xtype = 'comboboxfield';
    return _this;
  }

  return ExtComboboxfieldComponent;
}(Ext_form_field_ComboBox_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-comboboxfield', ExtComboboxfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-comboboxfield', HTMLParsedElement.withParsedCallback(ExtComboboxfieldComponent));