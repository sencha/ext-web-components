import Ext_grid_column_Template_Component from './Ext/grid/column/Template'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTemplatecolumnComponent extends Ext_grid_column_Template_Component {
    constructor() {
        super ()
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
