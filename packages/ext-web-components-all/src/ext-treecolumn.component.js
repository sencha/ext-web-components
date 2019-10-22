import Ext_grid_column_Tree from './Ext/grid/column/Tree.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtTreecolumn extends Ext_grid_column_Tree {
    constructor() {
        super ([],[])
        this.xtype = 'treecolumn';
    }
}
window.customElements.define('ext-treecolumn', HTMLParsedElement.withParsedCallback(ExtTreecolumn))
