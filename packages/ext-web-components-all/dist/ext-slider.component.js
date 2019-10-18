import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_slider_Slider from './Ext/slider/Slider.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtSliderComponent =
/*#__PURE__*/
function (_Ext_slider_Slider) {
  _inheritsLoose(ExtSliderComponent, _Ext_slider_Slider);

  function ExtSliderComponent() {
    var _this;

    _this = _Ext_slider_Slider.call(this, [], []) || this;
    _this.xtype = 'slider';
    return _this;
  }

  return ExtSliderComponent;
}(Ext_slider_Slider); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-slider', ExtSliderComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-slider', HTMLParsedElement.withParsedCallback(ExtSliderComponent));