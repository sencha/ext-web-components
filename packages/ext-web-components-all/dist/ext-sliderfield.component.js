import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Slider_Component from './Ext/form/Slider';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSliderfieldComponent =
/*#__PURE__*/
function (_Ext_form_Slider_Comp) {
  _inheritsLoose(ExtSliderfieldComponent, _Ext_form_Slider_Comp);

  function ExtSliderfieldComponent() {
    var _this;

    _this = _Ext_form_Slider_Comp.call(this) || this;
    _this.xtype = 'sliderfield';
    return _this;
  }

  return ExtSliderfieldComponent;
}(Ext_form_Slider_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sliderfield', ExtSliderfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-sliderfield', HTMLParsedElement.withParsedCallback(ExtSliderfieldComponent));