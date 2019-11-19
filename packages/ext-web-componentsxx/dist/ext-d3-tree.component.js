import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_tree_HorizontalTree from './Ext/d3/hierarchy/tree/HorizontalTree';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtD3_treeComponent =
/*#__PURE__*/
function (_Ext_d3_hierarchy_tre) {
  _inheritsLoose(ExtD3_treeComponent, _Ext_d3_hierarchy_tre);

  function ExtD3_treeComponent() {
    var _this;

    _this = _Ext_d3_hierarchy_tre.call(this, [], []) || this;
    _this.xtype = 'd3-tree';
    return _this;
  }

  return ExtD3_treeComponent;
}(Ext_d3_hierarchy_tree_HorizontalTree); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-d3-tree', ExtD3_treeComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-d3-tree', HTMLParsedElement.withParsedCallback(ExtD3_treeComponent));