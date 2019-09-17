import Ext_pivot_cell_Cell_Component from './Ext/pivot/cell/Cell'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPivotgridcellComponent extends Ext_pivot_cell_Cell_Component {
    constructor() {
        super ()
        this.xtype = 'pivotgridcell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotgridcell', ExtPivotgridcellComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotgridcell', HTMLParsedElement.withParsedCallback(ExtPivotgridcellComponent))
