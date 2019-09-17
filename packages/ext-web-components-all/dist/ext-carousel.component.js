import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Carousel_Component from './Ext/Carousel';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCarouselComponent =
/*#__PURE__*/
function (_Ext_Carousel_Compone) {
  _inheritsLoose(ExtCarouselComponent, _Ext_Carousel_Compone);

  function ExtCarouselComponent() {
    var _this;

    _this = _Ext_Carousel_Compone.call(this) || this;
    _this.xtype = 'carousel';
    return _this;
  }

  return ExtCarouselComponent;
}(Ext_Carousel_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-carousel', ExtCarouselComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-carousel', HTMLParsedElement.withParsedCallback(ExtCarouselComponent));