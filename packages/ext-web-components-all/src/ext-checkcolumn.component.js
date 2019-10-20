import Ext_grid_column_Check from './Ext/grid/column/Check.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtCheckcolumn extends Ext_grid_column_Check {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'checkcolumn'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-checkcolumn', ExtCheckcolumn);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-checkcolumn', HTMLParsedElement.withParsedCallback(ExtCheckcolumn))
//export default reactify(ExtCheckcolumn);