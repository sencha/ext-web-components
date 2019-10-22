import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Carousel from './Ext/Carousel.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCarousel =
/*#__PURE__*/
function (_Ext_Carousel) {
  _inheritsLoose(ExtCarousel, _Ext_Carousel);

  function ExtCarousel() {
    var _this;

    _this = _Ext_Carousel.call(this, [], []) || this;
    _this.xtype = 'carousel';
    return _this;
  }

  return ExtCarousel;
}(Ext_Carousel);

export { ExtCarousel as default };
window.customElements.define('ext-carousel', HTMLParsedElement.withParsedCallback(ExtCarousel));