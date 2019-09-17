import Ext_list_Tree_Component from './Ext/list/Tree'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTreelistComponent extends Ext_list_Tree_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'treelist'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-treelist', ExtTreelistComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-treelist', HTMLParsedElement.withParsedCallback(ExtTreelistComponent))
