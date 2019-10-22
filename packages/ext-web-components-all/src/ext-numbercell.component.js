import Ext_grid_cell_Number from './Ext/grid/cell/Number.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtNumbercell extends Ext_grid_cell_Number {
    constructor() {
        super ([],[])
        this.xtype = 'numbercell';
    }
}
window.customElements.define('ext-numbercell', HTMLParsedElement.withParsedCallback(ExtNumbercell))
