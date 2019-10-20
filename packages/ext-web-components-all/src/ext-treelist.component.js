import Ext_list_Tree from './Ext/list/Tree.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTreelist extends Ext_list_Tree {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'treelist'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-treelist', ExtTreelist);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-treelist', HTMLParsedElement.withParsedCallback(ExtTreelist))
//export default reactify(ExtTreelist);