import Ext_grid_cell_RowNumberer_Component from './Ext/grid/cell/RowNumberer'

export class ExtRownumberercellComponent extends Ext_grid_cell_RowNumberer_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-rownumberercell', ExtRownumberercellComponent);
    });
})();
