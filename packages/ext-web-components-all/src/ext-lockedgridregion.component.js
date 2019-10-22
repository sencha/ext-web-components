import Ext_grid_LockedGridRegion from './Ext/grid/LockedGridRegion.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtLockedgridregion extends Ext_grid_LockedGridRegion {
    constructor() {
        super ([],[])
        this.xtype = 'lockedgridregion';
    }
}
window.customElements.define('ext-lockedgridregion', HTMLParsedElement.withParsedCallback(ExtLockedgridregion))
