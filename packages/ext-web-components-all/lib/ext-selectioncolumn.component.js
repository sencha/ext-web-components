import Ext_grid_column_Selection_Component from './Ext/grid/column/Selection'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSelectioncolumnComponent extends Ext_grid_column_Selection_Component {
    constructor() {
        super ()
        this.xtype = 'selectioncolumn'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-selectioncolumn', ExtSelectioncolumnComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-selectioncolumn', HTMLParsedElement.withParsedCallback(ExtSelectioncolumnComponent))
