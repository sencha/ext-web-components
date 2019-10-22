import Ext_tree_Tree from './Ext/tree/Tree.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtTree extends Ext_tree_Tree {
    constructor() {
        super ([],[])
        this.xtype = 'tree';
    }
}
window.customElements.define('ext-tree', HTMLParsedElement.withParsedCallback(ExtTree))
