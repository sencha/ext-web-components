import Ext_grid_cell_Number_Component from './Ext/grid/cell/Number'

export class ExtNumbercellComponent extends Ext_grid_cell_Number_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-numbercell', ExtNumbercellComponent);
    });
})();
