import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_Legend from './Ext/chart/Legend.js';
import ElementParser from './common/ElementParser.js';

var EWCLegend = /*#__PURE__*/function (_Ext_chart_Legend) {
  _inheritsLoose(EWCLegend, _Ext_chart_Legend);

  function EWCLegend() {
    var _this;

    _this = _Ext_chart_Legend.call(this, [], []) || this;
    _this.xtype = 'legend';
    return _this;
  }

  return EWCLegend;
}(Ext_chart_Legend);

export { EWCLegend as default };

try {
  if (window.customElements.get('ext-legend') == undefined) {
    window.customElements.define('ext-legend', ElementParser.withParsedCallback(EWCLegend));
  }
} catch (e) {
  if (window.customElements.get('ext-legend') == undefined) {
    window.customElements.define('ext-legend', EWCLegend);
  }
}