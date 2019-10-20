import Ext_grid_cell_Tree from './Ext/grid/cell/Tree.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTreecell extends Ext_grid_cell_Tree {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'treecell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-treecell', ExtTreecell);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-treecell', HTMLParsedElement.withParsedCallback(ExtTreecell))
//export default reactify(ExtTreecell);