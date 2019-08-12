import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_Gauge_Component from './Ext/ux/Gauge';
export var ExtGaugeComponent =
/*#__PURE__*/
function (_Ext_ux_Gauge_Compone) {
  _inheritsLoose(ExtGaugeComponent, _Ext_ux_Gauge_Compone);

  function ExtGaugeComponent() {
    return _Ext_ux_Gauge_Compone.call(this, '', '', {}, '') || this;
  }

  return ExtGaugeComponent;
}(Ext_ux_Gauge_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-gauge', ExtGaugeComponent);
  });
})();