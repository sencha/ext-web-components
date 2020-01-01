import Ext_list_TreeItem from './Ext/list/TreeItem.js';
import ElementParser from './ElementParser.js';

export default class EWCTreelistitem extends Ext_list_TreeItem {
  constructor() {
    super ([], []);
    this.xtype = 'treelistitem';
  }
}
window.customElements.define('ext-treelistitem', ElementParser.withParsedCallback(EWCTreelistitem));
