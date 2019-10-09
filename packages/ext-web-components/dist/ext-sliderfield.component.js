import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Slider from './Ext/form/Slider';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSliderfieldComponent =
/*#__PURE__*/
function (_Ext_form_Slider) {
  _inheritsLoose(ExtSliderfieldComponent, _Ext_form_Slider);

  function ExtSliderfieldComponent() {
    var _this;

    _this = _Ext_form_Slider.call(this, [], []) || this;
    _this.xtype = 'sliderfield';
    return _this;
  }

  return ExtSliderfieldComponent;
}(Ext_form_Slider); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sliderfield', ExtSliderfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-sliderfield', HTMLParsedElement.withParsedCallback(ExtSliderfieldComponent));