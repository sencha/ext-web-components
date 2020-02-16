import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Tip from './Ext/Tip.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTip =
/*#__PURE__*/
function (_Ext_Tip) {
  _inheritsLoose(EWCTip, _Ext_Tip);

  function EWCTip() {
    var _this;

    _this = _Ext_Tip.call(this, [], []) || this;
    _this.xtype = 'tip';
    return _this;
  }

  return EWCTip;
}(Ext_Tip);

export { EWCTip as default };

try {
  window.customElements.define('ext-tip', ElementParser.withParsedCallback(EWCTip));
} catch (e) {
  window.customElements.define('ext-tip', EWCTip);
}