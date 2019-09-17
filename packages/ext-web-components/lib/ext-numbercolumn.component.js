import Ext_grid_column_Number_Component from './Ext/grid/column/Number'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtNumbercolumnComponent extends Ext_grid_column_Number_Component {
    constructor() {
        super (
            {},
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
