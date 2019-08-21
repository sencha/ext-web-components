import Ext_grid_column_Tree_Component from './Ext/grid/column/Tree'

export class ExtTreecolumnComponent extends Ext_grid_column_Tree_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-treecolumn', ExtTreecolumnComponent);
    });
})();
