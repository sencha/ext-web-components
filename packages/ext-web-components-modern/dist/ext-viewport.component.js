import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_viewport_Default from './Ext/viewport/Default.js';
import ElementParser from './runtime/ElementParser.js';

var EWCViewport = /*#__PURE__*/function (_Ext_viewport_Default) {
  _inheritsLoose(EWCViewport, _Ext_viewport_Default);

  function EWCViewport() {
    var _this;

    _this = _Ext_viewport_Default.call(this, [], []) || this;
    _this.xtype = 'viewport';
    return _this;
  }

  return EWCViewport;
}(Ext_viewport_Default);

export { EWCViewport as default };

try {
  window.customElements.define('ext-viewport', ElementParser.withParsedCallback(EWCViewport));
} catch (e) {
  window.customElements.define('ext-viewport', EWCViewport);
}