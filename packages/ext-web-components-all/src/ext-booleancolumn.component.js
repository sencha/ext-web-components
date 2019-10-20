import Ext_grid_column_Boolean from './Ext/grid/column/Boolean.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtBooleancolumn extends Ext_grid_column_Boolean {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'booleancolumn'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-booleancolumn', ExtBooleancolumn);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-booleancolumn', HTMLParsedElement.withParsedCallback(ExtBooleancolumn))
//export default reactify(ExtBooleancolumn);