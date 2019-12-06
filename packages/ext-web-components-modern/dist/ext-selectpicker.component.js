import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_picker_SelectPicker from '@sencha/ext-runtime-base/dist/./Ext/picker/SelectPicker.js';
import Ext_picker_SelectPicker from './Ext/picker/SelectPicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCSelectpicker =
/*#__PURE__*/
function (_Ext_picker_SelectPic) {
  _inheritsLoose(EWCSelectpicker, _Ext_picker_SelectPic);

  function EWCSelectpicker() {
    var _this;

    _this = _Ext_picker_SelectPic.call(this, [], []) || this;
    _this.xtype = 'selectpicker';
    return _this;
  }

  return EWCSelectpicker;
}(Ext_picker_SelectPicker);

export { EWCSelectpicker as default };
window.customElements.define('ext-selectpicker', HTMLParsedElement.withParsedCallback(EWCSelectpicker));