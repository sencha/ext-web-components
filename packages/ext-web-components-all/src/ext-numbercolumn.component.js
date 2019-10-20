import Ext_grid_column_Number from './Ext/grid/column/Number.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtNumbercolumn extends Ext_grid_column_Number {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'numbercolumn'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-numbercolumn', ExtNumbercolumn);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-numbercolumn', HTMLParsedElement.withParsedCallback(ExtNumbercolumn))
//export default reactify(ExtNumbercolumn);