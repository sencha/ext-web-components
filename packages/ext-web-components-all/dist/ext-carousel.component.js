import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Carousel from './Ext/Carousel.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtCarouselComponent =
/*#__PURE__*/
function (_Ext_Carousel) {
  _inheritsLoose(ExtCarouselComponent, _Ext_Carousel);

  function ExtCarouselComponent() {
    var _this;

    _this = _Ext_Carousel.call(this, [], []) || this;
    _this.xtype = 'carousel';
    return _this;
  }

  return ExtCarouselComponent;
}(Ext_Carousel); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-carousel', ExtCarouselComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-carousel', HTMLParsedElement.withParsedCallback(ExtCarouselComponent));