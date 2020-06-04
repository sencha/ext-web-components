import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_PolarChart from './Ext/chart/PolarChart.js';
import ElementParser from './common/ElementParser.js';

var EWCPolar = /*#__PURE__*/function (_Ext_chart_PolarChart) {
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

try {
  if (window.customElements.get('ext-polar') == undefined) {
    window.customElements.define('ext-polar', ElementParser.withParsedCallback(EWCPolar));
  }
} catch (e) {
  if (window.customElements.get('ext-polar') == undefined) {
    window.customElements.define('ext-polar', EWCPolar);
  }
}