import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_viewport_Default from './Ext/viewport/Default.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtViewportComponent =
/*#__PURE__*/
function (_Ext_viewport_Default) {
  _inheritsLoose(ExtViewportComponent, _Ext_viewport_Default);

  function ExtViewportComponent() {
    var _this;

    _this = _Ext_viewport_Default.call(this, [], []) || this;
    _this.xtype = 'viewport';
    return _this;
  }

  return ExtViewportComponent;
}(Ext_viewport_Default); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-viewport', ExtViewportComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-viewport', HTMLParsedElement.withParsedCallback(ExtViewportComponent));