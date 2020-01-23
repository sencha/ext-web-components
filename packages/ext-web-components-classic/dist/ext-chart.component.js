import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_Chart from './Ext/chart/Chart.js';
import ElementParser from './ElementParser.js';

var EWCChart =
/*#__PURE__*/
function (_Ext_chart_Chart) {
  _inheritsLoose(EWCChart, _Ext_chart_Chart);

  function EWCChart() {
    var _this;

    _this = _Ext_chart_Chart.call(this, [], []) || this;
    _this.xtype = 'chart';
    return _this;
  }

  return EWCChart;
}(Ext_chart_Chart);

export { EWCChart as default };

try {
  window.customElements.define('ext-chart', ElementParser.withParsedCallback(EWCChart));
} catch (e) {
  window.customElements.define('ext-chart', EWCChart);
}