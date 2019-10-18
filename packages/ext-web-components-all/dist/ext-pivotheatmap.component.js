import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_d3_HeatMap from './Ext/pivot/d3/HeatMap.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtPivotheatmapComponent =
/*#__PURE__*/
function (_Ext_pivot_d3_HeatMap) {
  _inheritsLoose(ExtPivotheatmapComponent, _Ext_pivot_d3_HeatMap);

  function ExtPivotheatmapComponent() {
    var _this;

    _this = _Ext_pivot_d3_HeatMap.call(this, [], []) || this;
    _this.xtype = 'pivotheatmap';
    return _this;
  }

  return ExtPivotheatmapComponent;
}(Ext_pivot_d3_HeatMap); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotheatmap', ExtPivotheatmapComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-pivotheatmap', HTMLParsedElement.withParsedCallback(ExtPivotheatmapComponent));