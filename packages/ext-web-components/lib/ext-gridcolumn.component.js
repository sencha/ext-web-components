import Ext_grid_column_Template_Component from './Ext/grid/column/Template'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtGridcolumnComponent extends Ext_grid_column_Template_Component {
    constructor() {
        super (
            {},
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
