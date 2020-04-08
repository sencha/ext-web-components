import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_slider_Slider from './Ext/slider/Slider.js';
import ElementParser from './common/ElementParser.js';

var EWCSlider = /*#__PURE__*/function (_Ext_slider_Slider) {
  _inheritsLoose(EWCSlider, _Ext_slider_Slider);

  function EWCSlider() {
    var _this;

    _this = _Ext_slider_Slider.call(this, [], []) || this;
    _this.xtype = 'slider';
    return _this;
  }

  return EWCSlider;
}(Ext_slider_Slider);

export { EWCSlider as default };

try {
  if (window.customElements.get('ext-slider') == undefined) {
    window.customElements.define('ext-slider', ElementParser.withParsedCallback(EWCSlider));
  }
} catch (e) {
  if (window.customElements.get('ext-slider') == undefined) {
    window.customElements.define('ext-slider', EWCSlider);
  }
}