import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Mask from './Ext/Mask.js';
import ElementParser from './runtime/ElementParser.js';

var EWCMask =
/*#__PURE__*/
function (_Ext_Mask) {
  _inheritsLoose(EWCMask, _Ext_Mask);

  function EWCMask() {
    var _this;

    _this = _Ext_Mask.call(this, [], []) || this;
    _this.xtype = 'mask';
    return _this;
  }

  return EWCMask;
}(Ext_Mask);

export { EWCMask as default };

try {
  window.customElements.define('ext-mask', ElementParser.withParsedCallback(EWCMask));
} catch (e) {
  window.customElements.define('ext-mask', EWCMask);
}