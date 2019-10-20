import Ext_grid_cell_Boolean from './Ext/grid/cell/Boolean.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtBooleancell extends Ext_grid_cell_Boolean {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'booleancell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-booleancell', ExtBooleancell);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-booleancell', HTMLParsedElement.withParsedCallback(ExtBooleancell))
//export default reactify(ExtBooleancell);