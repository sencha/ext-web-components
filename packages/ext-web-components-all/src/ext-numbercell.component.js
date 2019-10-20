import Ext_grid_cell_Number from './Ext/grid/cell/Number.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtNumbercell extends Ext_grid_cell_Number {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'numbercell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-numbercell', ExtNumbercell);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-numbercell', HTMLParsedElement.withParsedCallback(ExtNumbercell))
//export default reactify(ExtNumbercell);