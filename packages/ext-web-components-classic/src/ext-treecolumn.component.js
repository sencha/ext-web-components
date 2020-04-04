import Ext_tree_Column from './Ext/tree/Column.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTreecolumn extends Ext_tree_Column {
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
