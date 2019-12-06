import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_Indicator from '@sencha/ext-runtime-base/dist/./Ext/Indicator.js';
import Ext_Indicator from './Ext/Indicator.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCIndicator =
/*#__PURE__*/
function (_Ext_Indicator) {
  _inheritsLoose(EWCIndicator, _Ext_Indicator);

  function EWCIndicator() {
    var _this;

    _this = _Ext_Indicator.call(this, [], []) || this;
    _this.xtype = 'indicator';
    return _this;
  }

  return EWCIndicator;
}(Ext_Indicator);

export { EWCIndicator as default };
window.customElements.define('ext-indicator', HTMLParsedElement.withParsedCallback(EWCIndicator));