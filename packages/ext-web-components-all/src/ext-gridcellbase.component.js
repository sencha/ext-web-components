import Ext_grid_cell_Base from './Ext/grid/cell/Base.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtGridcellbase extends Ext_grid_cell_Base {
    constructor() {
        super ([],[])
        this.xtype = 'gridcellbase';
    }
}
window.customElements.define('ext-gridcellbase', HTMLParsedElement.withParsedCallback(ExtGridcellbase))
