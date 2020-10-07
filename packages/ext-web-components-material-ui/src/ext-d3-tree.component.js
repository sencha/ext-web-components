import Ext_d3_hierarchy_tree_HorizontalTree from './Ext/d3/hierarchy/tree/HorizontalTree.js';
import ElementParser from './common/ElementParser.js';

export default class EWCD3_tree extends Ext_d3_hierarchy_tree_HorizontalTree {
  constructor() {
    super ([], []);
    this.xtype = 'd3-tree';
  }
}
try {
  if (window.customElements.get('ext-d3-tree') == undefined) {
    window.customElements.define('ext-d3-tree', ElementParser.withParsedCallback(EWCD3_tree));
  }
}
catch(e) {
  if (window.customElements.get('ext-d3-tree') == undefined) {
    window.customElements.define('ext-d3-tree', EWCD3_tree);
  }
}
