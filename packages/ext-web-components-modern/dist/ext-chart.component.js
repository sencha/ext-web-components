import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_chart_Chart from '@sencha/ext-runtime-base/dist/./Ext/chart/Chart.js';
import Ext_chart_Chart from './Ext/chart/Chart.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-chart', HTMLParsedElement.withParsedCallback(EWCChart));