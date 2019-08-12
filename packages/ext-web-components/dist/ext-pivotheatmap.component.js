import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_d3_HeatMap_Component from './Ext/pivot/d3/HeatMap';
export var ExtPivotheatmapComponent =
/*#__PURE__*/
function (_Ext_pivot_d3_HeatMap) {
  _inheritsLoose(ExtPivotheatmapComponent, _Ext_pivot_d3_HeatMap);

  function ExtPivotheatmapComponent() {
    return _Ext_pivot_d3_HeatMap.call(this, '', '', {}, '') || this;
  }

  return ExtPivotheatmapComponent;
}(Ext_pivot_d3_HeatMap_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-pivotheatmap', ExtPivotheatmapComponent);
  });
})();