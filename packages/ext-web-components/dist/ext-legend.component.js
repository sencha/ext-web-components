import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_Legend_Component from './Ext/chart/Legend';
export var ExtLegendComponent =
/*#__PURE__*/
function (_Ext_chart_Legend_Com) {
  _inheritsLoose(ExtLegendComponent, _Ext_chart_Legend_Com);

  function ExtLegendComponent() {
    return _Ext_chart_Legend_Com.call(this, '', '', {}, '') || this;
  }

  return ExtLegendComponent;
}(Ext_chart_Legend_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-legend', ExtLegendComponent);
  });
})();