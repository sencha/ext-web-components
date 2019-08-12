import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_partition_Sunburst_Component from './Ext/d3/hierarchy/partition/Sunburst';
export var ExtD3_sunburstComponent =
/*#__PURE__*/
function (_Ext_d3_hierarchy_par) {
  _inheritsLoose(ExtD3_sunburstComponent, _Ext_d3_hierarchy_par);

  function ExtD3_sunburstComponent() {
    return _Ext_d3_hierarchy_par.call(this, '', '', {}, '') || this;
  }

  return ExtD3_sunburstComponent;
}(Ext_d3_hierarchy_partition_Sunburst_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-d3-sunburst', ExtD3_sunburstComponent);
  });
})();