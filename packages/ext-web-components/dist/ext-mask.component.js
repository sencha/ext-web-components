import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_Mask from '@sencha/ext-runtime-base/dist/./Ext/Mask.js';
import Ext_Mask from './Ext/Mask.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-mask', HTMLParsedElement.withParsedCallback(EWCMask));