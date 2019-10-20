import Ext_grid_LockedGrid from './Ext/grid/LockedGrid.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtLockedgrid extends Ext_grid_LockedGrid {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'lockedgrid'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-lockedgrid', ExtLockedgrid);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-lockedgrid', HTMLParsedElement.withParsedCallback(ExtLockedgrid))
//export default reactify(ExtLockedgrid);