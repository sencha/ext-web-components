import Ext_list_Tree from './Ext/list/Tree.js';
import ElementParser from './ElementParser.js';

export default class EWCTreelist extends Ext_list_Tree {
  constructor() {
    super ([], []);
    this.xtype = 'treelist';
  }
}
window.customElements.define('ext-treelist', ElementParser.withParsedCallback(EWCTreelist));
