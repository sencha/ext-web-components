import Ext_grid_cell_Cell from './Ext/grid/cell/Cell.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtGridcell extends Ext_grid_cell_Cell {
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
//        window.customElements.define('ext-gridcell', ExtGridcell);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridcell', HTMLParsedElement.withParsedCallback(ExtGridcell))
//export default reactify(ExtGridcell);