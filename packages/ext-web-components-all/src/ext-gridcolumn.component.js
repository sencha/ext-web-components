import Ext_grid_column_Template from './Ext/grid/column/Template.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtGridcolumnComponent extends Ext_grid_column_Template {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'gridcolumn'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridcolumn', ExtGridcolumnComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridcolumn', HTMLParsedElement.withParsedCallback(ExtGridcolumnComponent))
