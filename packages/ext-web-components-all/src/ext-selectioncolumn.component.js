import Ext_grid_column_Selection from './Ext/grid/column/Selection.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtSelectioncolumn extends Ext_grid_column_Selection {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'selectioncolumn'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-selectioncolumn', ExtSelectioncolumn);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-selectioncolumn', HTMLParsedElement.withParsedCallback(ExtSelectioncolumn))
//export default reactify(ExtSelectioncolumn);