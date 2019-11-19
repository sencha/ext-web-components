import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_partition_Partition from './Ext/d3/hierarchy/partition/Partition';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtD3_partitionComponent =
/*#__PURE__*/
function (_Ext_d3_hierarchy_par) {
  _inheritsLoose(ExtD3_partitionComponent, _Ext_d3_hierarchy_par);

  function ExtD3_partitionComponent() {
    var _this;

    _this = _Ext_d3_hierarchy_par.call(this, [], []) || this;
    _this.xtype = 'd3-partition';
    return _this;
  }

  return ExtD3_partitionComponent;
}(Ext_d3_hierarchy_partition_Partition); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-d3-partition', ExtD3_partitionComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-d3-partition', HTMLParsedElement.withParsedCallback(ExtD3_partitionComponent));