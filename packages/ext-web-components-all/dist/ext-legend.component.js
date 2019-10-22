import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_Legend from './Ext/chart/Legend.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtLegend =
/*#__PURE__*/
function (_Ext_chart_Legend) {
  _inheritsLoose(ExtLegend, _Ext_chart_Legend);

  function ExtLegend() {
    var _this;

    _this = _Ext_chart_Legend.call(this, [], []) || this;
    _this.xtype = 'legend';
    return _this;
  }

  return ExtLegend;
}(Ext_chart_Legend);

export { ExtLegend as default };
window.customElements.define('ext-legend', HTMLParsedElement.withParsedCallback(ExtLegend));