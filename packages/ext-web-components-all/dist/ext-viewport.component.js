import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_viewport_Default from './Ext/viewport/Default.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtViewport =
/*#__PURE__*/
function (_Ext_viewport_Default) {
  _inheritsLoose(ExtViewport, _Ext_viewport_Default);

  function ExtViewport() {
    var _this;

    _this = _Ext_viewport_Default.call(this, [], []) || this;
    _this.xtype = 'viewport';
    return _this;
  }

  return ExtViewport;
}(Ext_viewport_Default);

export { ExtViewport as default };
window.customElements.define('ext-viewport', HTMLParsedElement.withParsedCallback(ExtViewport));