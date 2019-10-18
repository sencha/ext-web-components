import Ext_grid_column_Template from './Ext/grid/column/Template.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtTemplatecolumnComponent extends Ext_grid_column_Template {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'templatecolumn'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-templatecolumn', ExtTemplatecolumnComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-templatecolumn', HTMLParsedElement.withParsedCallback(ExtTemplatecolumnComponent))
