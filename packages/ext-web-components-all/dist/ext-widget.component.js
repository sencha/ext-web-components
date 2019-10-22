import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget from './Ext/Gadget.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtWidget =
/*#__PURE__*/
function (_Ext_Gadget) {
  _inheritsLoose(ExtWidget, _Ext_Gadget);

  function ExtWidget() {
    var _this;

    _this = _Ext_Gadget.call(this, [], []) || this;
    _this.xtype = 'widget';
    return _this;
  }

  return ExtWidget;
}(Ext_Gadget);

export { ExtWidget as default };
window.customElements.define('ext-widget', HTMLParsedElement.withParsedCallback(ExtWidget));