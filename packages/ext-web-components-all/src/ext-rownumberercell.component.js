import Ext_grid_cell_RowNumberer from './Ext/grid/cell/RowNumberer.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtRownumberercell extends Ext_grid_cell_RowNumberer {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'rownumberercell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-rownumberercell', ExtRownumberercell);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-rownumberercell', HTMLParsedElement.withParsedCallback(ExtRownumberercell))
//export default reactify(ExtRownumberercell);