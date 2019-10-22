import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_HeatMap from './Ext/d3/HeatMap.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtD3_heatmap =
/*#__PURE__*/
function (_Ext_d3_HeatMap) {
  _inheritsLoose(ExtD3_heatmap, _Ext_d3_HeatMap);

  function ExtD3_heatmap() {
    var _this;

    _this = _Ext_d3_HeatMap.call(this, [], []) || this;
    _this.xtype = 'd3-heatmap';
    return _this;
  }

  return ExtD3_heatmap;
}(Ext_d3_HeatMap);

export { ExtD3_heatmap as default };
window.customElements.define('ext-d3-heatmap', HTMLParsedElement.withParsedCallback(ExtD3_heatmap));