import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Mask_Component from './Ext/Mask';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtMaskComponent =
/*#__PURE__*/
function (_Ext_Mask_Component) {
  _inheritsLoose(ExtMaskComponent, _Ext_Mask_Component);

  function ExtMaskComponent() {
    var _this;

    _this = _Ext_Mask_Component.call(this, {}, [], []) || this;
    _this.xtype = 'mask';
    return _this;
  }

  return ExtMaskComponent;
}(Ext_Mask_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-mask', ExtMaskComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-mask', HTMLParsedElement.withParsedCallback(ExtMaskComponent));