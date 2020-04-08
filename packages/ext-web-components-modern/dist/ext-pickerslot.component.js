import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_picker_Slot from './Ext/picker/Slot.js';
import ElementParser from './common/ElementParser.js';

var EWCPickerslot = /*#__PURE__*/function (_Ext_picker_Slot) {
  _inheritsLoose(EWCPickerslot, _Ext_picker_Slot);

  function EWCPickerslot() {
    var _this;

    _this = _Ext_picker_Slot.call(this, [], []) || this;
    _this.xtype = 'pickerslot';
    return _this;
  }

  return EWCPickerslot;
}(Ext_picker_Slot);

export { EWCPickerslot as default };

try {
  if (window.customElements.get('ext-pickerslot') == undefined) {
    window.customElements.define('ext-pickerslot', ElementParser.withParsedCallback(EWCPickerslot));
  }
} catch (e) {
  if (window.customElements.get('ext-pickerslot') == undefined) {
    window.customElements.define('ext-pickerslot', EWCPickerslot);
  }
}