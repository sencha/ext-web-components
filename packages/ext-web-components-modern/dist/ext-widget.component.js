import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget from './Ext/Gadget.js';
import ElementParser from './common/ElementParser.js';

var EWCWidget = /*#__PURE__*/function (_Ext_Gadget) {
  _inheritsLoose(EWCWidget, _Ext_Gadget);

  function EWCWidget() {
    var _this;

    _this = _Ext_Gadget.call(this, [], []) || this;
    _this.xtype = 'widget';
    return _this;
  }

  return EWCWidget;
}(Ext_Gadget);

export { EWCWidget as default };

try {
  if (window.customElements.get('ext-widget') == undefined) {
    window.customElements.define('ext-widget', ElementParser.withParsedCallback(EWCWidget));
  }
} catch (e) {
  if (window.customElements.get('ext-widget') == undefined) {
    window.customElements.define('ext-widget', EWCWidget);
  }
}