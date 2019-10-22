import Ext_grid_cell_RowNumberer from './Ext/grid/cell/RowNumberer.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtRownumberercell extends Ext_grid_cell_RowNumberer {
    constructor() {
        super ([],[])
        this.xtype = 'rownumberercell';
    }
}
window.customElements.define('ext-rownumberercell', HTMLParsedElement.withParsedCallback(ExtRownumberercell))
