import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Indicator from './Ext/Indicator.js';
import ElementParser from './common/ElementParser.js';

var EWCIndicator = /*#__PURE__*/function (_Ext_Indicator) {
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

try {
  if (window.customElements.get('ext-indicator') == undefined) {
    window.customElements.define('ext-indicator', ElementParser.withParsedCallback(EWCIndicator));
  }
} catch (e) {
  if (window.customElements.get('ext-indicator') == undefined) {
    window.customElements.define('ext-indicator', EWCIndicator);
  }
}