import Ext_grid_cell_Check_Component from './Ext/grid/cell/Check'

export class ExtCheckcellComponent extends Ext_grid_cell_Check_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-checkcell', ExtCheckcellComponent);
    });
})();
