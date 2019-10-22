import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Indicator from './Ext/Indicator.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtIndicator =
/*#__PURE__*/
function (_Ext_Indicator) {
  _inheritsLoose(ExtIndicator, _Ext_Indicator);

  function ExtIndicator() {
    var _this;

    _this = _Ext_Indicator.call(this, [], []) || this;
    _this.xtype = 'indicator';
    return _this;
  }

  return ExtIndicator;
}(Ext_Indicator);

export { ExtIndicator as default };
window.customElements.define('ext-indicator', HTMLParsedElement.withParsedCallback(ExtIndicator));