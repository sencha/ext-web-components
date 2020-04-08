import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Viewport from './Ext/Viewport.js';
import ElementParser from './common/ElementParser.js';

var EWCViewport = /*#__PURE__*/function (_Ext_Viewport) {
  _inheritsLoose(EWCViewport, _Ext_Viewport);

  function EWCViewport() {
    var _this;

    _this = _Ext_Viewport.call(this, [], []) || this;
    _this.xtype = 'viewport';
    return _this;
  }

  return EWCViewport;
}(Ext_Viewport);

export { EWCViewport as default };

try {
  if (window.customElements.get('ext-viewport') == undefined) {
    window.customElements.define('ext-viewport', ElementParser.withParsedCallback(EWCViewport));
  }
} catch (e) {
  if (window.customElements.get('ext-viewport') == undefined) {
    window.customElements.define('ext-viewport', EWCViewport);
  }
}