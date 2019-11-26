//import Ext_grid_LockedGridRegion from '@sencha/ext-runtime-base/dist/./Ext/grid/LockedGridRegion.js';
import Ext_grid_LockedGridRegion from './Ext/grid/LockedGridRegion.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCLockedgridregion extends Ext_grid_LockedGridRegion {
    constructor() {
        super ([], []);
        this.xtype = 'lockedgridregion';
    }

}
window.customElements.define('ext-lockedgridregion', HTMLParsedElement.withParsedCallback(EWCLockedgridregion));

