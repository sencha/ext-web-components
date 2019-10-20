import Ext_grid_column_Tree from './Ext/grid/column/Tree.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTreecolumn extends Ext_grid_column_Tree {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'treecolumn'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-treecolumn', ExtTreecolumn);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-treecolumn', HTMLParsedElement.withParsedCallback(ExtTreecolumn))
//export default reactify(ExtTreecolumn);