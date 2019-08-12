import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Picker_Component from './Ext/Picker';
export var ExtPickerComponent =
/*#__PURE__*/
function (_Ext_Picker_Component) {
  _inheritsLoose(ExtPickerComponent, _Ext_Picker_Component);

  function ExtPickerComponent() {
    return _Ext_Picker_Component.call(this, '', '', {}, '') || this;
  }

  return ExtPickerComponent;
}(Ext_Picker_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-picker', ExtPickerComponent);
  });
})();