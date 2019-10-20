import Ext_grid_cell_Date from './Ext/grid/cell/Date.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtDatecell extends Ext_grid_cell_Date {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'datecell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datecell', ExtDatecell);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-datecell', HTMLParsedElement.withParsedCallback(ExtDatecell))
//export default reactify(ExtDatecell);