import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget_Component from './Ext/Gadget';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtWidgetComponent =
/*#__PURE__*/
function (_Ext_Gadget_Component) {
  _inheritsLoose(ExtWidgetComponent, _Ext_Gadget_Component);

  function ExtWidgetComponent() {
    var _this;

    _this = _Ext_Gadget_Component.call(this, {}, [], []) || this;
    _this.xtype = 'widget';
    return _this;
  }

  return ExtWidgetComponent;
}(Ext_Gadget_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-widget', ExtWidgetComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-widget', HTMLParsedElement.withParsedCallback(ExtWidgetComponent));