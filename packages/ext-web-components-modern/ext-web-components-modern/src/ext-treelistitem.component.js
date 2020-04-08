import Ext_list_TreeItem from './Ext/list/TreeItem.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTreelistitem extends Ext_list_TreeItem {
  constructor() {
    super ([], []);
    this.xtype = 'treelistitem';
  }
}
try {
  if (window.customElements.get('ext-treelistitem') == undefined) {
    window.customElements.define('ext-treelistitem', ElementParser.withParsedCallback(EWCTreelistitem));
  }
}
catch(e) {
  if (window.customElements.get('ext-treelistitem') == undefined) {
    window.customElements.define('ext-treelistitem', EWCTreelistitem);
  }
}
