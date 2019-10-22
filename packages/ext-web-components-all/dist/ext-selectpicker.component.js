import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_picker_SelectPicker from './Ext/picker/SelectPicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtSelectpicker =
/*#__PURE__*/
function (_Ext_picker_SelectPic) {
  _inheritsLoose(ExtSelectpicker, _Ext_picker_SelectPic);

  function ExtSelectpicker() {
    var _this;

    _this = _Ext_picker_SelectPic.call(this, [], []) || this;
    _this.xtype = 'selectpicker';
    return _this;
  }

  return ExtSelectpicker;
}(Ext_picker_SelectPicker);

export { ExtSelectpicker as default };
window.customElements.define('ext-selectpicker', HTMLParsedElement.withParsedCallback(ExtSelectpicker));