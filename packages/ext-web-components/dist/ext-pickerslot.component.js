import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_picker_Slot_Component from './Ext/picker/Slot';
export var ExtPickerslotComponent =
/*#__PURE__*/
function (_Ext_picker_Slot_Comp) {
  _inheritsLoose(ExtPickerslotComponent, _Ext_picker_Slot_Comp);

  function ExtPickerslotComponent() {
    return _Ext_picker_Slot_Comp.call(this, '', '', {}, '') || this;
  }

  return ExtPickerslotComponent;
}(Ext_picker_Slot_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-pickerslot', ExtPickerslotComponent);
  });
})();