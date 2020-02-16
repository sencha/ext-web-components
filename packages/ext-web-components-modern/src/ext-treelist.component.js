import Ext_list_Tree from './Ext/list/Tree.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCTreelist extends Ext_list_Tree {
  constructor() {
    super ([], []);
    this.xtype = 'treelist';
  }
}
try {
  window.customElements.define('ext-treelist', ElementParser.withParsedCallback(EWCTreelist));
}
catch(e) {
  window.customElements.define('ext-treelist', EWCTreelist);
}
