import Ext_grid_cell_Check from './Ext/grid/cell/Check.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCheckcell extends Ext_grid_cell_Check {
    constructor() {
        super ([],[])
        this.xtype = 'checkcell';
    }
}
window.customElements.define('ext-checkcell', HTMLParsedElement.withParsedCallback(ExtCheckcell))
