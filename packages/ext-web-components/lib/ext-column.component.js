import Ext_grid_column_Template_Component from './Ext/grid/column/Template'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtColumnComponent extends Ext_grid_column_Template_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'column'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-column', ExtColumnComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-column', HTMLParsedElement.withParsedCallback(ExtColumnComponent))
