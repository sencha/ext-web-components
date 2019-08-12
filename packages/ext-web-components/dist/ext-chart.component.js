import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_Chart_Component from './Ext/chart/Chart';
export var ExtChartComponent =
/*#__PURE__*/
function (_Ext_chart_Chart_Comp) {
  _inheritsLoose(ExtChartComponent, _Ext_chart_Chart_Comp);

  function ExtChartComponent() {
    return _Ext_chart_Chart_Comp.call(this, '', '', {}, '') || this;
  }

  return ExtChartComponent;
}(Ext_chart_Chart_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-chart', ExtChartComponent);
  });
})();