import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Mask from './Ext/Mask.js';
import ElementParser from './common/ElementParser.js';

var EWCMask = /*#__PURE__*/function (_Ext_Mask) {
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
  if (window.customElements.get('ext-mask') == undefined) {
    window.customElements.define('ext-mask', ElementParser.withParsedCallback(EWCMask));
  }
} catch (e) {
  if (window.customElements.get('ext-mask') == undefined) {
    window.customElements.define('ext-mask', EWCMask);
  }
}