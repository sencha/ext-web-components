import Ext_pivot_cell_Cell from './Ext/pivot/cell/Cell.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtPivotgridcell extends Ext_pivot_cell_Cell {
    constructor() {
        super ([],[])
        this.xtype = 'pivotgridcell';
    }
}
window.customElements.define('ext-pivotgridcell', HTMLParsedElement.withParsedCallback(ExtPivotgridcell))
