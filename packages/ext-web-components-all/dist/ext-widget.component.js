import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget from './Ext/Gadget.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtWidgetComponent =
/*#__PURE__*/
function (_Ext_Gadget) {
  _inheritsLoose(ExtWidgetComponent, _Ext_Gadget);

  function ExtWidgetComponent() {
    var _this;

    _this = _Ext_Gadget.call(this, [], []) || this;
    _this.xtype = 'widget';
    return _this;
  }

  return ExtWidgetComponent;
}(Ext_Gadget); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-widget', ExtWidgetComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-widget', HTMLParsedElement.withParsedCallback(ExtWidgetComponent));