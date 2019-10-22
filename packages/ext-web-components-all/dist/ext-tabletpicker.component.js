import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_picker_Tablet from './Ext/picker/Tablet.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtTabletpicker =
/*#__PURE__*/
function (_Ext_picker_Tablet) {
  _inheritsLoose(ExtTabletpicker, _Ext_picker_Tablet);

  function ExtTabletpicker() {
    var _this;

    _this = _Ext_picker_Tablet.call(this, [], []) || this;
    _this.xtype = 'tabletpicker';
    return _this;
  }

  return ExtTabletpicker;
}(Ext_picker_Tablet);

export { ExtTabletpicker as default };
window.customElements.define('ext-tabletpicker', HTMLParsedElement.withParsedCallback(ExtTabletpicker));