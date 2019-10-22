import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_PolarChart from './Ext/chart/PolarChart.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtPolar =
/*#__PURE__*/
function (_Ext_chart_PolarChart) {
  _inheritsLoose(ExtPolar, _Ext_chart_PolarChart);

  function ExtPolar() {
    var _this;

    _this = _Ext_chart_PolarChart.call(this, [], []) || this;
    _this.xtype = 'polar';
    return _this;
  }

  return ExtPolar;
}(Ext_chart_PolarChart);

export { ExtPolar as default };
window.customElements.define('ext-polar', HTMLParsedElement.withParsedCallback(ExtPolar));