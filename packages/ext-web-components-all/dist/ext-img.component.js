import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Image_Component from './Ext/Image';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtImgComponent =
/*#__PURE__*/
function (_Ext_Image_Component) {
  _inheritsLoose(ExtImgComponent, _Ext_Image_Component);

  function ExtImgComponent() {
    var _this;

    _this = _Ext_Image_Component.call(this) || this;
    _this.xtype = 'img';
    return _this;
  }

  return ExtImgComponent;
}(Ext_Image_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-img', ExtImgComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-img', HTMLParsedElement.withParsedCallback(ExtImgComponent));