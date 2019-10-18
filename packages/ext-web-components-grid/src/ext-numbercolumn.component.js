import Ext_grid_column_Number from './Ext/grid/column/Number.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtNumbercolumnComponent extends Ext_grid_column_Number {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'numbercolumn'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-numbercolumn', ExtNumbercolumnComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-numbercolumn', HTMLParsedElement.withParsedCallback(ExtNumbercolumnComponent))
