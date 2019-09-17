import Ext_grid_cell_RowNumberer_Component from './Ext/grid/cell/RowNumberer'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtRownumberercellComponent extends Ext_grid_cell_RowNumberer_Component {
    constructor() {
        super ()
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
