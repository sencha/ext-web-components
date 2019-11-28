//import Ext_d3_hierarchy_tree_HorizontalTree from '@sencha/ext-runtime-base/dist/./Ext/d3/hierarchy/tree/HorizontalTree.js';
import Ext_d3_hierarchy_tree_HorizontalTree from './Ext/d3/hierarchy/tree/HorizontalTree.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCD3_horizontal_tree extends Ext_d3_hierarchy_tree_HorizontalTree {
    constructor() {
        super ([], []);
        this.xtype = 'd3-horizontal-tree';
    }

}
window.customElements.define('ext-d3-horizontal-tree', HTMLParsedElement.withParsedCallback(EWCD3_horizontal_tree));

