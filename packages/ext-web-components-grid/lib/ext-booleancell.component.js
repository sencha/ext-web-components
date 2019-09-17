import Ext_grid_cell_Boolean_Component from './Ext/grid/cell/Boolean'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtBooleancellComponent extends Ext_grid_cell_Boolean_Component {
    constructor() {
        super ()
        this.xtype = 'booleancell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-booleancell', ExtBooleancellComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-booleancell', HTMLParsedElement.withParsedCallback(ExtBooleancellComponent))
