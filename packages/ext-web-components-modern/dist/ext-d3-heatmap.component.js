import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_HeatMap from './Ext/d3/HeatMap.js';
import ElementParser from './common/ElementParser.js';

var EWCD3_heatmap = /*#__PURE__*/function (_Ext_d3_HeatMap) {
  _inheritsLoose(EWCD3_heatmap, _Ext_d3_HeatMap);

  function EWCD3_heatmap() {
    var _this;

    _this = _Ext_d3_HeatMap.call(this, [], []) || this;
    _this.xtype = 'd3-heatmap';
    return _this;
  }

  return EWCD3_heatmap;
}(Ext_d3_HeatMap);

export { EWCD3_heatmap as default };

try {
  if (window.customElements.get('ext-d3-heatmap') == undefined) {
    window.customElements.define('ext-d3-heatmap', ElementParser.withParsedCallback(EWCD3_heatmap));
  }
} catch (e) {
  if (window.customElements.get('ext-d3-heatmap') == undefined) {
    window.customElements.define('ext-d3-heatmap', EWCD3_heatmap);
  }
}