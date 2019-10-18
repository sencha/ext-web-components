import Ext_grid_cell_Number from './Ext/grid/cell/Number.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtNumbercellComponent extends Ext_grid_cell_Number {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'numbercell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-numbercell', ExtNumbercellComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-numbercell', HTMLParsedElement.withParsedCallback(ExtNumbercellComponent))
