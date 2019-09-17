import Ext_grid_cell_Number_Component from './Ext/grid/cell/Number'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtNumbercellComponent extends Ext_grid_cell_Number_Component {
    constructor() {
        super (
            {},
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
