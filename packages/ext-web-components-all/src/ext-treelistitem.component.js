import Ext_list_TreeItem from './Ext/list/TreeItem.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtTreelistitemComponent extends Ext_list_TreeItem {
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
//        window.customElements.define('ext-treelistitem', ExtTreelistitemComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-treelistitem', HTMLParsedElement.withParsedCallback(ExtTreelistitemComponent))
