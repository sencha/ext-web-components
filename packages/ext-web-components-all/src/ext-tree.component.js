import Ext_tree_Tree from './Ext/tree/Tree.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTree extends Ext_tree_Tree {
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
//        window.customElements.define('ext-tree', ExtTree);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-tree', HTMLParsedElement.withParsedCallback(ExtTree))
//export default reactify(ExtTree);