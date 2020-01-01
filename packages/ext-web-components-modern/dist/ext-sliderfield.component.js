import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Slider from './Ext/form/Slider.js';
import ElementParser from './ElementParser.js';

var EWCSliderfield =
/*#__PURE__*/
function (_Ext_form_Slider) {
  _inheritsLoose(EWCSliderfield, _Ext_form_Slider);

  function EWCSliderfield() {
    var _this;

    _this = _Ext_form_Slider.call(this, [], []) || this;
    _this.xtype = 'sliderfield';
    return _this;
  }

  return EWCSliderfield;
}(Ext_form_Slider);

export { EWCSliderfield as default };
window.customElements.define('ext-sliderfield', ElementParser.withParsedCallback(EWCSliderfield));