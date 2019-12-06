import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_d3_hierarchy_tree_HorizontalTree from '@sencha/ext-runtime-base/dist/./Ext/d3/hierarchy/tree/HorizontalTree.js';
import Ext_d3_hierarchy_tree_HorizontalTree from './Ext/d3/hierarchy/tree/HorizontalTree.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCD3_horizontal_tree =
/*#__PURE__*/
function (_Ext_d3_hierarchy_tre) {
  _inheritsLoose(EWCD3_horizontal_tree, _Ext_d3_hierarchy_tre);

  function EWCD3_horizontal_tree() {
    var _this;

    _this = _Ext_d3_hierarchy_tre.call(this, [], []) || this;
    _this.xtype = 'd3-horizontal-tree';
    return _this;
  }

  return EWCD3_horizontal_tree;
}(Ext_d3_hierarchy_tree_HorizontalTree);

export { EWCD3_horizontal_tree as default };
window.customElements.define('ext-d3-horizontal-tree', HTMLParsedElement.withParsedCallback(EWCD3_horizontal_tree));