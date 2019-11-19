import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_picker_Slot from './Ext/picker/Slot';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtPickerslotComponent =
/*#__PURE__*/
function (_Ext_picker_Slot) {
  _inheritsLoose(ExtPickerslotComponent, _Ext_picker_Slot);

  function ExtPickerslotComponent() {
    var _this;

    _this = _Ext_picker_Slot.call(this, [], []) || this;
    _this.xtype = 'pickerslot';
    return _this;
  }

  return ExtPickerslotComponent;
}(Ext_picker_Slot); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pickerslot', ExtPickerslotComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-pickerslot', HTMLParsedElement.withParsedCallback(ExtPickerslotComponent));