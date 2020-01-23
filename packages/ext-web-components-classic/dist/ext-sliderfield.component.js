import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_slider_Slider from './Ext/slider/Slider.js';
import ElementParser from './ElementParser.js';

var EWCSliderfield =
/*#__PURE__*/
function (_Ext_slider_Slider) {
  _inheritsLoose(EWCSliderfield, _Ext_slider_Slider);

  function EWCSliderfield() {
    var _this;

    _this = _Ext_slider_Slider.call(this, [], []) || this;
    _this.xtype = 'sliderfield';
    return _this;
  }

  return EWCSliderfield;
}(Ext_slider_Slider);

export { EWCSliderfield as default };

try {
  window.customElements.define('ext-sliderfield', ElementParser.withParsedCallback(EWCSliderfield));
} catch (e) {
  window.customElements.define('ext-sliderfield', EWCSliderfield);
}