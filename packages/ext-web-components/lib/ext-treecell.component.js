import Ext_grid_cell_Tree_Component from './Ext/grid/cell/Tree'

export class ExtTreecellComponent extends Ext_grid_cell_Tree_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-treecell', ExtTreecellComponent);
    });
})();
