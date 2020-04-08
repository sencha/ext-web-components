import Ext_grid_column_Tree from './Ext/grid/column/Tree.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTreecolumn extends Ext_grid_column_Tree {
  constructor() {
    super ([], []);
    this.xtype = 'treecolumn';
  }
}
try {
  if (window.customElements.get('ext-treecolumn') == undefined) {
    window.customElements.define('ext-treecolumn', ElementParser.withParsedCallback(EWCTreecolumn));
  }
}
catch(e) {
  if (window.customElements.get('ext-treecolumn') == undefined) {
    window.customElements.define('ext-treecolumn', EWCTreecolumn);
  }
}
