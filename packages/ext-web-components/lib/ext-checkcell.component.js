import Ext_grid_cell_Check_Component from './Ext/grid/cell/Check'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCheckcellComponent extends Ext_grid_cell_Check_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'checkcell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-checkcell', ExtCheckcellComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-checkcell', HTMLParsedElement.withParsedCallback(ExtCheckcellComponent))
