import Ext_d3_hierarchy_tree_HorizontalTree_Component from './Ext/d3/hierarchy/tree/HorizontalTree'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtD3_treeComponent extends Ext_d3_hierarchy_tree_HorizontalTree_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'd3-tree'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-d3-tree', ExtD3_treeComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-d3-tree', HTMLParsedElement.withParsedCallback(ExtD3_treeComponent))
