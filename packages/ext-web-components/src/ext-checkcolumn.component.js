import Ext_grid_column_Check from './Ext/grid/column/Check'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtCheckcolumnComponent extends Ext_grid_column_Check {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'checkcolumn'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-checkcolumn', ExtCheckcolumnComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-checkcolumn', HTMLParsedElement.withParsedCallback(ExtCheckcolumnComponent))
