import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Mask from './Ext/Mask';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtMaskComponent =
/*#__PURE__*/
function (_Ext_Mask) {
  _inheritsLoose(ExtMaskComponent, _Ext_Mask);

  function ExtMaskComponent() {
    var _this;

    _this = _Ext_Mask.call(this, [], []) || this;
    _this.xtype = 'mask';
    return _this;
  }

  return ExtMaskComponent;
}(Ext_Mask); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-mask', ExtMaskComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-mask', HTMLParsedElement.withParsedCallback(ExtMaskComponent));