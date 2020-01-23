import Ext_tree_Column from './Ext/tree/Column.js';
import ElementParser from './ElementParser.js';

export default class EWCTreecolumn extends Ext_tree_Column {
  constructor() {
    super ([], []);
    this.xtype = 'treecolumn';
  }
}
try {
  window.customElements.define('ext-treecolumn', ElementParser.withParsedCallback(EWCTreecolumn));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-treecolumn', EWCTreecolumn);
}
