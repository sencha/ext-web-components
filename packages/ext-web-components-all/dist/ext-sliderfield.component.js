import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Slider from './Ext/form/Slider.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtSliderfield =
/*#__PURE__*/
function (_Ext_form_Slider) {
  _inheritsLoose(ExtSliderfield, _Ext_form_Slider);

  function ExtSliderfield() {
    var _this;

    _this = _Ext_form_Slider.call(this, [], []) || this;
    _this.xtype = 'sliderfield';
    return _this;
  }

  return ExtSliderfield;
}(Ext_form_Slider);

export { ExtSliderfield as default };
window.customElements.define('ext-sliderfield', HTMLParsedElement.withParsedCallback(ExtSliderfield));