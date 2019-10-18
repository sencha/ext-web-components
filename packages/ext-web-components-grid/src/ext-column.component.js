import Ext_grid_column_Template from './Ext/grid/column/Template.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtColumnComponent extends Ext_grid_column_Template {
    constructor() {
        super (
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
