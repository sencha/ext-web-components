import Ext_list_TreeItem from './Ext/list/TreeItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTreelistitem extends Ext_list_TreeItem {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'treelistitem'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-treelistitem', ExtTreelistitem);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-treelistitem', HTMLParsedElement.withParsedCallback(ExtTreelistitem))
//export default reactify(ExtTreelistitem);