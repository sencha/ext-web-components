import Ext_list_TreeItem from './Ext/list/TreeItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtTreelistitem extends Ext_list_TreeItem {
    constructor() {
        super ([],[])
        this.xtype = 'treelistitem';
    }
}
window.customElements.define('ext-treelistitem', HTMLParsedElement.withParsedCallback(ExtTreelistitem))
