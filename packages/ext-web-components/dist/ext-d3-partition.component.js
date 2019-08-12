import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_partition_Partition_Component from './Ext/d3/hierarchy/partition/Partition';
export var ExtD3_partitionComponent =
/*#__PURE__*/
function (_Ext_d3_hierarchy_par) {
  _inheritsLoose(ExtD3_partitionComponent, _Ext_d3_hierarchy_par);

  function ExtD3_partitionComponent() {
    return _Ext_d3_hierarchy_par.call(this, '', '', {}, '') || this;
  }

  return ExtD3_partitionComponent;
}(Ext_d3_hierarchy_partition_Partition_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-d3-partition', ExtD3_partitionComponent);
  });
})();