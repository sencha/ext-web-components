import Ext_tree_View from './Ext/tree/View.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTreeview extends Ext_tree_View {
  constructor() {
    super ([], []);
    this.xtype = 'treeview';
  }
}
try {
  if (window.customElements.get('ext-treeview') == undefined) {
    window.customElements.define('ext-treeview', ElementParser.withParsedCallback(EWCTreeview));
  }
}
catch(e) {
  if (window.customElements.get('ext-treeview') == undefined) {
    window.customElements.define('ext-treeview', EWCTreeview);
  }
}
