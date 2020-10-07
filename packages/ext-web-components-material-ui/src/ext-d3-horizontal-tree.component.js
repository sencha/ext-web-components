import Ext_d3_hierarchy_tree_HorizontalTree from './Ext/d3/hierarchy/tree/HorizontalTree.js';
import ElementParser from './common/ElementParser.js';

export default class EWCD3_horizontal_tree extends Ext_d3_hierarchy_tree_HorizontalTree {
  constructor() {
    super ([], []);
    this.xtype = 'd3-horizontal-tree';
  }
}
try {
  if (window.customElements.get('ext-d3-horizontal-tree') == undefined) {
    window.customElements.define('ext-d3-horizontal-tree', ElementParser.withParsedCallback(EWCD3_horizontal_tree));
  }
}
catch(e) {
  if (window.customElements.get('ext-d3-horizontal-tree') == undefined) {
    window.customElements.define('ext-d3-horizontal-tree', EWCD3_horizontal_tree);
  }
}
