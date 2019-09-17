import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_slider_Slider_Component from './Ext/slider/Slider';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSliderComponent =
/*#__PURE__*/
function (_Ext_slider_Slider_Co) {
  _inheritsLoose(ExtSliderComponent, _Ext_slider_Slider_Co);

  function ExtSliderComponent() {
    var _this;

    _this = _Ext_slider_Slider_Co.call(this) || this;
    _this.xtype = 'slider';
    return _this;
  }

  return ExtSliderComponent;
}(Ext_slider_Slider_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-slider', ExtSliderComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-slider', HTMLParsedElement.withParsedCallback(ExtSliderComponent));