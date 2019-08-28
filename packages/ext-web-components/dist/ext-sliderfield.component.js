import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Slider_Component from './Ext/form/Slider';
export var ExtSliderfieldComponent =
/*#__PURE__*/
function (_Ext_form_Slider_Comp) {
  _inheritsLoose(ExtSliderfieldComponent, _Ext_form_Slider_Comp);

  function ExtSliderfieldComponent() {
    return _Ext_form_Slider_Comp.call(this, '', '', {}, '') || this;
  }

  return ExtSliderfieldComponent;
}(Ext_form_Slider_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-sliderfield', ExtSliderfieldComponent);
  });
})();