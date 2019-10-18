import Ext_grid_column_RowNumberer from './Ext/grid/column/RowNumberer.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtRownumbererComponent extends Ext_grid_column_RowNumberer {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'rownumberer'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-rownumberer', ExtRownumbererComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-rownumberer', HTMLParsedElement.withParsedCallback(ExtRownumbererComponent))
