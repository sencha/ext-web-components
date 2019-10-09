import Ext_grid_column_Boolean from './Ext/grid/column/Boolean'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtBooleancolumnComponent extends Ext_grid_column_Boolean {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'booleancolumn'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-booleancolumn', ExtBooleancolumnComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-booleancolumn', HTMLParsedElement.withParsedCallback(ExtBooleancolumnComponent))
