import Ext_grid_cell_Tree from './Ext/grid/cell/Tree'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTreecellComponent extends Ext_grid_cell_Tree {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'treecell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-treecell', ExtTreecellComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-treecell', HTMLParsedElement.withParsedCallback(ExtTreecellComponent))
