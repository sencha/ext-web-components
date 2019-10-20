import Ext_pivot_cell_Cell from './Ext/pivot/cell/Cell.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtPivotgridcell extends Ext_pivot_cell_Cell {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pivotgridcell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotgridcell', ExtPivotgridcell);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotgridcell', HTMLParsedElement.withParsedCallback(ExtPivotgridcell))
//export default reactify(ExtPivotgridcell);