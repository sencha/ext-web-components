import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_tree_HorizontalTree from './Ext/d3/hierarchy/tree/HorizontalTree.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtD3_tree =
/*#__PURE__*/
function (_Ext_d3_hierarchy_tre) {
  _inheritsLoose(ExtD3_tree, _Ext_d3_hierarchy_tre);

  function ExtD3_tree() {
    var _this;

    _this = _Ext_d3_hierarchy_tre.call(this, [], []) || this;
    _this.xtype = 'd3-tree';
    return _this;
  }

  return ExtD3_tree;
}(Ext_d3_hierarchy_tree_HorizontalTree);

export { ExtD3_tree as default };
window.customElements.define('ext-d3-tree', HTMLParsedElement.withParsedCallback(ExtD3_tree));