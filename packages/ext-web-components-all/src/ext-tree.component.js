import Ext_tree_Tree from './Ext/tree/Tree.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtTreeComponent extends Ext_tree_Tree {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'tree'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tree', ExtTreeComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-tree', HTMLParsedElement.withParsedCallback(ExtTreeComponent))
