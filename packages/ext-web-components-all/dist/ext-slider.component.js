import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_slider_Slider from './Ext/slider/Slider.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

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
}(Ext_slider_Slider); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-slider', ExtSlider);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtSlider as default };
window.customElements.define('ext-slider', HTMLParsedElement.withParsedCallback(ExtSlider)); //export default reactify(ExtSlider);