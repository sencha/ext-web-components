import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_tree_HorizontalTree from './Ext/d3/hierarchy/tree/HorizontalTree.js';
import ElementParser from './common/ElementParser.js';

var EWCD3_horizontal_tree = /*#__PURE__*/function (_Ext_d3_hierarchy_tre) {
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

try {
  if (window.customElements.get('ext-d3-horizontal-tree') == undefined) {
    window.customElements.define('ext-d3-horizontal-tree', ElementParser.withParsedCallback(EWCD3_horizontal_tree));
  }
} catch (e) {
  if (window.customElements.get('ext-d3-horizontal-tree') == undefined) {
    window.customElements.define('ext-d3-horizontal-tree', EWCD3_horizontal_tree);
  }
}