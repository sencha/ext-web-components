import Ext_grid_cell_Date_Component from './Ext/grid/cell/Date'

export class ExtDatecellComponent extends Ext_grid_cell_Date_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-datecell', ExtDatecellComponent);
    });
})();
