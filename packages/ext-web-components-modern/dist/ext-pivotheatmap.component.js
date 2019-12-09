import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_pivot_d3_HeatMap from '@sencha/ext-runtime-base/dist/./Ext/pivot/d3/HeatMap.js';
import Ext_pivot_d3_HeatMap from './Ext/pivot/d3/HeatMap.js';
import ElementParser from './ElementParser.js';

var EWCPivotheatmap =
/*#__PURE__*/
function (_Ext_pivot_d3_HeatMap) {
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
window.customElements.define('ext-pivotheatmap', ElementParser.withParsedCallback(EWCPivotheatmap));