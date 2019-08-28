import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_tree_HorizontalTree_Component from './Ext/d3/hierarchy/tree/HorizontalTree';
export var ExtD3_treeComponent =
/*#__PURE__*/
function (_Ext_d3_hierarchy_tre) {
  _inheritsLoose(ExtD3_treeComponent, _Ext_d3_hierarchy_tre);

  function ExtD3_treeComponent() {
    return _Ext_d3_hierarchy_tre.call(this, '', '', {}, '') || this;
  }

  return ExtD3_treeComponent;
}(Ext_d3_hierarchy_tree_HorizontalTree_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-d3-tree', ExtD3_treeComponent);
  });
})();