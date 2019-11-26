import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_slider_Slider from '@sencha/ext-runtime-base/dist/./Ext/slider/Slider.js';
import Ext_slider_Slider from './Ext/slider/Slider.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCSlider =
/*#__PURE__*/
function (_Ext_slider_Slider) {
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
window.customElements.define('ext-slider', HTMLParsedElement.withParsedCallback(EWCSlider));