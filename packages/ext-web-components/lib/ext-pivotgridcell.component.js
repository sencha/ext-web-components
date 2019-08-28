import Ext_pivot_cell_Cell_Component from './Ext/pivot/cell/Cell'

export class ExtPivotgridcellComponent extends Ext_pivot_cell_Cell_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-pivotgridcell', ExtPivotgridcellComponent);
    });
})();
