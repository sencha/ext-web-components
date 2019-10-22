import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Picker from './Ext/Picker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtPicker =
/*#__PURE__*/
function (_Ext_Picker) {
  _inheritsLoose(ExtPicker, _Ext_Picker);

  function ExtPicker() {
    var _this;

    _this = _Ext_Picker.call(this, [], []) || this;
    _this.xtype = 'picker';
    return _this;
  }

  return ExtPicker;
}(Ext_Picker);

export { ExtPicker as default };
window.customElements.define('ext-picker', HTMLParsedElement.withParsedCallback(ExtPicker));