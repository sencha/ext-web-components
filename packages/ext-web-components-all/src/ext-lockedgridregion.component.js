import Ext_grid_LockedGridRegion from './Ext/grid/LockedGridRegion.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtLockedgridregion extends Ext_grid_LockedGridRegion {
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
//        window.customElements.define('ext-lockedgridregion', ExtLockedgridregion);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-lockedgridregion', HTMLParsedElement.withParsedCallback(ExtLockedgridregion))
//export default reactify(ExtLockedgridregion);