import Ext_grid_LockedGrid from './Ext/grid/LockedGrid.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtLockedgrid extends Ext_grid_LockedGrid {
    constructor() {
        super ([],[])
        this.xtype = 'lockedgrid';
    }
}
window.customElements.define('ext-lockedgrid', HTMLParsedElement.withParsedCallback(ExtLockedgrid))
