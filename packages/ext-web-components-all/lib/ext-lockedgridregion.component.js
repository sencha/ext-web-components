import Ext_grid_LockedGridRegion_Component from './Ext/grid/LockedGridRegion'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtLockedgridregionComponent extends Ext_grid_LockedGridRegion_Component {
    constructor() {
        super ()
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
