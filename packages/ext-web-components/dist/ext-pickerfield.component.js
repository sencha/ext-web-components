import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Picker_Component from './Ext/field/Picker';
export var ExtPickerfieldComponent =
/*#__PURE__*/
function (_Ext_field_Picker_Com) {
  _inheritsLoose(ExtPickerfieldComponent, _Ext_field_Picker_Com);

  function ExtPickerfieldComponent() {
    return _Ext_field_Picker_Com.call(this, '', '', {}, '') || this;
  }

  return ExtPickerfieldComponent;
}(Ext_field_Picker_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-pickerfield', ExtPickerfieldComponent);
  });
})();