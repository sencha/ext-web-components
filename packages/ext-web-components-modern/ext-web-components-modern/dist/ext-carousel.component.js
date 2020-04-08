import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Carousel from './Ext/Carousel.js';
import ElementParser from './common/ElementParser.js';

var EWCCarousel = /*#__PURE__*/function (_Ext_Carousel) {
  _inheritsLoose(EWCCarousel, _Ext_Carousel);

  function EWCCarousel() {
    var _this;

    _this = _Ext_Carousel.call(this, [], []) || this;
    _this.xtype = 'carousel';
    return _this;
  }

  return EWCCarousel;
}(Ext_Carousel);

export { EWCCarousel as default };

try {
  if (window.customElements.get('ext-carousel') == undefined) {
    window.customElements.define('ext-carousel', ElementParser.withParsedCallback(EWCCarousel));
  }
} catch (e) {
  if (window.customElements.get('ext-carousel') == undefined) {
    window.customElements.define('ext-carousel', EWCCarousel);
  }
}