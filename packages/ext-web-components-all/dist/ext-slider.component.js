import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_slider_Slider from './Ext/slider/Slider.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtSlider =
/*#__PURE__*/
function (_Ext_slider_Slider) {
  _inheritsLoose(ExtSlider, _Ext_slider_Slider);

  function ExtSlider() {
    var _this;

    _this = _Ext_slider_Slider.call(this, [], []) || this;
    _this.xtype = 'slider';
    return _this;
  }

  return ExtSlider;
}(Ext_slider_Slider);

export { ExtSlider as default };
window.customElements.define('ext-slider', HTMLParsedElement.withParsedCallback(ExtSlider));