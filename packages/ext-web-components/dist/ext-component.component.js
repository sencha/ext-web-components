import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget from './Ext/Gadget';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtComponentComponent =
/*#__PURE__*/
function (_Ext_Gadget) {
  _inheritsLoose(ExtComponentComponent, _Ext_Gadget);

  function ExtComponentComponent() {
    var _this;

    _this = _Ext_Gadget.call(this, [], []) || this;
    _this.xtype = 'component';
    return _this;
  }

  return ExtComponentComponent;
}(Ext_Gadget); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-component', ExtComponentComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-component', HTMLParsedElement.withParsedCallback(ExtComponentComponent));