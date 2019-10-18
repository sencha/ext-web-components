import Ext_grid_cell_RowNumberer from './Ext/grid/cell/RowNumberer.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtRownumberercellComponent extends Ext_grid_cell_RowNumberer {
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
//        window.customElements.define('ext-rownumberercell', ExtRownumberercellComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-rownumberercell', HTMLParsedElement.withParsedCallback(ExtRownumberercellComponent))
