import Ext_grid_cell_Cell from './Ext/grid/cell/Cell'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtGridcellComponent extends Ext_grid_cell_Cell {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'gridcell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridcell', ExtGridcellComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridcell', HTMLParsedElement.withParsedCallback(ExtGridcellComponent))
