import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_chart_PolarChart from '@sencha/ext-runtime-base/dist/./Ext/chart/PolarChart.js';
import Ext_chart_PolarChart from './Ext/chart/PolarChart.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCPolar =
/*#__PURE__*/
function (_Ext_chart_PolarChart) {
  _inheritsLoose(EWCPolar, _Ext_chart_PolarChart);

  function EWCPolar() {
    var _this;

    _this = _Ext_chart_PolarChart.call(this, [], []) || this;
    _this.xtype = 'polar';
    return _this;
  }

  return EWCPolar;
}(Ext_chart_PolarChart);

export { EWCPolar as default };
window.customElements.define('ext-polar', HTMLParsedElement.withParsedCallback(EWCPolar));