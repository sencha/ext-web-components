import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_HeatMap_Component from './Ext/d3/HeatMap';
export var ExtD3_heatmapComponent =
/*#__PURE__*/
function (_Ext_d3_HeatMap_Compo) {
  _inheritsLoose(ExtD3_heatmapComponent, _Ext_d3_HeatMap_Compo);

  function ExtD3_heatmapComponent() {
    return _Ext_d3_HeatMap_Compo.call(this, '', '', {}, '') || this;
  }

  return ExtD3_heatmapComponent;
}(Ext_d3_HeatMap_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-d3-heatmap', ExtD3_heatmapComponent);
  });
})();