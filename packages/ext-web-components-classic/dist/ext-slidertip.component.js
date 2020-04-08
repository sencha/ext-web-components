import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_slider_Tip from './Ext/slider/Tip.js';
import ElementParser from './common/ElementParser.js';

var EWCSlidertip = /*#__PURE__*/function (_Ext_slider_Tip) {
  _inheritsLoose(EWCSlidertip, _Ext_slider_Tip);

  function EWCSlidertip() {
    var _this;

    _this = _Ext_slider_Tip.call(this, [], []) || this;
    _this.xtype = 'slidertip';
    return _this;
  }

  return EWCSlidertip;
}(Ext_slider_Tip);

export { EWCSlidertip as default };

try {
  if (window.customElements.get('ext-slidertip') == undefined) {
    window.customElements.define('ext-slidertip', ElementParser.withParsedCallback(EWCSlidertip));
  }
} catch (e) {
  if (window.customElements.get('ext-slidertip') == undefined) {
    window.customElements.define('ext-slidertip', EWCSlidertip);
  }
}