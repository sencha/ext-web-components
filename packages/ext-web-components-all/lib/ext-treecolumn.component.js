import Ext_grid_column_Tree_Component from './Ext/grid/column/Tree'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTreecolumnComponent extends Ext_grid_column_Tree_Component {
    constructor() {
        super ()
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
