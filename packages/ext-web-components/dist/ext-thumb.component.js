import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_slider_Thumb_Component from './Ext/slider/Thumb';
export var ExtThumbComponent =
/*#__PURE__*/
function (_Ext_slider_Thumb_Com) {
  _inheritsLoose(ExtThumbComponent, _Ext_slider_Thumb_Com);

  function ExtThumbComponent() {
    return _Ext_slider_Thumb_Com.call(this, '', '', {}, '') || this;
  }

  return ExtThumbComponent;
}(Ext_slider_Thumb_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-thumb', ExtThumbComponent);
  });
})();