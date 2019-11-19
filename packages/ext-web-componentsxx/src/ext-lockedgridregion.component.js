import Ext_grid_LockedGridRegion from './Ext/grid/LockedGridRegion'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtLockedgridregionComponent extends Ext_grid_LockedGridRegion {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'lockedgridregion'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-lockedgridregion', ExtLockedgridregionComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-lockedgridregion', HTMLParsedElement.withParsedCallback(ExtLockedgridregionComponent))
