import Ext_grid_cell_Cell_Component from './Ext/grid/cell/Cell'

export class ExtGridcellComponent extends Ext_grid_cell_Cell_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-gridcell', ExtGridcellComponent);
    });
})();
