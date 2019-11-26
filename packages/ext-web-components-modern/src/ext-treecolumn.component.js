//import Ext_grid_column_Tree from '@sencha/ext-runtime-base/dist/./Ext/grid/column/Tree.js';
import Ext_grid_column_Tree from './Ext/grid/column/Tree.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCTreecolumn extends Ext_grid_column_Tree {
    constructor() {
        super ([], []);
        this.xtype = 'treecolumn';
    }

}
window.customElements.define('ext-treecolumn', HTMLParsedElement.withParsedCallback(EWCTreecolumn));

