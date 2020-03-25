import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_picker_Slot from './Ext/picker/Slot.js';
import ElementParser from './runtime/ElementParser.js';

var EWCPickerslot = /*#__PURE__*/function (_Ext_picker_Slot) {
  _inheritsLoose(EWCPickerslot, _Ext_picker_Slot);

  var _super = _createSuper(EWCPickerslot);

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
  window.customElements.define('ext-pickerslot', ElementParser.withParsedCallback(EWCPickerslot));
} catch (e) {
  window.customElements.define('ext-pickerslot', EWCPickerslot);
}