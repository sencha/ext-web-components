import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Carousel from './Ext/Carousel.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

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
}(Ext_Carousel); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-carousel', ExtCarousel);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtCarousel as default };
window.customElements.define('ext-carousel', HTMLParsedElement.withParsedCallback(ExtCarousel)); //export default reactify(ExtCarousel);