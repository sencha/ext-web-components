import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_field_ComboBox from './Ext/form/field/ComboBox';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtComboboxComponent =
/*#__PURE__*/
function (_Ext_form_field_Combo) {
  _inheritsLoose(ExtComboboxComponent, _Ext_form_field_Combo);

  function ExtComboboxComponent() {
    var _this;

    _this = _Ext_form_field_Combo.call(this, [], []) || this;
    _this.xtype = 'combobox';
    return _this;
  }

  return ExtComboboxComponent;
}(Ext_form_field_ComboBox); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-combobox', ExtComboboxComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-combobox', HTMLParsedElement.withParsedCallback(ExtComboboxComponent));