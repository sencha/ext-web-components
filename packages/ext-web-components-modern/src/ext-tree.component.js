import Ext_tree_Tree from './Ext/tree/Tree.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCTree extends Ext_tree_Tree {
  constructor() {
    super ([], []);
    this.xtype = 'tree';
  }
}
try {
  window.customElements.define('ext-tree', ElementParser.withParsedCallback(EWCTree));
}
catch(e) {
  window.customElements.define('ext-tree', EWCTree);
}
