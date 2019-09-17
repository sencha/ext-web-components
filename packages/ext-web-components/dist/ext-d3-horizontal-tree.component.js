import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_tree_HorizontalTree_Component from './Ext/d3/hierarchy/tree/HorizontalTree';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtD3_horizontal_treeComponent =
/*#__PURE__*/
function (_Ext_d3_hierarchy_tre) {
  _inheritsLoose(ExtD3_horizontal_treeComponent, _Ext_d3_hierarchy_tre);

  function ExtD3_horizontal_treeComponent() {
    var _this;

    _this = _Ext_d3_hierarchy_tre.call(this, {}, [], []) || this;
    _this.xtype = 'd3-horizontal-tree';
    return _this;
  }

  return ExtD3_horizontal_treeComponent;
}(Ext_d3_hierarchy_tree_HorizontalTree_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-d3-horizontal-tree', ExtD3_horizontal_treeComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-d3-horizontal-tree', HTMLParsedElement.withParsedCallback(ExtD3_horizontal_treeComponent));