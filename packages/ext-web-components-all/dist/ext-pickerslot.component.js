import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_picker_Slot from './Ext/picker/Slot.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtPickerslot =
/*#__PURE__*/
function (_Ext_picker_Slot) {
  _inheritsLoose(ExtPickerslot, _Ext_picker_Slot);

  function ExtPickerslot() {
    var _this;

    _this = _Ext_picker_Slot.call(this, [], []) || this;
    _this.xtype = 'pickerslot';
    return _this;
  }

  return ExtPickerslot;
}(Ext_picker_Slot); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pickerslot', ExtPickerslot);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtPickerslot as default };
window.customElements.define('ext-pickerslot', HTMLParsedElement.withParsedCallback(ExtPickerslot)); //export default reactify(ExtPickerslot);