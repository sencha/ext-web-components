import Ext_grid_column_Date from './Ext/grid/column/Date.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtDatecolumnComponent extends Ext_grid_column_Date {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'datecolumn'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datecolumn', ExtDatecolumnComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-datecolumn', HTMLParsedElement.withParsedCallback(ExtDatecolumnComponent))
