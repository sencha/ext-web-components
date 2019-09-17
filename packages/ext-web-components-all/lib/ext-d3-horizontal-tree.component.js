import Ext_d3_hierarchy_tree_HorizontalTree_Component from './Ext/d3/hierarchy/tree/HorizontalTree'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtD3_horizontal_treeComponent extends Ext_d3_hierarchy_tree_HorizontalTree_Component {
    constructor() {
        super ()
        this.xtype = 'd3-horizontal-tree'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-d3-horizontal-tree', ExtD3_horizontal_treeComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-d3-horizontal-tree', HTMLParsedElement.withParsedCallback(ExtD3_horizontal_treeComponent))
