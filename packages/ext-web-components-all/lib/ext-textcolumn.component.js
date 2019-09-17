import Ext_grid_column_Text_Component from './Ext/grid/column/Text'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTextcolumnComponent extends Ext_grid_column_Text_Component {
    constructor() {
        super ()
        this.xtype = 'textcolumn'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-textcolumn', ExtTextcolumnComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-textcolumn', HTMLParsedElement.withParsedCallback(ExtTextcolumnComponent))
