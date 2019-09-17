import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Image_Component from './Ext/Image';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtImageComponent =
/*#__PURE__*/
function (_Ext_Image_Component) {
  _inheritsLoose(ExtImageComponent, _Ext_Image_Component);

  function ExtImageComponent() {
    var _this;

    _this = _Ext_Image_Component.call(this, {}, [], []) || this;
    _this.xtype = 'image';
    return _this;
  }

  return ExtImageComponent;
}(Ext_Image_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-image', ExtImageComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-image', HTMLParsedElement.withParsedCallback(ExtImageComponent));