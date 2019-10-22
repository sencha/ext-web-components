import Ext_grid_cell_Tree from './Ext/grid/cell/Tree.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtTreecell extends Ext_grid_cell_Tree {
    constructor() {
        super ([],[])
        this.xtype = 'treecell';
    }
}
window.customElements.define('ext-treecell', HTMLParsedElement.withParsedCallback(ExtTreecell))
