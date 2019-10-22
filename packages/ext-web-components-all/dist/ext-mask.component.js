import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Mask from './Ext/Mask.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtMask =
/*#__PURE__*/
function (_Ext_Mask) {
  _inheritsLoose(ExtMask, _Ext_Mask);

  function ExtMask() {
    var _this;

    _this = _Ext_Mask.call(this, [], []) || this;
    _this.xtype = 'mask';
    return _this;
  }

  return ExtMask;
}(Ext_Mask);

export { ExtMask as default };
window.customElements.define('ext-mask', HTMLParsedElement.withParsedCallback(ExtMask));