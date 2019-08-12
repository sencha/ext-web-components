import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_PolarChart_Component from './Ext/chart/PolarChart';
export var ExtPolarComponent =
/*#__PURE__*/
function (_Ext_chart_PolarChart) {
  _inheritsLoose(ExtPolarComponent, _Ext_chart_PolarChart);

  function ExtPolarComponent() {
    return _Ext_chart_PolarChart.call(this, '', '', {}, '') || this;
  }

  return ExtPolarComponent;
}(Ext_chart_PolarChart_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-polar', ExtPolarComponent);
  });
})();