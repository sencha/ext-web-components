import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Spacer from './Ext/Spacer.js';
import ElementParser from './runtime/ElementParser.js';

var EWCSpacer = /*#__PURE__*/function (_Ext_Spacer) {
  _inheritsLoose(EWCSpacer, _Ext_Spacer);

  function EWCSpacer() {
    var _this;

    _this = _Ext_Spacer.call(this, [], []) || this;
    _this.xtype = 'spacer';
    return _this;
  }

  return EWCSpacer;
}(Ext_Spacer);

export { EWCSpacer as default };

try {
  window.customElements.define('ext-spacer', ElementParser.withParsedCallback(EWCSpacer));
} catch (e) {
  window.customElements.define('ext-spacer', EWCSpacer);
}