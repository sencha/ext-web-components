//import Ext_tree_Tree from '@sencha/ext-runtime-base/dist/./Ext/tree/Tree.js';
import Ext_tree_Tree from './Ext/tree/Tree.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCTree extends Ext_tree_Tree {
    constructor() {
        super ([], []);
        this.xtype = 'tree';
    }

}
window.customElements.define('ext-tree', HTMLParsedElement.withParsedCallback(EWCTree));

