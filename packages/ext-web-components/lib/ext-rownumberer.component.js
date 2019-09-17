import Ext_grid_column_RowNumberer_Component from './Ext/grid/column/RowNumberer'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtRownumbererComponent extends Ext_grid_column_RowNumberer_Component {
    constructor() {
        super (
            {},
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
