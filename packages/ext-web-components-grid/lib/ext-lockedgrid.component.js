import Ext_grid_LockedGrid_Component from './Ext/grid/LockedGrid'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtLockedgridComponent extends Ext_grid_LockedGrid_Component {
    constructor() {
        super ()
        this.xtype = 'lockedgrid'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-lockedgrid', ExtLockedgridComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-lockedgrid', HTMLParsedElement.withParsedCallback(ExtLockedgridComponent))
