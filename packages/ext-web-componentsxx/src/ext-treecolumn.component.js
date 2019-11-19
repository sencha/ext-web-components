import Ext_grid_column_Tree from './Ext/grid/column/Tree'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTreecolumnComponent extends Ext_grid_column_Tree {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'treecolumn'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-treecolumn', ExtTreecolumnComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-treecolumn', HTMLParsedElement.withParsedCallback(ExtTreecolumnComponent))
