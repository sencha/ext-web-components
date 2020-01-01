import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Picker from './Ext/Picker.js';
import ElementParser from './ElementParser.js';

var EWCPicker =
/*#__PURE__*/
function (_Ext_Picker) {
  _inheritsLoose(EWCPicker, _Ext_Picker);

  function EWCPicker() {
    var _this;

    _this = _Ext_Picker.call(this, [], []) || this;
    _this.xtype = 'picker';
    return _this;
  }

  return EWCPicker;
}(Ext_Picker);

export { EWCPicker as default };
window.customElements.define('ext-picker', ElementParser.withParsedCallback(EWCPicker));