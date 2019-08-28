import Ext_tree_Tree_Component from './Ext/tree/Tree'

export class ExtTreeComponent extends Ext_tree_Tree_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-tree', ExtTreeComponent);
    });
})();
