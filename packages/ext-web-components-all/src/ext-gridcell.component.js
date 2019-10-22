import Ext_grid_cell_Cell from './Ext/grid/cell/Cell.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtGridcell extends Ext_grid_cell_Cell {
    constructor() {
        super ([],[])
        this.xtype = 'gridcell';
    }
}
window.customElements.define('ext-gridcell', HTMLParsedElement.withParsedCallback(ExtGridcell))
