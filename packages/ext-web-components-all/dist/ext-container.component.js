import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_container_Container_Component from './Ext/container/Container';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtContainerComponent =
/*#__PURE__*/
function (_Ext_container_Contai) {
  _inheritsLoose(ExtContainerComponent, _Ext_container_Contai);

  function ExtContainerComponent() {
    var _this;

    _this = _Ext_container_Contai.call(this) || this;
    _this.xtype = 'container';
    return _this;
  }

  return ExtContainerComponent;
}(Ext_container_Container_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-container', ExtContainerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-container', HTMLParsedElement.withParsedCallback(ExtContainerComponent));