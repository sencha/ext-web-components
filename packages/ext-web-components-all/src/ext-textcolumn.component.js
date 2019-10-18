import Ext_grid_column_Text from './Ext/grid/column/Text.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtTextcolumnComponent extends Ext_grid_column_Text {
    constructor() {
        super (
            [],
            []
        )
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
