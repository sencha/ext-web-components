import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_d3_HeatMap from './Ext/pivot/d3/HeatMap.js';
import ElementParser from './common/ElementParser.js';

var EWCPivotheatmap = /*#__PURE__*/function (_Ext_pivot_d3_HeatMap) {
  _inheritsLoose(EWCPivotheatmap, _Ext_pivot_d3_HeatMap);

  function EWCPivotheatmap() {
    var _this;

    _this = _Ext_pivot_d3_HeatMap.call(this, [], []) || this;
    _this.xtype = 'pivotheatmap';
    return _this;
  }

  return EWCPivotheatmap;
}(Ext_pivot_d3_HeatMap);

export { EWCPivotheatmap as default };

try {
  if (window.customElements.get('ext-pivotheatmap') == undefined) {
    window.customElements.define('ext-pivotheatmap', ElementParser.withParsedCallback(EWCPivotheatmap));
  }
} catch (e) {
  if (window.customElements.get('ext-pivotheatmap') == undefined) {
    window.customElements.define('ext-pivotheatmap', EWCPivotheatmap);
  }
}