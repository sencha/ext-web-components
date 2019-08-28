import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Carousel_Component from './Ext/Carousel';
export var ExtCarouselComponent =
/*#__PURE__*/
function (_Ext_Carousel_Compone) {
  _inheritsLoose(ExtCarouselComponent, _Ext_Carousel_Compone);

  function ExtCarouselComponent() {
    return _Ext_Carousel_Compone.call(this, '', '', {}, '') || this;
  }

  return ExtCarouselComponent;
}(Ext_Carousel_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-carousel', ExtCarouselComponent);
  });
})();