import Ext_grid_column_Date from './Ext/grid/column/Date.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtDatecolumn extends Ext_grid_column_Date {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'datecolumn'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datecolumn', ExtDatecolumn);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-datecolumn', HTMLParsedElement.withParsedCallback(ExtDatecolumn))
//export default reactify(ExtDatecolumn);