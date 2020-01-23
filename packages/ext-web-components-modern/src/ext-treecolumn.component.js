import Ext_grid_column_Tree from './Ext/grid/column/Tree.js';
import ElementParser from './ElementParser.js';

export default class EWCTreecolumn extends Ext_grid_column_Tree {
  constructor() {
    super ([], []);
    this.xtype = 'treecolumn';
  }
}
try {
  window.customElements.define('ext-treecolumn', ElementParser.withParsedCallback(EWCTreecolumn));
}
catch(e) {
  window.customElements.define('ext-treecolumn', EWCTreecolumn);
}
