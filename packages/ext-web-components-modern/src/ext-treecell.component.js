//import Ext_grid_cell_Tree from '@sencha/ext-runtime-base/dist/./Ext/grid/cell/Tree.js';
import Ext_grid_cell_Tree from './Ext/grid/cell/Tree.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCTreecell extends Ext_grid_cell_Tree {
    constructor() {
        super ([], []);
        this.xtype = 'treecell';
    }

}
window.customElements.define('ext-treecell', HTMLParsedElement.withParsedCallback(EWCTreecell));

