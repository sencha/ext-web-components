import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_slider_Toggle_Component from './Ext/slider/Toggle';
export var ExtTogglesliderComponent =
/*#__PURE__*/
function (_Ext_slider_Toggle_Co) {
  _inheritsLoose(ExtTogglesliderComponent, _Ext_slider_Toggle_Co);

  function ExtTogglesliderComponent() {
    return _Ext_slider_Toggle_Co.call(this, '', '', {}, '') || this;
  }

  return ExtTogglesliderComponent;
}(Ext_slider_Toggle_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-toggleslider', ExtTogglesliderComponent);
  });
})();